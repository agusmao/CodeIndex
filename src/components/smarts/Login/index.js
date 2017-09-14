import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {TextField, FlatButton} from 'material-ui'
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
      passwordText : ''
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

  /**
   * Render
   */

  render() {
    return (
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
    )
  }
}

/**
 * Some mapping
 */

const mapStateToProps = state => ({
  isLoading       : state.login.isLoading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  doLogin,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)