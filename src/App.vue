<script setup lang="ts">
import TabPage from './components/TabPage.vue'
import BoxElement from './components/BoxElement.vue'
import BaseLayout from './components/BaseLayout.vue'
import HomePage from './components/HomePage.vue'
</script>

<template>
      <TabPage />

      <base-layout>
          <template v-slot:header>
            this is header
           </template>

            <template v-slot:main>
            this is main
           </template>

           <template v-slot:footer>
            this is footer
           </template>
      </base-layout>

          <box-element>
              <template v-slot:header>
                This will be injected as the header slot.
              </template>
              <template v-slot:content>
                This will be the content of the element
              </template>
          </box-element>

       
</template>

<!-- 
<template>
 <HomePage />
</template> -->


