const post = async (_obj, {id}, {getPosts}) => {
    const response = await getPosts(`/${id}`)
    const result = await response.json()
    return result
}

const posts = async (_obj, _arg, {getPosts}) => {
    const response = await getPosts()
    
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