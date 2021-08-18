import { createApp } from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";

//Pages Import
import AboutPage from "./pages/About.vue";
import ALX009Page from "./pages/ALX009.vue";
import CysticFibrosis from "./pages/CysticFibrosis.vue";
import Partners from "./pages/Partners.vue";
import ScientificBoard from "./pages/ScientificBoard.vue";
import News from "./pages/News.vue";
import Events from "./pages/Events.vue";
import PosterAndTalk from "./pages/PosterAndTalk.vue";
import Contact from "./pages/Contact.vue";
import ClinicalTrial from "./pages/ClinicalTrial.vue";
import Patient from "./pages/Patient.vue";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: "/",
      name: "About",
      component: AboutPage,
    },
    {
      path: "/alx-009",
      name: "ALX009",
      component: ALX009Page,
    },
    {
      path: "/cystic-fibrosis",
      name: "CysticFibrosis",
      component: CysticFibrosis,
    },
    {
      path: "/partners",
      name: "Partners",
      component: Partners,
    },
    {
      path: "/scientific-board",
      name: "ScientificBoard",
      component: ScientificBoard,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/events",
      name: "Events",
      component: Events,
    },
    {
      path: "/poster-and-talk",
      name: "PosterAndTalk",
      component: PosterAndTalk,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/clinical-trial",
      name: "ClinicalTrial",
      component: ClinicalTrial,
    },
    {
      path: "/patient",
      name: "Patient",
      component: Patient,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
