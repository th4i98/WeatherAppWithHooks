import * as React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
// import WeekContentCard from "./WeekContentCard"
import weatherApi2 from "../../apis/weatherApi2";
import { useState, useEffect } from "react";
import { dtToDay } from "../helpers/convertDate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { dtToTime } from "../helpers/convertDtToHour";


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "100%"
    },
    div: {
        display: "flex",
        justifyContent: "space-around",
        "& ul": {
            listStyleType: "none",
            transform: "translateX(-5%)",
        },
    },
    contents: {
        fontSize: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& img": {
            width: "50px",
            height: "50px",
        },
    },
    cardActive: {
        backgroundColor: "greenyellow",
    },
});
export default function WeekContent(props) {
    const classes = useStyles();
    const data = props.sendDataToWeek;

    const [dailyWeather, setDailyWeather] = useState([]);// Mảng lưu dữ liệu thời tiết 7 ngày tới trả về từ api Onecall
    const [dailyWeatherDetail, setDailyWeatherDetail] = useState(data?.daily[0]); // State lưu dữ liệu chi tiết của 1 ngày
 
    console.log(data);
    const lat = data.lat;
    const lon = data.lon; 

    const getDailyForecast = async () => {
        const response = await weatherApi2.GETWEATHERONECALL({lat: lat, lon: lon});
        setDailyWeather(response.daily);  
        console.log(response.daily);
    }
    // Dùng useEffect để tránh bị infinity loop call api khi gọi hàm setDailyWeather
    useEffect(() => {
        getDailyForecast();
    }, [])
    // Set dữ liệu chi tiết của 1 ngày, lấy từ mảng
    const dailyContentDetail = (item) => {
        setDailyWeatherDetail(item);
    }

    // console.log(dailyWeather[0].dt);
    // console.log(dailyWeatherDetail.dt);
    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                {dailyWeather.map((item, index) => (
                    <Grid item xs={3} key={index}>
                        <Card
                            sx={{}}
                            className={
                                item.dt === dailyWeatherDetail.dt
                                    ? classes.cardActive
                                    : ""
                            }
                            onClick={(e) => {
                                dailyContentDetail(item);
                            }}
                        >
                            <CardContent className={classes.contents}>
                                <div>{dtToDay(dailyWeather[index].dt)}</div>
                                <img
                                    className=""
                                    src={`http://openweathermap.org/img/wn/${dailyWeather[index]?.weather?.[0].icon}@2x.png`}
                                    alt=""
                                />
                                <div>
                                    {Math.round(dailyWeather[index].temp.min)}°
                                    - {Math.round(dailyWeather[index].temp.max)}
                                    °
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 240,
                    my: "20px",
                    backgroundColor: "primary.dark",
                }}
            > */}
            <Card sx={{ my: "20px", overFlow: "hidden" }}>
                <CardContent>
                    <div>
                        {dailyWeatherDetail && dtToDay(dailyWeatherDetail.dt)}
                    </div>
                    <div className={classes.div}>
                        <ul>
                            <li>
                                Rain Precipitation:{" "}
                                {dailyWeatherDetail.rain &&
                                    dailyWeatherDetail.rain}{" "}
                                mm
                            </li>
                            <li>
                                Est Temp:{" "}
                                {dailyWeatherDetail.temp &&
                                    dailyWeatherDetail.temp.min}{" "}
                                °C -{" "}
                                {dailyWeatherDetail.temp &&
                                    dailyWeatherDetail.temp.max}{" "}
                                °C
                            </li>
                            <li>Humidity: {dailyWeatherDetail.humidity}%</li>
                            <li>
                                Wind Speed: {dailyWeatherDetail.wind_speed} km/h
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Sunrise: {dtToTime(dailyWeatherDetail.sunrise)}
                            </li>
                            <li>
                                Sunset: {dtToTime(dailyWeatherDetail.sunset)}
                            </li>
                            <li>
                                Description:{" "}
                                {dailyWeatherDetail.weather &&
                                    dailyWeatherDetail.weather[0].description}
                            </li>
                            <li>Pressure: {dailyWeatherDetail.pressure} hPa</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
            {/* </Box> */}
        </Container>
    );
};
