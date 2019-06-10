import React from 'react';
import OATMButton from  '../../../Containers/Atoms/OpenAddTodoModalButton/OATMButton'
import TodoItemList from  '../../../Containers/Organisms/TodoItemList/TodoItemList'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">このHeaderはなんも意味ないよ</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <a className="mdl-navigation__link" href="">Hey</a>
                            <a className="mdl-navigation__link" href="">YO</a>
                            <a className="mdl-navigation__link" href="">YO</a>
                            <a className="mdl-navigation__link" href="">！！！</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Title</span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main id="main" className="mdl-layout__content">
                    <div className="page-content">タスクを追加するんや
                         <OATMButton />
                        <TodoItemList />
                    </div>
                </main>
            </div>
        )
    }
}

export default Header;