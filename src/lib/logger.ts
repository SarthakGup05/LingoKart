type LogLevel = "silent" | "error" | "debug"

const level = (process.env.LINGOKART_LOG_LEVEL ?? "silent") as LogLevel

const canDebug = level === "debug"
const canError = level === "debug" || level === "error"

export const logger = {
  debug: (...args: unknown[]) => {
    if (canDebug) {
      console.debug(...args)
    }
  },
  error: (...args: unknown[]) => {
    if (canError) {
      console.error(...args)
    }
  },
}
