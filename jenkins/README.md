# Jenkins Experiments
- Java + Maven pipeline: see `java/`. Set Script Path to `jenkins/java/Jenkinsfile`; configure JDK17 and Maven3 tool names or edit Jenkinsfile.
- Web pipeline: see `web/`. Set Script Path to `jenkins/web/Jenkinsfile`; agent needs Node.js and npm.
- Script-only pipeline: see `script/`. Create a Pipeline job and paste the Jenkinsfile into Pipeline script.

Jenkins needs Git and Pipeline plugins. Linux examples use `sh`; Windows agents need `bat`. Never put secrets in source code.
