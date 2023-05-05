import React from 'react'
import { useContext } from 'react'
import Context from './MyContext'

const Table = () => {
  const users=useContext(Context)
  return (
    <>
   <div className="container">
   <table className='table table-striped' >
      <thead>
        <tr>
          <th scope='col'>first Name</th>
          <th scope='col'>last Name</th>
          <th scope='col'> phone number</th>
          <th scope='col'>City</th>
          <th scope='col'>Country</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user)=>{
            return(
              <tr key={user.id}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.contact}</td>
                <td>{user.address.city}</td>
                <td>{user.address.country}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   </div>
    </>
  )
}

export default Table