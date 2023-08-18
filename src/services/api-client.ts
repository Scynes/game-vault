import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '42f1398b27244cabb82266921a3d36f8'
    }
});