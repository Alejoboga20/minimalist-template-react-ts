# Rootstrap Create-React-App Base

This is a non-official Rootstrap base template for [Create React App](https://github.com/facebook/create-react-app) created and design to speed up you React Projetcs.

## Packages included

- React Router Dom v6.
- Axios.
- React Hook Form and Yup Resolver.
- Tailwind CSS (Follow [this guide](https://tailwindcss.com/docs/editor-setup) to setup your editor to work with tailwind css).
- Classnames.

## Folders

This React Project is organized by modules. Inside each module you can find pages, components, routes, etc which are intended to be used just inside that module (Even tough React allows use to use these outside its module, it's a good practice to keep its scope, don't you think?).
For sure, you are going to need common functions and components for your entire application. In this case, you can use `common` module.

- **`api`**: Function to configure/consume API communications.
- **`auth`**: All utilities related to Authentication.
  - **`context`**
  - **`layouts`**
  - **`pages`**
  - **`schemas`**
  - **`types`**
- **`common`**: All common utilities to your entire app.
  - **`pages`**
  - **`types`**
  - **`icons`**
  - **`pages`**
- **`hooks`**: All common hooks.
- **`router`**: Router Configuration.

`Note:` If you are going to create new hooks/pages/components, etc for your app, create them in the corresponding module.

## Available Scripts

In the project directory, you can use the following commands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
