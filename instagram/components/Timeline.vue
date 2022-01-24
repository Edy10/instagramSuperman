<template>
    <div class="timeline text-center">
        <div class="card-1">
            <div class="text-subtitle-2 text-center mb-15">
                Visualizar timeline com:
                <v-row justify="space-around" class="avatar-2">
                    <v-avatar size="50">
                        <img src="../assets/img/batman.png" alt="John" >
                    </v-avatar>
                    <p>batman</p>
                    <v-avatar size="50">
                        <img src="../assets/img/superman.png" alt="John" >
                    </v-avatar>
                    <p>superman</p>
                    <v-avatar size="50">
                        <img src="../assets/img/wonderWoman.png" alt="John" >
                    </v-avatar>
                    <p>wonderWoman</p>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Timeline"
}
</script>

<style scoped>
  .timeline{
      margin-left: 10px!important;
  }
  .card-1{
    max-height: 120px;
    border: 1px solid!important;
    border-radius: 5px;
    padding-top: 10px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .avatar-2{
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .avatar-2 p{
    padding: 15px;
  }
</style>
