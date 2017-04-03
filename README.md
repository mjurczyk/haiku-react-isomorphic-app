# Launching

To start the application use:

```
yarn install && yarn start
```

Or 

```
npm install && npm start
```

Application is available on port `8080`.

# Environment Variables / API Keys

App uses Google API and Google Custom Search Engine - both in need of API keys. You can specify API keys in `shared/config.js`, or using environment variables:

```
CSE_ID - CustomSearch Engine ID
GAPI_KEY - Google API Key
PORT - server listening port
```

Simple setup guide for CSE `https://github.com/vadimdemedes/google-images#set-up-google-custom-search-engine` (@vadimdemedes).