const user = async (_obj, _arg, {axios}) => {
    const response = await axios.get(`http://localhost:3000/users/${id}`)
    
    return response.data
}

const users = async (_obj, _arg, {axios}) => {
    const response = await axios.get('http://localhost:3000/users')
    
    return response.data
}

export const userResolvers = {
    Query: {
        user,
        users
    }
}