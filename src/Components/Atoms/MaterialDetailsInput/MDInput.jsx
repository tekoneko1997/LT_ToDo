import React from 'react';


class MDInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //inputText: '',
        };
    }
    render() {
        const { text, inputText, onChange} = this.props;
        return (
            <form action="#">
                <div className="mdl-textfield mdl-js-textfield">
                    <textarea className="mdl-textfield__input" type="text" rows="3" id="sample5" value ={inputText} onChange={onChange}></textarea>
                    <label className="mdl-textfield__label" for="sample5">{text}</label>
                </div>
            </form>

        )
    }
}

export default MDInput;

