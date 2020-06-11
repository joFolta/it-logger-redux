# it-logger-redux

# Stopped at Vid 75: 5:39

## Run the app
- `npm run dev`

## Dependencies/Setup
- `npx create-react-app .`
- `npm i -D json-server concurrently` <!-- dev dependencies: json-server: a fake REST API; concurrently: runs both server and frontend -->
- add to package.json scripts: `"json-server": "json-server --watch db.json --port 5000",` and `"dev": "concurrently \"npm start\" \"npm run json-server\"",` <!-- setting mock database as db.json file -->

## Testing routes with Postman
![Preview](public/img/postman.png)
- mock database is in `db.json` file
- Complete CRUD functionality from `json-server`...

- GET `http://localhost:5000/logs` -> shows logs data

- GET `http://localhost:5000/techs` -> shows techs data

- POST `http://localhost:5000/techs`, Headers: Key: `Content-Type`, Value: `application/json`, Body: 
```
{
	"firstName": "Jen",
	"lastName": "Williams"
}
```
The response from `json-server` auto-add&increments the id to: 
```
{
  "firstName": "Jen",
  "lastName": "Williams",
  "id": 4
}
```
This new tech is added to the `db.json` file

- PUT `http://localhost:5000/techs/4`, Headers: Key: `Content-Type`, Value: `application/json`, Body: 
```
{
	"firstName": "CHANGED NAME",
	"lastName": "Williams"
}
```

- DELETE `http://localhost:5000/techs/4` -> deletes tech with "id": 4


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
