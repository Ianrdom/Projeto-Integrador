<template>
  <header id="header">
    <img class="ifclogo" src="@/assets/ifc-logo.png" alt="algo" />

    <div class="header-right">
      <ul class="menu-header">
        <li class="items-menu items-header">
          <img
            src="@/assets/img-logo/person-circle.svg"
            alt="usuario"
            width="32"
            height="32"
            @click="$router.push('login')"
          />
        </li>
        <li class="items-menu items-header">
          <img
            src="@/assets/img-logo/list.svg"
            alt="menu"
            width="32"
            height="32"
            @click="$router.push('usuario')"
          />
        </li>
      </ul>
    </div>
  </header>
</template>
