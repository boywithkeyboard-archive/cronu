const { schedule } = require('../build/index.js')

test('invalid schedule', async () => {
  expect(await schedule('invalid', async () => {
    console.log('Hello World')
  })).toBe(false)
})

test('minutely date', async () => {
  expect(await schedule('minutely', async (date) => {
    console.log(date)
  })).toBe(true)
})