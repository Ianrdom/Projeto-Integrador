<script>
export default {
  props: ["cardapio"],
};
</script>

<template>
  <main id="cardapio">
    <h1>Cardápio</h1>
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

<style>
.cardapio {
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
}
.prato {
  width: 35%;
  border-bottom: 1px solid black;
  background-color: azure;

  display: flex;
  align-items: center;
  justify-content: center;
}

.comida {
  min-width: 65%;
  border-bottom: 1px solid black;
  background-color: lightgray;
  flex: 1;
}
main h1 {
  text-align: center;
}
</style>
