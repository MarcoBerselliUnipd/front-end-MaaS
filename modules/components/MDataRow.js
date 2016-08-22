import React, { Component, PropTypes } from 'react'
import * as actions from '../actions/RootAction'
import MButton from './MButton'

class MDataRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { store } = this.context
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.tag}</td>
        <td><MButton label = "X"
          onClick = {() => {
            store.dispatch(actions.deleteData(this.props.data.id))
        }}/></td>
      </tr>
    )
  }
}

MDataRow.contextTypes = {
  store : React.PropTypes.object
}

export default MDataRow
