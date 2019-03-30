import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./components/styles";

import Proptypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import MetaTags from "react-meta-tags";
import NavBar from "./components/NavBar";
class Home extends Component {
    render() {

        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <MetaTags>
                    <title>About</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </MetaTags>
                <NavBar />
                <Grid className={classes.content}>
                    <Typography variant='display1'>
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
