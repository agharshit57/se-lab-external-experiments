# Maven Java Console
Requires JDK 17+ and Maven. Run from this folder:
```bash
java -version
mvn -version
mvn clean compile
mvn test
mvn package
java -cp target/classes com.example.App
```
Creates the artifact under target/. Commands: clean removes generated files; compile compiles source; test runs tests; package creates JAR/WAR; install adds artifact to local Maven repository.

Create a starter project:
```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=demo -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
cd demo && mvn package
```
