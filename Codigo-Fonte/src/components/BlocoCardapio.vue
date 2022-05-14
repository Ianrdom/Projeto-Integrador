<script>
export default {
  props: ["cardapio"],
  data() {
    return {
      dia: "segunda",
    };
  },
};
</script>

<template>
  <main id="cardapio">
    <h1>Cardápio de {{ dia }}</h1>
    <div class="cardapio">
      <template v-for="(prato, i) of cardapio" :key="i">
        <div class="prato">{{ prato.prato }}</div>
        <div class="comida">
          <ul>
            <li v-for="(comida, j) of prato.comida" :key="j">{{ comida }}</li>
          </ul>
        </div>
      </template>
    </div>
  </main>
</template>
