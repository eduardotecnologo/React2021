import React, { Component } from 'react';
import InputEditable from './InputEditable';
import Card from './Card';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = this.props.cards.map(card =>(
      <Card
        key= { card.id }>
        <InputEditable
          id={ card.id }
          edit={ card.edit }
          text={ card.text }
          clickToEdit= { this.props.clickToEdit }
          />
      </Card>
    ))
    return (
      <ul>
        { cards }
      </ul>
    )
  }
}

export default Cards;