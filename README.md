# [Eclipse](https://eclipse-music.herokuapp.com/)
A web app to discover new music artists through a chain of suggestions.

Live Demo: https://eclipse-music.herokuapp.com/

*Important Note: When searching, artists' names must be spelled correctly.*

# Preview

![Eclipse Demo](https://user-images.githubusercontent.com/28014739/31693955-40d3edec-b356-11e7-85b8-f9e0183053b9.gif)

# Run Locally
This web application uses Git and Node, so ensure they are preinstalled. Then follow these commands in the terminal:
```
$ git clone https://github.com/NicBonetto/eclipse.git
$ cd eclipse/
$ npm install
```
After all dependencies are installed, create a .env file with your own Spotify tokens and express listening port (CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, PORT). Then run:
```
$ npm run dev
```
Open your browser and type in: http://localhost:PORT <= PORT meaning the environmental variable value you declared in the .env file :)
