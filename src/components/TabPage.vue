<template>
  <div class="tab-container">
    <div class="tab-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-item"
        :class="{ 'active': currentTab === index }"
        @click="switchTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="tab-content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="currentTab === index">
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      tabs: [
        { title: 'Tab 1', content: 'This is the content of Tab 1' },
        { title: 'Tab 2', content: 'This is the content of Tab 2' },
        { title: 'Tab 3', content: 'This is the content of Tab 3' },
        { title: 'Tab 4', content: 'This is the content of Tab 4' },
        { title: 'Tab 5', content: 'This is the content of Tab 5' }
      ]
    }
  },
  methods: {
    switchTab(index) {
      this.currentTab = index
    }
  }
}
</script>

<style scoped>
.tab-container {
  margin-top: 20px;
}
.tab-header {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.tab-item {
  padding: 10px 20px;
  cursor: pointer;
}
.tab-item.active {
  border-bottom: 2px solid #333;
  font-weight: bold;
}
.tab-content {
  padding: 20px 0;
}
</style>
