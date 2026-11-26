# Jenkins Script Pipeline
In Jenkins choose New Item → Pipeline → Pipeline script. Paste Jenkinsfile, Save, Build Now, then inspect Console Output and Stage View.

The pipeline demonstrates agent, stages, steps, shell commands, and post actions. Linux agent required for `sh`; on Windows use `bat` and Windows commands. A Jenkins agent must have the tools used by the pipeline.
