import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ActionMovies from '../components/playlistTabs/ActionMovies.js'
import { Grid } from '@mui/material';
import ComedyMovies from '../components/playlistTabs/ComedyMovies.js';
import AnimationMovies from '../components/playlistTabs/AnimationMovies.js';
import DramaMovies from '../components/playlistTabs/DramaMovies.js';
import HorrorMovies from '../components/playlistTabs/HorrorMovies.js';
import RomanceMovies from '../components/playlistTabs/RomanceMovies.js';
import ScienceFictionMovies from '../components/playlistTabs/ScienceFictionMovies.js';
import DocumentaryMovies from '../components/playlistTabs/DocumentaryMovies.js';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container className='w-full items-center justify-center'>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid container justifyContent='center' alignItems='center'>
                    <Tabs value={value} onChange={handleChange} variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                                backgroundColor: 'white',
                            },
                            justifyContent: 'center'
                        }}
                    >
                        <Tab label="Action Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                        <Tab label="Comedy Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                        <Tab label="Drama Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                        <Tab label="Horror Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                        <Tab label="Romance Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                        <Tab label="Science Fiction Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                        <Tab label="Animation Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                        <Tab label="Documentary Movies" {...a11yProps(0)} sx={{
                            color: '#fff', fontWeight: 'bold'
                        }} />
                    </Tabs>
                </Grid>

            </Box>
            <CustomTabPanel value={value} index={0} >
                <ActionMovies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ComedyMovies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <DramaMovies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <HorrorMovies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <RomanceMovies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <ScienceFictionMovies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
                <AnimationMovies />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={7}>
                <DocumentaryMovies />
            </CustomTabPanel>
        </Grid>

    );
}