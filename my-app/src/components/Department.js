import React, { useEffect, useState } from 'react'

function Department() {
  const [deps, setDeps] = useState([])
  const [depName, setDepName] = useState('')

  async function fetchData() {
    const res = await fetch(process.env.REACT_APP_API + "department/")
    const data = await res.json()
    setDeps(data)
  }

  // Get request is working
  // Need to figure out how to make this post request work
  // Finish the CRUDS and that's its
  function handleSubmit() {
    console.log(process.env.REACT_APP_API+"department/")
    fetch(process.env.REACT_APP_API+"department/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ DepartmentId: null, DepartmentName: depName})
    })
  }

  useEffect(() => {
    fetchData()}, [])

  return (
    <div className="container-md">
      <h1>Add department</h1>
      <div className="col-md-3 md-form form-group">
        <label htmlFor="nameInput">Name</label>
        <input onChange={(e) => setDepName(e.target.value)}id="nameInput" type="text" className="form-control input-sm" />
      </div>
      <button onClick={() => handleSubmit()}></button>

      <h2>Departments</h2>
      <table className="table">
      <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>

        <tbody>
          {deps && deps.map((d) => (
            <tr key={d.DepartmentId}>
              <td>
                {d.DepartmentId}
              </td>
              <td>
                {d.DepartmentName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Department
