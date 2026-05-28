```bash
echo "Cloning Repository"

npm install

sudo docker build -t jeeva2162/devops-task-manager .

echo "$DOCKER_PASS" | sudo docker login -u "$DOCKER_USER" --password-stdin

sudo docker push jeeva2162/devops-task-manager

sudo docker stop devops-task-manager || true

sudo docker rm devops-task-manager || true

sudo docker run -d -p 3000:3000 --name devops-task-manager jeeva2162/devops-task-manager
```
