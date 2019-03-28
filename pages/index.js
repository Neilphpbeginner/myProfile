import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { withStyles } from '@material-ui/core';
import { styles } from './components/styles';

class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

export default withStyles(styles)(index);