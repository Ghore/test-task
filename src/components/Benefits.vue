<template>
  <div class="benefits__wrapper">
    <div class="container">
      <img
        class="benefits__image"
        src="../assets/image/monitor.png"
        alt="statistics"
      />
      <p class="benefits__description">
        <span class="benefits__description_bold">Business Analysis — </span>
        is a useful tool for managing and forecasting your business cash flows.
        It is intended to help you to analyze your own finances, visualize
        reporting, business processes and KPIs
      </p>
      <ul class="benefits__list">
        <li class="benefits__list_item">
          <img src="../assets/image/Icon.png" alt="done" />
          <div class="benefits__list_item-title_wrapper">
            <h2 class="benefits__list_item-title">Insights</h2>
            <p class="benefits__list_item-description">
              The monitoring system identifies trends and patterns in your
              business and reports about the most important events in real time.
              For just a few clicks you can connect to 1C accounting, CRM-system
              (Bitrix24), popular trading platforms (PROM.UA, Rozetka),
              logistics companies (Nova Poshta), Google Analytics and
              <a href="#" class="benefits__list_item-description_link">
                many others.
              </a>
            </p>
          </div>
        </li>
        <li class="benefits__list_item">
          <img src="../assets/image/Icon.png" alt="done" />
          <div class="benefits__list_item-title_wrapper">
            <h2 class="benefits__list_item-title">Automatic notifications</h2>
            <p class="benefits__list_item-description">
              Get information with detailed analysis of business activities for
              more accurate forecasting including recommendations to make your
              business grow faster.
            </p>
          </div>
        </li>
        <li class="benefits__list_item">
          <img src="../assets/image/Icon.png" alt="done" />
          <div class="benefits__list_item-title_wrapper">
            <h2 class="benefits__list_item-title">Forecasting</h2>
            <p class="benefits__list_item-description">
              The tool for automatic key metrics forecasting while modeling
              different scenarios of your business activity.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefits",
};
</script>

<style lang="css" scoped>
.benefits__wrapper {
  background-color: #f2f3f5;
  background-image: url("../assets/image/line.png");
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 1199px) {
  .benefits__wrapper {
    margin-top: 60px;
    position: relative;
  }
}
.benefits__image {
  padding-top: 60px;
  margin: 0 auto;
}

@media (min-width: 1200px) {
  .benefits__wrapper {
    padding: 60px 44px 44px 30px;
    background-image: url("../assets/image/line2.png");
  }
}

.benefits__description {
  margin-top: 50px;
  font-family: FuturaMediumC;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #2b2d33;
}
.benefits__description_bold {
  font-weight: 600;
}

.benefits__list_item {
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
}

.benefits__list_item-title {
  font-family: FuturaMediumC;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #2b2d33;
}

.benefits__list_item-title_wrapper {
  display: flex;
  flex-direction: column;
  padding-left: 12px;
}

.benefits__list_item-description {
  font-family: FuturaBookC;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #2b2d33;
}

.benefits__list_item-description_link {
  font-weight: 600;
  text-decoration: underline;
  color: #2b2d33;
}

</style>
