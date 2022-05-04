<template>
  <nav id="dias">
    <p class="dia-da-semana" @click="$emit('selecionarDia', 'seg')">
      Segunda-Feira
    </p>
    <p class="dia-da-semana" @click="$emit('selecionarDia', 'terca')">
      Terça-Feira
    </p>
    <p class="dia-da-semana" @click="$emit('selecionarDia', 'quarta')">
      Quarta-Feira
    </p>
    <p class="dia-da-semana" @click="$emit('selecionarDia', 'quinta')">
      Quinta-Feira
    </p>
    <p class="dia-da-semana" @click="$emit('selecionarDia', 'sexta')">
      Sexta-Feira
    </p>
  </nav>
</template>

<style>
.dia-da-semana {
  padding: 10px;
  margin: 0px;
}
#dias {
  border: 1px solid black;
  background-color: white;
}
</style>
