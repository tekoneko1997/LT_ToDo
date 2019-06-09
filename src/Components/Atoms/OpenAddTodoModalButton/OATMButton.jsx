import React from 'react';
import AddTodoModal from '../../../Containers/Molecules/AddTodoModal/AddTodoModal';


class OATMButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isopen: false,
        }
        this.isOpenModal = this.isOpenModal.bind(this);
    }
    render() {
        return (
            <div>
                <button id="show-dialog" type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                    onClick={this.isOpenModal}>Add Todo</button>
                <AddTodoModal open={this.state.isopen} isopen={ this.isOpenModal } />
            </div>
        )
    }

    isOpenModal(){
        if (!this.state.isopen) {
            this.setState({
                isopen: true
            })
        } else {
            this.setState({
                isopen: false
            })
        }
    }

}

export default OATMButton;