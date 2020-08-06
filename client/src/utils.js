import gql from 'graphql-tag'

export const getUsers = gql`
  query getUsers {
    users @rest(type: "data", path:"employee?ApiUser=CHALLENGEUSER&ApiKey=CHALLENGEKEY") {
      firstName
      email
      lastName
      telephone
      role
      id
    }
  }
`

export const GET_USERS = gql`
  query getUsers {
    users @rest(type: "data",path:"employee?ApiUser=CHALLENGEUSER&ApiKey=CHALLENGEKEY") {
      firstName
      email
      lastName
      telephone
      role
      id
    }
  }
`

export const addUser = gql`
  mutation addUser($input: newUser!) {
    addUser(input: $newUser)
      @rest(type: "User", path: "users", method: "POST") {
      first_name
      last_name
      avatar
      id
    }
  }
`

export const removeUser = gql`
  mutation removeUser($input: userId!) {
    removeUser(input: $userId)
      @rest(
        type: "User"
        path: "users/{args.userId}"
        method: "DELETE"
      ) {
      userId
    }
  }
`

export const EDIT_USER = gql`
  mutation editUser($input: updatedUser!) {
    editUser(input: $updatedUser)
      @rest(
        type: "User"
        path: "users/{args.userId}"
        method: "PUT"
      ) {
      first_name
      last_name
      avatar
      id
    }
  }
`
