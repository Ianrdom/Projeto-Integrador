<script>
import Cardapio from "@/components/BlocoCardapio.vue";
import Dias from "@/components/BlocoDias.vue";
export default {
  data() {
    return {
      cardapio: [
        {
          dia: "seg",
          cardapio: [
            { prato: "Principal", comida: ["Carne Moída Com Batata"] },
            { prato: "Proteína", comida: ["Almôndega de Soja"] },
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
          dia: "ter",
          cardapio: [
            { prato: "Principal", comida: ["Carne Suína Com Batata"] },
            { prato: "Proteína", comida: ["Sushi de Soja"] },
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
          dia: "qua",
          cardapio: [
            { prato: "Principal", comida: ["Carne Suína Com Batata"] },
            { prato: "Proteína", comida: ["qua de Soja"] },
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
          dia: "qui",
          cardapio: [
            { prato: "Principal", comida: ["Carne Suína Com Batata"] },
            { prato: "Proteína", comida: ["quio de Soja"] },
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
          dia: "sex",
          cardapio: [
            { prato: "Principal", comida: ["Carne Suína Com Batata"] },
            { prato: "Proteína", comida: ["sex de Soja"] },
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
      ],
      cardapioAtual: [],
    };
  },
  components: { Cardapio, Dias },
  methods: {
    selecionarDia(dia) {
      this.cardapioAtual = this.cardapio.find(
        (cardapio) => cardapio.dia === dia
      ).cardapio;
    },
  },
};
</script>

<template>
  <main id="content">
    <Dias @selecionarDia="selecionarDia" />
    <Cardapio :cardapio="cardapioAtual" />
  </main>
</template>
