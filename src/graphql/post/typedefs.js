import { gql } from "apollo-server";

export const postTypeDefs = gql`
    extend type Query {
        post(id: ID!): Post!
        posts(input: ApiFiltersInput): [Post!]!
    }

    extend type Mutation {
        createPost(data: CreatePostInput!): Post!
        updatePost(id: ID!, data: UpdatePostInput!): Post!
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

    input CreatePostInput {
        title: String!
        body: String!
        userId: String!
    }

    input UpdatePostInput {
        title: String
        body: String
        userId: String
    }
`