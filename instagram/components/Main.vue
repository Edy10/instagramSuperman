<template>
    <v-toolbar>
        <span class="subheading" v-for="post in posts" :key="post.id">
            <v-avatar class="ma-3" size="125" tile>
                <img src="post.picture"/>
            </v-avatar>
        </span>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text>
                News
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: "main.vue",
    data () {
        return {
            posts: []
        }
    },
    async mounted(){
        try {
            this.posts = await this.buscaPosts();
        }catch (error){
            console.error(error);
        }
    },
    methods:{
        async buscaPosts(){
            const  {data} = await this.$axios.get("posts")
            return data;
        }
    }
}
</script>

<style scoped>

</style>
