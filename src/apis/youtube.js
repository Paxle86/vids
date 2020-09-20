import axios from 'axios';

const KEY = 'AIzaSyAWf93dyaFoRMeVL6tIAmVm2Vh76wWHY1s';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
