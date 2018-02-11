import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Grid from 'material-ui/Grid';
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = {
    root: {
    },
};

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div style={styles.root}>
                <AppBar position="static">
                    <div>
                        <Grid item xs={10}>
                            <Tabs value={value} onChange={this.handleChange}>
                                <Tab label="Attendance" onClick={() => { this.props.history.push('/') }}></Tab>
                                <Tab label="Member" onClick={() => { this.props.history.push('/new-location') }} />
                                <Tab label="Heroes" onClick={() => { this.props.history.push('/somewhere') }} />
                            </Tabs>
                        </Grid>
                    </div>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
})

SimpleTabs.propTypes = {
};

export default withRouter(connect(mapStateToProps, {
})(SimpleTabs))
