<template>
    <div class="container-header">
        <h2 class="text-subtitle-3"><b>Movinstagram</b></h2>
        <v-row class="avatar-perfil">
            <v-avatar size="100">
                <img src="../assets/img/superman.png" alt="John">
            </v-avatar>
            <v-list-item-content class="text-des">
                <v-list-item-title class="text-h6">superman</v-list-item-title>
                <v-list-item-subtitle><b>71</b> posts</v-list-item-subtitle>
                <v-list-item-subtitle><b>383</b> curtidas</v-list-item-subtitle>
                <v-list-item-subtitle><b>381</b> comentário</v-list-item-subtitle>
            </v-list-item-content>
            <Timeline/>
        </v-row >
    </div>
</template>

<script>
export default {
  name: "header.vue",

}
</script>

<style scoped>
  .v-list-item__content {
     overflow: unset!important;
  }
  .container-header{
      padding-top: 20px;
      padding-bottom: 20px;
  }
  .avatar-perfil{
    padding-top: 15px;
  }
  .v-list-item__content {
     flex: 0.3;
  }
  .text-des{
      padding-left: 5px;
  }
</style>
