const user = async (_obj, {id}, {getUsers}) => {
    const response = await getUsers(`/${id}`)
    const result = await response.json()
    return result
}

const users = async (_obj, _arg, {getUsers}) => {
    const response = await getUsers()
    
    return response.json()
}

export const userResolvers = {
    Query: {
        user,
        users
    }
}