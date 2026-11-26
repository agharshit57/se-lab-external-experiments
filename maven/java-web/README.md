# Maven Java Web Application
Requires JDK 17+, Maven and Tomcat 10.1+ (Jakarta Servlet 6).

Build:
```bash
mvn clean package
```
Produces `target/hello-web.war`. Copy it to Tomcat's webapps folder and start Tomcat:
```bash
cp target/hello-web.war "$CATALINA_HOME/webapps/"
"$CATALINA_HOME/bin/startup.sh"
```
Visit `http://localhost:8080/hello-web/` and `http://localhost:8080/hello-web/hello`. On Windows use webapps and startup.bat.

WAR is a web archive; Servlet API is provided by Tomcat at runtime; @WebServlet maps the URL and doGet handles HTTP GET.
