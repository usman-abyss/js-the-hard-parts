import axios from "axios";

const url = 'https://api.github.com/users/'

const fetch = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const fetchUser = async (username="usman1100") => {
    try {
        const response = await fetch.get(username);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

