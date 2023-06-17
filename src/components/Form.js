import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, todos, setTodos}) => {

    const onIputChange = (event) => {
        setInput(event.target.value)
    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        setTodos([...todos, {id: uuidv4(), title: input, completed: false}])


    }

    return (
        <form onSubmit={onFormSubmit}>

            <input
            type="text"
            placeholder="Enter task"
            className="task-input"
            value={input}
            required
            onChange={onIputChange}

            />

            <button
            className="button-add"
            type="submit"

            >
                Add
            </button>


        </form>
    );
};

export default Form;