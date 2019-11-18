import React from 'react';

import LandingPage from './landingpage'
import Projects from './projects'
import Contact from './contact'
import Resume from './resume'


import { Route, Switch} from 'react-router-dom'

const Main = () => (

    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/projects" component = {Projects} />
        <Route path = "/resume" component = {Resume} />
    </Switch>


)

export default Main;

