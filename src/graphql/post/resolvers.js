const post = async (_obj, {id}, {dataSources}) => {
    const response = await dataSources.postsAPI.getPost(id)
    return response
}

const posts = async (_obj, {input}, {dataSources}) => {
    const apiFiltersInput = new URLSearchParams(input)
    const response = await dataSources.postsAPI.getPosts(apiFiltersInput)
    return response
}

const createPost = async (_obj, args, {dataSources}) => {
    console.log(args)
    return null
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
    },
    Mutation: {
        createPost
    }
}