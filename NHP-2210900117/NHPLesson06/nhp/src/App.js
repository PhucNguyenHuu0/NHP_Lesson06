import './App.css';
import { useState } from 'react';
import NhpListTask from './components/NhpListTask';
import NhpTaskAddOrEdit from './components/NhpTaskAddOrEdit';

function App() {
  const nhp_listTasks = [
    { nhp_taskId:2210900119, nhp_taskName:"nguyen huu phuc", nhp_level:"Small" },
    { nhp_taskId:1, nhp_taskName:"Học lập trình frontend", nhp_level:"Small" },
    { nhp_taskId:2, nhp_taskName:"Học lập trình reactjs",nhp_level:"Medium"},
    { nhp_taskId:3, nhp_taskName:"Lập trình với Frontend - Reactjs",nhp_level:"High"},
    { nhp_taskId:4, nhp_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",nhp_level:"Small"},
   ];

   // su dung hang useState de luu tru trang thai du lieu
   const [nhpListTask, setNhpListTask] = useState(nhp_listTasks);

   const nhpHandleSubmit = (nhpParam) => {
      console.log("App:", nhpParam);
      setNhpListTask(prev => {
        return[
          ...prev,
          nhpParam
        ]
      })
   }
  return (
    <div className="container border">
      <h1>Nguyen Huu Phuc - K22CNT1</h1>
      <hr/>
      <div>
        {/*Danh sach list Task*/}
        <NhpListTask renderNhpListTasks = {nhpListTask}/>
      </div>
      <div>
        <NhpTaskAddOrEdit nhpOnSubmit={nhpHandleSubmit}/>
      </div>
    </div>
    
  );
}

export default App;