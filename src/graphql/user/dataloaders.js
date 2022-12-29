import DataLoader from 'dataloader'

export const makeUserDataLoader = (getUsers) => {
    return new DataLoader(async (ids) => {
        const query = ids.join('&id=')
        const response = await getUsers(`/?id=${query}`)
        const users = await response.json()
        return ids.map(id => users.find(user => user.id == id))
    })
}