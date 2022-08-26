CV
==

You can reach this project on domain.com, but if you prefer, it is possible to run it locally.

Installation
------------

**Step 1:** Clone project

For the next step you need to have Node.js installed on your computer.

**Step 2:** In project folder run
```npm install```

Done! If you open index.html in browser, you will see result.

Applying changes of files in reactScripts/jsx
---------------------------------------------

After installation, you will have 2 node modules in your directory: babel-cli and babel-preset-react-app. With it, you can compile jsx to js with following command:
```angular2html
npx babel --watch reactScripts/jsx --out-dir reactScripts/js --presets react-app/prod
```

