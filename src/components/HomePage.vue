 <template>
  <div class="container">
    <div class="menu">
      <ul>
        <li v-for="item in menuItems" :key="item.id" @click="selectedItem = item">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="content">
            <div v-if="selectedItem">
                    <h2>{{ selectedItem.name }}</h2>
                    <p>{{ selectedItem.description }}</p>
            </div>
            <div v-else >
                <p>loading</p>
            </div>
    </div>
  </div>
</template> 




<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Home', description: 'This is the home page.' },
        { id: 2, name: 'About', description: 'This is the about page.' },
        { id: 3, name: 'Services', description: 'This is the services page.' },
        { id: 4, name: 'Contact', description: 'This is the contact page.' },
      ],
      selectedItem: null,
    };
  },
  created() {
      if (this.menuItems.length > 0) {
      this.selectedItem = this.menuItems[0];
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.menu {
  background-color: #f1f1f1;
  padding: 20px;
  width: 200px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu li {
  cursor: pointer;
  padding: 10px;
}

.menu li:hover {
  background-color: #ddd;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
