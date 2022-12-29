import fetch from 'node-fetch'
import { makeUserDataLoader } from './graphql/user/dataloaders'
import {getUsers} from './graphql/user/utils'

export const context = () => {
    return {
        userDataLoader: makeUserDataLoader(getUsers(fetch)),
        getUsers: getUsers(fetch),
        getPosts: (path='/') => fetch(`http://localhost:3000/posts${path}`),
    }
}