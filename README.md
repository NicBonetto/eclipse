# [Eclipse](https://eclipse-music.herokuapp.com/)
A web app to discover new music artists through a chain of suggestions.

Live Demo: https://eclipse-music.herokuapp.com/

*Important Note: This app is still a work in progress. You can read about the bugs under Issues.*

# Preview

![Eclipse Demo](https://user-images.githubusercontent.com/28014739/31634263-bf3a5444-b277-11e7-897a-39c991a70443.gif)

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
