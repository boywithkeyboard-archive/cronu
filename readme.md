# cronu

**Simple, minimalistic scheduler, created by [Azury](https://azury.dev).**

## Installation

### Install the Package

Install **cronu** using your favorite package manager.

```sh-session
npm i cronu
yarn add cronu
```

### Schedule a Job

```js
import schedule from 'cronu'

const task = await schedule('1h', async ({ firedAt }) => {
  console.log('A job running every hour.')
  console.log(firedAt) // a date string in ISO format
})

await task.pause()
await task.resume()
```
