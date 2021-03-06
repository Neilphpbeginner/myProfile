import React, { Component } from "react";
import { styles } from "./components/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import Icon from './components/Icon';
import { Typography, SvgIcon, List, ListItem, Grid } from "@material-ui/core";
import Head from 'next/head'

const bgColor = {
    primary: '#103452',
    secondary: '#FFFFFF'
}

class About extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <Head>
                    <title>About Page</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <meta name="description" content="Neil Lemmer's Web Portfolio About Page"></meta>
                    <meta name="author" content="Neil Lemmer"></meta>
                </Head>
                <NavBar />
                <Grid className={classes.content}>
                    <Typography variant='h4' color='primary' className={classes.cvHeading}>
                        Neil Christian Lemmer
                            </Typography>
                    <Typography variant='h5' color='primary' className={classes.cvHeading}>
                        Johannesburg GAUTENG
                            </Typography>
                    <div className={classes.cvHeading}>
                        < a target='_black' href='https://github.com/Neilphpbeginner?tab=repositories'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="git" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.facebook.com/neil.lemmer'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="facebook" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.linkedin.com/in/neil-lemmer-5b56a4140/'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="linkin" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.codewars.com/users/Neilphpbeginner'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="codewars" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.freecodecamp.org/neilphpbeginner'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="freeCodeCamp" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.codecademy.com/microSolver77357'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="codecademy" />
                            </SvgIcon>
                        </a>
                    </div>

                    <div style={{ backgroundColor: bgColor.primary, borderRadius: 25, margin: 'auto' }}>
                        <Typography variant='h5' color='secondary' className={classes.cvHeading}>
                            Software Engineering
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='subtitle1' className={classes.listItems}>
                            <ListItem>
                                Hyperiondev graduate offering a strong foundation in software engineering and programming principles across multiple platforms.
                            </ListItem>
                            <ListItem>
                                Experienced in object-oriented programming; developing, testing and debugging code.
                            </ListItem>
                            <ListItem>
                                Quickly learn and master new technologies; successful working in both team and self-directed settings.
                            </ListItem>
                        </Typography>
                    </div>
                    <div style={{ backgroundColor: bgColor.primary, borderRadius: 25, margin: 'auto' }}>
                        <Typography variant='h5' color='secondary' className={classes.cvHeading}>
                            Education
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='subtitle1' className={classes.listItems}>
                            <ListItem>
                                IBM eServer certified specialist AIX –  System Administrator (2003)
                            </ListItem>
                            <ListItem>
                                IBM eServer certified specialist AIX – System Support (2003)
                            </ListItem>
                            <ListItem>
                                Oracle Certified Associate, Java SE8 Programmer (2016)
                            </ListItem>
                            <ListItem>
                                Oracle Certified Associate, Java SE8 Programmer (2016)
                        </ListItem>
                            <ListItem>
                                70-480:  Programming HTML5 with JavaScript and CSS3 (2016)Enterprise Software Overview
                        </ListItem>
                            <ListItem>
                                PHP Programmer (2017)
                        </ListItem>
                            <ListItem>
                                Introduction to Programming (Python)
                        </ListItem>
                            <ListItem>
                                Introduction to Software Engineering
                        </ListItem>
                            <ListItem>
                                Data Science, Algorithms and Advanced Software Engineering
                        </ListItem>
                            <ListItem>
                                P690 Technical Support (2003) Information Security
                        </ListItem>
                        </Typography>
                    </div>
                    <div style={{ backgroundColor: bgColor.primary, borderRadius: 25, margin: 'auto' }}>
                        <Typography variant='h5' color='secondary' className={classes.cvHeading}>
                            Work Experience
                        </Typography>
                    </div>
                    <Typography variant='subtitle1' className={classes.listItems}>
                        <ListItem>
                            Babcock Ntuthuko Generations (Head Office, Bedfordview)
                                <br />
                            Administrator Site, July 2007 to Present
                        </ListItem>
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
