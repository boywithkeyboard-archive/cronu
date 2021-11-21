import { intervals } from './config.json'

/**
 * **Schedule Task**
 * 
 * Schedule a task in a specific interval.
 * 
 * @param interval
 * @param task
 */
export default async (interval: string, task: Function) => {
  const intervals = ['minutely', 'hourly', 'daily', 'weekly', 'monthly']
  if (!intervals.includes(interval))
    return false
  
  let milliseconds
  if (interval === 'minutely')
    milliseconds = 60000
  else if (interval === 'hourly')
    milliseconds = 60 * 60000
  else if (interval === 'daily')
    milliseconds = 24 * 60 * 60000
  else if (interval === 'weekly')
    milliseconds = 7 * 24 * 60 * 60000
  else if (interval === 'monthly')
    milliseconds = 30 * 24 * 60 * 60000

  setInterval(async () => {
    await task(new Date())
  }, milliseconds)

  return true
}