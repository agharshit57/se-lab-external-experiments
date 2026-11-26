# Kubernetes Nginx Deployment and Scaling
Requires a working Kubernetes cluster and kubectl. Local options: Minikube or Docker Desktop Kubernetes.

Check cluster:
```bash
kubectl version --client
kubectl get nodes
```
Apply and inspect:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get deployments
kubectl get pods -o wide
kubectl get services
```
Scale:
```bash
kubectl scale deployment nginx-demo --replicas=5
kubectl get pods
kubectl scale deployment nginx-demo --replicas=2
```
Access: Minikube use `minikube service nginx-service --url`. Otherwise try node IP:30080 if your cluster networking permits it.

Cleanup: `kubectl delete -f service.yaml` then `kubectl delete -f deployment.yaml`.

Deployment maintains desired pod replicas; Service provides a stable endpoint; NodePort exposes a port on each node. Optional HPA requires Metrics Server: `kubectl autoscale deployment nginx-demo --cpu-percent=50 --min=2 --max=8`.
