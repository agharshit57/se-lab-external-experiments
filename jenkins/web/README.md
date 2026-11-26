# Jenkins Web Pipeline

## Requirements
- Jenkins with Pipeline and Git plugins
- Node.js and npm installed on the Jenkins agent

## Run locally first
```bash
npm install
npm test
npm start
```
Open `http://localhost:3000`.

## Jenkins
Create a Pipeline job connected to this repository and set Script Path to `jenkins/web/Jenkinsfile`. Run the job. The stages checkout, check versions, install dependencies, and run a basic test.

If using a Jenkins agent on Windows, replace each `sh` step with `bat`.
