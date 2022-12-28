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

export const postResolvers = {
    Query: {
        post,
        posts
    },
    Post: {
        unixTimestamp: ({createdAt}) => Math.floor(new Date(createdAt).getTime() / 1000)
    }
}