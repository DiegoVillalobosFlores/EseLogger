export default function EsseLogger(...args: Parameters<typeof console.log>) {
  return console.log(`[${new Date().toISOString()}]: `, ...args);
}
