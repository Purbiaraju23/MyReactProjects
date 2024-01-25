import React from 'react'
import { useParams } from 'react-router-dom' // This will help to use params pass via <Route/>

function User() {
    const {id} = useParams()
  return (
    <div className='text-white bg-gray-700 p-4 text-center text-3xl'>User: {id}</div>
  )
}

export default User
 