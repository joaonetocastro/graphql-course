const post = () => {
    return {
        id: '1',
        title: 'any title'
    }
}

const posts = () => {
    return [{
        id: '1',
        title: 'any title'
    }]
}

export const postResolvers = {
    Query: {
        post,
        posts
    }
}