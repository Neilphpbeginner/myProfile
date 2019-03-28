import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { withStyles } from '@material-ui/core';
import { styles } from './components/styles';
import Home from './Home';

class index extends Component {
    render() {
        return (
            <div>
               <Home/>
            </div>
        );
    }
}

export default withStyles(styles)(index);