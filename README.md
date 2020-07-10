# react-native-blogpost-app

A simple app that allows users to:

- List all blog posts
- Show more details for a post
- Edit a post
- and create a new post

The backend is using [json-server](https://www.npmjs.com/package/json-server) to help provide a set of CRUD services which the APP uses.

App developed as part of the "complete react native and redux course" on [Udemy]([https://www.udemy.com/course/the-complete-react-native-and-redux-course/).

## Installation

Within both the `/app` & `/jsonserver` directory install the npm packages with:

    npm install

## Running the application

### The App

Within `/app`

Run the following command to start the application. This will use [expo.io](https://expo.io/) to build the application ready to be tested on iOS or Android. You can use the Expo app on either the iOS or Google Play store. Alternatively you can run the application using the simulator.

    npm start

### The Backend (JsonServer)

Within `/jsonserver`

Run the following command:
npm run db

## ngrok

If your testing on a real device and having issue connecting to the local json-server, then you may want to run ngrok. This will give you a real URL that points to the local version of json-server running on post 3000.

### To start ngrok

Run:

    npm run tunnel

Then within `/app/src/api/jsonServer.js`. Update `http://localhost:3000` with the "Forwarding" address that ngrok provides.
