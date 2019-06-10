import { connect } from 'react-redux';
import TodoItem from '../../../Components/Molecules/TodoItem/TodoItem';



function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);