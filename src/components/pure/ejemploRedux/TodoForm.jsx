import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const TodoForm = ({submit}) => {

    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOs</h2> 
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type='text' ref={newText} />
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

TodoForm.protoTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
