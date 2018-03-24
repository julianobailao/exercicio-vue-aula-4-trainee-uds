import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import JulianoBailao from '@/components/JulianoBailao';
import Contador from '@/components/Contador';
import Endereco from '@/components/Endereco';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: JulianoBailao,
    },
    {
      path: '/contador',
      name: 'Contador',
      component: Contador,
    },
    {
      path: '/endereco',
      name: 'Endereco',
      component: Endereco,
    },
  ],
});
