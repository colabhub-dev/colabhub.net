<script setup lang="ts">
const loginGoogle = () => {
  navigateTo("/api/auth/login/google", {external: true});
}
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col items-center outline-1 outline-gray-300 shadow-2xl rounded-2xl gap-10 py-32 px-12 my-10">
      <h1 class="text-2xl font-bold mb-4">ログイン</h1>
      <div class="">
        <UButton variant="outline" icon="i-devicon-google" :onclick="loginGoogle">Googleでログイン</UButton>
      </div>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        ログインすると、
        <NuxtLink to="/terms" className="text-nowrap">
          利用規約
        </NuxtLink>
        と
        <NuxtLink to="/privacy-policy" className="text-nowrap">
          プライバシーポリシー
        </NuxtLink>
        に同意したことになります。
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>