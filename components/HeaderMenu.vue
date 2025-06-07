<script setup lang="ts">

</script>

<template>
  <div>
    <USlideover>
      <UButton color="neutral" icon="i-lucide-menu" variant="subtle" size="xl" />
      <template #content>
        <div class="p-5">
          <slot />
        </div>
      </template>
    </USlideover>
  </div>
</template>

<style scoped>

</style>