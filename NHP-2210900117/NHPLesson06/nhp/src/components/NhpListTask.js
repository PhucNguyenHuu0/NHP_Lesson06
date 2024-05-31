import React from 'react'

export default function NhpListTask({renderNhpListTasks}) {
    console.log(renderNhpListTasks);

    //render data

    let nhpElementTask = renderNhpListTasks.map((task, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index +1}</td>
                    <td>{task.nhp_taskId}</td>
                    <td>{task.nhp_taskName}</td>
                    <td>{task.nhp_taskId}</td>
                    <td>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger'>Remove</button>
                    </td>
                </tr>

            </>
        )
    })

  return (
    <div>
        <h2>Danh sach cac nhiem vu</h2>
        <table className='table table-bordered'>
            <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Level</th>
                        <th>Action</th>
                    </tr>
            </thead>

            <tbody>
                {nhpElementTask}
            </tbody>
        </table>
    </div>
  )
}   