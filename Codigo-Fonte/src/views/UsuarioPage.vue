<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main id="content" class="usuario">
    <h1>Usuario Autenticado</h1>
    <h2>Prefencias Alimentares</h2>
    <div class="preferencias">
      <ul>
        <li><input type="checkbox" /> Intolerante à lactose</li>
        <li><input type="checkbox" /> Intolerante à glúten</li>
        <li><input type="checkbox" /> Cardapio vegetariano</li>
      </ul>
    </div>
    <RouterLink to="/">Voltar</RouterLink>
  </main>
</template>

<style></style>
