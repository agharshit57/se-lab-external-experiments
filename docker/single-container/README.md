# Docker Single Container – Nginx
Requirements: Docker Engine/Desktop running.

Build and run:
```bash
docker build -t se-nginx-demo .
docker run -d --name se-nginx -p 8080:80 se-nginx-demo
```
Open http://localhost:8080.

Verify/manage:
```bash
docker ps
docker logs se-nginx
docker stop se-nginx
docker rm se-nginx
docker images
```
Dockerfile: FROM selects base image, COPY adds page, EXPOSE documents port. `-p 8080:80` maps host to container port; `-d` runs in background.
