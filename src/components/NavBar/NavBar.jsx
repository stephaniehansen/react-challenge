import React, { Component } from "react";
import styles from "./NavBar.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
    state = {
        isOpen: false
    }

    toggleNav = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    menu = () => {
        return this.state.isOpen ? <ul><li>Link 1</li><li>Link 2</li></ul> : null;
    }

    render() {
        const menuIcon = this.state.isOpen ? "times" : "bars";
        return (
            <nav>
                {this.menu()}
                <span onClick={this.toggleNav}>
                    <FontAwesomeIcon icon={menuIcon}/>
                </span>
            </nav>
        );
    }
}

export default NavBar;