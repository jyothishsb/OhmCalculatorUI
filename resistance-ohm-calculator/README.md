This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Steps to run locally:

PRE-REQUISITES

1. Node
2. npm
3. Host the Ohm Service Web Api which is available at the Git path https://github.com/jyothishsb/OhmService

STEPS:

1. Clone the code base to your local
2. Navigate the directory where the code is cloned.
3. Open terminal(if mac) or cmd(if windows) on the root directory/folder of the project
4. run the command "npm install"- This will installs the react packages for this code       base

5. Once the packages are installed, open package.json located at the project root folder    using any editor and udate the below line under scripts section
        "local": "REACT_APP_OHM_SERVICE_URL=<url where the  calculate resistance webapi is hosted >npm start",

6. Run the below command to start up the application on    local hosted Nodejs server
    npm run local
7. This will the start up the application.  