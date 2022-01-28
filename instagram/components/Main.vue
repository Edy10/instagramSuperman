<template>
    <div rel="sponsored">
        <div v-for="item in buildPosts" :key="item.id" class="mb-4 transition-swing v-card v-sheet v-sheet--outlined theme--dark">
            <div tabindex="-1" class="v-list-item theme--light">
                <div class="v-list">
                    <div class="v-image v-responsive">
                        <img :src="item.picture" class="imgFilme" :alt="item.user">
                    </div>
                </div>
                <div class="v-list-item__content v-list-user">
                    <div class="comments_likes">
                        <div class="v-list-item listImg">
                            <v-avatar size="50">
                                <img :src="getImage(item.user)" :alt="item.user">
                            </v-avatar>
                            <p class="user"><b>{{ item.user }}  </b> <span class="userDesc">{{ item.title }}</span></p>
                        </div>
                        <div class="v-list-item infoUser">
                            <span @click="sendlike()" :key="item.id">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon class="icon heart" v-bind="attrs" v-on="on">{{heart}}</v-icon>
                                        {{item.qtdLikes}}
                                    </template>
                                    <span v-for="like in item.likes" :key="like.id">
                                        <p>{{like.user}}</p>
                                    </span>
                                </v-tooltip>
                            </span>
                            <v-icon color="white darken-2" class="icon icon-comments"> mdi-message-text </v-icon>
                            {{item.qtdComments}}
                        </div>
                    </div>
                    <div v-for="comment in item.comments" :key="comment.id" class="v-list-item comments">
                        <p>
                            <v-avatar size="30">
                                <img :src="getImage(comment.user)" :alt="comment.user">
                            </v-avatar>
                            <b class="user-comments">{{ comment.user }} </b>   {{comment.comment}}
                        </p>
                    </div>
                    <div class="v-list-item box-comments">
                        <v-avatar size="25">
                            <img :src="getImage(userActive)" :alt="userActive">
                        </v-avatar>
                        <v-textarea name="new_commments" class="mx-12" label="Add a comment..." rows="1" v-model="newComment[item.id]" v-on:keyup.enter="sendMessage(item.id)"></v-textarea>
                        <span v-if="newComment[item.id]" class="sendComments" @click="sendMessage(item.id)">
                            <v-icon color="white darken-2" class="icon icon-comments"> mdi-send </v-icon>
                        </span>
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
            userActive: 'superman',
            posts: [],
            comments: [],
            likes: [],
            newComment: [],
            heart: 'mdi-heart-outline'
        }
    },
    methods:{
        //Search for posts
        async buscaPosts(){
            const {data} = await this.$axios.get("posts")
            return data;
        },
        //Search for comments
        async buscaComments(){
            const {data} = await this.$axios.get("comments")
            return data;
        },
        //Search for Likes
        async buscaLikes(){
            const {data} = await this.$axios.get("likes")
            return data;
        },
        sendMessage(id) {
            if(this.newComment[id].length > 1)
                this.$store.getters.getPosts.forEach((post) => {
                    if(post.id === id ){
                        post.comments.push({
                            id: btoa(Math.random()),
                            comment: this.newComment[id],
                            user: this.userActive,
                            postId: id
                        });
                        this.$store.commit('setQtdComments', this.$store.getters.getQtdComments + 1);
                    }
                });
                this.$store.commit('setPosts', this.$store.getters.getPosts);
                this.newComment[id] = '';
        },
        sendlike(){
            if(this.$store.getters.getLike == 0){
                this.$store.commit('setLike', 1);
                this.heart = 'mdi-heart';
            }else {
                this.$store.commit('setLike', 0);
                this.heart = 'mdi-heart-outline';
            }
        }
    },
    async mounted(){
        //Search all superman's posts
        try {
            this.posts = await this.buscaPosts();
            if(this.posts.length > 0)
                this.$store.commit('setPosts', this.posts);
                this.$store.commit('setQtdPosts', this.posts.length);
        }catch (error){
            console.error(error);
        }
        //Search all comments of the posts
        try {
          this.comments = await this.buscaComments();
          if(this.comments.length > 0)
              this.$store.commit('setComments', this.comments);
              this.$store.commit('setQtdComments', this.comments.length);
        }catch (error){
            console.error(error);
        }
        //Search all likes of the posts
        try {
            this.likes = await this.buscaLikes();
            if(this.likes.length > 0)
                this.$store.commit('setLikes', this.likes);
                this.$store.commit('setQtdlikes', this.likes.length);
        }catch (error){
            console.error(error);
        }
    },
    computed:{
        buildPosts(){
            this.$store.getters.getPosts.forEach((post) => {
                post.comments = [...this.$store.getters.getComments.filter((comment) => comment.postId === post.id)];
                post.qtdComments = post.comments.length;
                post.likes = [...this.$store.getters.getLikes.filter((like) => like.postId === post.id)];
                post.qtdLikes = post.likes.length;
            });
            return this.posts;
        }
    }
}
</script>

<style scoped>
    .v-list-item__content{
        margin-top: 5px;
         color: white;
    }
    .v-list-item {
        padding: 0 10px;
    }
    .infoUser{
        padding-top: 10px;
    }
    .icon{
        margin-right: 10px!important;
    }
    .heart{
        cursor: pointer;
        text-decoration:none!important;
    }
    .icon-comments{
        margin-left: 10px!important;
    }
    .imgFilme{
      width: 380px;
    }
    .v-list-user{
        margin-left: 10px;
    }
    .user{
        margin-left: 10px;
        margin-right: 10px;
    }
    .userDesc{
        font-size: 13px;
        padding-left: 10px;
    }
    .comments_likes{
        padding-bottom: 10px;
    }
    .comments{
        border: 1px solid white!important;
        border-radius: 2px;
        margin-top: 5px;
        padding-top: 10px;
    }
    .user-comments{
        padding-left: 5px;
        padding-right: 15px;
    }
    .v-application .mx-12 {
        margin-right: 0 !important;
        margin-left: 10px !important;
    }
    .sendComments{
        cursor: pointer!important;
    }
</style>
