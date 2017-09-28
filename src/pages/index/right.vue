<template>
<div>
  <!-- fdsafsda -->


  <my-tree  :zzz='aaa'></my-tree>

</div>
</template>
<script>
// import myTree from '../../components/right/tree';
  export default {
    name:'right',
    created(){
      setInterval(()=>{
        const a={
          val:new Date().getTime(),
          aaa:[
            {
            val:`fsdafsda${new Date().getTime()}`

            }
          ]
        };
        this.aaa=[a,...this.aaa]
      },1000)
    },
    data(){
      return {
        aaa:[
          {
          val:'fsdafsda',
          aaa:[
            {
            val:'11111111',
            aaa:[
              {
                
              val:'fsdafsdafsdda',
              }
                

            ]

            },
            {
            val:'11111111'

            }
          ]
          },
          {
          val:'fsdafsda',
          aaa:[
            {
            val:'11111111'

            }
          ]
          },
          {
          val:'fsdafsda',
          aaa:[
            {
            val:'11111111'

            }
          ]
          }
        ]
      }
    },
    components:{myTree:res=>require(['../../components/right/tree'],res)}
  }
</script>