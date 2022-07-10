import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../../pure/ejemploRedux/TodoList'
//Actions
import { toggleTodo } from '../../../store/actions/actions'

//Filtrar Todo List
const filterTodos = (todos, filter)=>{
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);    
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);   
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

// Conectamos El state y el dispatch a los props
const TodosContainer= connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;