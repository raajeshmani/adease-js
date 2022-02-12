import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001/api/v1/';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const ajax = (options) => {

    return axios({
        method: options.method,
        url: options.url,
        params: options.data
      });
}

