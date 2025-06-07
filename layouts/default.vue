<script setup lang="ts"></script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <UContainer>
      <CommonHeader />
      <slot />
    </UContainer>
  </div>
</template>

<style scoped></style>
