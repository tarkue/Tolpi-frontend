import { gql } from "@apollo/client";

export const createTolpiQL = gql`
    mutation createTolpi($text: String!, $country: String! ) {
        createTolpi(input: {
            text: $text
            country: $country

        }) {
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
`
export const getAllTolpi = gql`
    query getAll($country: String!) {
        Tolpies(country: $country) {
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
`

export const getSubscribeTolpi = gql`
    subscription getSubscribeTolpi {
        Tolpies {
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
`