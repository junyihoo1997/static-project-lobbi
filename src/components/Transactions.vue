<template>
  <div class="transaction-layout">
    <div class="transaction-items container">
      <div class="transaction-section-left">
        <div class="transaction-image-container">
          <img
            :src="require('@/assets/images/TransactionImage.png')"
            alt="Bridging Relationships"
            class="transaction-image"
          />
        </div>
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

<style lang="scss" scoped>
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
.transaction-section-right {
  order: 2;
  h1 {
    color: #fe5129;
    font-size: 1.75rem;
    font-weight: 700 !important;
  }
}

.transaction-section-left {
  display: flex;
  justify-content: center;
  width: 400px;
  order: 1;
}

.transaction-image-container {
  width: 100%;
  height: 100%;
}

.transaction-image {
  width: 100%;
  height: auto;
}

@media (max-width: 991px) {
  .transaction-image-container {
    width: 50%;
  }
  .transaction-layout {
    width: 100%;
    height: 500px;
  }
  .transaction-section-left {
    order: 1;
  }
  .transaction-section-right {
    order: 2;
  }
  .transaction-items {
    justify-content: center;
  }
}

.transaction-content {
  margin-bottom: 15px;
}

.transaction-description {
  color: #929292;
  font-size: 1.2rem;
}

.transaction-button {
  font-size: 1rem;
  border-style: solid;
  border-color: #fe5129;
  margin-top: 10px;
  border-radius: 40px;
  background-color: #fe5129;
  padding: 5px 55px 5px 55px;
  color: #ffffff;
  outline: none;
}
</style>