import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../../src/components/navbar.component";
import EditBook from "../../src/components/edit-book.component";
import CreateBook from "../../src/components/create-book.component";
import CreateUser from "../../src/components/search-author.component";
import CreateEtype from '../../src/components/create-exercisetype.component';
import GetBook from '../../src/components/getBook.component';

class MenuWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    render() {
        let style;

        if (this.state.hidden) {
            style = { display: 'none' };
        }

        return (
            <div style={style} className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
}

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'scaleRotate',
            side: 'left'
        };
    }
    getItems() {
        let items = [
            <Router>
                <NavBar />
                <br />
                    <Route path="/edit/:id" component={EditBook} />
                    <Route path="/create" component={CreateBook} />
                    <Route path="/user" component={CreateUser} />
                    <Route path="/etype" component={CreateEtype} />
                    <Route path="/stats" component={GetBook} />
            </Router>
        ];

        return items;
    }

    getMenu() {
        const Menu = BurgerMenu[this.state.currentMenu];

        return (
            <MenuWrap wait={20} side={this.state.side}>
                <Menu
                    id={this.state.currentMenu}
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                >
                    {this.getItems()}
                </Menu>
            </MenuWrap>
        );
    }

    render() {
        return (
            <div id="outer-container" style={{ height: '100%' }}>
                {this.getMenu()}
                <main id="page-wrap">
                    <h1>
                        LMS
                    </h1>
                </main>
            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));