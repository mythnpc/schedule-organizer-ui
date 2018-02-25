import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import StateButton from '../components/StateButton';


class AttendanceTable extends Component {
    render() {
        const styles = {
            equalWidth: {
                width: '20%',
                textAlign: 'center',
                padding: '1px'
            },
            td: {
                padding: "1px",
                textAlign: "center"
            }
        }
        return (
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
                    {this.props.attendanceData.map(x => {
                        return (
                            <TableRow key={x.id}>
                                <TableCell style={styles.td}>{x.playerName}</TableCell>
                                <TableCell style={styles.td}><StateButton onClick={this.props.stateButtonOnClick} val={x} dungeon="fireDragonHardMode"></StateButton></TableCell>
                                <TableCell style={styles.td}><StateButton onClick={this.props.stateButtonOnClick} val={x} dungeon="iceDragonHardMode"></StateButton></TableCell>
                                <TableCell style={styles.td}><StateButton onClick={this.props.stateButtonOnClick} val={x} dungeon="poisonDragonHardMode"></StateButton></TableCell>
                                <TableCell style={styles.td}><StateButton onClick={this.props.stateButtonOnClick} val={x} dungeon="blackDragonHardMode"></StateButton></TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        )
    }
}

AttendanceTable.propTypes = {
    attendanceData: PropTypes.array.isRequired,
    stateButtonOnClick: PropTypes.func.isRequired
}

export default AttendanceTable;