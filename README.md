# End-to-End DevOps Pipeline Automation for a Containerized Node.js Web Application on AWS

## 1. Project Description

  This project demonstrates a complete End-to-End DevOps CI/CD Pipeline for a Node.js Task Management Web Application using modern DevOps tools and cloud technologies. The project automates source code management, continuous integration, deployment, monitoring, and maintenance operations.

  The application source code is managed using GitHub, automated using Jenkins CI/CD, containerized using Docker, deployed on AWS EC2, and monitored using Prometheus, Grafana, and AWS CloudWatch. Shell scripts and Cron Jobs are additionally used for automation tasks such as backups and log cleanup.


##  2. Tech Stack
   Technology	               Purpose
    Node.js	              - Backend Development
    HTML, CSS, JavaScript - Frontend Development
    Git & GitHub	        - Version Control
    Jenkins	              - CI/CD Automation
    Docker                - Containerization
    Docker Hub	          - Docker Image Repository
    AWS EC2 Ubuntu	      - Cloud Hosting
    Prometheus            -	Monitoring
    Grafana               -	Monitoring Dashboard
    AWS CloudWatch	      - Infrastructure Monitoring
    Shell Scripting       -	Automation
    Cron Jobs           	- Scheduled Tasks


## 3. DevOps Workflow

  Developer → GitHub → Jenkins → Docker → Docker Hub → AWS EC2 → Monitoring Tools


## 4. Features

* CI/CD automation using Jenkins
* GitHub webhook integration
* Docker containerization
* Docker Hub image deployment
* AWS EC2 cloud hosting
* Infrastructure monitoring using Prometheus & Grafana
* AWS CloudWatch monitoring
* Automated backup and log cleanup using shell scripts and cron jobs

## 5. Project Structure

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

## 6. Setup Instructions

 1. Clone the Repository

    git clone https://github.com/JeevaNec/Devops-task-manager.git
 

 2. Navigate to Project Directory

    cd Devops-task-manager


 3. Install Dependencies

    npm install


 4. Run the Application

    node app.js


 5. Access the Application

     Open browser and visit:
     http://ip:3000

     Build Docker Image

        docker build -t devops-task-manager .
 
     Run Docker Container

        docker run -d -p 3000:3000 --name devops-task-manager devops-task-manager
 
## 7. CI/CD Flow

   Developer pushes source code changes to the GitHub repository. GitHub Webhooks automatically trigger the Jenkins Freestyle CI/CD pipeline whenever new code changes are detected.

  Jenkins pulls the latest source code, installs dependencies, builds the Docker image, and pushes the image to Docker Hub. The Docker container is then deployed on the AWS EC2 Ubuntu server. Monitoring tools such as Prometheus, Grafana, and AWS CloudWatch continuously monitor infrastructure health and system performance.

## 8. Monitoring Setup

 1. Prometheus

      Prometheus collects infrastructure and system metrics from the EC2 instance.


 2. Grafana

      Grafana visualizes monitoring metrics using interactive dashboards.


 3. AWS CloudWatch

      CloudWatch monitors AWS EC2 resource usage and instance health.


## 9. Cron Job Automation

Cron Jobs were configured in the AWS EC2 Ubuntu server to automate system maintenance tasks such as backup creation and log cleanup. This reduced manual administrative effort and improved server maintenance efficiency.

 1. View Existing Cron Jobs

     crontab -l


  Edit Cron Jobs


     crontab -e

 2. Automated Backup Cron Job

  The following cron job automatically creates project backups every day at 12:00 AM.

     0 0 * * * /home/ubuntu/automation/backup.sh

  3.Automated Log Cleanup Cron Job

   The following cron job automatically deletes old log files every day at 1:00 AM.

    0 1 * * * /home/ubuntu/automation/cleanup.sh

   Backup Script Execution


    ./backup.sh

   Cleanup Script Execution

    ./cleanup.sh


## 10. Purpose of Automation

* Automatic backup management
* Automatic log cleanup
* Reduced manual maintenance
* Improved server performance
* Better storage management
* Reliable infrastructure operations

## Conclusion

  The “End-to-End DevOps Pipeline Automation for a Containerized Node.js Web Application on AWS” project was successfully implemented using modern DevOps tools and cloud technologies. The project integrated GitHub, Jenkins, Docker, AWS EC2, Prometheus, Grafana, AWS CloudWatch, Shell Scripting, and Cron Jobs into a complete automated CI/CD workflow. The application deployment process was automated using Jenkins, while Docker was used for containerization and AWS EC2 was used for cloud hosting. Monitoring tools helped in tracking server performance and infrastructure health in real time.

  During the project implementation, several practical issues such as Jenkins Java version incompatibility, Docker permission errors, and Prometheus configuration problems were encountered and resolved successfully. This project provided hands-on experience in Continuous Integration, Continuous Deployment, Docker containerization, cloud deployment, monitoring, Linux server management, and automation scripting. Overall, the project demonstrated how DevOps practices can improve automation, deployment efficiency, monitoring, and infrastructure management in real-world software environments.

