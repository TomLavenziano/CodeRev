# CodeRev

>

## About

CodeRev is an online platform that allows the contributors of open source software to add code review to their development pipeline

## Getting Started
    
### 1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed, [nvm](https://github.com/creationix/nvm) is the recommended installation method

#### _Note: This project has only been tested on Linux and MacOS_

### 2. Build each application
   CodeRev is made up of two main services, each running as a separate application

```bash
cd path/to/CodeRev/api; npm install
cd path/to/CodeRev/web; npm install
```

### 3. Launch the app

   In order to launch CodeRev you must have both the API and the web service running simultaneously.
   The easiest way to do this is by opening each folder in a separate terminal

Terminal 1 - API
    
```bash
cd path/to/CodeRev/api; npm start
```
   
Terminal 2 - Web
    
```bash
cd path/to/CodeRev/web; npm run serve
```

### 4. Accept the security warnings
   The app uses self signed certificates at the moment
   
   Accept the warnings at `https:lvh.me:4430` and `https:lvh.me:8080`
    
### 5. Navigate to `https://lvh.me:8080` in a browser


## Testing

The API can be accessed at `https:lvh.me:4430`

Example: `https:lvh.me:4430/project/owner/10148379`


## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
