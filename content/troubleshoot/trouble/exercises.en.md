---
title: "I can't work on my exercises in RStudio Cloud"
weight: 6
---

### I can't find my exercises on RStudio Cloud
Before working on them in RStuido Cloud, you have to __clone__ them from your repository on GitHub. To do this follow the instructions found on the <a id="workflow"> Suggested Workflow</a> page.


### A library I need is not loading in RStudio

If you have this problem it is most likely you are seeing this error in the console: 
`
Error in library(<package name>) : there is no package called '<package name>'
`

This means the package has not been installed yet. To do this, first you can try installing it from CRAN using:
```{r}
install.packages("<package name>")
```

This will not work for all packages as not all of them are on CRAN (e.g. "dsbox"). For these packages you will need to run something like the following:

```
install.packages("devtools")
devtools::install_github("<github_username/package_name>")
```

Generally, if you have problems installing something, go to a search engine and type in the name of the package to find its associated webpage. Most packages will have instructions on how to install them online.