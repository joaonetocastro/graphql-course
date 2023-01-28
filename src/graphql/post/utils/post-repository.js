import { ValidationError } from "apollo-server"

export const createPostFn = async (data, dataSource) => {
    const postInfo = await createPostInfo(data, dataSource)
    const {title, body, userId} = postInfo

    if(!title || !body || !userId) {
        throw new ValidationError('You have to send title, body and userId')
    }

    return await dataSource.post('', {...postInfo})
}

const userExists = async (userId, dataSource) => {
    try {
        await dataSource.context.getUsers(`/${userId}`)
    } catch (e){
        console.log(e.message)
        throw new ValidationError(`User ${userId} does not exist`)
    }
}

const createPostInfo = async (data, dataSource) => {
    const {title, body, userId} = data

    await userExists(userId, dataSource)

    const indexRefPost = await dataSource.get('/', {
        _limit: 1,
        _sort: 'indexRef',
        _order: 'desc'
    })

    const indexRef = indexRefPost[0].indexRef + 1

    return {
        title, body, userId, indexRef, createdAt: new Date().toISOString()
    }
} 