# [Eclipse](https://eclipse-music.herokuapp.com/)
### A web app to discover new music artists through a chain of suggestions.

This is a full stack React/Redux/Express app that uses Spotify API to give suggestions based on the user's initial search.

Just type in a specific artist's name, and click through other recommended artists with the option to listen to 30 second song previews if they are available.

This was a fun personal project in my own attempt to create a solution to the problem of becoming bored listening to the same music.

*Important Note: When searching, artists' names must be spelled correctly.*

*Important Note: I have not yet tested for browser compatability. I created this testing on Chrome.*

Live Demo: https://eclipse-music.herokuapp.com/

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

# Technologies Used
List of libraries and technologies used in [Eclipse](https://eclipse-music.herokuapp.com):
***
+ JavaScript
+ CSS3
+ HTML5
+ ES2015
+ SASS
+ SVG
+ React
+ Redux
+ Node
+ Express
+ RESTful API
+ Spotify API
+ Heroku
