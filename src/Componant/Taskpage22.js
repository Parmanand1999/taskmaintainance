import React, { useState } from 'react';
import './taskmaintainer.css';
export default function Taskpage2() {
    const [task, setTask] = useState({
        task: "",
        description: "",
        isCheck: false
    });
    const [data, setData] = useState([]);
    function add() {
        setData(pre => [...pre, task])
    }
    function deletebtn(id) {
        // console.log(id, "............")
        const newList = data.filter((item, i) => i !== id);
        setData(newList)
    }

   
    function changeStatus(id) {
        
        const updatedData = [...data]
        updatedData[id].isCheck = updatedData[id].isCheck === false ? true : false
        setData(updatedData)
        // console.log(updatedData, "update8888");

    }

    console.log(data, 'datadata');

    
    return (
        <>
            <form className='row ' onSubmit={(e) => { e.preventDefault() }} style={{ marginRight: "0px" }} >
                <div className='col-2'></div>
                <div className='col-8'>
                    <div className="form-group my-2 ">
                        <label htmlFor="exampleFormControlInput1">Enter Task</label>
                        <input
                            value={task.task}

                            onChange={(e) => setTask(pre => ({ ...pre, task: e.target.value }))}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter task here"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea
                            value={task.description}
                            onChange={(e) => setTask(pre => ({ ...pre, description: e.target.value }))}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder='Write your thoghts here'
                        />
                    </div>
                    <button className=' btn ADDTASK col-12 m-3 mx-1' onClick={add}>ADD TASK</button>
                </div>
                <div className='col-2'></div>


            </form>
            <table className=" tabledata table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">TASK</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, id) => {
                        console.log(item)
                        return (<tr key={id}>
                            <th scope="row"><input type='checkbox' onChange={() => changeStatus(id)} checked={item.isCheck} /></th>
                            <td className='task'>{item.task}</td>
                            {item.isCheck ? <td className='description'>{item.description}</td> :
                                <td >{item.description}</td>}
                            {item.isCheck ? <td className='completed'> Completed</td> :
                                <td > not Completed</td>}
                            <td onClick={() => deletebtn(id)}>delete</td>
                        </tr>)
                    })}

                </tbody>
            </table>

        </>
    )
}
