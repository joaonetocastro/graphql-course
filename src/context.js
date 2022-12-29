import fetch from 'node-fetch'
import { makeGetPosts } from './graphql/post/utils'
import { makeUserDataLoader } from './graphql/user/dataloaders'
import {makeGetUsers} from './graphql/user/utils'

const getUsers = makeGetUsers(fetch)
const getPosts = makeGetPosts(fetch)

export const context = () => {
    return {
        userDataLoader: makeUserDataLoader(getUsers),
        getUsers,
        getPosts,
    }
}