import { gql } from "apollo-server";

export const postTypeDefs = gql`
    extend type Query {
        post(id: ID!): PostResult
        posts(input: ApiFiltersInput): [Post!]!
    }

    interface PostError {
        statusCode: Int!
        message: String!
    }

    type PostNotFoundError implements PostError {
        statusCode: Int!
        message: String!
        postId: String!
    }

    type PostTimeoutError implements PostError {
        statusCode: Int!
        message: String!
        timeout: Int!
    }

    union PostResult = PostNotFoundError | PostTimeoutError | Post
    
    type Post {
        id: ID!
        title: String!
        body: String!
        indexRef: Int!
        createdAt: String!
        unixTimestamp: String!        # user: User
    }
`