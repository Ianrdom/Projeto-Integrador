<script>
import Cardapio from "@/components/BlocoCardapio.vue";
import Dias from "@/components/BlocoDias.vue";
export default { components: { Cardapio, Dias } };
</script>

<template>
  <main id="conteudo">
    <Dias />
    <Cardapio />
  </main>
</template>
