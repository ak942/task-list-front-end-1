import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, description, toggleTask, removeTask}) => {
    const [hover, setHover] = React.useState(false)
    const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
    const text = ()=> {
        return hover ? <section className="description_text">{description}</section> : <section className="task-text">{title}</section>
    }

    return (
    <li onMouseOver={()=>setHover(true)} onMouseOut ={()=>setHover(false)} className="tasks__item">
        <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => toggleTask(id, isComplete)}
        >
        {text()}
        </button>
        <button className="tasks__item__remove button" onClick={()=>removeTask(id)}>X</button>
    </li>
    );
};

Task.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    toggleTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default Task;