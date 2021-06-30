<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Friend </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama" v-model="friend.nama">
  </div>
  <div class="alert alert-danger" v-if="validation.nama">
    {{ validation.nama=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Nomor Telepon</label>
    <input type="text" class="form-control" placeholder="Masukkan Nomor Telepon" v-model="friend.no_tlp">
  </div>
  <div class="alert alert-danger" v-if="validation.no_tlp">
    {{ validation.no_tlp=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Alamat</label>
    <textarea type="text" class="form-control" placeholder="Masukkan Alamat" v-model="friend.alamat"> </textarea>
  </div>
  <div class="alert alert-danger" v-if="validation.alamat">
    {{ validation.alamat=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Kode Group</label>
    <input type="text" class="form-control" placeholder="Masukkan Kode Group"  v-model="friend.kode_group">
  </div>
  <div class="alert alert-danger" v-if="validation.kode_group">
    {{ validation.kode_group=[0] }}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    const friend = reactive({
      nama: '',
      no_tlp: '',
      alamat: '',
      kode_group: ''
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`http://pia.labirin.co.id/api/friends/${route.params.id}`)
      .then(response => {
        friend.nama = response.data.data.nama
        friend.no_tlp = response.data.data.no_tlp
        friend.alamat = response.data.data.alamat
        friend.kode_group = response.data.data.kode_group
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let nama = friend.nama
      let no_tlp = friend.no_tlp
      let alamat = friend.alamat
      let kode_group = friend.kode_group

      axios.put(`http://pia.labirin.co.id/api/friends/${route.params.id}`, {
        nama: nama,
        no_tlp: no_tlp,
        alamat: alamat,
        kode_group: kode_group
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      friend,
      validation,
      router,
      update,
      route
    }

  },
}
</script>