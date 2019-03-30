import React, { Component } from 'react';
import { styles } from './styles';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, SvgIcon, Drawer, MenuItem, MenuList } from '@material-ui/core';
import Icon from './Icon';


import Head from 'next/head';
import { withRouter } from 'next/router';
import Link from 'next/link';

class NavBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appBar} color="primary">
                    <Toolbar>
                        <Typography variant="h5" style={{ flex: 1 }} color='secondary'>
                            Neil Lemmer's Web Portfolio
                             < a target='_black' href='https://github.com/Neilphpbeginner/myProfile'>
                                <SvgIcon className={classes.profileGitHub} color='secondary' >
                                    <Icon icon='git' />
                                </SvgIcon>
                            </a>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.toolbar} />
                    <div >
                        <MenuList>
                            <MenuItem>
                                <Link prefetch href='/Home'>
                                    <a style={{ textDecoration: 'none', width: 120, }}>Home</a>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link prefetch href='/About'>
                                    <a style={{ textDecoration: 'none', width: 120 }}>About</a>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link prefetch href='/ContactPage'>
                                    <a style={{ textDecoration: 'none', width: 120 }}>Contact Me</a>
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </div>
                </Drawer>
            </div >
        );
    }
}

export default withRouter(withStyles(styles)(NavBar));