<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main id="content" class="login">
    <h2>Faça Login com sua conta SAU</h2>
    <div class="BlocoLogin">
      <input type="text" class="LoginInput" />
      <input type="password" class="LoginInput" />
      <button class="LoginInput" @click="$router.push('usuario')">
        Entrar
      </button>
    </div>
    <RouterLink to="/">Voltar</RouterLink>
  </main>
</template>

<style></style>
