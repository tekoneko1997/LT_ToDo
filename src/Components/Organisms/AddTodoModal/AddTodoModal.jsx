import React from 'react';
import MInput from '../../../Containers/Atoms/MaterialInput/MInput'
import MDInput from '../../../Containers/Atoms/MaterialDetailsInput/MDInputs'


class AddTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      inputDetails: '',
      open: true
    };

    this.closeDialog = this.closeDialog.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }
  render() {
    const {open} = this.props
    return (
      <dialog className="mdl-dialog" open={open} >
        <h4 className="mdl-dialog__title">Add your task</h4>
        <div className="mdl-dialog__content">
        add a title
        <MInput text="title" inputText={this.state.inputTitle} onChange={_=>this.setState({inputTitle: _.target.value})}/>
        <MDInput text="details" inputText={this.state.inputDetails} onChange={_=>this.setState({inputDetails: _.target.value})}/>
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button" onClick={this.submitTodo}>Add</button>
          <button type="button" className="mdl-button close" onClick={this.closeDialog}>Cancel</button>
        </div>
      </dialog>
    )
  }

  closeDialog(){
      this.props.isopen();
  }

  submitTodo(){
    this.props.addTodo(this.state.inputTitle, this.state.inputDetails);
    this.props.isopen();

    this.setState(
      {
        inputTitle: '',
        inputDetails: '',
      }
    )
  }

}

export default AddTodoModal;