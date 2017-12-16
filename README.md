# fht-style

A tool for adding automatic code styling and formatting to existing JavaScript projects.


## Usage

`npx fht-style` in application root


## What Does It Do

1. Creates a separate branch `fht-styling`
2. Installs [lint-staged](https://github.com/okonet/lint-staged), [prettier](https://github.com/prettier/prettier), and [husky](https://github.com/typicode/husky) npm packages as dev-dependencies
3. Adds prettier configuration and pre-commit hook to package.json
4. Commits all the changes to git

*Note*: Webstorm does not stage files before committing through built-in VCS integration. For this reason, we have to use post-commit hook to reset staged files after the commit.


## MIT License

Copyright (c) 2013-present, 500Tech, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
