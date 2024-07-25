import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import navigation from "@/components/navigation";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/navigation",
      name: "navigation",
      component: navigation,
    }
  ],
});
