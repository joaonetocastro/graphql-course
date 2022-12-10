const user = () => {
    return {
        id: '1',
        userName: 'joao'
    }
}

const users = () => {
    return [{
        id: '1',
        userName: 'joao'
    }]
}

export const userResolvers = {
    Query: {
        user,
        users
    }
}