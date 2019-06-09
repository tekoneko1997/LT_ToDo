import { combineReducers } from 'redux';
import todos from './Todos/Todo';
import openDialog from './OpenDialog/OpenDialog'

/* 分割した状態遷移の関数群(reducers)の結合(combineReducers呼び出し) */
const rootReducer = combineReducers({
    todos,
    openDialog
});

export default rootReducer;