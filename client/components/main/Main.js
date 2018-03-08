import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/Home'
import Shows from '../shows/Shows'

const Main=()=>(
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/shows' component={Shows}/>
        </Switch>
    </main>
)

export default Main;