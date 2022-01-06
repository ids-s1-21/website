---
title: Final Projects
weight: 4
---

You, as part of a __team__, will be responsible for the completion of an open ended final project for this course, the goal of which is to tackle an “interesting” problem using the tools and techniques covered in this class. Each team’s work will also be shared with and evaluated by at least one other team at an earlier stage in order to provide feedback in the form of code review.

{{% notice tip %}}
Stick to optional interim deadlines.
{{% /notice %}}

## Too Long Didn't Read (TL;DR)

Pick a dataset, any dataset...

...and do something with it. That is your final project in a nutshell. 

## May be too long, but please do read

The final project for this class will consist of analysis on a dataset of your own choosing. You can choose the data based on your interests or based on work in other courses or research projects. The goal of this project is for you to demonstrate proficiency in the techniques we have covered in this class (and beyond, if you like) and apply them to a novel dataset in a meaningful way.

The goal is not to do an exhaustive data analysis i.e., do not calculate every statistic and procedure you have learned for every variable, but rather let us know that you are proficient at asking meaningful questions and answering them with results of data analysis, that you are proficient in using R, and that you are proficient at interpreting and presenting the results. Focus on methods that help you begin to answer your research questions. You do not have to apply every statistical procedure we learned. Also, critique your own methods and provide suggestions for improving your analysis. Issues pertaining to the reliability and validity of your data, and appropriateness of the statistical analysis should be discussed here.

The project is very open ended. You should create some kind of compelling visualization(s) of this data in R. There is no limit on what tools or packages you may use, but sticking to packages we learned in class (e.g. `tidyverse`) is advised. You do not need to visualize all of the data at once. A single high quality visualization will contribute much more to a good mark than a large number of poor quality visualizations. Also pay attention to your presentation. Neatness, coherency, and clarity will count. All analyses must be done in RStudio, using R. 

### Data

In order for you to have the greatest chance of success with this project it is important that you choose a manageable dataset. This means that the data should be readily accessible and large enough that multiple relationships can be explored. As such, your dataset must have at least 50 observations and between 10 and 20 variables (exceptions can be made but you must speak with the course team first). The variables in the data should include categorical variables, discrete numerical variables, and continuous numerical variables.

If you are using a dataset that comes in a format that we haven't encountered in class, make sure that you are able to load it into R as this can be tricky depending on the source. If you are having trouble ask for help before it is too late.

{{% notice warning %}}
Do not reuse datasets used in examples, homework assignments, or labs in the class.
{{% /notice %}}

Below are a list of data repositories that might be of interest to browse. You're not limited to these resources, and in fact you're encouraged to venture beyond them. But you might find something interesting there:

<ul>
  <li><a id="TidyTuesday">TidyTuesday</a></li>
  <li><a id="NHSSOD">NHS Scotland Open Data</a></li>
  <li><a id="EDOD">Edinburgh Open Data</a></li>
  <li><a id="SOS">Open access to Scotland's official statistics</a></li>
  <li><a id="BSDP">Bikeshare data portal</a></li>
  <li><a id="UKGov">UK Gov Data</a></li>
  <li><a id="KaggleData">Kaggle datasets</a></li>
  <li><a id="OpenIntroData">OpenIntro datasets</a></li>
  <li><a id="Awesome">Awesome public datasets</a></li>
  <li><a id="YRBSS">Youth Risk Behavior Surveillance System (YRBSS)</a></li>
  <li><a id="PRISM">PRISM Data Archive Project</a></li>
  <li><a id="HarvardData">Harvard Dataverse</a></li>
  <li><a id="OECD">Organisation for Economic Co-operation and Development (OECD)</a></li>
  <li>If you know of others, let me know, and we'll add here...</li>
</ul>

### Deliverables

1. Proposal     - due Tuesday, 26 Oct, at 16:00 UK
1. Presentation - due Friday, 3 Dec, at 09:00 UK
1. Write-up     - due Friday, 3 Dec, at 09:00 UK

#### Proposal

- Section 1 - Introduction: The introduction should introduce your general 
research question and your data (where it came from, how it was collected, 
what are the cases, what are the  variables, etc.).

- Section 2 - Data: Place your data in the `/data` folder, and add dimensions 
and codebook to the README in that folder. Then print out the output of 
`glimpse()` or `skim()` of your data frame.

- Section 3 - Data analysis plan:
  - The outcome (response, Y) and predictor (explanatory, X) variables you will use to answer your question.
  - The comparison groups you will use, if applicable.
  - Very preliminary exploratory data analysis, including some summary statistics.
and visualizations, along with some explanation on how they help you learn more 
about your data. (You can add to these later as you work on your project.)
  - The statistical method(s) that you believe will be useful in answering your 
question(s). (You can update these later as you work on your project.)
  -  What results from these specific statistical methods are needed to support 
your hypothesized answer?

Each section should be no more than 1 page (excluding figures). You can check a 
print preview to confirm length. 

#### Presentation

