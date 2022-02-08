import schedule from '../build/index.js'

(async () => {
  // a task getting executed 4x before being paused
  const task = await schedule('1s', async ({ firedAt }) => {
    console.log(`Task fired at ${firedAt}`)
  })

  setTimeout(async () => {
    task.pause()
  }, 5 * 1000)
})()