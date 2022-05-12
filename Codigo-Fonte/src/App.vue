<script setup>
import Rodape from "@/components/BlocoRodape.vue";
import Cabecalho from "@/components/BlocoCabecalho.vue";
import { /* RouterLink, */ RouterView } from "vue-router";
</script>

<template>
  <Cabecalho />
  <RouterView />
  <Rodape />
</template>
