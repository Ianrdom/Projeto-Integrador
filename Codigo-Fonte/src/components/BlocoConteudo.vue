<script>
import Cardapio from "@/components/BlocoCardapio.vue";
import Dias from "@/components/BlocoDias.vue";
export default { components: { Cardapio, Dias } };
</script>

<template>
  <main id="content">
    <Dias />
    <Cardapio />
  </main>
</template>
