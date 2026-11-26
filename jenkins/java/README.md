# Jenkins Pipeline – Maven Java

Use the Maven Java project in `../../maven/java-console` as the source project. For a Jenkins multibranch pipeline, put this Jenkinsfile at the root of the project being built, or create a Jenkins Pipeline job and point it at this repository and Jenkinsfile path.

## Jenkins setup
1. Install/enable Git, Pipeline, and Pipeline: Stage View plugins.
2. In **Manage Jenkins → Tools**, configure JDK installation named exactly `JDK17` and Maven installation named exactly `Maven3` (or change the names in the Jenkinsfile).
3. Create a Pipeline or Multibranch Pipeline job.
4. Connect the Git repository and select the branch.
5. Run **Build Now** and inspect Console Output / Stage View.

## Important
- Jenkins must be able to reach the Git repository.
- If Jenkins runs on Windows, replace `sh` with `bat` commands.
- If the lab Jenkins has no configured tools, use installed system tools or configure them first.
- Do not put credentials directly in the Jenkinsfile.
