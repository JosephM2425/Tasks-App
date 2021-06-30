import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare,faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({task, toggleCompleted}) => {

    const [editTask, setEditTask] = useState(false)
    const [updateTask, setUpdateTask] = useState(task.text)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEditTask(false)
    }

    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={ task.completed ? faCheckSquare : faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={() => toggleCompleted(task.id)}
            />
            <div className="lista-tareas__texto">
                {editTask ? 
                    <form onSubmit={handleSubmit} className="formulario-editar-tarea">
                        <input 
                            type="text"
                            className="formulario-editar-tarea__input"
                            value={updateTask}
                            onChange={(e) => setUpdateTask(e.target.value)}
                        />
                        <button 
                            type="submit" 
                            className="formulario-editar-tarea__btn"
                        >
                            Actualizar
                        </button>
                    </form>
                    : task.text
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => setEditTask(!editTask)}
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className="lista-tareas__icono lista-tareas__icono-accion"
                />
            </div>
        </li>
    );
}
 
export default Task;