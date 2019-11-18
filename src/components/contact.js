import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import "../contact.css";

class Contact extends Component {

    render(){
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <h2>Inês Moreira</h2>
                        <img
                         src={require('./avatar.png')}
                         alt="fireSpot"
                        style ={{height: '200px', borderRadius:'10px'}}
                        >
                        </img>
                        <p style = {{margin:'auto', width:'50%', paddingTop:'1em', justifyContent:'center'}}>
                            I can be contacted by mobile phone or by email  
                        </p>
                    </Cell>
                    <Cell col = {6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className = "contact-list">
                        <List>
                            <ListItem >
                                <ListItemContent className = "general-css" icon="phone" style={{fontSize:'20px', height:'30px'}} >
                                  <u>Phone Numer</u>: (+351) 911 540 306
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent className = "general-css" icon="email" style={{fontSize:'20px'}} >
                                <u>Email</u>: seni.moreira@hotmail.com
                            </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent className = "general-css" icon="email" style={{fontSize:'20px', textAlign:'left'}} >
                                <u>Email</u>: ines.c.moreira@tecnico.ulisboa.pt
                            </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;