//import {  } from '../../actions/OpenDialog/OpenDialogActions'
//import { TodoActionType } from "../../actions/Todo/TodoActionType";
//import { Todos } from "../../states/Todo/TodosState";


function openDialog(state = [{ open: false }], action) {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return [
                {
                    open: true
                }
            ];
        case 'CLOASE_DIALOG':
            return [
                {
                    open: false
                }
            ];
        default:
            return state;
    }
}

export default openDialog;