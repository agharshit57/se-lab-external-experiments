# Maven Java Console Application

## Requirements
- JDK 17 or later
- Apache Maven

Check installation:
```bash
java -version
mvn -version
```

## Create / run this project
This folder is already a Maven project. From this folder:

```bash
mvn clean compile
mvn package
java -cp target/classes com.example.App
java -cp target/classes com.example.App Gaurav
```

Expected output:
```
Hello, SE Lab! Maven project is running.
```

## Important Maven commands
- `mvn clean` – removes the generated `target` directory.
- `mvn compile` – compiles source code.
- `mvn test` – runs tests (if tests are present).
- `mvn package` – creates the JAR/WAR package.
- `mvn install` – installs the package into the local Maven repository.
- `mvn clean package` – clean build and package.

## Create a fresh project
```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=demo -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
cd demo
mvn package
```

The project coordinates are groupId, artifactId, and version.
