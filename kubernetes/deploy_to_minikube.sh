minikube delete
minikube start
eval $(minikube docker-env)
docker build -t markwatsonatx/rethinkdb-nodejs-intro-db:latest -f ./containers/db.Dockerfile ../
docker build -t markwatsonatx/rethinkdb-nodejs-intro-web:latest -f ./containers/web.Dockerfile ../
kubectl delete petset db
kubectl delete deployment web
kubectl delete service dbadmin
kubectl delete service db
kubectl delete service web
kubectl create -f ./petsets/db.yaml
kubectl create -f ./deployments/web.yaml
kubectl create -f ./services/db.yaml
kubectl create -f ./services/db.admin.yaml
kubectl create -f ./services/web.yaml
kubectl get pods,svc
minikube service dbadmin --url
minikube service web --url