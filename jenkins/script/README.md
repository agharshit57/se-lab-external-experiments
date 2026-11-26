# Jenkins Script / Declarative Pipeline

This is a minimal pipeline for demonstrating stages, steps, shell commands, and post actions.

## Steps
1. Open Jenkins.
2. Select **New Item → Pipeline**.
3. Give it a name and select Pipeline.
4. Under Pipeline, choose **Pipeline script**.
5. Paste the contents of `Jenkinsfile`.
6. Save and click **Build Now**.
7. Open **Console Output** and observe each stage.

The sample uses Linux shell commands. For a Windows agent, use `bat 'echo ...'` and Windows-compatible directory/file commands.

## Terms
- Pipeline: automated sequence of CI/CD steps.
- Stage: logical phase such as Build or Test.
- Step: individual action inside a stage.
- Agent: machine/executor that runs the pipeline.
- post: actions that run after pipeline completion.
