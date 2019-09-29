require('dotenv').config()
import express from 'express'
import axios from 'axios'

const app = express();
const port = 8080; // default port to listen


const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com/1.1',
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`,
  },
  withCredentials: true,
});



// define a route handler for the default home page
app.get("/twitter/:user", async (req, res) => {
  try {
    const user = await twitterApi(`/users/lookup.json?screen_name=${req.params.user}`)
    res.send({followerCount: user.data[0].followers_count});
  } catch(err) {
    console.log({err})
    throw new Error(err)
  }
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
