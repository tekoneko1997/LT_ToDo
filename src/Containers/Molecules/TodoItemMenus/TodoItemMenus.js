import { connect } from 'react-redux';
import TodoItemMenus from '../../../Components/Molecules/TodoItemMenus/TodoItemMenus';
import { deleteTodo } from '../../../Actions/Todo/TodoActions';


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return{
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemMenus);