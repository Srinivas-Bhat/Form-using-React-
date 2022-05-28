import React from 'react'

const Table = ({formArr}) => {
    // console.log(formArr)
  return (
    <>
        <thead>
            <tr>
                <th>S.N</th>
                <th>Full name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital Status</th>
            </tr>
        </thead>
        <tbody>
            {formArr.map((el, index) => (
                <tr key={index}>
                    <td>{index+1}.</td>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.address}</td>
                    <td>{el.department}</td>
                    <td>{el.salary}</td>
                    <td>{el.Mstatus ? "Married" : "UnMarried"}</td>
                </tr>
            ))}
        </tbody>
    </>
  )
}

export default Table