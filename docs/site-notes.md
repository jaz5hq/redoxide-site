---
slug: site-notes
title: Site Notes
keywords:  
  - docusaurus
  - github pages
---

# Site Development

Please refer to **official Docusaurus documentation - [Deploy to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)**.

## Markdown Features
- Please use the markdown headers by order like a tree list starting with h2 as followed: h2(##) > h3 > h4 > h5 > h6.
- It will generate a content table on right side. 
- Failure： h2 > h4 will cause incomplete content table. 

## Manual Deployment to Github Pages:
1. Remember to install yarn
2. Remember to set "GIT_USER" in environment variables.
3. If you have set custom domain, something to take note:  
- remember to check your baseUrl in docusaurus.config.js. It should be "/".
- create a **plain text file** called "CNAME" (yes, no extension) in the **static** folder with your domain in it.

Enter following command in Command Prompt or PowerShell.

```
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```
_Note: replace <GITHUB_USERNAME> with your github user name_