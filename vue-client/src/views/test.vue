<template>
  <div class="test-name">    
    <testing msg="Welcome to Test App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import testing from '@/components/TestHW.vue'

export default {
  name: 'test-name',
  components: {
    testing
  }
}
</script>
