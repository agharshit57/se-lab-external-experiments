# Maven Java Web Application (Servlet)

## Requirements
- JDK 17+
- Maven
- Apache Tomcat 10.1+ (Jakarta Servlet 6 compatible)

## Build
From this folder:
```bash
mvn clean package
```
The WAR file is `target/hello-web.war`.

## Deploy on Tomcat
Copy the WAR into Tomcat's `webapps` folder, then start Tomcat:
```bash
cp target/hello-web.war "$CATALINA_HOME/webapps/"
"$CATALINA_HOME/bin/startup.sh"
``
Open:
- `http://localhost:8080/hello-web/`
- `http://localhost:8080/hello-web/hello`

On Windows, copy the WAR into `%CATALINA_HOME%\webapps` and run `bin\startup.bat`.

## Explain
- `packaging=war` tells Maven to create a web archive.
- Servlet API is `provided` because Tomcat supplies it at runtime.
- `@WebServlet("/hello")` maps the servlet URL.
- `doGet()` handles HTTP GET requests.
