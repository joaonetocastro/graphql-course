const user = async (_obj, {id}, {fetch}) => {
    const response = await fetch(`http://localhost:3000/users/${id}`)
    const result = await response.json()
    return result
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