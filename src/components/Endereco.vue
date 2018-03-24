<template lang="html">
  <div class="endereco">
    <p>
      CEP:
      <input @blur="buscaCep" type="text" v-model="cep">
    </p>
    <p>
      Logradouro:
      <input type="text" v-model="logradouro">
    </p>
    <p>
      Número:
      <input type="text" v-model="numero">
    </p>
    <p>
      Complemento:
      <input type="text" v-model="complemento">
    </p>
    <p>
      Bairro:
      <input type="text" v-model="bairro">
    </p>
    <p>
      Cidade:
      <input type="text" v-model="cidade">
    </p>
    <p>
      UF:
      <input type="text" v-model="uf">
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    cep: null,
    logradouro: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    uf: null,
  }),
  methods: {
    buscaCep() {
      axios
        .get(`http://viacep.com.br/ws/${this.cep}/json/`)
        .then(({ data }) => {
          this.logradouro = data.logradouro;
          this.complemento = data.complemento;
          this.bairro = data.bairro;
          this.cidade = data.localidade;
          this.uf = data.uf;
        }, () => {
          alert('Cep inválido');
        });
    },
  },
};
</script>
