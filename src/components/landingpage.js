import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl'
import '../App.css'

class LandingPage extends Component {

    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src={require('./avatar.png')}
                        alt="fireSpot"
                        className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1> Curriculum Inês Moreira</h1>
                            <hr/>
                            <h2>Digital CV</h2>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;