# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server
<p class="has-line-data" data-line-start="1" data-line-end="3">To start a local development server, run:<br>
step 1: run “npm install”</p>
<p class="has-line-data" data-line-start="4" data-line-end="8">step 2:  go to <a href="http://console.firebase.google.com">console.firebase.google.com</a><br>
2(a). Create a firebase project, enable authentication, hosting, and firestore.<br>
2(b). Install “Firebase Email Trigger Extension”<br>
2©. Go to project settings in your firebase project and copy the JSON credentials</p>
<p class="has-line-data" data-line-start="9" data-line-end="10">step 3:  now go to your angular project and paste the credentials in the .env files(both             production and non production files)</p>
<p class="has-line-data" data-line-start="11" data-line-end="17">To Build and Deploy the website online.<br>
step 1: run “npm build --configuration=production --aot”<br>
step 2: run “firebase init” select hosting and hit enter.<br>
=== Hosting Setup<br>
Detected an existing Angular codebase in the current directory, should we use this? No<br>
Do you want to use a web framework? (experimental) No</p>
<pre><code>&lt;!--Your public directory is the folder (relative to your project directory) that--&gt;
&lt;!--will contain Hosting assets to be uploaded with firebase deploy. If you--&gt;
&lt;!--have a build process for your assets, use your build's output directory.--&gt;

 What do you want to use as your public directory? dist/portfolio/browser
Configure as a single-page app (rewrite all urls to /index.html)? Yes
Set up automatic builds and deploys with GitHub? No
File dist/portfolio/browser/index.html already exists. Overwrite? No
Skipping write of dist/portfolio/browser/index.html
</code></pre>
<p class="has-line-data" data-line-start="28" data-line-end="29">step 3: run “firebase deploy”</p>

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
