import { gql } from "apollo-server";

export const postTypeDefs = gql`
    extend type Query {
        post(id: ID!): Post!
        posts(input: ApiFiltersInput): [Post!]!
    }

    extend type Mutation {
        createPost(id: ID!): Post!
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        indexRef: Int!
        createdAt: String!
        unixTimestamp: String!  
        user: User!
    }
`