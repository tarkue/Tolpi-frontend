import { gql } from "@apollo/client";

export const createUser = gql`
    mutation CreateUser {
        createUser {
            country
        }
    }
`

export const setCountry = gql`
    mutation country($country: String!) {
        setCountry(country: $country) {
            country
        }
    }
`

export const getUser = gql`
    query User($userId: String!){
        User(userId: $userId) {
            avatar
            firstName
            lastName
            status
            trackerList
            tolpies {
                timestamp
                text
                user {
                    userId
                    firstName
                    lastName
                    avatar
                }
            }

        }
    }
`