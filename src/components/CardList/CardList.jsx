import React, { Component } from "react";
import styles from "./CardList.module.scss"
import Card from "../../components/Card";
import data from "../../data/data"; 

class CardList extends Component {
  render() {
    return (
      <section className={styles.cardList}>
        {data.map(item => {
            return <Card data={item} />
          })}
      </section>
    );

  }
}

export default CardList;
