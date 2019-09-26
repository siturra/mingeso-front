<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/postulate">Postulación</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/scss/app";
</style>
