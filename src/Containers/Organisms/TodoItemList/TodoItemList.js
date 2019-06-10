import { connect } from 'react-redux';
import TodoItemList from '../../../Components/Organisms/TodoItemList/TodoItemList';



function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemList);