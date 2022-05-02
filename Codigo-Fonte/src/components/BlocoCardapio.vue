<script>
export default {
  data() {
    return {
      cardapio: [
        { prato: "Principal", comida: ["Arroz", "Feijão"] },
        { prato: "Guarnição", comida: ["Maionese"] },
        { prato: "Principal", comida: ["Arroz", "Feijão"] },
        { prato: "Guarnição", comida: ["Maionese"] },
        { prato: "Principal", comida: ["Arroz", "Feijão"] },
      ],
    };
  },
};
</script>

<template>
  <main id="cardapio">
    <h1>Cardápio</h1>
    <div class="cardapio">
      <template v-for="(prato, i) of cardapio" :key="i">
        <div class="prato">
          {{ prato.prato }}
        </div>
        <div class="comida">
          <ul>
            <li v-for="(comida, j) of prato.comida" :key="j">{{ comida }}</li>
          </ul>
        </div>
      </template>
    </div>
  </main>
</template>

<style>
.cardapio {
  width: 70%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
}
.prato {
  width: 20%;
  border-bottom: 1px solid saddlebrown;
  background-color: azure;
}

.comida {
  min-width: 80%;
  border-bottom: 1px solid saddlebrown;
  background-color: aqua;
  flex: 1;
}
main h1 {
  text-align: center;
}
</style>
