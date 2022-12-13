import axios from 'axios';

const CONTENT_TYPE = 'Content-Type';
const ACCESS_TOKEN = 'Access-Token';
const UID = 'uid';
const CLIENT = 'client';

export const api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		Accept: 'application/json',
		[CONTENT_TYPE]: 'application/json',
		[ACCESS_TOKEN]: '',
		[UID]: '',
		[CLIENT]: '',
	},
});
