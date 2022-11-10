import React, { useEffect } from 'react'

function Employee() {
  useEffect(async () => {
    await fetch('127.0.0.1:8000/department/')
    .then(res => res.json())
  })

  return (
    <div mt-5 d-flex justify-content-left>
        this is the employee page
    </div>
  )
}

export default Employee