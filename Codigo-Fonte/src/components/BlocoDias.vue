<template>
  <nav id="dias">
    <p class="dia-da-semana" @click="$emit('selecionarDia', 'segunda')">
      Segunda-Feira
    </p>
    <p class="dia-da-semana" @click="$emit('selecionarDia', 'terça')">
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
