import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl';

class TodoItemMenus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            open: true
        };
    }
    render() {
        return (
            <div className="mdl-card__menu" >
                <IconButton name="more_vert" id={this.state.id} key={this.state.id}/>
                {(this.state.open) ?(
                <Menu target={this.state.id} align="right" >
                    <MenuItem eventKey='1'>Edit</MenuItem>
                    <MenuItem eventKey='2' onClick={this.deleteTodoItem}><font color="#f00">Deleate</font></MenuItem>
                </Menu>
                ):null}
            </div>
        )
        // return (
        //     <div class="mdl-card__menu">
        //         <button onClick={this.menuOpen} class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        //             <i class="material-icons">more_vert</i>
        //         </button>
        //         {(this.state.open) ?(
        //         <ul class="mdl-menu mdl-menu--bottom-right mdl-js-ripple-effect"
        //         for={this.state.id}>
        //             <li class="mdl-menu__item">Some Action</li>
        //             <li class="mdl-menu__item">Another Action</li>
        //             <li disabled class="mdl-menu__item">Disabled Action</li>
        //             <li class="mdl-menu__item">Yet Another Action</li>
        //         </ul>
        //         ):null }
        //     </div>
        // )
    }

    menuOpen =()=>{
        this.setState({
            open: !this.state.open
        })
        if(this.state.open){

        }
    }

    deleteTodoItem = () => {
        this.props.deleteTodo(this.state.id);
    }
}

export default TodoItemMenus;

