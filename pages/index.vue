<script setup lang="ts"></script>

<template>
  <div>
    <h1
      class="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16"
    >
      Colab Hubで
      <br />
      仲間を集めよう!
    </h1>
    <p class="mt-8 max-w-2xl text-pretty text-lg">
      Colab Hubは、開発者がプロジェクトを共有し、
      <br />
      協力してコードを作成するためのプラットフォームです。
    </p>
    <div class="mt-12 flex items-center gap-2">
      <div key="{1}" class="bg-foreground/10 rounded-[14px] border p-0.5">
        <UButton class="rounded-xl px-5 text-base">
          <NuxtLink to="/create">
            <span class="text-nowrap">新しく募集する</span>
          </NuxtLink>
        </UButton>
      </div>
      <UButton key="{2}" class="h-[42px] rounded-xl px-5 text-base">
        <NuxtLink to="/list">
          <span className="text-nowrap">募集を探す</span>
        </NuxtLink>
      </UButton>
    </div>
  </div>
</template>

<style scoped></style>
