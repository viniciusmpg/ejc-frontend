# EJC

React application to manage volunteering events, by maintaining people and teams. The concept is that more times you participate on events, more likely to become a team coordinator you are. These features are not included yet in the project.

## Developed with

- React 16.9
- Material UI 4.3.3
- React Redux 7.1
- React Router DOM 5.0.1
- Axios 0.19.0

## Tests

- End to End testing using Cypress
```sh
npm run cypress:open
```

### Tools

- Storybook
- Cypress

### Instalation

1. Clone the Node JS backend repository that is available in https://github.com/viniciusmpg/ejc
2. Clone the Authentication Service available in https://github.com/viniciusmpg/Ejc.Auth
3. Set up and run the Node JS and the .NET Core applications.
4. The REST API Endpoint is set in [/src/api/apiClient.js](/src/api/apiClient.js)


```sh
$ npm install
$ npm start
```

### Next Steps
- Add components to Storybook
