import React from 'react';
import Task from './Task';

const ListTasks = ({tasks, setTasks}) => {

    const toggleCompleted = (id) => {
        setTasks(tasks.map( (task) => {
            if(task.id === id){
                return {...task, completed: !task.completed}
            }
            return task
        }) );
    }

    return (
        <ul className="lista-tares">
            { 
            tasks.length > 0 ? 
                tasks.map((task)=> {
                    return <Task 
                            key={task.id}
                            task={task}
                            toggleCompleted={toggleCompleted}
                            />
                })
            : 
                <div className="lista-tareas__mensaje">No hay Tareas Agregadas</div>
            }
        </ul>
    );
}
 
export default ListTasks;