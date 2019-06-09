import { connect } from 'react-redux';
import MDInput from '../../../Components/Atoms/MaterialDetailsInput/MDInput';



function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps() {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MDInput);