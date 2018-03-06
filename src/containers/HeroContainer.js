import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { fetchHeroes } from '../actions/heroAction'
import { bindActionCreators } from 'redux';
import { withStyles } from 'material-ui/styles';
import moment from 'moment'

import Paper from 'material-ui/Paper';
import HeroCard from '../components/HeroCard';
import TextField from 'material-ui/TextField';
import '../containers/HeroContainer.css';
import Navbar from '../components/Navbar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';


import _ from 'lodash';

class HeroContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            selectedClass: ""
        }
    }

    componentWillMount() {
        this.props.fetchHeroes();
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ heroes: nextProps.heroes });
    }

    handleTextChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const styles = {
            app: {
                padding: "20px",
            }
        }

        let heroes = this.state.heroes ? this.state.heroes : [];
        heroes = heroes.filter(x => x.class === this.state.selectedClass);

        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="classFilter"
                        label="Class"
                        margin="normal"
                        value={this.state.selectedClass}
                        onChange={this.handleTextChange('selectedClass')}
                    />
                </form>
                {heroes.map(x => {
                    return (
                        <ReactTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnter={true}
                            transitionEnterTimeout={500}
                            transitionLeave={true}
                            transitionLeaveTimeout={300}>
                            <HeroCard name={x.name}></HeroCard>
                        </ReactTransitionGroup>
                    );
                })}
            </div>
        );
    }
}

HeroContainer.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.hero.heroes,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchHeroes: fetchHeroes }, dispatch);
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroContainer))