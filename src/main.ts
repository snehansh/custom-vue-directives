import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.directive("purple", function (el) {
  el.style.color = "purple";
});

Vue.directive("color", function (el, binding) {
  el.style.color = binding.value;
});

Vue.directive("switching-color", function (el, binding) {
  const colors = binding.value;

  let i = 0;
  setInterval(() => {
    el.style.color = colors[i++];
    if (i > colors.length - 1) i = 0;
  }, 500);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
