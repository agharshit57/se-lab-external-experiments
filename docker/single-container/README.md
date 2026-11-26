# Docker Single Container – Nginx

## Requirements
Docker Engine or Docker Desktop must be installed and running.

## Build and run
From this folder:
```bash
docker build -t se-nginx-demo .
docker run -d --name se-nginx -p 8080:80 se-nginx-demo
```
Open `http://localhost:8080`.

## Verify and manage
```bash
docker ps
docker logs se-nginx
docker stop se-nginx
docker rm se-nginx
docker images
```

## Explain
- Dockerfile contains image-building instructions.
- `FROM` selects the base image.
- `COPY` copies the page into the image.
- `EXPOSE` documents the container port.
- `-p 8080:80` maps host port 8080 to container port 80.
- `-d` runs the container in the background.
