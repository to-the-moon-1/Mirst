import {NavLink} from "react-router-dom";
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Header = () => {

    const classes = useStyles();

    return <div className={classes.root}>
        <AppBar position="static">
            <Container maxWidth="md">
                <Toolbar>
                    <NavLink className="headerLink" activeClassName="activeLink" exact to="/">Mirst</NavLink>
                    <NavLink className="headerLink" activeClassName="activeLink" to="/view">View</NavLink>
                </Toolbar>
            </Container>
        </AppBar>
    </div>

    // return <div className="header">
    //     <Container maxWidth="md">
    //         <NavLink className="headerLink" activeClassName="activeLink" exact to="/">Mirst</NavLink>
    //         <NavLink className="headerLink" activeClassName="activeLink" to="/mmm">Tasks</NavLink>
    //     </Container>
    // </div>
}

export default Header