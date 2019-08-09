import React from 'react'
import './Loading.scss'
var Loader = require('react-loaders').Loader;

const Loading = props =>
    <div className="loading">
        <Loader type="ball-pulse-sync" active/>
    </div>

export default Loading