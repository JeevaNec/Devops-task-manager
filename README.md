 End-to-End DevOps Pipeline for Node.js Web Application

1.Project Overview

This project demonstrates a complete End-to-End DevOps CI/CD Pipeline for a Node.js Task Management Web Application using modern DevOps tools and cloud technologies.

The project integrates GitHub, Jenkins, Docker, AWS EC2, Prometheus, Grafana, CloudWatch, Shell Scripting, and Cron Jobs into a single automated deployment and monitoring workflow.



2 Technologies Used

* Node.js
* HTML
* CSS
* JavaScript
* Git & GitHub
* Jenkins
* Docker
* Docker Hub
* AWS EC2 (Ubuntu)
* Prometheus
* Grafana
* AWS CloudWatch
* Shell Scripting
* Cron Jobs


3. DevOps Workflow

  Developer → GitHub → Jenkins → Docker → Docker Hub → AWS EC2 → Monitoring Tools



4. Features

* CI/CD automation using Jenkins
* GitHub webhook integration
* Docker containerization
* Docker Hub image deployment
* AWS EC2 cloud hosting
* Infrastructure monitoring using Prometheus & Grafana
* AWS CloudWatch monitoring
* Automated backup and log cleanup using shell scripts and cron jobs


5. Project Structure

Devops-task-manager/
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│
├── views/
│   └── index.ejs
│
├── automation/
│   ├── backup.sh
│   └── cleanup.sh
│
├── Dockerfile
├── package.json
├── package-lock.json
├── app.js
└── README.md

6. Setup Instructions

## 1. Clone the Repository

  git clone https://github.com/JeevaNec/Devops-task-manager.git
 

## 2. Navigate to Project Directory

  cd Devops-task-manager


## 3. Install Dependencies

  npm install


## 4. Run the Application

  node app.js


## 5. Access the Application

Open browser and visit:
http://ip:3000

## Build Docker Image

  docker build -t devops-task-manager .

## Run Docker Container

  docker run -d -p 3000:3000 --name devops-task-manager devops-task-manager

7. Jenkins Automation

The Jenkins Freestyle Project is configured to:

* Pull source code from GitHub
* Automatically trigger builds using GitHub Webhooks
* Build Docker image
* Push image to Docker Hub
* Deploy Docker container on AWS EC2


8. Monitoring Setup

## Prometheus

  Prometheus collects infrastructure and system metrics from the EC2 instance.


## Grafana

  Grafana visualizes monitoring metrics using interactive dashboards.


## AWS CloudWatch

  CloudWatch monitors AWS EC2 resource usage and instance health.


9. Automation Scripts

## Backup Script

  Automates project backup creation.

./backup.sh

## Cleanup Script

  Deletes old log files automatically.

./cleanup.sh


