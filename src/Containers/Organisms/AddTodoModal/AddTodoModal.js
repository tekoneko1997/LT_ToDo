import { connect } from 'react-redux';
import AddTodoModal from '../../../Components/Organisms/AddTodoModal/AddTodoModal';
//import { bindActionCreators } from 'redux';
import { addTodo } from '../../../Actions/Todo/TodoActions';


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title, detail) => {
            dispatch(addTodo(title, detail));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);