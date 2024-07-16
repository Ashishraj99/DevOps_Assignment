
## Installation

Build Docker Image:

```
docker build -t ollama .

```
Deploy to Kubernetes:

```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

```
Install k6:

```
sudo apt update
sudo apt install -y gnupg software-properties-common
wget -q -O - https://dl.k6.io/key.gpg | sudo apt-key add -
echo "deb https://dl.k6.io/deb stable main" | sudo tee -a /etc/apt/sources.list.d/k6.list
sudo apt update
sudo apt install -y k6

```
Run the Load Test:

```
k6 run load_test.js


```
Enable Metrics Server:

```
minikube addons enable metrics-server

```

Apply the HPA:

```
kubectl apply -f hpa.yaml

```


