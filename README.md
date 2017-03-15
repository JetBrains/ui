# IntelliJ IDEA Guidelines
This is a repository for IntelliJ IDEA user interface guidelines.

## Working With the Site Locally
To check out and run a local copy of the site follow the steps described below.

### Pre-requirements
1. This site requires [Jekyll](http://jekyllrb.com/). Follow the instruction to install
 Jekyll on your machine:
 * [Mac OS](http://jekyll.tips/jekyll-casts/install-jekyll-on-os-x/)
 * [Windows](http://jekyll.tips/jekyll-casts/install-jekyll-on-windows/)
 * [Linux](http://jekyll.tips/jekyll-casts/install-jekyll-on-linux/)
2. Install the dependencies with Bundler:  

    ```
    bundle install
    ```  
3. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=mac) or [WebStorm](https://www.jetbrains.com/webstorm/download/#section=mac)



### Checking Out Site Repository
To check out the source code run the following command:
```
git clone git@github.com:JetBrains/ui.git
```

### Building and Previewing
To start the web-server run:
```
cd ui/
bundle exec jekyll serve
```
Jekyll will build the site and start a web server, which can be viewed in your browser at [http://localhost:4000/](http://localhost:4000/).

### Editing
To edit the guidelines open it in IDE. Guidelines pages are stored in _docs folder and are organised by categories. Pages are in Markdown format. See quick primer on writing in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). 

* To edit a page open the required .md file and modify it. Enable preview mode for markdown files on the right top corner:  
 ![test](/images/readme/mardown_preview.png)
* To create a new page, create new .md file in the corresponding category directory. The file should start with: 
    
```

---
title: Combobox 
category: Components  
order: 1
---
``` 

The site is updated on the fly, refresh the page in browser to see changes. When you finish editing, publish your changes to the repository using **VCS | Commit Changes...**, which allows you to either commit or commit and push.

For more details review the [blog post](http://hadihariri.com/2014/01/04/using-webstorm-to-maintain-a-jekyll-site/) with tips and tricks on using IDE to maintain a Jekyll site.
                                                                                                                                                                                     

 
