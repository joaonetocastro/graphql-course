import {RESTDataSource} from 'apollo-datasource-rest'

export class PostsAPI extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = `${process.env.API_URL}/posts/`
    }

    async getPosts(urLParams={}){
        return this.get('', urLParams);
    }

    async getPost(id){
        return this.get(id);
    }
}