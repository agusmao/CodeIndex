import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FlatButton,TextField} from 'material-ui'
import { Grid, Col, Row } from 'react-flexbox-grid'
import ScriptList from '../../dumbs/ScriptList'
import ScriptDetailsModal from '../../smarts/scriptDetailsModal'
import ListActionBar from '../../dumbs/ListActionBar'
import Highlight from 'react-highlight'
import {doFecthScripts} from '../../../actions/scripts'
import t from 'highlight.js/styles/androidstudio.css'
import './styles.css'

class Home extends Component {

  /**
   * Life cycle
   */

  componentWillMount() {
    this.bindedHandleSearch   = this.handleSearch.bind(this)
    this.bindedOnAddTapped    = this.onAddTapped.bind(this)
    this.bindedHandleAddClose = this.handleAddClose.bind(this)

    this.state = {
      scriptList: [],
      filteredScriptList: [],
      currentScript: {language: '', code: ''},
      searchText: '',
      shouldShowScriptModal : false
    }

    this.fetchScripts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scripts) {
      this.setState( state => (
        {...state, 
          scriptList: nextProps.scripts, 
          filteredScriptList: nextProps.scripts
        }
      ) )
    }
  }

  /**
   * Methods
   */

  fetchScripts() {
    this.props.doFecthScripts()
  }

  onScriptSelected(script) {
    this.setState( state => ({...state, currentScript: script}) )
  }

  handleSearch(event) {
    let searchText = event.target.value

    // Search for tags with these words
    let filteredScripts
    if (searchText && searchText !== '') {
      filteredScripts = this.state.scriptList.filter( el => {
        return el.tags.includes(searchText)
      } )
    } else {
      filteredScripts = this.state.scriptList
    }
    

    this.setState( state => (
      {...state, 
        searchText: searchText,
        filteredScriptList: filteredScripts
      }) )
  }

  onAddTapped() {
    this.setState( state => ({...state, shouldShowScriptModal: true}) )
  }

  handleAddClose() {
    this.setState( state => ({...state, shouldShowScriptModal: false}) )
  }

  /**
   * Render
   */

  render() {
    let scriptModal
    if (this.state.shouldShowScriptModal) {
      scriptModal = (
        <ScriptDetailsModal
          handleClose={this.bindedHandleAddClose}
        />
      )
    } 
    return (
      <div>
        {scriptModal}
        <Grid style={{width: '100wh', height: '100vh'}}>
          <Row className="homeSearchBar">
            <TextField 
              hintText={"Search"}
              value={this.state.searchText}
              onChange={this.bindedHandleSearch}
              fullWidth={true}
            />
          </Row>
          <Row >
            <Col xs={3} style={{display: 'flex', 'flex-direction': 'column', 'background-color': '#CCC', height: '90vh'}}>
              <ScriptList 
                scripts={this.state.filteredScriptList}
                onScriptSelected={this.onScriptSelected.bind(this)}
              />
              <ListActionBar 
                onAddTapped={this.bindedOnAddTapped}
              />
            </Col>
            <Col xs={9}>
              <Highlight className={`${this.state.currentScript.language} homeCodeArea`}>
                {this.state.currentScript.code}
              </Highlight>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

/**
 * Some mapping
 */

const mapStateToProps = state => ({
  user            : state.login.user,
  scripts         : state.scripts.scripts,
  isLoading       : state.scripts.isLoading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  doFecthScripts,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
