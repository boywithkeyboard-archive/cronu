# cronu

Simple, minimalistic scheduler, created by [Azury](https://azury.dev).

#### Why should you use cronu?

- fully asynchronous
- small n' easy
- zero dependencies

## Installation

### Install the Package

Install it using your favorite package manager.

```sh-session
npm i cronu
yarn add cronu
```

### Schedule a Job

```js
import { schedule } from 'cronu'

schedule('hourly', async () => {
  console.log('This is a job executing every hour.')
})

schedule('minutely', async (date) => {
  console.log(`Fire Date: ${date}`)
})
```

### Intervals

- `minutely`
- `hourly`
- `daily`
- `weekly`
- `monthly`
