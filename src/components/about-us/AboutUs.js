import React from 'react';
import './AboutUs.css';
import { Route, Link, useRouteMatch } from "react-router-dom";
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';

function AboutUs() {
    const { path, url } = useRouteMatch();
    return (
        <div className="about-us">
            <ul>
                <li>
                    <Link to={`${url}/site-history`}>История сайта</Link>
                </li>
                <li>
                    <Link to={`${url}/site-mission`}>Миссия сайта</Link>
                </li>
            </ul>
            <Route path={`${path}/site-history`}>
                <SiteMission />
            </Route>
            <Route path={`${path}/site-mission`}>
                <SiteHistory />
            </Route>
        </div>
    )
}

export default AboutUs;