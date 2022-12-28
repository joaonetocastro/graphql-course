import { gql } from "apollo-server";

export const apiFiltersTypeDefs = gql`
    enum ApiFilterOrder {
        ASC
        DESC
    }

    input ApiFiltersInput {
        _start: Int
        _limit: Int
        _order: ApiFilterOrder
        _sort: String
    }
`