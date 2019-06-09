import React from 'react';
import MInput from '../../../Containers/Atoms/MaterialInput/MInput'
import MDInput from '../../../Containers/Atoms/MaterialDetailsInput/MDInputs'


class AddTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      open: true//this.props.open
    };

    this.closeDialog = this.closeDialog.bind(this);
  }
  render() {
    const {open} = this.props
    return (
      <dialog className="mdl-dialog" open={open} >
        <h4 className="mdl-dialog__title">Add your task</h4>
        <div className="mdl-dialog__content">
        add a title
        <MInput text="title"/>
        <MDInput text="details"/>
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button" >Add</button>
          <button type="button" className="mdl-button close" onClick={this.closeDialog}>Cancel</button>
        </div>
      </dialog>
    )
  }

  closeDialog(){
      this.props.isopen();
  }

}

export default AddTodoModal;