import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { updateAttendance } from '../actions/attendanceActions'
import { bindActionCreators } from 'redux';
class StateButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      buttonColor: {
        backgroundColor: this.props.val[this.props.dungeon] ? "lightgreen" : "pink",
        width: "100%"
      },
    };

    return (
      <Button style={styles.buttonColor} onClick={() => {this.props.onClick(this.props.val, this.props.dungeon)}}>{this.props.val[this.props.dungeon] ? "Complete" : "Just do it!"}</Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateAttendance: updateAttendance}, dispatch);
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StateButton))