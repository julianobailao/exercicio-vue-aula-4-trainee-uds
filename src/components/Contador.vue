<template lang="html">
  <div>
    <p>Valor: {{ valor }}</p>
    <p>{{ parOuImpar }}</p>
    <exibir-numero :valor="valor"></exibir-numero>
    <p>{{ positivoOuNegativo }}</p>
    <input type="number" v-model="entrada">
    <button @click="somar">Somar</button>
    <button @click="subtrair">Subtrair</button>
  </div>
</template>

<script>
import ExibirNumero from './ExibirNumero';

export default {
  components: {
    ExibirNumero,
  },
  data() {
    return {
      valor: 0,
      entrada: 0,
    };
  },
  computed: {
    parOuImpar() {
      if (this.valor % 2 === 0) {
        return 'PAR';
      }

      return 'IMPAR';
    },
    positivoOuNegativo() {
      if (this.valor >= 0) {
        return 'Positivo';
      }

      return 'Negativo';
    },
  },
  methods: {
    somar() {
      this.valor += parseInt(this.entrada, 10);
      this.entrada = 0;
    },
    subtrair() {
      this.valor -= parseInt(this.entrada, 10);
      this.entrada = 0;
    },
  },
};
</script>
