import React, { Component } from "react";
import { styles } from "./components/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import { Grid, Typography, Button } from "@material-ui/core";
import Head from 'next/head';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


class ContactPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <Head>
                    <title>Contact Me</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <meta name="description" content="Neil Lemmer's Web Portfolio Contact Page"></meta>
                    <meta name="author" content="Neil Lemmer"></meta>
                    <meta name="keywords" content="Neil Lemmer, 0833820899, lemmer.neil@gmail.com" ></meta>
                </Head>
                <NavBar />
                <Grid className={classes.content}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                 </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

ContactPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactPage);
