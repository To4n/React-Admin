import React from 'react'
import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import TopNav from '../topnav/TopNav'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <Router>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )} />
        </Router>
    )
}

export default Layout
