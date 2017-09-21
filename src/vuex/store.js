import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    author:'和你同路',
    isSearch:false,
    music:{
      musicFormatSrc:'http://dl.stream.qqmusic.qq.com/C400003iDFNR04D7QS.m4a?vkey=CE6A0A9F43CAFEDECA97FEDD4AF08667A21694B7AC89535E175EFCF9517B86E9E4A13FF57E0A697BB607CB976759D6D4CBABC1A2E9969BBA&guid=2715572228&uin=0&fromtag=66',
      isPlay:false,
      isAutoPlay:true,
      isListObs:false
    }
  },
  mutations:{
    changeSearchBool(state,boolTxt){
      state.isSearch=boolTxt;
    },
    changeMusic(state,value,key){
      state[key]=value;
    }
  }
});

export default store;