import React from 'react';


class MInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //inputText: '',
          };
    }
    render() {
        const { text, inputText, onChange} = this.props;
        return (
            <from>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="sample1" value ={inputText} onChange={onChange}/>
                    <label className="mdl-textfield__label" htmlFor="sample1">{text}</label>
                </div>
            </from>
        )
    }
}

export default MInput;

