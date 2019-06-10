import React from 'react';
import TodoItem from '../../../Containers/Molecules/TodoItem/TodoItem'

class TodoItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //inputText: '',
        };
    }
    render() {
        const { todos } = this.props;
        return (
            <ul className="demo-list-control mdl-list" id="gridLayout">
                {
                    todos.map((todos, index)=>{
                    if(!todos.completed)
                        return <li className="mdl-list__item" id="gridLayoutItem"key={index}>
                            <TodoItem detail={todos.detail} title={todos.title} id={todos.id}/>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default TodoItemList;

