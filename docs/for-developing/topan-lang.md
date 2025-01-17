# Git & NPM Workflow

### 1. Tagging a New Version

- **Create a new tag** (e.g., version `1.0.21`):

```bash
git tag 1.0.21
```

- **View the tag details**:

```bash
git show 1.0.21
```

- **Push the tag to the remote repository**:

```bash
git push origin --tags
```

---

### 2. Husky for Commit Hooks

- **If you encounter issues** like `process undefined` (though `process` is a Node module function), you can disable ESLint for undefined variables by adding the following line in your code:

```javascript
/* eslint-disable no-undef */
```

- Ensure that you're authorized to disable this rule as it may cause issues with code quality.

---

### 3. Publishing to NPM

- **Before publishing**, make sure to update the `version` field in `package.json` to reflect the new version.

- **Publish the package** to NPM:

```bash
npm publish
```

---

### 4. Running Tests

- **Run tests** using the following command (assuming you have test files like `test.test.js`):

```bash
npm test
```
