# Run and Review App

This is an app designed to assist local running enthusiasts in finding the best trails and parks.

## Description
A description of features included in the components of the Run Review App

- Extracted from the main app.js into smaller reusable components
- Separated components by their functionality or use for example the review page component is for the review part of the app where users can add their individual review and the component main use is it take the review using Fetch hook Get and Post
- The Home component is used for the Home page, basic CSS used
- The RunPage component imports the App.css file 
- The ReviewPage uses useState to make form controllable for each input (name, trail, review)
- In order to create individual card review, use of map object
- The JSX inside the createCard function uses hard code to make each card say "says.." 
- Submit button is using the handler function handleSubmit with Post request
-  After the promise, form is reset to allow another user clean slate to type new review
- Use of Restful API fetch with Get request to localhost3000/Reviews


### Challenges or potential mods

In the project directory, you can run:


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
