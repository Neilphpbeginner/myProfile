import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./components/styles";
import Proptypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import NavBar from "./components/NavBar";
class Home extends Component {
    render() {

        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <Head>
                    <title>Neil Lemmer's Web Portfolio</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <meta name="description" content="Neil Lemmer's Web Portfolio"></meta>
                    <meta name="author" content="Neil Lemmer"></meta>
                    <meta name="keywords" content="Java Developer, Python Developer, Web Developer, HTML5, CSS, Javascript, React Developer, Jquery, Freelance,"></meta>
                </Head>
                <NavBar />
                <Grid className={classes.content}>
                    <Typography variant='h6'>
                        This Website is still under construction. But you are more then welcome to checkout the About page for more details.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

Home.Proptypes = {
    classes: Proptypes.object.isRequired
};

export default withStyles(styles)(Home);
