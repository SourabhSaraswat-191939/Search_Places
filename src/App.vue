<template>
  <div id="app">
    <div id="container">
      <div id="searchContainer">
        <input @keydown.ctrl.47="searchPlaces()" v-model="search" id="searchBox" type="text">
        <span id="keyword">Ctrl + /</span>
      </div>
      
      <button id="btn" @click="searchPlaces()">Search</button>
      <table>
        <tr>
          <th>#</th>
        <th>PlaceName</th>
        <th>CountryName</th>
        </tr>
        <tr v-if="!result"> No Result Found </tr>
        <tr v-else v-for="(place,key) in result" :key="key">
          <td>{{key}}</td>
          <td>{{place.PlaceName}}</td>
          <td>{{place.CountryName}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import API from './API/API.js'

export default {
  name: 'App',
  data:()=>({
    search:'',
    result:null,
  }),
  components: {
    // HelloWorld
  },
  methods:{
    searchPlaces(){
      API.searchResult(this.search)
      .then((response)=>{
        console.log(response.data);
        this.result = response.data.Places;
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>

<style>
#app {
  font-size: 16px;
  color: rgb(33, 37, 41);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#container{
  /* border: solid red 2px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#searchContainer{
  width:fit-content;
  position: relative;
}
#searchBox{
  width: 241px;
  height: 38px;
  font-size: 16px;
  background-color: rgb(255, 255, 255);
  border-color: rgb(206, 212, 218);
  padding: 6px 12px;
  border-radius: 4px;
}
#searchBox:focus{
  box-shadow: 0 0 0 3px rgb(121 82 179 / 25%);
  outline: 1px auto #7952b3;
}
#keyword{
  position: absolute;
  top: 8px;
  right: 14px;
  border: solid rgb(222, 226, 230) 2px;
  height: 24px;
  font-size: 12px;
  padding: 0 4px;
  
}

th{
  font-weight: 700;
}
td, th{
  padding: 8px;
  border: solid rgb(222, 226, 230) 1px;
}
table{
  border: solid rgb(222, 226, 230) 1px;
}
#btn{
  margin: 12px;
  width: 70px;
}
</style>
