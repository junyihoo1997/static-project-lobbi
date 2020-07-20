<template>
  <div class="transaction-layout">
    <div class="transaction-items container">
      <div class="transaction-section-left">
        <img :src="require('@/assets/images/TransactionImage.png')" alt="Bridging Relationships" />
      </div>
      <div class="transaction-section-right">
        <h1>Digitalizing Transactions</h1>
        <p>Secure platform to perform online transactions</p>
        <br />
        <div class="transaction-button-group">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transactions",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transaction-layout {
  width: 100%;
  height: 70vh;
}
.transaction-items{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
}
</style>