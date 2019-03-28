import React, { Component } from "react";
import { styles } from "./components/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import { Grid, Typography } from "@material-ui/core";
import MetaTags from "react-meta-tags";

class ContactPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <MetaTags>
                    <title>Neil Lemmer's Web Portfolio</title>
                </MetaTags>
                <NavBar />
                <Grid className={classes.content}>
                    <Typography variant='display1'>
                        Contact Me
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

ContactPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactPage);
