<script>
import Cardapio from "@/components/BlocoCardapio.vue";
import Dias from "@/components/BlocoDias.vue";
export default {
  data() {
    return {
      cardapio: [
        {
          dia: "segunda",
          semanaday: 0,
          cardapio: [
            { prato: "Principal", comida: ["Carne Moída Com Batata"] },
            { prato: "Proteína Vegetariana", comida: ["Almôndega de Soja"] },
            {
              prato: "Acompanhamento",
              comida: [
                "Espaguete Ao Alho e Óleo",
                "Arroz",
                "Arroz Integral",
                "Feijão",
              ],
            },
            {
              prato: "Saladas",
              comida: ["Almeirão", "Rabanete", "Repolho Colorido"],
            },
            { prato: "Sobremesa", comida: ["Banana"] },
          ],
        },
        {
          dia: "terça",
          semanaday: "1",
          cardapio: [
            { prato: "Principal", comida: ["Carne Suína Com Batata"] },
            { prato: "Proteína Vegetariana", comida: ["Ovo Mexido"] },
            {
              prato: "Acompanhamento",
              comida: ["Arroz", "Arroz Integral", "Feijão"],
            },
            {
              prato: "Saladas",
              comida: ["Pimentão", "Repolho", "Colve-Flor"],
            },
            { prato: "Sobremesa", comida: ["Gelatina de Uva"] },
          ],
        },
        {
          dia: "quarta",
          semanaday: "2",
          cardapio: [
            { prato: "Principal", comida: ["Fricasse de Frango"] },
            { prato: "Proteína Vegetariana", comida: ["Ovo Frito"] },
            {
              prato: "Acompanhamento",
              comida: ["Creme de Milho", "Arroz", "Arroz Integral", "Feijão"],
            },
            {
              prato: "Saladas",
              comida: ["Rabanete", "Tomate", "Alface"],
            },
            { prato: "Sobremesa", comida: ["Maçã"] },
          ],
        },
        {
          dia: "quinta",
          semanaday: "3",
          cardapio: [
            { prato: "Principal", comida: ["Frango Com Batata"] },
            {
              prato: "Proteína Vegetariana",
              comida: ["Strogonoff de Palmito"],
            },
            {
              prato: "Acompanhamento",
              comida: ["Batata Frita", "Arroz", "Arroz Integral", "Feijão"],
            },
            {
              prato: "Saladas",
              comida: ["Almeirão", "Rabanete", "Repolho Colorido"],
            },
            { prato: "Sobremesa", comida: ["Arroz Doce"] },
          ],
        },
        {
          dia: "sexta",
          semanaday: "4",
          cardapio: [
            { prato: "Principal", comida: ["Carne Suína Com Batata"] },
            { prato: "Proteína Vegetariana", comida: ["Carne de Soja"] },
            {
              prato: "Acompanhamento",
              comida: ["Purê de Batata", "Arroz", "Arroz Integral", "Feijão"],
            },
            {
              prato: "Saladas",
              comida: ["Beterraba", "Tabule", "Berinjela"],
            },
            { prato: "Sobremesa", comida: ["Sagu"] },
          ],
        },
      ],
      // get day no javascript para o dia atual
      /* caso de erro criar 2 cardapios nulos para domingo e sábado */
      cardapioAtual: [],
      diadoCardapio: "",
    };
  },
  mounted() {
    this.semana();
  },
  components: { Cardapio, Dias },
  methods: {
    selecionarDia(dia) {
      this.cardapioAtual = this.cardapio.find(
        (cardapio) => cardapio.dia === dia
      ).cardapio;
      this.diadoCardapio = dia;
    },
    semana() {
      const d = new Date();
      let day = d.getDay();
      if (day == 0 || day == 6) {
        this.cardapioAtual = this.cardapio[0].cardapio;
        this.diadoCardapio = this.cardapio[0].dia;
      } else {
        this.cardapioAtual = this.cardapio[day - 1].cardapio;
        this.diadoCardapio = this.cardapio[day].dia;
      }
    },
  },
};
</script>

<template>
  <main id="content">
    <Dias @selecionarDia="selecionarDia" />
    <Cardapio :cardapio="cardapioAtual" :dia="diadoCardapio" />
  </main>
</template>
