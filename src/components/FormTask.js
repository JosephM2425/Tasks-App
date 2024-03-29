import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const FormTasks = ({tasks, setTasks}) => {
    const [inputTask, changeInputTask] = useState('');
    
    const handleInput = (e) => {
        changeInputTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTasks(
            [
                ...tasks,
                {
                    id: uuidv4(),
                    text: inputTask,
                    completed: false
                }
            ]
        )
    }

    return ( 
        <form className="formulario-tareas" onSubmit={handleSubmit} >
            <input 
                type="text" 
                className="formulario-tareas__input"
                placeholder="Escribe un Tarea"
                value={inputTask}
                onChange={(e) => handleInput(e)}
            />
            <button 
                type="submit"
                className="formulario-tareas__btn"
            >
                <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn" />
            </button>
        </form>
    );
}
 
export default FormTasks;