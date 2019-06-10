import React from 'react';
import TodoItemMenus from '../../../Containers/Molecules/TodoItemMenus/TodoItemMenus'


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //inputText: '',
        };
    }
    render() {
        const { title, detail, id } = this.props;
        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{title}だよ</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {detail}ですわ
                </div>
                <TodoItemMenus id={id}/>
            </div>
        )
    }
}

export default TodoItem;

