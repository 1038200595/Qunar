import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'上海'
    },
    // actions:{
    //     changeCity (ctx,city) {
    //         ctx.commit('changeCiTy', city);
    //     }
    // },
    mutations:{
        changeCiTy(state,city){
            state.city = city;
        }
    }
});