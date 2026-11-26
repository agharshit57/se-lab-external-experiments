# Jenkins Java + Maven Pipeline
Use the Maven Java example in `maven/java-console`. Jenkins must have Git and Pipeline plugins and an agent with JDK 17 and Maven.

Configure **Manage Jenkins → Tools** with names JDK17 and Maven3 (or edit Jenkinsfile). Create Pipeline job connected to this GitHub repository. Set Script Path to `jenkins/java/Jenkinsfile`, run Build Now, inspect Console Output and Stage View.

Important: Jenkins must be able to access GitHub. If the agent is Windows, replace `sh` with `bat`. Do not hardcode credentials. If your Jenkins cannot access nested source as a Maven project, create a dedicated job with its workspace rooted at `maven/java-console` or check out that folder as the project source; the Jenkinsfile path is a pipeline script location, not automatically the Maven working directory.
