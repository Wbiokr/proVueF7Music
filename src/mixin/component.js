export const myMx={
  data(){
    return {
      pathName:location.pathname
    }
  },
  created(){
  },
  methods:{
    routerName(val){
      return `${this.pathName}/${val}`
    }
  }
}