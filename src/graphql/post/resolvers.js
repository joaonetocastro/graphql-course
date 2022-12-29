const post = async (_obj, {id}, {dataSources}) => {
    const response = await dataSources.postsAPI.getPost(id)
    return response
}

const posts = async (_obj, {input}, {getPosts}) => {
    const apiFiltersInput = new URLSearchParams(input)
    const response = await getPosts(`/?${apiFiltersInput.toString()}`)
    
    return response.json()
}

const user = async ({userId}, _, {userDataLoader}) => {
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