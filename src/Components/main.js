import React from 'react'
import landingPage from './landingPage'
import contact from './contact'
import { Switch, Route } from 'react-router-dom'


const Main = () =>(
    <Switch>
        <Route exact path='/' component={landingPage} />
        <Route exact path='/contact' component={contact} />
    </Switch>
)

export default Main