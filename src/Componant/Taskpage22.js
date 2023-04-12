import React, { useEffect, useState } from 'react';
import './taskmaintainer.css';

export default function Taskpage2() {
    const getToken = localStorage.getItem("token")
    const [task, setTask] = useState({
        title: "",
        description: "",
        isCheck: false,
        tags: []
    });
    const [data, setData] = useState([]);
    function Add() {
        // setData(pre => [...pre, task])

        console.log(getToken)
        fetch('https://todo-api-xu4f.onrender.com/user/addTodo', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + getToken
            },
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result, "............result")
            })
            .catch((error) => { console.log(error) })

        fetch('https://todo-api-xu4f.onrender.com/user/all-todo', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + getToken
            },
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result, "--->result")
                setData(result.AllTodo)
            })
            .catch((error) => { console.log(error) })
        console.log(data, "............dataresult")
    }
    useEffect(() => {
        fetch('https://todo-api-xu4f.onrender.com/user/all-todo', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + getToken,
            },
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result, "------------->result")
                setData(result.AllTodo)
            })
            .catch((error) => { console.log(error) })
    }, [getToken])
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

    return (
        <>
            <form className='row ' onSubmit={(e) => { e.preventDefault() }} style={{ marginRight: "0px" }} >
                <div className='col-2'></div>
                <div className='col-8'>
                    <div className="form-group my-2 ">
                        <label htmlFor="exampleFormControlInput1">Enter Task</label>
                        <input
                            value={task.title}

                            onChange={(e) => setTask(pre => ({ ...pre, title: e.target.value }))}
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
                    <button className=' btn ADDTASK col-12 m-3 mx-1' onClick={Add}>ADD TASK</button>
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

                    {data.map((item, id) =>
                    // console.log(data, "...........>>>>>>>>>>>dddddd.")
                    // console.log(item, ">>>>>>>>>>>>>>item")

                    // console.log(item.title, ">>>>>>>>>>>>>>item")
                    (<tr key={id}>
                        <th scope="row"><input type='checkbox' onChange={() => changeStatus(id)} checked={item.isCheck} /></th>
                        <td className='task'>{item.title}</td>
                        {item.isCheck ? <td className='description'>{item.description}</td> :
                            <td >{item.description}</td>}
                        {item.isCheck ? <td className='completed'> Completed</td> :
                            <td > not Completed</td>}
                        <td onClick={() => deletebtn(id)}>delete</td>
                    </tr>)
                    )}

                </tbody>
            </table>

        </>
    )
}
