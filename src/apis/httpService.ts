import axios from 'axios';
const CLIENT_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL || '';

const httpService = {
	GET: async (uri: string, token: string, params: any) => {
		let url = CLIENT_BASE_URL + uri;
		let headers = {};
		if (token === '' || token === null) {
			headers = {
				'Content-Type': 'application/json',
			};
		} else {
			headers = {
				'Content-Type': 'application/json',
			};
		}
		try {
			const res = await axios.get(url, {
				headers,
				params,
			});

			return res;
		} catch (error: any) {
			if (error.response) {
				const responseError = error.response.data;
				throw responseError;
			}
			const responseError = {
				status: 400,
				data: {},
				exception: {
					detail: 'Something wrong',
				},
				message: '',
			};
			throw responseError;
		}
	},
	POST: async (uri: string, token: string, params: any) => {
		let url = CLIENT_BASE_URL + uri;

		let headers = {};
		if (token === '' || token === null) {
			headers = {
				'Content-Type': 'application/json',
			};
		} else {
			headers = {
				'Content-Type': 'application/json',
			};
		}
		try {
			const res = await axios.post(url, params);
			return res;
		} catch (error: any) {
			if (error.response) {
				const responseError = error.response.data;
				throw responseError;
			}
			const responseError = {
				status: 400,
				data: {},
				exception: {
					detail: 'Something wrong',
				},
				message: '',
			};
			throw responseError;
		}
	},
	DELETE: async (uri: string, token: string, params: any) => {
		let url = CLIENT_BASE_URL + uri;
		let headers = {};
		if (token === '' || token === null) {
			headers = {
				'Content-Type': 'application/json',
			};
		} else {
			headers = {
				'Content-Type': 'application/json',
			};
		}
		try {
			const res = await axios.delete(url + params);

			return res;
		} catch (error: any) {
			if (error.response) {
				const responseError = error.response.data;
				throw responseError;
			}
			const responseError = {
				status: 400,
				data: {},
				exception: {
					detail: 'Something wrong',
				},
				message: '',
			};
			throw responseError;
		}
	},
	PUT: async (uri: string, token: string, data: string) => {
		let url = CLIENT_BASE_URL + uri;

		let headers = {};
		if (token === '' || token === null) {
			headers = {
				'Content-Type': 'application/json',
			};
		} else {
			headers = {
				'Content-Type': 'application/json',
			};
		}
		try {
			const res = await axios.put(url, data);

			return res;
		} catch (error: any) {
			if (error.response) {
				const responseError = error.response.data;
				throw responseError;
			}
			const responseError = {
				status: 400,
				data: {},
				exception: {
					detail: 'Something wrong',
				},
				message: '',
			};
			throw responseError;
		}
	},
};
export default httpService;
