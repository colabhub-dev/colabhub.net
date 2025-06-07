<script setup lang="ts">
const h1Class = "text-2xl text-primary font-bold";
const h2Class = "text-xl font-bold";
const ulClass = "list-disc ml-5";
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 :class="h1Class">プライバシーポリシー</h1>
    <p>
      ColabHub（以下、「当サイト」といいます。）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本ポリシーでは、当サイトが収集する情報、その利用目的、および取り扱い方法について説明します。
    </p>

    <h2 :class="h2Class">1. 収集する情報</h2>
    <p>当サイトでは、以下の情報を収集することがあります：</p>
    <ul :class="ulClass">
      <li>
        Googleアカウントを通じて取得する氏名・メールアドレス・プロフィール画像等の情報
      </li>
      <li>ユーザーが入力したプロジェクト情報、募集内容などのデータ</li>
      <li>利用状況（アクセスログ、IPアドレスなど）</li>
    </ul>

    <h2 :class="h2Class">2. 利用目的</h2>
    <p>収集した情報は、以下の目的で利用されます：</p>
    <ul :class="ulClass">
      <li>ユーザー認証および本人確認</li>
      <li>サービスの提供・改善・不正防止</li>
      <li>ユーザーからの問い合わせ対応</li>
    </ul>

    <h2 :class="h2Class">3. 情報の第三者提供</h2>
    <p>
      当サイトは、法令に基づく場合を除き、ユーザーの同意なしに第三者に個人情報を提供することはありません。
    </p>

    <h2 :class="h2Class">4. Cookieの利用</h2>
    <p>
      当サイトでは、Google認証やサービス向上のためにCookieを利用することがあります。ユーザーはブラウザの設定でCookieの使用を制限できます。
    </p>

    <h2 :class="h2Class">5. 情報の管理</h2>
    <p>
      当サイトは、個人情報の漏洩・改ざんを防止するため、必要な安全対策を講じます。
    </p>

    <h2 :class="h2Class">6. ポリシーの変更</h2>
    <p>
      本ポリシーは、必要に応じて変更されることがあります。重要な変更がある場合は、当サイト上で告知いたします。
    </p>

    <h2 :class="h2Class">7. お問い合わせ</h2>
    <p>
      本ポリシーに関するお問い合わせは、以下のメールアドレスまでお願いいたします：<br />
      <code>contact@colabhub.net</code>
    </p>

    <p class="mt-5">最終更新日：2025年6月7日</p>
  </div>
</template>

<style scoped></style>
