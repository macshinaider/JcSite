import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8081",
	timeout: 50000,
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
