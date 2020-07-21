<template>
  <div id="app">
    <Navigation />
    <Landing />
    <Relationships />
    <Moments />
    <Transactions />
    <WhyLobbi />
    <Review />
    <Subscription/>
    <!-- <Faq/> -->
    <News/>
    <Map/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Landing from "./components/Landing.vue";
import Relationships from "./components/Relationships.vue";
import Moments from "./components/Moments.vue";
import Transactions from "./components/Transactions.vue";
import WhyLobbi from "./components/WhyLobbi.vue";
import Review from "./components/Review.vue";
import Subscription from "./components/Subscription.vue";
// import Faq from "./components/Faq.vue";
import News from "./components/News.vue";
import Map from "./components/Map.vue";
import Contact from "./components/Contact";
import Footer from "./components/Footer"




export default {
  name: "App",
  components: {
    Navigation,
    Landing,
    Relationships,
    Moments,
    Transactions,
    WhyLobbi,
    Review,
    Subscription,
    // Faq,
    News,
    Map,
    Contact,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem ;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}


</style>
