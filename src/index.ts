import ms from 'ms'

/**
 * **Schedule Task**
 * 
 * Schedule a task at a specific interval.
 */
export default async (interval: string | number, task: Function) => {
  let executions = 0

  let timer: NodeJS.Timer | null = setInterval(async () => {
    await task({
      firedAt: new Date().toISOString(),
      executions
    })
    executions++
  }, typeof interval === 'string' ? ms(interval) : interval)

  return {
    /**
     * **Pause Task**
     * 
     * Pause the task to save memory for more important stuff.
     */
    pause: async () => {
      if (timer === null) return
      clearInterval(timer)
      timer = null
    },
    
    /**
     * **Resume Task**
     * 
     * Resume the task whenever you think you're ready to.
     */
    resume: async () => {
      if (timer !== null) return
      timer = setInterval(async () => {
        await task({
          firedAt: new Date().toISOString(),
          executions
        })
        executions++
      }, typeof interval === 'string' ? ms(interval) : interval)
    }
  }
}