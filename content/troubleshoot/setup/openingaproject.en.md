---
title: "Opening a Project"
weight: 3
---

<ol>
{{% notice warning %}}
You cannot carry out the steps on this page unless you have created your GitHub account and accepted the invitation to join the GitHub organization, signed up for RStudio Cloud using our course workspace, and linked your RStudio Cloud and GitHub accounts. Please ensure you have completed the <a id="GitHubSetup">GitHub Setup</a> and <a id="RStudioCloudSetup">RStudio Cloud Setup</a> first.
{{% /notice %}}
These instructions are used to set up a new project in RStudio Cloud from a GitHub repository ("repo").  If you just need to copy the repo to your workspace (e.g. for Application Exercises) you will only need to carry out the first part of these instructions.  For homework tasks, workshops and so on, where you need to push the changes back to GitHub, you will need to complete the full set every time.
<br><br>
<li>Log in to <a id="RStudioCloud">RStudio Cloud</a>, and make sure that, in the sidebar on the left, the course workspace is selected.</li>
<li>Click on <strong>New Project</strong> at the top right, then click on <strong>New Project from Git Repository</strong>.</li>
<img src="/images/troubleshoot/10-new-project.png"/>
<li>Type (or copy-and-paste) into the box that appears the URL of the GitHub repository you want to use, and click <strong>OK</strong>.</li>
<img src="/images/troubleshoot/11-url.png"/>
If you have no need to push the project back, you are now done.  Follow the rest of these steps if this is a task where you will need to commit and push changes.
<li>Click on the <strong>Git</strong> tab at the top-right, and click on <strong>Pull</strong>.</li>
<img src="/images/troubleshoot/12-rstudio-pull.png"/>
<li>You will be prompted for your username.  Enter your <strong>GitHub</strong> username, and click <strong>OK</strong>.</li>
<img src="/images/troubleshoot/13-username.png"/>
<li>A new box will appear.  <strong>Do not</strong> enter your GitHub password in here; it won't work.  Instead, leave this tab open, and open a new tab in your browser.  Go to <a id="GitHub">GitHub</a> in this tab, and log in.</li>
<li>In GitHub, click on your profile image at the top left, then click on <strong>Settings</strong>.</li>
<img src="/images/troubleshoot/01-github-menu.png"/>
<li>From the side menu, choose <strong>Developer Settings</strong>.</li>
<img src="/images/troubleshoot/02-github-develop.png"/>
<li>Choose the <strong>Personal access tokens</strong> option.</li>
<img src="/images/troubleshoot/03-github-PAT.png"/>
<li>You are now setting up a new personal access token.  In the "note" box, enter a descriptive name of the project you're creating the token for, e.g. "Homework 00".  Choose <strong>30 days</strong> for the Expiration.</li>
<li>Under "Select scopes", tick the box next to <strong>repo</strong>, which will also tick all the sub-options.  Leave all the other boxes un-ticked.</li>
<img src="/images/troubleshoot/05a-github-tickboxes.png"/>
<img src="/images/troubleshoot/05b-github-tickboxes.png"/>
<li>Click on <strong>Generate token</strong>.</li>
<img src="/images/troubleshoot/06-github-gen-token.png"/>
<li>You will now be presented with the token, which is a long string of characters.  Click on the clipboard icon to copy the token, so you can paste it into RStudio Cloud.</li>
<img src="/images/troubleshoot/07-github-copy.png"/>
{{% notice warning %}}
If you prefer, you can store this token in a password manager, in which case you can use it for multiple projects until it expires.  You <strong>should never</strong> store it in a plaintext, unencrypted file, just as you should never store passwords in this way.
{{% /notice %}}
{{% notice note %}}
If you navigate away from this page without copying the token, you won't be able to see it again.  That's no problem; you'll just need to go back to step 7 and create a new token; after step 9, you should see a list of all your tokens, at which point you should choose the option to <strong>Delete</strong> the token that you didn't manage to copy before moving to step 10.  You'll also have to create a new token if your token expires (i.e. thirty days after you made it) and you're still working on that project.  
{{% /notice %}}
<li>Go back to the tab with RStudio Cloud, and paste the token into the box, using Ctrl+V (Windows)/Cmd+V (Mac).  Click <strong>OK</strong>.</li>
<img src="/images/troubleshoot/14-token-entry.png"/>
You are now done!  To test that it works, click the <strong>Pull</strong> button again: you shouldn't see any prompts for your username or password.
</ol>
