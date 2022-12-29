import DataLoader from 'dataloader'

export const makePostDataLoader = (getPosts) => {
    return new DataLoader(async (userIds) => {
        const query = userIds.join('&userId=')
        const response = await getPosts(`/?userId=${query}`)
        const posts = await response.json()
        return userIds.map(id => posts.filter(post => post.userId === id))
    })
}