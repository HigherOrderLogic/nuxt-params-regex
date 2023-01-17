<script lang="ts" setup>
definePageMeta({
  paramsRegex: {
    id: /[0-9]+?/
  }
})
</script>

<template>
  <p>{{ `Your id is ${$route.params.id}` }}</p>
</template>
