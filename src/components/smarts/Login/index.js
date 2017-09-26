import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {TextField, FlatButton, Dialog} from 'material-ui'
import {doLogin} from '../../../actions/login'

class Login extends Component {

  /**
   * Life cycle
   */

  componentWillMount() {
    this.bindedHandleEmailTyped    = this.handleEmailTyped.bind(this)
    this.bindedHandlePasswordTyped = this.handlePasswordTyped.bind(this)
    this.bindedOnLoginClick        = this.onLoginClick.bind(this)

    this.state = {
      emailText    : '',
      passwordText : '',
      alert        : {
        show  : false,
        title : null
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errorMessage) {
      this.setState( state => ({
        ...state, 
        alert: {
          show  : true,
          title : nextProps.errorMessage
        }
      }) )
    }
  }

  /**
   * Methods
   */

  onLoginClick(event) {
    this.props.doLogin(this.state.emailText, this.state.passwordText)
  }

  handleEmailTyped(event) {
    let email = event.target.value
    this.setState( state => ({...state, emailText: email}) )
  }

  handlePasswordTyped(event) {
    let pass = event.target.value
    this.setState( state => ({...state, passwordText: pass}) )
  }

  onDismissDialog = () => {
    this.setState( state => ({
      ...state, 
      alert: {
        show  : false,
        title : null
      }
    }) )
  }

  /**
   * Render
   */

  render() {
    const dialogActions = [
      <FlatButton
        label="OK"
        onClick={this.onDismissDialog}
      />
    ]

    return (
      <div>
        <form onSubmit={this.bindedOnLoginClick}>
          <TextField 
            value={this.state.emailText}
            onChange={this.bindedHandleEmailTyped}
            hintText="E-mail"
            type="e-mail"
          />
          <TextField 
            value={this.state.passwordText}
            onChange={this.bindedHandlePasswordTyped}
            hintText="Password"
            type="password"
          />
          <FlatButton
            label="Enter"
            onClick={ this.bindedOnLoginClick }
          />
        </form>
        <Dialog
          open={this.state.alert.show}
          title={this.state.alert.title}
          actions={dialogActions}
        />
      </div>
    )
  }
}

/**
 * Some mapping
 */

const mapStateToProps = state => ({
  isLoading       : state.login.isLoading,
  errorMessage    : state.login.errorMessage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  doLogin,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)