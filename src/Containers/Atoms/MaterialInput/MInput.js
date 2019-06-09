import { connect } from 'react-redux';
import MInput from '../../../Components/Atoms/MaterialInput/MInput';



function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps() {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MInput);