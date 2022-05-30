import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import GridCard from "./GridCard";
import WeekContent from "../Contents/WeekContent";


function TabPanel(props) {
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
                    {/* add component span to avoid 'Warning: validateDOMnesting(...)' */}
                    <Typography component={"span"}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function NavBar(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const weatherData = props.sendDataToNav;
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Today" {...a11yProps(0)} />
                    <Tab label="Week" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel
                sx={{ display: "flex", flexGrow: 1 }}
                value={value}
                index={0}
            >
                <GridCard sendDataToGrid={weatherData}></GridCard>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <WeekContent sendDataToWeek={weatherData}></WeekContent>
            </TabPanel>
        </Box>
    );
}