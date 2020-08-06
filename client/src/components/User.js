import React from 'react'
import styled from 'styled-components'
import { render } from '@testing-library/react';
// import RemoveUser from './RemoveUser.jsx'
// import EditUser from './EditUser.jsx'

const Container = styled.div`
 
`

const Avatar = styled.div`
  
  
 
`

class User extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  console.log("PROPS", this.props)
return (

  <>
  <div>
  {console.log("heere",this.props.email)}
    <p>{this.props.firstName}</p>
    <p>{this.props.email}</p>
  </div>
  </>
)}
}
// const User = ({
//   firstName,
//   lastName,
//   id,
  
 
// }) => (

//   <Container>
//     {console.log("user", )}
//     <div >
//       <p>
//         {firstName} 
//       </p>
//       {/* <EditUser userId={id} /> */}
//       {/* <RemoveUser userId={id} /> */}
//     </div>
//   </Container>
// )

export default User
