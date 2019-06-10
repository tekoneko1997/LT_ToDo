import { connect } from 'react-redux';
import Header from '../../../Components/Organisms/Header/Header';



function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);