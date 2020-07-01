import React, { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {

    state = {
        showInfo: false
    }

    toggleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    getInfo = (title, description) => {
        return this.state.showInfo ? <div className={styles.show}><h3>{title}</h3><p>{description}</p></div> : "";
    }

    render() {
        const { url, title, description } = this.props.data;
        return (
            <section className={styles.card}>
                <img src={url + `/300/300`} alt={title} onClick={this.toggleInfo}/>
                {this.getInfo(title, description)}
            </section>
        );
    }
}

export default Card;




    // getInfoClass = () => {
    //     return this.state.showInfo ? styles.show : styles.hide;
    // }