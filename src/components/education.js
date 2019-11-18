import React,  {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component{

    render(){
        return(
            <Grid>
                <Cell col = {3}  >
                    <p> <u>{this.props.startYear} - {this.props.endYear}</u></p>
                </Cell>
                <Cell col = {9}> 
                    <h4  style = {{marginTop: '0px'}}> {this.props.schoolName}</h4>
                    <p> {this.props.schoolDescription} </p>

                </Cell>
            </Grid>

        )  

        
    }

}

export default Education;

