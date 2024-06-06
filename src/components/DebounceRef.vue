<template>
  <input v-model="text" type="text" />
  <div>
    text: <span>{{ text }}</span>
  </div>
</template>

<script>
import debounceRef from '../util/debounce'
//const text = debounceRef('', 1000)
export default {
  name: 'DebounceRef',
  data() {
    return {
      text: debounceRef('', 1000)
    }
  }
}
</script>
