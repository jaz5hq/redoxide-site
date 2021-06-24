# Site Development

Please refer to **official Docusaurus documentation - [Deploy to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)**.

#### Manual Deployment to Github Pages:
1. Remember to install yarn
2. If you have set custom domain, something to take note:  
- remember to check your baseUrl in docusaurus.config.js. It should be "/".
- create a **plain text file** called "CNAME" (yes, no extension) in the **static** folder with your domain in it.

Enter following command in Command Prompt or PowerShell.

```bash
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```
_Note: replace <GITHUB_USERNAME> with your github user name_