# IntelliJ IDEA Guidelines
This is a repository for IntelliJ IDEA user interface guidelines.

## Working With the Site Locally
To check out and run a local copy of the site follow the steps described below.

### Checking Out Site Repository
To check out the source code run the following command:
```
git clone git@github.com:JetBrains/ui.git -b new
```

### Building and Previewing
To start the web-server run:
```
cd ui/
java -Dhelp.builder.config.file=config.properties -jar help-builder.jar
```
The web server can be viewed in browser at [http://127.0.0.1:9993/help/ui-guidelines/](http://127.0.0.1:9993/help/ui-guidelines/).
