// Query Resolvers
const post = async (_obj, {id}, {dataSources}) => {
    const response = await dataSources.postsAPI.getPost(id)
    return response
}

const posts = async (_obj, {input}, {dataSources}) => {
    const apiFiltersInput = new URLSearchParams(input)
    const response = await dataSources.postsAPI.getPosts(apiFiltersInput)
    return response
}

// Mutation Resolvers
const createPost = async (_obj, {data}, {dataSources}) => {
    return dataSources.postsAPI.createPost(data)
}

const updatePost = async (_obj, {id, data}, {dataSources}) => {
    return dataSources.postsAPI.updatePost(id, data)
}

// Field Resolvers
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
    },
    Mutation: {
        createPost,
        updatePost
    }
}