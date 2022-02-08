import schedule from '../build/index.js'

test('schedule', async () => {
  const task = await schedule('1h', async () => {
    console.log('Hello World')
  })

  expect(task).toEqual(
    expect.objectContaining({
      pause: expect.any(Function),
      resume: expect.any(Function)
    })
  )

  await task.pause()
})