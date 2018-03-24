<template lang="html">
  <div class="exibidor-de-numero">
    {{ valor }}
  </div>
</template>

<script>
export default {
  props: ['valor'],
};
</script>

<style>
  .exibidor-de-numero {
    color: black;
    padding: 10px;
    font-size: 32px;
    background: yellow;
    text-shadow: 10px 10px 10px rgba(0,0,0,.8);
  }
</style>
