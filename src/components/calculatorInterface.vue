<template>
  <div>
    <div class="row" style="margin-bottom:20px;">
      <div class="col-md-12">
        <div class="ui segment">
          <img width="900" src="static/formula.png" />
        </div>
      </div>
    </div>

    <div class="row animated fadeIn">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <InvestmentTable :calculator="calculator"></InvestmentTable>
          </div>
        </div>
        <div class="row" style="margin-top:20px;">
          <div class="col-md-12">
            <div class="ui segment piled">
              <Chart :calculator="calculator"></Chart>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <performance-results :calculator="calculator"></performance-results>
        <Portfolio :calculator="calculator"></Portfolio>
      </div>
    </div>

    <div class="row" style="margin-top:10px;">
      <div class="col-md-12" style="margin-bottom:20px;">
        <CopyRight></CopyRight>
      </div>
    </div>
  </div>
</template>

<script>
import InvestmentTable from "./InvestmentTable";
import PerformanceResults from "./PerformanceResults";
import Portfolio from "./portfolio";
import ICountUp from "vue-countup-v2";
import CopyRight from "./CopyRight";
import Chart from "./chart";
export default {
  name: "basicInterface",
  props: ["calculator"],
  components: {
    InvestmentTable,
    PerformanceResults,
    ICountUp,
    CopyRight,
    Portfolio,
    Chart
  }
};
</script>

<style>
body {
  margin-bottom: 40px !important;
}
</style>
