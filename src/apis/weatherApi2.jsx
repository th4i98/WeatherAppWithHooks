import axios from "axios";
import url from "./urls";

const apiKey = "75df5f62f5cbc865e8bdb57fb281b4c3";
const weatherApi2 = {
    GETWEATHERONECALL: async (params) => {
        const weatherOneCall = await axios.get(url.weatherOneCall, {
            params: {
                ...params,
                appid: apiKey,
                units: "metric",
            },
        });
        return weatherOneCall.data;
    },
    GETNAMEREVERS: async (params) => {
        const getCityName = await axios.get(url.citis, {
            params: {
                ...params,
                appid: apiKey
            }
        });
        return getCityName.data;
    },
    GETNAMEDIRECT: async (params) => {
        const getCityNameDir = await axios.get(url.citiDirect, {
            params: {
                ...params,
                appid: apiKey,
            },
        });
        return getCityNameDir.data;
    }
};
export default weatherApi2
