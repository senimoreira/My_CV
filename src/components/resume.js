import React, {Component} from 'react';
import '../Resume.css';
import Education from './education.js';
import Experience from './experience.js';
import Skills from './skills.js';

import {Grid, Cell} from 'react-mdl';

class Resume extends Component {

    render(){
        return(
            <Grid>
                <Cell className = "" col={4}>
                    <div style = {{textAlign: 'center'}}>
                        <img
                        src={require('./avatar.png')}
                        alt="fireSpot"
                        style ={{height: '300px', borderRadius:'10px'}}
                        >
                        </img>

                    </div>
                    <h2 style = {{textAlign:'center'}}>Inês Moreira</h2>
                    <h4 style = {{color: 'grey', padding:'1em', textAlign:'center'}}>Electrothecnical and Computer Engineering</h4>
                    <div className = "dots"></div>
                    <p style = {{fontFamily: 'Times New Roma', fontSize:'20px', padding:'1em', textAlign:'justify'}}>My name is Inês Moreira and I’m a fourth year student of Electrical and Computer Engineering in Instituto Superior Técnico. I am an ambitious and hard work person who loves to learn, serch and read about new things. </p>
                    <div className = "dots"></div>
                    <h5 className = "class">Adress</h5>
                    <p style = {{fontFamily: 'Times New Roma', fontSize:'18px', paddingLeft:'1em', weigth:'60%'}}>Rua Engenheiro Adão Manuel Ramos Barata, Nº11, 3ºdto, Camarate</p>
                    <h5 className = "class">Phone Number</h5>
                    <p style = {{fontFamily: 'Times New Roma', fontSize:'18px', paddingLeft:'1em', weigth:'60%'}}> +351 911 540 306</p>
                    <h5 className = "class">Email</h5>
                    <p style = {{fontFamily: 'Times New Roma', fontSize:'18px', paddingLeft:'1em', weigth:'60%'}}>seni.moreira@hotmail.com</p>
                    <div className = "dots"></div>
                </Cell> 

                <Cell className = "resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear = {2013}
                    endYear = {2016}
                    schoolName = "Colégio Bartolomeu Dias"
                    schoolDescription = "Highschool in Science and Technology course with a ﬁnal score of 17"/>

                    <Education
                    startYear = {2008}
                    endYear = {2013}
                    schoolName = "Colégio Cesário Verde"
                    schoolDescription = "5th - 9th grade" 
                    />    
                    
                    <hr style = {{borderTop: '2px solid #e22947'}}></hr>
                    <h2>Work Experience</h2>   
                    <Experience
                    startYear = "8th of July 2019"
                    endYear = "12th of July 2019"
                    jobName = "Verão na ULisboa"
                    jobDescription = "During the summer of 2019, I won a schoolarship where my main goal was to show, to children around 14 years old, what is like to study engineering in Instituto Superior Técnico. I help them to know more about the different areas in engineering that they can work in, by making some experiments with them."
                    jobDescription2 =  "I was also responsible for keeping the kids safe and having fun during the all week of activities. "/>
                    
                    <Experience
                    startYear = "Nov 2018"
                    endYear = "Present"
                    jobName = "Computer Room and Department of Electrical and Computer Engeneering"
                    jobDescription = " I was awarded a schoolarship as a monitor in a study room of Instituto Superior Técnico, where I am responsible for keeping the room organised as it receives over 150 students per day;"
                    jobDescription2 = "Furthermore, it is my duty to help students and teachers during laboratories with any technical problem they have."/>
                    
                    <Experience
                    startYear = "15th of Feb. of 2019"
                    endYear = "17th of Feb. of 2019"
                    jobName = "TecStorm"
                    jobDescription = "I was chosen, on a national level, to participate in TecStorm. TecStorm was a straight 28 hours competition that took place in Pavilhão do Conhecimento, where me and my team had to develop a prototype and present it to a panel of judges along with a business pitch;"
                    jobDescription2 = "I was responsible for developing a website which received, through a database, information about health parameters such as heartbeat values, oxygenation levels and glucose levels. I was also responsible for developing the pitch where I introduced how our prototype was developed during the competition and show the judges how it could be introduced into the real world."/>

                    <Experience
                    startYear = "March of 2019"
                    endYear = "March of 2019"
                    jobName = "Volunteer in Electrotechnical and Computer Engineer Journeys"
                    jobDescription = "During the journeys, I was responsible to help the companies which were participating in the event with any problem (technical or not) that they had. I should also help the 300 students that were visiting the journeys daily with any question about the event."/>
                    
                    <Experience
                    startYear = "Sept. of 2019"
                    endYear = "Present"
                    jobName = "Private Tutor"
                    jobDescription = "I give one-on-one lessons to students in middle and higschool about subjects such as Maths, Physics and Chemisty. My main goal is to improve their academic performance by motivating them and explain to them the subject that they might be struggling with;"
                    jobDescription2 = "I addapt the method of teaching to the characteristics of the student, presenting them with different problems to solve and different material according to their prefered method of learning."/>

                   
                    <hr style = {{borderTop: '2px solid #c31432'}}></hr>

                    <h2> Skills </h2>
                    <Skills 
                    skill = "C language"
                    progress = {90}/>
                    <Skills 
                    skill = "MATLAB"
                    progress = {95}/>
                    <Skills 
                    skill = "CSS/HTML"
                    progress = {90}/>
                    <Skills 
                    skill = "React"
                    progress = {90}/> 
                    <Skills 
                    skill = "Django"
                    progress = {85}/> 
                </Cell>

            </Grid>
        )
    }
}

export default Resume;