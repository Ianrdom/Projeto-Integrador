<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <aside id="sidenav">
    <ul>
      <li>
        <RouterLink to="/usuario/acessibilidade"
          >Acessibilidade visual</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/usuario/alimentar"
          >Preferencias alimentares</RouterLink
        >
      </li>
    </ul>
    <RouterLink to="/"> Voltar</RouterLink>
  </aside>
  <main id="content">
    <RouterView />
  </main>
</template>

<style></style>
