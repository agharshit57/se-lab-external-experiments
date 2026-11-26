# Docker Multi-Container – Nginx + Redis
Requires Docker Engine and Docker Compose plugin.

From this folder:
```bash
docker compose up -d
docker compose ps
```
Open http://localhost:8081. Nginx serves index.html and Redis runs as a separate service/container.

Stop:
```bash
docker compose down
```
Remove Redis volume too:
```bash
docker compose down -v
```

Compose defines services, networks and volumes in YAML. Containers reach each other by service name on the Compose network. The named volume persists Redis data. depends_on controls startup order but does not guarantee service readiness.
