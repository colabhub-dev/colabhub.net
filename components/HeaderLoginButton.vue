<script setup lang="ts">
const auth = useAuth();
</script>

<template>
  <div>
    <UAvatar v-if="auth.isLogin" :src="auth.user.value?.avatar" class="" />
    <UButton v-else :on-click="() => {navigateTo('/login')}">ログイン</UButton>
  </div>
</template>

<style scoped>

</style>