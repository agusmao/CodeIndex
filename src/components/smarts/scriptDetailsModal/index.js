import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addScript} from '../../../services/scriptService'
import {Dialog, TextField, FlatButton} from 'material-ui'

class ScriptDetailsModal extends Component {

  /**
   * Life cycle
   */

  componentWillMount() {
    this.bindedHandleClose    = this.handleClose.bind(this)
    this.bindedHandleAddClick = this.handleAddClick.bind(this)

    this.state = {
      emailText    : '',
      passwordText : ''
    }
  }

  /**
   * Methods
   */

  handleClose() {
    if(this.props.handleClose) {
        this.props.handleClose()
    }
  }

  handleAddClick = () => {
    // TODO: validate fields

    let title       = this.titleInput.value
    let description = this.descriptionInput.value
    let tags        = this.tagsInput.value
    let language    = this.languageInput.value
    let code        = this.codeInput.value

    if (title === '' 
      || description === ''
      || tags === ''
      || language === ''
      || code === ''
    ) {
      // TODO: error
      console.log('Wrong')
      return
    }

    // this.props.
    addScript(title, description, tags, language, code)
      .subscribe(
        (next) => {

        },
        (error) => {

        },
        () => {
          if(this.props.handleClose) {
            this.props.handleClose()
          }
        }
      )
  }

  /**
   * Render
   */

    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.bindedHandleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.bindedHandleAddClick}
        />,
      ];
      return (
        <Dialog
          title="Create/Edit Script"
          actions={actions}
          modal={true}
          open={true}
          onRequestClose={this.bindedHandleClose}
        >
          <TextField 
            ref={(input) => { this.titleInput = input.input }}
            textareaStyle={{backgroundColor: '#EEE'}}
            fullWidth={true}
            floatingLabelText="Title"
          />
          <TextField 
            ref={(input) => { this.descriptionInput = input.input }}
            textareaStyle={{backgroundColor: '#EEE'}}
            fullWidth={true}
            floatingLabelText="Description"
          />
          <TextField 
            ref={(input) => { this.tagsInput = input.input }}
            textareaStyle={{backgroundColor: '#EEE'}}
            fullWidth={true}
            floatingLabelText="Tags"
          />
          <TextField 
            ref={(input) => { this.languageInput = input.input }}
            textareaStyle={{backgroundColor: '#EEE'}}
            fullWidth={true}
            floatingLabelText="Language"
          />
          <TextField 
            ref={(input) => { this.codeInput = input.input.refs.input }}
            textareaStyle={{backgroundColor: '#EEE'}}
            fullWidth={true}
            multiLine={true}
            rows={10}
            floatingLabelText="Code"
          />
        </Dialog>
    )
  }
}

/**
 * Some mapping
 */

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addScript
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScriptDetailsModal)