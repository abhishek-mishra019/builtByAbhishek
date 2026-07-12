# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development Server

To start a local development server:

### Step 1

Install the project dependencies:

```bash
npm install
```

### Step 2

Go to **https://console.firebase.google.com**

- **2(a).** Create a Firebase project and enable:
  - Authentication
  - Hosting
  - Firestore
- **2(b).** Install the **Firebase Email Trigger Extension**.
- **2(c).** Go to **Project Settings** and copy your Firebase configuration (JSON credentials).

### Step 3

Paste the Firebase credentials into both environment files (production and development).

---

## Build and Deploy

### Step 1

Build the production version:

```bash
ng build --configuration=production --aot
```

### Step 2

Login to Firebase:

```bash
firebase login
```

### Step 3

Link your Firebase project:

```bash
firebase use --add
```

### Step 4

Initialize Firebase Hosting:

```bash
firebase init
```

Choose the following options:

```text
Detected an existing Angular codebase in the current directory, should we use this?
> No

Do you want to use a web framework? (experimental)
> No

What do you want to use as your public directory?
> dist/portfolio/browser

Configure as a single-page app (rewrite all URLs to /index.html)?
> Yes

Set up automatic builds and deploys with GitHub?
> No

File dist/portfolio/browser/index.html already exists. Overwrite?
> No

Skipping write of dist/portfolio/browser/index.html
```

### Step 5

Deploy the website:

```bash
firebase deploy
```

---

## Run the Development Server

```bash
ng serve
```

Once the server is running, open your browser and navigate to:

```
http://localhost:4200/
```

The application will automatically reload whenever you modify any of the source files.

---

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

---

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

---

## Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use:

```bash
ng test
```

---

## Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

---

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
