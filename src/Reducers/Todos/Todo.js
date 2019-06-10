//import { TodoAction } from '../../actions/Todo/TodoAction'
//import { TodoActionType } from "../../actions/Todo/TodoActionType";
//import { Todos } from "../../states/Todo/TodosState";


function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          detail: action.detail,
          completed: false,
        }
      ];
    case 'DELETE_TODO':
      // return [
      //   ...state.slice(action.id)
      // ];
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

export default todos;