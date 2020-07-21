<template>
  <div class="transaction-layout">
    <div class="transaction-items container">
      <div class="transaction-section-left">
        <img :src="require('@/assets/images/TransactionImage.png')" alt="Bridging Relationships" />
      </div>
      <div class="transaction-section-right">
        <div class="transaction-content">
          <h1>Digitalizing Transactions</h1>
          <div class="transaction-description">Secure platform to perform online transactions</div>
        </div>

        <div class="transaction-button-group">
          <button class="transaction-button">Learn More</button>
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

<style scoped>
.transaction-layout {
  width: 100%;
  height: 600px;
}
.transaction-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
}
.transaction-section-right h1 {
  color: #fe5129;
  font-size: 1.5rem;
  font-weight: 700 !important;
}

.transaction-content{
margin-bottom: 15px;
}

.transaction-description {
  color: #929292;
  font-size: 1rem;
}

.transaction-button {
  font-size: 1rem;
  border-style: solid;
  border-color: #fe5129;
  border-radius: 40px;
  background-color: #fe5129;
  padding: 5px 35px 5px 35px;
  color: #ffffff;
}
</style>