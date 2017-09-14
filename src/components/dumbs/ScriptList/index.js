import React, { Component } from 'react';
import {push} from "react-router-redux";
import ScriptGridTile from '../ScriptGridTile'
import { Grid, Col, Row } from 'react-flexbox-grid'

class ScriptList extends Component {

  /**
   * Life cycle
   */

  componentWillMount() {
    this.state = {
      selectedTile : null
    }
  }

  componentWillReceiveProps(nextProps) {
    // TODO: uncomment when parent starts deciding who is selected
    // if (nextProps.scripts && nextProps.scripts.length > 0) {
      // if (nextProps.selectedTile) {
      //   // TODO: check if tile still exists
      //   this.setState( state => ({...state, selectedTile: nextProps.selectedTile}) )
      // } else {
      //   // Set the first
      //   this.setState( state => ({...state, selectedTile: nextProps.scripts[0].key}) )
      // }
    // }
  }

  /**
   * Methods
   */

   onTileSelected(script) {
    if (this.props.onScriptSelected) {
      this.props.onScriptSelected(script)
    }

    this.setState( state => ({...state, selectedTile: script.key}) )
   }

  /** 
   * Render
   */

  render() {
    return (
      <div className="col" style={{
        flex: '1 1 auto',
        'overflow-y': 'auto',
        'min-height': '400px'
        }}>
        {this.props.scripts.map( el => {
          return (
            <Row key={el.key}>
              <ScriptGridTile
                onSelected={() => {this.onTileSelected(el)} }
                isSelected={(this.state.selectedTile === el.key)}
                name={el.title}
                description={el.description}
              />
            </Row>
          )
        })}
      </div>
    )
  }
}

export default ScriptList;
