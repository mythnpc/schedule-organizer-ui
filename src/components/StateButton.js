import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"

class StateButton extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const styles = {
      buttonColor: {
        backgroundColor: this.props.val[this.props.dungeon] ? "lightgreen" : "pink",
      },
    };

    return (
      <Button style={styles.buttonColor} className="button" onClick={() => {this.props.onClick(this.props.val)}}>{this.props.val[this.props.dungeon] ? "Complete" : "Just do it!"}</Button>
    );
  }
}


export default StateButton;