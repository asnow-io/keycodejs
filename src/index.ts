export { Keycode } from './enum'

export function wasPressed(e: KeyboardEvent, key: string | string[]): boolean {
  if (Array.isArray(key)) {
    return key.some((k) => e.code === k)
  }

  return e.code === key
}
