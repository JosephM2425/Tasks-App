import React from 'react';

const ListTasks = ({tasks}) => {
    return (
        <ul className="lista-tares">
            {tasks.map((task)=> {
                return <li key={task.id}>{task.text}</li>
            })}
        </ul>
    );
}
 
export default ListTasks;