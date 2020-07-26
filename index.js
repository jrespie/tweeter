import Twitter from 'twitter-lite';
import { config } from 'dotenv';

const user = new Twitter({
    consumer_key: config.env.KEY,
    consumer_secret: config.env.SECRET
});

const response = await user.getBearerToken();
const app = new Twitter({
    bearer_token: response.access_token
});

//client.get(...)
//client.post(...)