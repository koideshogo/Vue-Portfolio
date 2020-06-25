import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Rails from '@/components/Rails';
import Vuejs from '@/components/Vue';
import Skill from '@/components/Skills';
import Github from '@/components/Git';
import Contact from '@/components/Contact';

Vue.use(Router);
export default new Router ({
  mode: "history",
  routes : [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About},
    { path: '/skills', name: 'Skill', component: Skill},
    { path: '/rails', name: 'Rsils', component: Rails},
    { path: '/Vue', name: 'Vue', component: Vuejs},
    { path: '/github', name: 'Github', component: Github},
    { path: '/contact', name: 'Contact', component: Contact},
  ]
});