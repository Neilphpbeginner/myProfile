import React from 'react';
import App, { Container } from 'next/app';
import { withStyles } from '@material-ui/core';

import theme from "./components/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { styles } from './components/styles';

class MyApp extends App {


    render() {
        const { Component } = this.props;

        return (
            <Container>
                <MuiThemeProvider theme={theme}>
                    <Component />
                </MuiThemeProvider>
            </Container>
        );
    }
}

export default withStyles(styles)(MyApp);