import Vue from 'vue'
// import App from './dev/test.vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';

Vue.config.productionTip = false

import * as colors from 'muse-ui/lib/theme/colors';

theme.add('teal', {
  primary: colors.blueGrey900,
  secondary: colors.lightBlue500,
}, 'dark');

theme.use('teal');
Vue.use(MuseUI)

new Vue({
  render: h => h(App),
}).$mount('#app')

