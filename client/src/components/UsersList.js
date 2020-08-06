import React from 'react'
import { Query } from 'react-apollo'
import { GET_USERS } from '../utils'
import styled from 'styled-components'
import User from './User.js'

const Container = styled.div`
  width: 220px;
  margin: 0 auto;
`

const List = ({ users, editUser, removeUser }) => (
 
<>
{console.log("USERS", typeof(users), users)
}

{Object.keys(users.users).map(user=>
  console.log('USER HERE', users.users[user].firstName)
  )}
    {Object.keys(users.users).map(user=>
     
    <User
  
   key={users.users[user].id? users.users[user].id:null }
   firstName={users.users[user].firstName? users.users[user].firstName: null }
    lastName={users.users[user].lastName? users.users[user].lastName: null }
       email={users.users[user].email?users.users[user].email: null }
       role={users.users[user].role?users.users[user].role: null }
        telephone={users.users[user].telephone? users.users[user].telephone: null}

 

     /> 
   )}
</>)

const UsersList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`
      if (data) {
        return <List users={data} />
      }
    }}
  </Query>
)

export default UsersList;
