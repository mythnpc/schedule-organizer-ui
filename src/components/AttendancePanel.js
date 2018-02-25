import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import TextField from 'material-ui/TextField';
import moment from 'moment';

class AttendancePanel extends Component {
    render() {
        const styles = {
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
        };

        return (

            <div style={styles.tableTitleContainer}>
                <div style={styles.tableTitle}>
                    <div>Dungeon Attendance</div>
                </div>

                <div style={styles.dateControllerContainer} className="dateControllerContainer">
                    <IconButton onClick={this.props.leftArrowOnClick}>
                        <KeyboardArrowLeft />
                    </IconButton>
                    <TextField
                        id="text-field-default"
                        value={this.props.formattedDate}
                    />
                    <IconButton onClick={this.props.rightArrowOnClick}>
                        <KeyboardArrowRight />
                    </IconButton>
                </div>
            </div>
        )
    }
}

AttendancePanel.propTypes = {}

export default AttendancePanel;