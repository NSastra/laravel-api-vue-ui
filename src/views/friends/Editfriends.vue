<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title"> Edit Friend </h5>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama</label>
    <input type="text" class="form-control" name="nama" placeholder="Masukkan Nama" value="">
  </div>
  
    <div class="alert alert-warning"> {{ $message }}
    </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Nomor Telepon</label>
    <input type="text" class="form-control" placeholder="Masukkan Nomor Telepon" name="no_tlp" value="">
  </div>
  
    <div class="alert alert-warning"> {{ $message }}
    </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Alamat</label>
    <textarea type="text" class="form-control" placeholder="Masukkan Alamat" name="alamat" value=""> </textarea>
  </div>
  
    <div class="alert alert-warning"> {{ $message }}
    </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Kode Group</label>
    <input type="text" class="form-control" placeholder="Masukkan Kode Group" name="kode_group" value="">
  </div>
  
    <div class="alert alert-warning"> {{ $message }}
    </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  
</template>
