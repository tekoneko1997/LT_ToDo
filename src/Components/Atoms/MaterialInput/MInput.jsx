import React from 'react';


class MInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
          };
    }
    render() {
        const { text } = this.props;
        return (
            <from>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="sample1" value ={this.state.inputText} onChange={_=> this.setState({inputText: _.target.value})}/>
                    <label className="mdl-textfield__label" htmlFor="sample1">{text}</label>
                </div>
            </from>
        )
    }
}

export default MInput;

