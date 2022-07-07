import React from "react";
import {ITask} from "./Interfaces"

interface Props {
    task: ITask;
    completeTask(): void ;
}

const Container = ({ task, completeTask }: Props) => {
    return (
    <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={() => {
            completeTask();
        }}
        >
            x
        </button>
    </div>
  );
};

export default Container;
