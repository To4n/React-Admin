import React, {useEffect} from 'react'
import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import TopNav from '../topnav/TopNav'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/themeAction'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Layout = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode', 'color-mode-light')

        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <Router>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
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
