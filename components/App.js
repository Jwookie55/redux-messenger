import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header.js';
import Display from './Display.js';
import * as actions from '../actions/MessageActions.js';

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props)
    this.props.FetchMessagesActionCreator();
  }

  render() {
    return (
      <div>
        <Header/>
        <Display messages={this.props.messages} newMess={this.props.postMessageActionCreator}/>
      </div>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);