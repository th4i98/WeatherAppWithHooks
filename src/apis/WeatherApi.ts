import httpService from './httpService';
import url from './urls';

const appid = 'b2bee9d5be8be2079a8255b2b6f35a9b';
const WeatherApi = {
	getWeather: (params: any) => {
		const uri = url.weather;
		return httpService.GET(uri, '', {
			...params,
			appid,
			units: 'metric',
		});
	},
	getWeatherOneCall: (params: any) => {
		const uri = url.weatherOneCall;
		return httpService.GET(uri, '', {
			...params,
			appid,
			units: 'metric',
		});
	},
};
export default WeatherApi;
