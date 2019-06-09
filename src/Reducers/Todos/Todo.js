//import { TodoAction } from '../../actions/Todo/TodoAction'
//import { TodoActionType } from "../../actions/Todo/TodoActionType";
//import { Todos } from "../../states/Todo/TodosState";


function todos(state = [], action){
  switch(action.type) {
   case 'ADD_TODO' :
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false,
      }
    ];
//   case TodoActionType.TOGGLE_TODO :
//     return state.map(todo => 
//       (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
//     );
//   case TodoActionType.DELETE_TODO :
//     return state.filter(todo => todo.id !== action.id);

  default:
    return state;
 }
}

export default todos;