# AWS EC2 – Host a Static Page with Nginx
Use the college-provided AWS account and approved region. EC2, public IPv4, storage and data transfer may incur charges. Check pricing, use a small permitted instance, and terminate it after practice.

1. AWS Console → EC2 → Launch instance.
2. Select Amazon Linux 2023 and a permitted small instance type.
3. Create/select a key pair; download and keep the private key secure. Never upload it to GitHub.
4. Security group: SSH TCP 22 only from your current IP; HTTP TCP 80 from the intended audience.
5. Launch; wait for running state and status checks.
6. Connect using EC2 Instance Connect or SSH.

Install Nginx (Amazon Linux 2023):
```bash
sudo dnf update -y
sudo dnf install nginx -y
sudo systemctl enable --now nginx
```
Copy this folder's index.html to /usr/share/nginx/html/index.html (upload with scp to /tmp first if needed), then browse to http://PUBLIC_IP.

Cleanup: terminate the instance and check for unused EBS volumes, Elastic IPs and snapshots. EC2 is virtual compute; AMI is the machine image; security groups are stateful firewalls; key pairs authenticate SSH.
