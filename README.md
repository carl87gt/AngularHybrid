# `angularHybrid` 

Based on raymer/angularHybrid
https://github.com/raymer/angularHybrid

by Jonathan Raymer
https://github.com/raymer

and hybrid helper module from Angular v4: 

Hybrid Upgrade Application https://hackernoon.com/angular-v4-hybrid-upgrade-application-73d5afba1e01

https://github.com/dormd/angularjs-to-angular4

by Dor Moshe

https://github.com/dormd

https://twitter.com/DorMoshe

https://www.facebook.com/DorMoshe2

## Getting Started

To get you started you can simply clone the `angularHybrid` repository and install the dependencies:

### Prerequisites

You need git to clone the `angularHybrid` repository. You'll also need NPM and Bower to install the application packages.

### Clone `angularHybrid`

Clone the `angularHybrid` repository using git:

```
git clone https://github.com/raymer/angularHybrid.git
cd [clone directory]
```

### Install Dependencies

```
npm install
```

* `node_modules` - contains the npm packages for the tools we need


### Run the Application

I have preconfigured the project with a simple webpack development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/#/foo`.


### Running Unit Tests

To run the AngularJS tests

```
karma start
```

To run the Angular tests

```
karma start karma.conf.webpack.js
```
