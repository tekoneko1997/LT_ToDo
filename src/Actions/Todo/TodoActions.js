//import { IAddTodoAction, IToggleTodoAction, IDeleteTodoAction } from './TodoAction';
import { TodoActionType } from './TodoActionType';

let nextTodoId = 0;

export function addTodo(text){
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
    }
}

export function toggleTodo(id){
    return {
        type: 'TOGGLE_TODO',
        id: id,
    }
}

export function deleteTodo(id){
    return {
        type: 'DELETE_TODO',
        id: id,
    }
}