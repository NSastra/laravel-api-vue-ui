<template>
  <div class="row">
  <div class="card text-center col-4 mt-3" v-for="f in friend" :key="f.id">
      <div class="card">
            <div class="card-header">{{f.nama}}</div>
                <div class="card-body">
                <h5 class="card-title"> {{f.no_tlp}} </h5>
                <p class="card-text">
                {{f.alamat}}
                </p>
                <p class="card-text">
                {{f.groups.name}}
                </p>
                </div>
            <div class="card-footer">
                <router-link class="btn btn-warning" :to="{name: 'Editfriends', params:{id:friend.id}}">Edit</router-link>
                <button @click.prevent="friendDelete(f.id)" class="btn btn-danger"> Delete </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    let friend = ref([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/friends/${route.params.id}`)
      .then(response => {
        friend.value = response.data.data
      }).catch(error =>{
        console.log(error)
      })
    })

    function friendDelete(id){
      axios.delete(`localhost:8000/api/friends/${id}`)
      .then(() =>{
        router.go(-1);
      }).catch(error =>{
        console.log(error)
      })
    }

    return {
      friend,
      router,
      route,
      friendDelete
    }

  },
}
</script>

<style>

</style>