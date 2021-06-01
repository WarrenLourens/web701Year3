<template>
<div id="app">
  <div>
      <h1>Add Product</h1>

<div v-if="!isEditing">

    <input type="text" v-model="product">
    <input type="submit" value="add" @click="storeProduct">
</div>
<div v-else>

    <input type="text" v-model="product">
    <input type="submit" value="update" @click="updateProduct">

</div>     
      
      <ol>
          <li v-for ="(product,index) in products" :key="index">
             
              {{products}}

              <button @click="editProduct(index,product)">Edit</button>
              <button @click="deleteProduct(index)">Delete</button>
          </li>
      </ol>
  </div>
</div>
</template>
<script>
 new Vue({
el: '#app',


data: {
    isEditing:false,
    selectedIndex:null,
    product:'',
    products: []

},

methods:{

    storeProduct(){
    this.products.push(this.product)
    this.product=""
    },

    editProduct(index,product){
    this.product=pruduct
    this.selectedIndex=index
    isEditing=true
    },

    updateProduct(selectedIndex){
    this.products.splice(this.selectedIndex,1,this.product)
    this.isEditing=false
    this.product=""
    },

    deleteProduct(){
    this.products.splice(index,1)

    }
}
 })

</script>
