# IntelliJ platform guidelines
This is a repository for IntelliJ platform user interface guidelines: [https://jetbrains.design/intellij/](https://jetbrains.design/intellij/)

## Working with the site locally
To check out and run a local copy of the site follow the steps described below.

### Setup
1. This site requires [Jekyll](http://jekyllrb.com/). If you are not on macOS, click the links below for different OS instructions:

   * [Windows](http://jekyll.tips/jekyll-casts/install-jekyll-on-windows/)
   * [Linux](http://jekyll.tips/jekyll-casts/install-jekyll-on-linux/)

2. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=mac) or [WebStorm](https://www.jetbrains.com/webstorm/download/#section=mac)

3. Install bundler:

    ```
    gem install bundler
    ```

4. Install mac developer tools:
   ```
   xcode-select —install
   ```

5. Install ruby version manager chruby:
   ```
   brew install chruby ruby-install
   ```

   Open new terminal tab. Install ruby 3.0:
   ```
   ruby-install ruby 3.0.0
   ```

   Set ruby 3.0 as default. Add the following lines to the ~/.bash_profile or ~/.zshrc file:
   ```
     source /usr/local/opt/chruby/share/chruby/chruby.sh
     chruby ruby-3.0
   ```

### Checking out site repository
To check out the source code run the following command:
```
git clone https://github.com/JetBrains/ui.git
```
and install the dependencies with Bundler inside the project directory:

```
cd ui/
bundle install
```

### Building and previewing
To start the web-server go to the project directory and run:
```
bundle exec jekyll serve
```
Jekyll will build the site and start a web server, which can be viewed in your browser at [http://localhost:4000/](http://localhost:4000/).

### Running with Docker

Using Docker allows a cleaner dev environment to minimize Ruby configuration issues, as well as less need for other local macOS dependencies, e.g. Xcode command line tools. If you'd like to run Jekyll on Docker, follow these instructions:

1. Using Homebrew, install Docker Desktop
```
brew install --cask docker
```
2. Run the Docker Desktop app once to finish setup and give Docker permissions to run the engine in the background
3. Build and run a Docker container with Jekyll dependencies installed
```
docker run --name intellij --volume="$PWD:/srv/jekyll" --publish 4000:4000 jekyll/jekyll jekyll serve --watch
```

### Editing
To edit the guidelines open it in IDE. Guidelines pages are stored in _docs folder and are organised by categories. Pages are in Markdown format. See quick primer on writing in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

* To edit a page open the required .md file and modify it. Enable preview mode for markdown files on the right top corner:
 ![test](/images/readme/mardown_preview.png)
* To create a new page, create new .md file in the corresponding category directory. The file should start with:

```

---
title: Combobox
category: Components
---
```

The site is updated on the fly, refresh the page in browser to see changes. When you finish editing, publish your changes to the repository using **VCS | Commit Changes...**, which allows you to either commit or commit and push.

For more details review the [blog post](http://hadihariri.com/2014/01/04/using-webstorm-to-maintain-a-jekyll-site/) with tips and tricks on using IDE to maintain a Jekyll site.



