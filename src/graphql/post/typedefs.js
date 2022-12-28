import { gql } from "apollo-server";

export const postTypeDefs = gql`
    extend type Query {
        post(id: ID!): PostResult
        posts(input: ApiFiltersInput): [Post!]!
    }

    type PostNotFoundError {
        statusCode: Int!
        message: String!
    }

    union PostResult = PostNotFoundError | Post
    
    type Post {
        id: ID!
        title: String!
        body: String!
        indexRef: Int!
        createdAt: String!
        unixTimestamp: String!        # user: User
    }
`