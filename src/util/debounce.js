import { customRef } from 'vue'

export default function debounceRef(value, duration) {
  return customRef((track, trigger) => {
    let timer
    return {
      get value() {
        track()
        return value
      },
      set value(val) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          trigger()
          value = val
        }, duration)
      }
    }
  })
}
