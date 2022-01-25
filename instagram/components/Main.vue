<!--<template>
    <v-toolbar>
        <span class="subheading" v-for="post in posts" :key="post.id">
            <img :src="post.picture" alt="">
        </span>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text>
                News
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>-->
<template>
<!--    <v-row>
        <v-col cols="12">
            <v-card>
                <v-list two-line>
                    <template v-for="(item, index) in posts">
                        <v-divider inset v-if="index >= 1" :key="index"></v-divider>
                        <v-list-item>
                            <v-list> <img :src="item.picture" class="imgFilme"> </v-list>
                            <v-list-item-content>
                                <v-subheader>
                                  <p> <v-avatar size="50">
                                      <img :src="baseUrl+item.user+'.png'" alt="John">
                                      </v-avatar>
                                      {{ item.user }}
                                  </p>
                                  <v-list-item-title v-html="item.title"></v-list-item-title>
                                </v-subheader>
      &lt;!&ndash;                              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>&ndash;&gt;
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
        </v-col>
    </v-row>-->
    <div rel="sponsored">
        <div class="mb-4 transition-swing v-card v-sheet v-sheet--outlined theme--dark" v-for="item in posts" :key="item.id">
            <div tabindex="-1" class="v-list-item theme--light">
                <div class="v-list">
                    <div class="v-image v-responsive">
                        <img :src="item.picture" class="imgFilme" :alt="item.user">
                    </div>
                </div>
                <div class="v-list-item__content v-list-user">
                    <div class="v-list-item">
                        <v-avatar size="50">
                           <img :src="baseUrl+item.user+'.png'" alt="John">
                        </v-avatar>
                      <p class="user"><b>{{ item.user }} - </b></p>
                      <p class="userDesc"> {{ item.title }}</p>
                    </div>
                    <div class="v-list-item__title">
                      <v-icon color="white darken-2"> mdi-message-text </v-icon>
                      <span v-for="comment in comments" :key="comment.id" >
                          <span v-if="comment.id == item.id">

                          </span>
                      </span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="24" height="24"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"
                             class="icon-heart">
                          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M118.25,21.5c-20.7475,0 -32.25,14.97833 -32.25,14.97833c0,0 -11.5025,-14.97833 -32.25,-14.97833c-21.77233,0 -39.41667,17.64433 -39.41667,39.41667c0,29.89217 35.20267,58.85983 45.01383,68.01167c11.30183,10.535 26.65283,24.08 26.65283,24.08c0,0 15.351,-13.545 26.65283,-24.08c9.81117,-9.15183 45.01383,-38.1195 45.01383,-68.01167c0,-21.77233 -17.64433,-39.41667 -39.41667,-39.41667zM106.1455,115.455c-1.2685,1.14667 -2.37217,2.14283 -3.268,2.98133c-5.38217,5.01667 -11.74617,10.7715 -16.8775,15.3725c-5.13133,-4.601 -11.5025,-10.363 -16.8775,-15.3725c-0.903,-0.8385 -2.00667,-1.84183 -3.268,-2.98133c-10.17667,-9.19483 -37.18783,-33.61883 -37.18783,-54.53833c0,-13.83167 11.25167,-25.08333 25.08333,-25.08333c13.0935,0 20.683,9.1375 20.88367,9.374l11.36633,12.126l11.36633,-12.126c0.07167,-0.09317 7.79017,-9.374 20.88367,-9.374c13.83167,0 25.08333,11.25167 25.08333,25.08333c0,20.9195 -27.01117,45.3435 -37.18783,54.53833z"></path></g></g>
                        </svg> 41
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "main.vue",
    data () {
        return {
            posts: [],
            comments: [],
            likes: [],
            baseUrl: "http://localhost:3000/_nuxt/assets/img/"
        }
    },
    async mounted(){
        try {
            this.posts = await this.buscaPosts();
        }catch (error){
            console.error(error);
        }
        try {
          this.comments = await this.buscaComments();
        }catch (error){
            console.error(error);
        }
        try {
            this.likes = await this.buscaLikes();
        }catch (error){
            console.error(error);
        }
    },
    methods:{
        async buscaPosts(){
            const  {data} = await this.$axios.get("posts")
            return data;
        },
        async buscaComments(){
          const  {data} = await this.$axios.get("comments")
          return data;
        },
        async buscaLikes(){
          const  {data} = await this.$axios.get("likes")
          return data;
        }
    },
    computed:{
        countCurtidas : function (){

        }
    }
}
</script>

<style scoped>
    .v-list-item__content{
      color: white;
    }
    .imgFilme{
      width: 200px;
    }
    .v-list-item__content{
        margin-top: -230px;
    }
    .v-list-user{
        padding-top: 60px;
    }
    .user{
        margin-left: 10px;
        margin-right: 10px;
    }
    .userDesc{
        font-size: 13px;
    }
    .v-list-item__title{
        padding-top: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .icon-heart{
       margin-bottom: -6px;
    }
</style>
