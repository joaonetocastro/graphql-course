const post = async (_obj, {id}, {getPosts}) => {
    const response = await getPosts(`/${id}`)
    const result = await response.json()

    if(Math.random() > 0.5) {
        return {
            statusCode: 500,
            message: 'Post Timeout',
            timeout: 123
        }
    }
    
    if(typeof result.id === 'undefined') {
        return {
            statusCode: 404,
            message: 'Post Not Found',
            postId: id
        }
    }

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
    },
    PostResult: {
        __resolveType: (obj) => {
            if(typeof obj.postId !== 'undefined') return 'PostNotFoundError'
            if(typeof obj.timeout !== 'undefined') return 'PostTimeoutError'
            if(typeof obj.id !== 'undefined') return 'Post'
            return null
        }
    },
    PostError: {
        __resolveType: (obj) => {
            if(typeof obj.postId !== 'undefined') return 'PostNotFoundError'
            if(typeof obj.timeout !== 'undefined') return 'PostTimeoutError'
            return null
        }
    },
}