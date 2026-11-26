# Jenkins Web Pipeline
Requires Jenkins Pipeline and Git plugins, Node.js and npm on the agent.

Local test:
```bash
cd jenkins/web
npm install
npm test
npm start
```
Open http://localhost:3000.

Create a Pipeline job for this repository and set Script Path to `jenkins/web/Jenkinsfile`. The pipeline checks Node/npm versions, installs packages and runs a basic test. It uses `dir('jenkins/web')` so commands execute in the correct subfolder. On Windows agents replace `sh` with `bat`.
