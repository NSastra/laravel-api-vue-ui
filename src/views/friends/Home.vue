<template>
  <div class="home">
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createfriends">Add Friends</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Alamat</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(f, index) in friends" :key="index">
      <td>{{ f.nama }}</td>
      <td>{{ f.no_tlp }}</td>
      <td>{{ f.alamat }}</td>
      <td> 
        <router-link class="btn btn-warning" to="/editfriends">Edit</router-link>
        <button class="btn btn-danger"> Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

import axios from 'axios'

// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import { onMounted, ref } from 'vue'
  
export default {
  name: 'Home',
  components: {
    Slider
        
  },

  setup(){
    let friends = ref([])

    onMounted(() => {
      axios.get('localhost:8000/api/friends/')
      .then(respons => {
        friends.value = respons.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    return friends
  }
    
}
</script>
