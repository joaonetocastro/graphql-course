import Dataloader from 'dataloader'
import fetch from 'node-fetch'

const post = async (_obj, {id}, {getPosts}) => {
    const response = await getPosts(`/${id}`)
    const result = await response.json()

    return result
}

const posts = async (_obj, {input}, {getPosts}) => {
    const apiFiltersInput = new URLSearchParams(input)
    const response = await getPosts(`/?${apiFiltersInput.toString()}`)
    
    return response.json()
}

const userDataLoader = new Dataloader(async (ids) => {
    const query = ids.join('&id=')
    const url = `http://localhost:3000/users/?id=${query}`
    const response = await fetch(url)
    const users = await response.json()
    return ids.map(id => users.find(user => user.id == id))
})

const user = async ({userId}, _, {getUsers}) => {
    return userDataLoader.load(userId)
}

export const postResolvers = {
    Query: {
        post,
        posts
    },  
    Post: {
        user
    }
}