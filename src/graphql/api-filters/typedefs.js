import { gql } from "apollo-server";

export const apiFiltersTypeDefs = gql`
    input ApiFiltersInput {
        _start: Int
        _limit: Int
        _order: String
        _sort: String
    }
`