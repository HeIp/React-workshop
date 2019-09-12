import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Input from '../Input'
import Demo from '../Demo'
import Card from '../CoolCard'
import Image from '../Image'
import Workshop from '../Workshop';

var image

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Input" {...a11yProps(0)} />
                    <Tab label="Card" {...a11yProps(1)} />
                    <Tab label="Image" {...a11yProps(1)} />
                    <Tab label="Demo" {...a11yProps(2)} />
                    <Tab label="Workshop" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Input />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Card />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Image src={image} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Demo />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Workshop />
            </TabPanel>
        </div>
    );
}

image = 'data:image/jpeg;base64,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'