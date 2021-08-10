---
title: Suggested Workflow
weight: 7
---

For each assignment in this course (except the quizzes), you will start with a GitHub repo created for you containing the starter documents you will build upon when working on your assignment.

These repos all have the same format:
`<code>-<num>-<assignment name>-<username/team name>`. So for example, your repo for the first homework (not assessed) would look like "hw-00-pet-names-example_student", and the first lab looking like "lab-00-hello-ids-example_student".

{{% notice note %}}
If there is no GitHub repo created for you for an assignment, it is likely the teaching staff do not have your GitHub username when the assignment was issued. Please follow the first time setup instructions on the <a id="troubleshoot">Setup & Troubleshooting</a> page.
{{% /notice %}}

The first step is always to bring these files into RStudio so that you can edit them, run them, view your results, and interpret them.
This action is called **cloning**.

Then you will work in RStudio on the data analysis, making **commits** along the way (snapshots of your changes) and finally **push** all your work back to GitHub.

The next few steps will walk you through the process of getting information of the repo to be cloned, cloning your repo in a new RStudio Cloud project, and getting started with the analysis.

### Step 1. Get URL of repo to be cloned

On GitHub, click on the green **Code** button, select **HTTPS** (this might already be selected by default, and if it is, you'll see the text *Use Git or checkout with SVN using the web URL* jas in the image on the right).
Click on the clipboard icon 📋 to copy the repo URL.

<img src="/images/assessments/clone-repo-link.png">

### Step 2. Go to RStudio Cloud

Go to [rstudio.cloud](https://rstudio.cloud/ "RStudio Cloud") and then **navigate to the course workspace** via the left sidebar.
It's very important that you do this for two reasons:

-   It's only when you're in the course workspace that you'll be able to benefit from R packages I've pre-installed for you so that your project can be configured correctly.
-   It's only when you're in the course workspace that your usage of RStudio Cloud won't count towards their free usage limits. RStudio offers free usage of their Cloud service, but they cap it at 15 hours. The university has already paid for an RStudio Cloud account for you, and you want to make sure you're taking advantage of that, and not using up your personal free hours.

<img src="/images/assessments/course-workspace.png">

Before you proceed, confirm that you are in the course workspace by checking out what's on your top bar in RStudio Cloud.

### Step 3. Clone the repo

In RStudio, click on the **down arrow** next to New Project and then choose **New Project from Git Repository**.

In the pop-up window, **paste the URL** you copied from GitHub, make sure the box for **Add packages from the base project** is checked (it should be, by default) and then click **OK**.

<img src="/images/assessments/new-project-from-git.png">