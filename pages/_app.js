import React from 'react';
import App, { Container } from 'next/app';
import { withStyles } from '@material-ui/core';
import theme from "./components/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { styles } from './components/styles';
import Head from 'next/head';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
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