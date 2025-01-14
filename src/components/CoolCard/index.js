import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from '../Image';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
}));

export default function CoolCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Image height='300' src={props.src} />
            <CardContent>
                <Typography>
                    name: {props.name}
                </Typography>
                <Typography>
                    age: {props.age}
                </Typography>
            </CardContent>
        </Card>
    );
}