import console, { log, info, warn, error } from "node:console";

export default function EseLogger() {
  return {
    ...console,
    log: (...args: Parameters<typeof log>) =>
      log(`[${new Date().toISOString()}]: `, ...args),
    info: (...args: Parameters<typeof info>) =>
      info(`[${new Date().toISOString()}]: `, ...args),
    warn: (...args: Parameters<typeof warn>) =>
      warn(`[${new Date().toISOString()}]: `, ...args),
    error: (...args: Parameters<typeof error>) =>
      error(`[${new Date().toISOString()}]: `, ...args),
  };
}
