import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{

    render(){
        return(
            <Grid>
                <Cell col={3}>
                    <p> <u>{this.props.startYear} - {this.props.endYear}</u></p>
                </Cell>
                <Cell col = {9}>
                    <h4 style = {{marginTop:'0px', textAlign:'justify'}}>{this.props.jobName}</h4>
                    <p style = {{textAlign:'justify'}}>{this.props.jobDescription}</p>
                    <p style = {{textAlign:'justify'}}>{this.props.jobDescription2}</p>

                </Cell>
            </Grid>
        )
    }
}

export default Experience;