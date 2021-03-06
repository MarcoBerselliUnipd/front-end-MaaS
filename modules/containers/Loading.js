/*
* Name : Loading.js
* Location : ./modules/containers/
*
* History :
*
* Version         Date           Programmer
* =================================================
* 0.1.0           2016-08-10  Roberto D'Amico
* -------------------------------------------------
* Codifica modulo
* =================================================
*/
import React, { Component, PropTypes } from 'react'
import * as actions from '../actions/RootAction'
import PageBuilder from '../services/PageBuilder'

class Loading extends Component {
  constructor(props) {
    super(props)
    this.ready = false;
    this.fetching = false;
  }

  render() {
    const { store } = this.context
    let build = undefined
    if(!this.fetching){
      this.fetching = true;
      store.dispatch(actions.getDSLI(this.props.location.query.ID))
        .then(() => {
          this.ready = true;
          console.log("DONE");
          store.dispatch(actions.refresh());
        });
    }
    if(this.ready){
      build = <PageBuilder location = {this.props.location} dsli = {store.getState().currentDSLI}/>
      return <div>{build}</div>
    }
    else
      return <div>Caricando la DSLI ...</div>
  }
}

Loading.contextTypes = {
  store : React.PropTypes.object
}

export default Loading
