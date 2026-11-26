# SE Lab External Examination – Practical Repository

Small, independent examples for the SE Lab external. Each folder contains source/configuration and its own setup and execution guide.

| Experiment | Folder |
|---|---|
| Maven Java | maven/java-console |
| Maven Web | maven/java-web |
| Jenkins Java | jenkins/java |
| Jenkins Web | jenkins/web |
| Jenkins Script | jenkins/script |
| Docker single container | docker/single-container |
| Docker multi-container | docker/multi-container |
| Kubernetes Nginx scaling | kubernetes/nginx-scaling |
| AWS EC2 + Nginx | aws/ec2-nginx |
| Git commands | git |
| Nagios | nagios |

## Clone
```bash
git clone https://github.com/agharshit57/se-lab-external-experiments.git
cd se-lab-external-experiments
```

Use the README in each folder. Examples assume Ubuntu/Linux unless stated otherwise. Install the required software separately; this repository does not provision Jenkins, Docker, Kubernetes, AWS, or Nagios.

## Preparation order
Git → Maven Java → Docker → Jenkins → Kubernetes → Maven Web → AWS/Nagios.

Never commit passwords, cloud access keys, tokens, or private SSH keys. AWS resources can incur charges: use your college account, restrict SSH to your IP, and terminate resources after practice.
