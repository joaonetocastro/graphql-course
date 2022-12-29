import fetch from 'node-fetch'
import { makePostDataLoader } from './graphql/post/dataloaders'
import { makeGetPosts } from './graphql/post/utils'
import { makeUserDataLoader } from './graphql/user/dataloaders'
import {makeGetUsers} from './graphql/user/utils'

const getUsers = makeGetUsers(fetch)
const getPosts = makeGetPosts(fetch)
const userDataLoader = makeUserDataLoader(getUsers)
const postDataLoader = makePostDataLoader(getPosts)

export const context = () => {
    return {
        userDataLoader,
        postDataLoader,
        getUsers,
        getPosts,
    }
}