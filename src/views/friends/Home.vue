<template>
  <div class="home">
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createfriends">Add Friends</router-link>
    <Cardfriends :friends="friends" />
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
        <router-link class="btn btn-warning" :to="{name: 'Editfriends', params:{id:friend.id}}">Edit</router-link>
        <button @click.prevent="friendDelete(f.id)" class="btn btn-danger"> Delete </button>
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
import Cardfriends from '@/components/Cardfriends.vue'
import { onMounted, ref } from 'vue'
  
export default {
  name: 'Home',
  components: {
    Slider,
    Cardfriends,
        
  },

  setup(){
    let friends = ref([])

    onMounted(() => {
      axios.get('http://pia.labirin.co.id/api/friends/')
      .then(response => {
        friends.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function friendDelete(id){
      axios.delete(`http://pia.labirin.co.id/api/friends/${id}`)
      .then(() =>{
        let x = this.friends.map(friends => friends.id).indexOf(id);
        this.friends.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return  {
      friends,
      friendDelete
    }
  }
    
};
</script>
