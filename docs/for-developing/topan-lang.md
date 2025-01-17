1. to push tag

git tag 1.0.21 or something

git show 1.0.21 or something

git push origin --tags

2. husky for commit
   if any problem that cannot solve like
   `process undifined` but process is node module function
   add /_ eslint-disable no-undef _/ and make sure you are approvite to use this

3. npm publish

- remember to change the version of package.json before publish

4. if use test, like test.test.js

- run test with npm test
