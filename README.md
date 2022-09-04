# template-web3-front-ts-nextjs

template repository for web3 front-end using typescript, next.js and react.

# stacks

| stack           | category     | description                             |
| --------------- | ------------ | --------------------------------------- |
| typescript      | dev          | for typescript, not javascript          |
| react           | dev          | for react, not vue angular...           |
| next.js         | dev          | framework                               |
| story book      | test         | for test on browser. builder is webpack |
| jest            | test         | for unit test                           |
| testing-library | test         | for unit test of react                  |
| eslint          | static check | for lint                                |
| prettier        | static check | fix style automatically                 |
| husky           | static check | prevent to commit non checked code      |

# how to use this template?

- update `xxx` on package.json
- check your test targets
  - template has two jest config which are `jest.jsdom.config.js` and `jest.node.config.js`. if you need both config you don't need to fix anything. but you need only one, you should delete another config and fix `test` script command on package.json.
    - `jest.jsdom.config.js` : for react component
    - `jest.node.config.js` : for typescript library which run on node module
- delete sample code on `./src`
  - `./src/components/Button` : sample react component and test code.
  - `./src/lib/script` : sample typescript library and test code.
