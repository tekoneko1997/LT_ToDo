//import { IAddTodoAction, IToggleTodoAction, IDeleteTodoAction } from './TodoAction';
//import { TodoActionType } from './TodoActionType';

let nextTodoId = 0;

export function addTodo(title, detail){
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        title,
        detail,
        completed: false
    }
}

export function editTodo(id){
    return {
        type: 'EDIT_TODO',
        id: id,
    }
}

export function deleteTodo(id){
    return {
        type: 'DELETE_TODO',
        id: id,
    }
}