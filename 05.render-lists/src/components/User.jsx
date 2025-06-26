import React from 'react'

function User({firstName,lastName,age}) {
  return (
    <div>{firstName} {lastName} {age}</div>
  )
}

export default User