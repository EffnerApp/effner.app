<template>
  <div class="bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400">
    <div class="container">
      <div class="flex flex-col">
        <div class="p-8">
          <div class="flex-none">
            <Header/>
          </div>

          <div class="flex-grow">
            <router-view/>
          </div>

          <div class="flex-none">
            <div class="flex justify-center">
              <Footer style="color: #3a3d3e;"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>