Prepare a slide deck using one of the templates in your repo. There are two templates to choose from, using two different HTML presentation packages which allow you to make presentation slides using R Markdown syntax. The first is a package called `xaringan`, which Mine used to make her slides (you can see the code for the slides in the [slides repo](https://github.com/ids-s1-21/slides)). However the course organizers this year prefer using `reveal.js`, so we have also included a similar template to use that too.

There isn't a limit to how many slides you can use, just a time limit (5 minutes total). Each team member should get a chance to speak during the presentation. Your presentation should not just be an account of everything you tried ("then we did this, then we did this, etc."), instead it should convey what choices you made, and why, and what you found.

{{% notice tip %}}
Before you finalize your presentation, make sure your chunks are turned off with `echo = FALSE`.
{{% /notice %}}

Presentation schedule: Presentations will take place during the last workshop of the semester. All teams (that can) will give them as a live presentation in workshop, although in some cases we will accept submission of a pre-recorded video depending on individual team circumstances (please discuss this with the course team). During your workshop you will watch presentations from other teams in your workshop and provide feedback in the form of peer evaluations. The presentation line-up will be generated randomly.

{{% notice note %}}
Should you need to [pre-record your presentation](https://docs.google.com/document/d/1FxpFqUbEVpOzp7PWICC8gEvmIKfsNPT3mmQuSufsGHQ/edit?usp=sharing), you will need to upload your presentation *somewhere* and then add a link to the video in your repo README. We recommend you upload your video to MediaHopper. To do so, go to [media.ed.ac.uk](https://media.ed.ac.uk/), log in from the top left corner, then click on Add New Media and upload your video as unlisted. Once uploaded, grab the sharing link and add it to your repo README, next to the link to your slides. [This video](https://www.youtube.com/watch?v=rqxhOgrifyk) goes through this process. Ask questions **early** if anything is unclear. Your video must be updated and a link must be added to your repo by 9am UK time on 3 December!
{{% /notice %}}

#### Write-up

Along with your presentation slides, we want you to provide a brief summary of your project in the README of your repository.

This write-up, which you can also think of as an summary of your project, should provide information on the dataset you're using, your research question(s), your methodology, and your findings. 

#### Repo organization

The following folders and files in your project repository:

* `presentation.Rmd` + `presentation.html`: Your presentation slides
* `README.md`: Your write-up
* `/data/*`: Your dataset in csv or RDS format, in the `/data` folder.
* `/proposal`: Your proposal from earlier in the semester

Style and format does count for this assignment, so please take the time to make sure everything looks good and your data and code are properly formatted.

## Tips

- You're working in the same repo as your teammates, so merge conflicts will happen and issues will arise, and that’s fine! Commit and push often, and ask questions when stuck.
- Review the marking guidelines below and ask questions if any of the expectations are unclear.
- Make sure each team member is contributing, both in terms of quality and quantity of contribution (we will be reviewing commits from different team members).
- Set aside time to work together and apart (physically).
- When you're done, review the documents on GitHub to make sure you're happy with the final state of your work. Then go get some rest!
- Code: In your presentation your code should be hidden (`echo = FALSE`) so that your document is neat and easy to read. However, your document should include all your code such that if I re-knit your R Markdown file I should be able to obtain the results you presented. **Exception:** If you want to highlight something specific about a piece of code, you're welcome to show that portion. 
- Teamwork: You are to complete the assignment as a team. All team members are expected to contribute equally to the completion of this assignment and team evaluations will be given at its completion---anyone judged to not have sufficiently contributed to the final product will have their grade penalized. While different teams members may have different backgrounds and abilities, it is the responsibility of every team member to understand how and why all code and approaches in the assignment work.

## Marking

Total                          | 100 pts
-------------------------------|--------
Proposal                       | 10 pts
Presentation                   | 50 pts
Write-up                       | 15 pts
Reproducibility and organization | 10 pts
Team peer evaluation           | 10 pts
Classmates' evaluation         | 5 pts

### Criteria

- Content: What is the quality of research question and/or policy question, and the relevancy of data to that question/those questions?
- Correctness: Are statistical procedures carried out and explained correctly?
- Writing and Presentation: What is the quality of the statistical presentation, writing, and explanations?
- Creativity and Critical Thought: Is the project carefully thought out? Are the limitations carefully considered? Does it appear that time and effort went into the planning and implementation of the project?

### Team peer evaluation

You will be asked to fill out a survey where you rate the contribution and teamwork of each team member out of 10 points. You will additionally report a contribution percentage for each team member. Filling out the survey is a prerequisite for getting credit on the team member evaluation. If you are suggesting that an individual did less than 20% of the work, please provide some explanation. If any individual gets an average peer score indicating that they did less than 10% of the work, this person will receive half the grade of the rest of the group.

### Late work policy

- There is no late submission / make up for the presentation. You must be in class on the day of the presentation to get credit for it *or* pre-record and submit your presentation by 9am in the morning of the presentations.  (In case of illness, requirement to self-isolate or similar, special circumstances can be applied for from the university: see the <a id="Policies">Policies" page</a>.

- The late work policy for the write-up is 5% of the maximum obtainable mark per calendar day up to seven calendar days after the deadline. If you intend to submit work late for the project, you must notify the course organizer before the original deadline, and also as soon as the completed work is submitted on GitHub.

### Making your project public
At the end of the course you will have the opportunity to make your project repositories public to show off your work. Instructions on how to do this are below:

{{% notice tip %}}
You may want to close any remaining issues.
{{% /notice %}}

1. Decide as a team if the entire team is ok with some or all members to fork the team repo and feature it on their profiles, keeping in mind that the commit history will show contributions from everyone.

2. Have one member of the team email the course organiser with everyone else in the cc requesting that project made public. I will then change the projects visibility.

{{% notice note %}}
The next bit is optional but recommended as it will mean it appears on your own GitHub profile and you can make any changes you like without affecting the original.
{{% /notice %}}

3. Once public, you can press the *fork* button to make a copy of the repository. This will bring its commit history (but not the issues, i.e. not the feedback with your proposal score on it) along with it. 

<img src="/images/assessments/fork1.PNG"/>

4. You can then assign the fork to your GitHub profile.

<img src="/images/assessments/fork2.PNG"/>

<img src="/images/assessments/fork3.PNG"/>

5. If you wish you can then pin it in your GitHub profile and/or continue to make changes to it as you like.

<img src="/images/assessments/fork4.PNG"/>