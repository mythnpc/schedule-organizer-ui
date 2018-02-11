import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { fetchAttendance, changeName } from '../actions/attendanceActions'
import { fetchSeason } from '../actions/seasonActions'
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import moment from 'moment'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import StateButton from './StateButton';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

import Navbar from '../components/Navbar';

import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [{ playerName: "HEKASD" }],
      columns: [{
        dataField: 'playerName',
        text: 'Player Name',
      }],
      options: {
        onRowClick: function (row) {
          console.log(row);
        }
      },
      attendance: this.props.attendance,
      seasons: this.props.season,
      selectedSeason: 1
    }
  }

  componentWillMount() {
    this.props.changeName("JOSH");
    this.props.fetchAttendance();
    this.props.fetchSeason();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ attendance: nextProps.attendance })
    this.setState({ season: nextProps.season })
  }

  getSeasonDetail(seasonId){
    let seasonDetail = _.find(this.state.season, x=> x.id === seasonId);
    return seasonDetail;
  }

  processAttendance(attendance, selectedSeason) {
    let filteredAttendance = _.filter(attendance, x => x.seasonId === selectedSeason);
    return filteredAttendance;
  }

  stateButtonOnClick(key){
    console.log(key);
  }

  render() {
    // const attendance = this.props.attendance;
    const styles = {
      app: {
        padding: "20px",
      },
      table: {
        minWidth: 700,
      },
      button: {
        width: '100%'
      },
      equalWidth: {
        width: '20%',
        textAlign: 'center',
        padding: '1px'
      },
      td: {
        padding: "1px",
        textAlign: "center"
      },
      tableTitleContainer: {
        overflow: "auto",
        backgroundColor: "lightgrey"
      },
      dateControllerContainer: {
        float: "right"
      },
      tableTitle: {
        float: "left",
        padding: "15px"
      }
    }

    const classes = styles;
    const selectedSeasonDetail = this.getSeasonDetail(this.state.selectedSeason);
    const startDate = selectedSeasonDetail ? selectedSeasonDetail.start : null; 
    const formattedDate = moment(new Date(startDate)).format('LL');
    return (

      <div style={styles.app} className="App">
        <Paper>
          <div style={styles.tableTitleContainer}>
            <div style={styles.tableTitle}>
              <div>Dungeon Attendance</div>
            </div>

            <div style={styles.dateControllerContainer} className="dateControllerContainer">
              <IconButton onClick={() => { this.setState({ selectedSeason: 1 }) }}>
                <KeyboardArrowLeft />
              </IconButton>
              <TextField
                id="text-field-default"
                value={formattedDate}
              />
              <IconButton onClick={() => { this.setState({ selectedSeason: 2 }) }}>
                <KeyboardArrowRight />
              </IconButton>
            </div>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.equalWidth} className="header" numeric>Username</TableCell>
                <TableCell style={styles.equalWidth}>Fire Dragon HM</TableCell>
                <TableCell style={styles.equalWidth}>Ice Dragon HM</TableCell>
                <TableCell style={styles.equalWidth}>Poison Dragon HM</TableCell>
                <TableCell style={styles.equalWidth}>Black Dragon HM</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.processAttendance(this.state.attendance, this.state.selectedSeason).map(x => {
                return (
                  <TableRow key={x.id}>
                    <TableCell style={styles.td}>{x.playerName}</TableCell>
                    <TableCell style={styles.td}><StateButton onClick={this.stateButtonOnClick} val={x} dungeon="fireDragonHardMode"></StateButton></TableCell>
                    <TableCell style={styles.td}><StateButton onClick={this.stateButtonOnClick} val={x} dungeon="iceDragonHardMode"></StateButton></TableCell>
                    <TableCell style={styles.td}><StateButton onClick={this.stateButtonOnClick} val={x} dungeon="poisonDragonHardMode"></StateButton></TableCell>
                    <TableCell style={styles.td}><StateButton onClick={this.stateButtonOnClick} val={x} dungeon="blackDragonHardMode"></StateButton></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>

    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.

  return {
    name: state.attendance.name,
    attendance: state.attendance.attendance,
    season: state.season.season
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeName: changeName, fetchAttendance: fetchAttendance, fetchSeason: fetchSeason }, dispatch);
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))