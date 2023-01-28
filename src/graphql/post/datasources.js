import {RESTDataSource} from 'apollo-datasource-rest'
import { makePostDataLoader } from './dataloaders';
import { createPostFn, updatePostFn } from './utils/post-repository';

export class PostsAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = `${process.env.API_URL}/posts/`
        this.dataLoader = makePostDataLoader(this.getPosts.bind(this))
    }

    async getPosts(urLParams={}){
        return this.get('', urLParams, {
            cacheOptions: { ttl: 60}
        });
    }

    async getPost(id){
        return this.get(id, undefined, {
            cacheOptions: { ttl: 60}
        });
    }

    async createPost(data){
        return createPostFn(data, this)
    }

    async updatePost(id, data){
        return updatePostFn(id, data, this)
    }

    batchLoadByUserId(id) {
        return this.dataLoader.load(id)
    }
}