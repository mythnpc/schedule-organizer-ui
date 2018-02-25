import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { fetchAttendance, updateAttendance, updateSelectedSeason } from '../actions/attendanceActions'
import { fetchSeason } from '../actions/seasonActions'
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import moment from 'moment'

import Paper from 'material-ui/Paper';


import Navbar from '../components/Navbar';
import AttendancePanel from '../components/AttendancePanel';
import AttendanceTable from '../components/AttendanceTable';


import _ from 'lodash';

class AttendanceContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns: [{
                dataField: 'playerName',
                text: 'Player Name',
            }],
            attendance: this.props.attendance,
            seasons: this.props.season,
        }
    }

    componentWillMount() {
        this.props.fetchAttendance();
        this.props.fetchSeason();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ attendance: nextProps.attendance })
        this.setState({ season: nextProps.season })
    }

    getSeasonDetail(seasonId) {
        let seasonDetail = _.find(this.state.season, x => x.id === seasonId);
        return seasonDetail;
    }

    processAttendance(attendance, selectedSeason) {
        let filteredAttendance = _.filter(attendance, x => x.seasonId === selectedSeason);
        return filteredAttendance;
    }

    stateButtonOnClick(value, dungeon) {
        value[dungeon] = !value[dungeon];
        this.updateAttendance(value);
    }

    render() {
        const styles = {
            app: {
                padding: "20px",
            }
        }

        const selectedSeasonDetail = this.getSeasonDetail(this.props.selectedSeason);
        const startDate = selectedSeasonDetail ? selectedSeasonDetail.start : null;
        const formattedDate = moment(new Date(startDate)).format('LL');
        const attendance = this.state.attendance;
        return (

            <div style={styles.app} className="App">
                <Paper>
                    <AttendancePanel formattedDate={formattedDate} leftArrowOnClick={() => this.props.updateSelectedSeason(this.props.selectedSeason, this.props.selectedSeason - 1)} rightArrowOnClick={() => this.props.updateSelectedSeason(this.props.selectedSeason, this.props.selectedSeason + 1)} />
                    <AttendanceTable attendanceData={this.processAttendance(this.state.attendance, this.props.selectedSeason)} stateButtonOnClick={this.stateButtonOnClick} />
                </Paper>
            </div>

        );
    }
}

AttendanceContainer.propTypes = {
    name: PropTypes.string.isRequired,
    attendance: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.attendance.name,
        attendance: state.attendance.attendance,
        season: state.season.season,
        selectedSeason: state.attendance.selectedSeason
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAttendance: fetchAttendance, updateAttendance: updateAttendance, fetchSeason: fetchSeason, updateSelectedSeason: updateSelectedSeason }, dispatch);
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AttendanceContainer))