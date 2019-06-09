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
            <form action="#">
                <div class="mdl-textfield mdl-js-textfield">
                    <textarea class="mdl-textfield__input" type="text" rows="3" id="sample5" value ={this.state.inputText} onChange={_=> this.setState({inputText: _.target.value})}></textarea>
                    <label class="mdl-textfield__label" for="sample5">{text}</label>
                </div>
            </form>

        )
    }
}

export default MInput;

