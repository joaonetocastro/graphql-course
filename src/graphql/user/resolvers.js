const user = async (_obj, {id}, {getUsers}) => {
    const response = await getUsers(`/${id}`)
    const result = await response.json()
    return result
}

const users = async (_obj, {input}, {getUsers}) => {
    const apiFiltersInput = new URLSearchParams(input)
    const response = await getUsers(`/?${apiFiltersInput.toString()}`)
    
    return response.json()
}

const posts = async ({id}, _, {dataSources}) => {
    return dataSources.postsAPI.batchLoadByUserId(id)
}

export const userResolvers = {
    Query: {
        user,
        users
    },
    User: {
        posts
    }
}