# AWS Elastic Beanstalk CI/CD Demo

This is a starter repository for Project 2 in the [AWS CI/CD Guide](file:///C:/Users/Dell/.gemini/antigravity/brain/5ab87107-2b37-4363-8e14-1f8938449a4b/aws_cicd_freetier_guide.md).

It contains a simple Express server (`app.js`) and the build configuration (`buildspec.yml`) needed by AWS CodeBuild to bundle the application.

## How to use this folder:

1. **Initialize Git and commit the files:**
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   ```

2. **Push to a new GitHub repository:**
   * Create a new repository on GitHub (e.g. `aws-eb-cicd-demo`).
   * Set your remote and push:
     ```bash
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
     git push -u origin main
     ```

3. **Follow the guide to connect this to AWS:**
   Refer back to [Project 2 in the AWS CI/CD Guide](file:///C:/Users/Dell/.gemini/antigravity/brain/5ab87107-2b37-4363-8e14-1f8938449a4b/aws_cicd_freetier_guide.md) to set up AWS Elastic Beanstalk, CodePipeline, and CodeBuild.
