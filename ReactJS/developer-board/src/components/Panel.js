import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import { connect } from 'react-redux';
import CardActions from '../actions/CardActions';

class Panel extends Component {
  static propTypes = {
    createCard: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.handleCreateCard = this.handleCreateCard.bind(this);
  }
  handleCreateCard(){
    this.props.createCard()
  }

  render() {
    const { cards } = this.props
    //console.log(cards)
    return(
      <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2>Meu painel</h2>
          </div>
          <div className="panel-body">
            <Cards
              cards={ cards }
              clickToEdit={ this.props.editCard }
            />
          </div>
          <div className="panel-footer">
            <button className="btn btn-primary" onClick={this.handleCreateCard}>
              <i className="ion-plus-round">  Card</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createCard: () => dispatch(CardActions.createCard()),
    editCard: (id) =>{
      const edited = { id, edit: true }
      dispatch(CardActions.editCard(edited))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Panel);