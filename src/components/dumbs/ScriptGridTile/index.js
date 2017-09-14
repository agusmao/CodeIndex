import React, { Component } from 'react';
import {push} from "react-router-redux";
// import {GridList, GridTile} from 'material-ui/GridList';

class ScriptGridTile extends Component {

  /**
   * Vars
   */

  hoverBackgroudColor = '#999'
  selectedBackgroundColor = '#777'

  /**
   * Life cycle
   */

  componentWillMount() {
    this.state = {
      isHover : false,
      backgroundColor: ''
    }
  }

  componentWillReceiveProps( nextProps ) {
    if (nextProps.isSelected) {
      this.setState( state => (
        {...state, 
          isHover: false,
          isSelected: true,
          backgroundColor: this.selectedBackgroundColor
        }) 
      )
    } else {
      this.setState( state => (
        {...state, 
          isHover: false,
          isSelected: false,
          backgroundColor: ''
        }) 
      )
    }
  }

  /**
   * Methods
   */

  onHover() {
    this.setState( state => (
      {...state, 
        isHover: true,
        backgroundColor: (state.isSelected ? state.backgroundColor : this.hoverBackgroudColor)
      }) 
    )
  }

  onMouseLeave() {
    this.setState( state => (
      {...state, 
        isHover: false,
        backgroundColor: (state.isSelected ? state.backgroundColor : '')
      }) 
    )
  }

  onSelected() {
    if(this.props.onSelected) {
      this.props.onSelected()
    }
  }

  render() {
    return (
      <div style={{backgroundColor: this.state.backgroundColor}} 
        onMouseOver={ ev => { this.onHover()}} 
        onMouseLeave={ ev => { this.onMouseLeave()}} 
        onClick={ ev => { this.onSelected() } }
        >
          <strong>{this.props.name}</strong> <br />
          <p>{this.props.description}</p> <br />
      </div>
    )
  }
}

export default ScriptGridTile;
