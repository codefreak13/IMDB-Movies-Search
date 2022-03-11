## IMDB MOVIES SEARCH APP

An app that enables users plan their movies schedule using the IMDB API

### Installation

Open this link([Setup React Native CLI](https://reactnative.dev/docs/environment-setup)) on your computer browser tab.   
Select your operating system(OS) type as the Development OS and Android as your target OS.   
Follow the instructions to properly setup your local machine for React Native Development.

#### When you have successfully completed the setup, you can proceed to clone the app.
##

*Before cloning the app, specify the directory/folder to clone the app to with the command line prompt*.

*For example, to clone into the Desktop folder, enter the command below into your command line*.

> cd Desktop

##

To clone the application, copy and paste any of the commands below to your machine command line, according to your git setup, then press enter

#### If your Git is setup for:

##### SSH

> git clone git@github.com:codefreak13/keleya-pregnancy-app.git

##### HTTPS

> git clone git@github.com:codefreak13/IMDB-Movies-Search.git
##

After cloning the app, open the app folder with your favourite IDE or code editor and install node modules with the command below

> npm install
##

All is set!
You can now build the app by running the following command on your IDE terminal
>npx react-native run-android

##

### Task Completion

- All of the information are retrieved from the IMDB APIs
- By default the main screen displays movies/shows the user has added to their favorites list (title, movie poster, description and rating)
- There is option to search for a specific movie/show
- Once a user clicks on a movie/show a screen containing title, description, rating, poster is shown
- There is an option to add the movie/show to favorites list (it is persisted on app restart)
- Implement an option to hide movie/show form future search results (it is persist on app restart)
- User is informed if the internet connection is lost

