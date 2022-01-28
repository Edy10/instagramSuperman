<template>
    <div class="container-header">
        <div class="header">
            <h2 class="text-subtitle-3"><b>Movinstagram</b></h2>
            <v-row class="avatar-perfil">
                <v-avatar size="100">
                    <img src="../assets/img/superman.png" alt="John">
                </v-avatar>
                <v-list-item-content class="text-des">
                    <v-list-item-title class="text-h6">superman</v-list-item-title>
                    <v-list-item-subtitle><b>{{ this.$store.getters.getQtdPosts }}</b> posts</v-list-item-subtitle>
                    <v-list-item-subtitle><b>{{ this.$store.getters.getQtdLikes }}</b> curtidas</v-list-item-subtitle>
                    <v-list-item-subtitle><b>{{ this.$store.getters.getQtdComments }}</b> comentário</v-list-item-subtitle>
                </v-list-item-content>
                <Timeline/>
            </v-row >
        </div>
    </div>
</template>

<script>
export default {
  name: "header.vue",
}
</script>

<style scoped>
    .header{
        width: 100%;
    }
    .v-list-item__content {
        overflow: unset!important;
        flex: 0.3;
    }
    .container-header{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .avatar-perfil{
        padding-top: 15px;
    }
    .text-des{
        padding-left: 5px;
    }
</style>
