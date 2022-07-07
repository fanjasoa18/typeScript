import React, {ChangeEvent, FC, useState} from "react";
import './Component.css';
import {ITask} from './Interfaces'
import TodoTask from "./Container";
import Container from "./Container";

const Component: FC = () => {

    const [task,setTask] = useState<string>(" ");
    const [deadline,setDeadline] = useState<number>(0);
    const [toDoList,setToDoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task"){
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline};
        setToDoList([...toDoList, newTask])
        setTask("");
        setDeadline(0);
    }

    const completeTask = (taskNameDelete: string): void => {
        setToDoList(toDoList.filter((task) => {
            return task.taskName != taskNameDelete
    }))
};

    return(
        <>
        <div className="list">
            <h1>LIST</h1>
        </div>
        <div className="header">
            <div className="inputContainer">
                <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
                <input type="number" placeholder="Deadline(in days)" name="deadline" value={deadline} onChange={handleChange}/>
            </div>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="component">
            <div className="toDoList toDO">
                <h2>ToDo</h2>
                {toDoList.map((task: ITask, key: number) => {
                    return <Container key={key} task={task} completeTask={completeTask}/>;
                })}
            </div>
            <div className="toDoList doing">
                <h2>Doing</h2>
            </div>
            <div className="toDoList done">
                <h2>Done</h2>
            </div>
        </div>
        </>
    )
}

export default Component;