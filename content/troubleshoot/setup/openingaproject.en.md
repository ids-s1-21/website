---
title: "RStudio Cloud Setup"
weight: 2
---

<ol>
<img src="/images/troubleshoot/rstudio-cloud.png"/>
{{% notice warning %}}
You cannot carry out the steps on this page unless you have created your GitHub account and accepted the invitation to join the GitHub organization, signed up for RStudio Cloud using our course workspace, and linked your RStudio Cloud and GitHub accounts. Please ensure you have completed the <a id="GitHubSetup">GitHub Setup</a> and <a id="RStudioSetup">RStudio Cloud Setup</a> first.
{{% /notice %}}
These instructions are used to set up a new project in RStudio Cloud via a GitHub repository ("repo").  If you just need to copy the repo to your workspace (e.g. for Application Exercises) you will only need to carry out the first part of these instructions.  For homework tasks, workshops and so on, you will need to complete the full set every time.
<br><br>
<li>Log in to <a id="RStudioCloud">RStudio Cloud</a>, and make sure that, in the sidebar on the left, the course workspace is selected.</li>
<li>Click on 
<img src="/images/troubleshoot/10-new-project.png"/>
<li>Then, click on <strong>Authentication</strong>.</li>
<img src="/images/troubleshoot/github-auth-1.png"/>
<li>In the Authentication window, check the box for <strong>Enabled</strong>.</li>
<img src="/images/troubleshoot/github-auth-2.png"/>
<li>In the next window, click on the green box that says “Authorize RStudio”.</li>
<img src="/images/troubleshoot/github-auth-3.png"/>
<li>Back in the Authentication window, check the box for <strong>Private repo access</strong> also enabled, and once again, on the green box that says “Authorize rstudio” in the next window.</li>
<img src="/images/troubleshoot/github-auth-4.png"/>
{{% notice note %}}
At this point you should also make sure that the course organization shows up for you under Organization access. If it does not, this means you have not yet accepted the GitHub invitation to join the course, and you should go back and do that.
{{% /notice %}}
<li>Once you’re done, both of these boxes should be checked.</li>
<img src="/images/troubleshoot/github-auth-5.png"/>
<li>To confirm that you’ve successfully linked up your GitHub and RStudio Cloud accounts, go to <a href="https://github.com/settings/applications">GitHub settings > Applications</a>. You should see RStudio listed as an authorized app under Authorized OAuth Apps. If you don’t this is a good time to ask for <a id="help">help</a>.</li>
<img src="/images/troubleshoot/github-auth-6.png"/>
</ol>
