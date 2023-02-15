import React from 'react';
import './TaskList.css'

const TaskItem = (task, index) => {
    return <li key={index} className='task__item'>{task}</li>
}
export default function TaskList(props) {

    // props renvois l'attribut d'un élément et sa valeur
    const { tasksList } = props;

    return (
        <ul className='task__list'>
            {/* // .map fonctionne de la même manière qu'une boucle foreach */}
            {tasksList.map((task, index) => {
                return TaskItem(task, index);
            })}
        </ul>
    )
}