# Cloudboosta Incident Monitoring Dashboard

### End-to-End CI/CD & GitOps Deployment on Azure (AKS + Argo CD)

---

## Overview

This project demonstrates an end-to-end **CI/CD and GitOps pipeline** for deploying a containerised application on **Azure Kubernetes Service (AKS)**.

It automates the full deployment lifecycle:

**Code Change → Build → Push → Deploy → Live Update**

The solution leverages **Azure DevOps for CI**, **Argo CD for GitOps-based deployment**, and **Azure Container Registry (ACR)** for image storage.

---

## Architecture

![Architecture Diagram](screenshots/incident-dashboard.png)

---

## Workflow

```text
Developer → GitHub (App Repo) → Azure DevOps → ACR
                         ↓
                GitHub (Manifests Repo)
                         ↓
                      Argo CD
                         ↓
                        AKS
                         ↓
                  LoadBalancer
                         ↓
                        User
```

## Technologies Used

* **Cloud:** Microsoft Azure
* **CI/CD:** Azure DevOps
* **Containerisation:** Docker
* **Container Registry:** Azure Container Registry (ACR)
* **Orchestration:** Kubernetes (AKS)
* **GitOps:** Argo CD
* **Version Control:** GitHub

---

##  Demo

[![Watch Demo](screenshots/video-thumbnail.png)](https://youtu.be/RCwndCRkN7g)

---

## Full Documentation

For a detailed breakdown including screenshots and implementation steps:

👉 [View Full Report](report.md)

---

## 🔗 Project Repositories

* **Application Repository:**
  https://github.com/chioma-devops/incident-dashboard-app.git

* **Manifests Repository:**
  https://github.com/chioma-devops/incident-dashboard-manifests.git

---

##  Key Features

* Automated CI/CD pipeline using Azure DevOps
* GitOps-based deployment with Argo CD
* Version-controlled Kubernetes deployments
* Automated image build and push to ACR
* Continuous delivery with zero manual deployment steps

---

##  Key Takeaway

This project highlights how combining **CI/CD with GitOps** enables:

* Reliable deployments
* Improved visibility
* Consistent infrastructure state
* Reduced manual intervention

---

## Author

**Chioma Vanessa Egwuibe**
DevOps Engineer | Cloud Engineer

---
# incident-dashboard-app