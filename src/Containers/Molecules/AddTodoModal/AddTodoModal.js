import { connect } from 'react-redux';
import AddTodoModal from '../../../Components/Molecules/AddTodoModal/AddTodoModal';
// import { bindActionCreators } from 'redux';
// import { closeDialog, openDialog } from '../../../Actions/OpenDialog/OpenDialogActions'


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps() {
    // return bindActionCreators(
    //     {
    //         close: closeDialog,
    //         open: openDialog,
    //     }, dispatch
    // );

    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);