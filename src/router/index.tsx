import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import routes from './router'
import './App.css'

export default function App() {
    return (
        <Router>
            <ul>
                {routes.map((route, index) => {
                    return (
                        <li>
                            <Link to={route.path}>{route.component.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <Switch>
                {routes.map((route, index) => {
                    return (
                        <Route path={route.path}>
                            <route.component />
                        </Route>
                    )
                })}
            </Switch>
        </Router>
    )
}
