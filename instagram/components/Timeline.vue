<template>
    <div class="timeline text-center">
        <div class="card-1">
            <div class="mb-15">
                Visualizar timeline com:
                <v-row justify="space-around" class="avatar-2">
                    <span v-for="(friend, index) in bestFriends" :key="index">
                        <p :class="friend === user ? 'active' : ''">
                            <v-avatar size="50">
                                <img :src="getImage(friend)" :alt="friend" >
                            </v-avatar>
                            {{ friend }}
                        </p>
                    </span>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Timeline",
    data () {
        return {
            bestFriends: [],
            user: 'superman',
        }
    },
    async mounted(){
        //Search all superman's best friend
        try {
            this.bestFriends = await this.searchBestFriend();
            if(this.bestFriends.length)
                this.bestFriends.push('superman');
                this.$store.commit('setBestFriends', this.bestFriends);
        }catch (error){
            console.error(error);
        }
    },
    methods:{
        //Search best friend
        async searchBestFriend(){
            const {data} = await this.$axios.get("bestFriends")
            return data;
        }
    },
    computed:{

    }
}
</script>

<style scoped>
  .timeline{
      margin-left: 10px!important;
  }
  .card-1{
    max-height: 130px;
    border: 1px solid!important;
    border-radius: 2px;
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
  .active {
      background: #d3d3d32b;
      border-radius: 5px;
  }
</style>
