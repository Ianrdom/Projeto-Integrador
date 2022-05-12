<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <footer id="footer">
    <div class="footer">
      <ul class="menu-footer">
        <li class="items-menu items-footer">
          <RouterLink to="/contato">Contato</RouterLink>
        </li>
        <li class="items-menu items-footer">
          <RouterLink to="/sobre">Sobre</RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
