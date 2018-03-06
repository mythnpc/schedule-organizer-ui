import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';
class HeroCard extends Component {

    componentWillLeave(callback){
        var a = 15;
        var b = a;
        console.log("Leave");
    }

    componentDidLeave(){
        var a = 15;
        var b = a;
        console.log("Leave");
    }

    componentWillAppear(callback){
        console.log("Appear");
    }

    componentWillEnter(callback){
        console.log("Enter");
    }
    componentDidAppear(){
        console.log("APPEAR");
    }

    render() {
        const styles = {
        }
        let jpgFile = require('../assets/images/'+ this.props.name + '.png');
        
        return (
            <Grid item sm={12} md={4} lg={3} style={{ display: "inline-block"}}>
                <Card style={{ margin: 20, maxWidth: "100%", float: "left" }}>
                    <Grid item sm={12} md={5} style={{float:"left", padding: "15px 5px 5px 15px"}}>
                        <img style={{ maxWidth: "100%"}} src={jpgFile} />
                    </Grid>
                    <Grid item sm={12} md={7} style={{float:"left"}}>
                        <CardContent style={{ maxWidth: "100%", padding:5 }}>
                            <Typography variant="headline" component="h2">{this.props.name}</Typography>
                            <Chip style={{ margin: 2 }} label="PVP" />
                            <Chip style={{ margin: 2 }} label="BDHM" />
                            <Chip style={{ margin: 2 }} label="PDHM" />
                        </CardContent>
                    </Grid>
                    <Grid item sm={12} md={12}>

                        <CardActions style={{ clear: "both" }}>
                            <Button size="small" color="primary">Details</Button>
                        </CardActions>
                    </Grid>
                </Card>
            </Grid>
        )
    }
}

HeroCard.propTypes = {
}

export default HeroCard;