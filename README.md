# [Eclipse](https://git.heroku.com/eclipse-music.git)
A web app to discover new music artists through a chain of suggestions.
Live Demo: https://git.heroku.com/eclipse-music.git

*Important Note: This app is still a work in progress. It may not show some artists. You can read about the bugs under Issues.*

# Run Locally
This web application uses Git and Node, so ensure they are preinstalled. Then follow these commands in the terminal:
```
$ git clone https://github.com/NicBonetto/eclipse.git
$ cd eclipse/
$ npm install
```
After all dependencies are installed, create a .env file with your own Spotify tokens, database url, and express listening port (CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, PORT). Then run:
```
$ npm run dev
```
