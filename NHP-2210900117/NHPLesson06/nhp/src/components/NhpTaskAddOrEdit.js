import React, { useState } from 'react'

export default function NhpTaskAddOrEdit({nhpOnSubmit}) {
    // Doi tuong Task
    
    const nhpTaskObj = { 
        nhp_taskId:4,
        nhp_taskName:"",
        nhp_level:""
    }
    const [nhpTask, setNhpTask] = useState(nhpTaskObj);

    //Ham xu ly su kien thay doi tren dieu khien

    const nhpHandleChange = (nhpEvent) => {
        let name = nhpEvent.target.name;
        let value = nhpEvent.target.value;
        
        setNhpTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const nhpHandleSubmit = (nhpEvent) => {
        nhpEvent.preventDefault();
        nhpOnSubmit(nhpTask);
    }
  return (
    <div>
        <h2>Them moi Task</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Task ID</span>
                <input name='nhp_taskId' value={nhpTask.nhp_taskId} onChange={nhpHandleChange}/>
            </div>
            <div>
                <label>Task Name</label>
                <input name='nhp_taskName' value={nhpTask.nhp_taskName} onChange={nhpHandleChange}/>
            </div>
            <div>
                <label>Task Level</label>
                <select name='nhp_level' value={nhpTask.nhp_level} onChange={nhpHandleChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={nhpHandleSubmit}>Ghi lai</button>
        </form>
    </div>
  )
}