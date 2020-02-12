<template>
  <div class="ui segment tall stacked">
    <div v-if="existResults()">
      <div class="row">
        <div class="col-md-12">
          <h4>
            <i class="calendar icon"></i>ANNUAL RETURNS
          </h4>
        </div>
      </div>
      <div class="row" style="margin-bottom:10px;">
        <!--
                  <div class="col-md-4">
                      <b>
                          <el-tooltip class="item" effect="dark" placement="top-start">
<div slot="content">
 Select the first year you would like to begin analyzing your investment. <br> If your first year was prior to 2004, select 2004; if your first year was after 2007, select 2007. <br> Quantitative analysis requires data across a minimum of one market cycle to generate meaningful results. <br> If your investment performance began after 2007, you must input a theoretical track record <br> to best estimate how your investment would have performed going back to 2007.


</div>

                        <a style="border-radius:0px;" class="btn-xs btn btn-primary" href="#" @click="changeFirstYear"><i class="calendar outline icon"></i> Change First Year</a>

                          </el-tooltip>
                      </b>
                  </div>
        -->
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead style="border-top:0px !important;">
              <tr>
                <th style="vertical-align: middle;text-align:right;">YEAR</th>
                <th style="vertical-align: middle;text-align:right;">S&P 500</th>
                <th style="vertical-align: middle;text-align:right;">MSCI US REIT</th>
                <th style="vertical-align: middle;text-align:right;">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="'Click to change the name of “' + selectedName + '”'"
                    placement="top-end"
                  >
                    <button
                      href="#"
                      style="width:88%;     border-radius: 0.3rem;"
                      class="btn btn-outline-primary btn-xs"
                      @click="changeInvestmentName"
                    >{{selectedName}}</button>
                  </el-tooltip>
                </th>
              </tr>

              <tr style="border-top:0px !important;">
                <th style="border:0px;border: 0px;padding-top: 0px; border-top:0px;" colspan="4">
                  <el-checkbox
                    style="float:right;"
                    @change="calculator.calculate()"
                    v-model="calculator.privateSecurities"
                  >Private Security</el-checkbox>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(investment, index) in investments">
                <td
                  v-if="index !== 0"
                  class="year"
                  style="text-align:center;text-align:right;"
                >{{investment.YEAR}}</td>
                <td v-if="index === 0" class="year">
                  <el-select
                    @change="changeFirstYearModel"
                    style="width:100px;"
                    v-model="selectedYear"
                  >
                    <el-option
                      v-for="year in years"
                      :key="year.year"
                      :value="year.year"
                      :label="year.name"
                    ></el-option>
                  </el-select>
                </td>
                <td style="text-align:center;text-align:right;">{{check00s(investment.SP500)}}%</td>
                <td style="text-align:center;text-align:right;">{{check00s(investment.MSCI)}}%</td>
                <td style="text-align:center;text-align:right;">
                  <input
                    @change="changedInput(investment)"
                    :id="investment.YEAR"
                    v-on:keyup.enter="onEnter(investment)"
                    @click="clearInput(investment)"
                    maxlength="6"
                    minlength="0"
                    class="input"
                    masked
                    style="text-align:center;"
                    v-model="investment.INVESTMENT"
                  /> %
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  <button
                    @click="calculate()"
                    style="margin-right:10px; width:100%;"
                    class="btn-xs btn btn-outline-primary btn-lg"
                  >Calculate</button>
                </td>
              </tr>

              <tr>
                <td style="text-align:center; font-size:12px;">
                  <b>Geometric Mean</b>
                </td>
                <td style="text-align:right;">
                  <b>
                    <i-count-up
                      :start="0"
                      :end="calculator.results.Rm"
                      :decimals="2"
                      :duration="2.5"
                    ></i-count-up>%
                  </b>
                </td>
                <td style="text-align:right;">
                  <b>
                    <i-count-up
                      :start="0"
                      :end="calculator.results.pGeoMeanMSCIUSREIT"
                      :decimals="2"
                      :duration="2.5"
                    ></i-count-up>%
                  </b>
                </td>
                <td style="text-align:center;">
                  <b>
                    <i-count-up
                      :start="0"
                      :end="calculator.results.Ri"
                      :decimals="2"
                      :duration="2.5"
                    ></i-count-up>%
                  </b>
                </td>
              </tr>

              <tr>
                <td style="text-align:center; font-size:12px;">
                  <b>Growth of $10,000</b>
                  <br />
                  <small>01/01/{{selectedYear}} to 12/31/2017</small>
                </td>

                <td style="text-align:center; color: #025aa5;">
                  <b>
                    $
                    <i-count-up
                      :start="0"
                      :end="calculator.results.SPLastYear"
                      :decimals="0"
                      :duration="2.5"
                    ></i-count-up>
                  </b>
                </td>
                <td style="text-align:right;color: #025aa5;">
                  <b>
                    $
                    <i-count-up
                      :start="0"
                      :end="calculator.results.MSCILastYear"
                      :decimals="0"
                      :duration="2.5"
                    ></i-count-up>
                  </b>
                </td>
                <td style="text-align:center;color: #025aa5;">
                  <b>
                    $
                    <i-count-up
                      :start="0"
                      :end="calculator.results.PortfolioLastYear"
                      :decimals="0"
                      :duration="2.5"
                    ></i-count-up>
                  </b>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <sweet-modal
      :hide-close-button="true"
      :blocking="true"
      overlay-theme="dark"
      ref="modalYear"
      width="20%"
    >
      <label>First Year of Investment</label>
      <el-select v-model="selectedYear">
        <el-option v-for="year in years" :key="year.year" :value="year.year" :label="year.name"></el-option>
      </el-select>
      <a
        class="btn btn-primary"
        @click="changeFirstYearModel"
        style="color:white;margin-top:10px;"
        type="primary"
        plain
      >Change</a>
    </sweet-modal>

    <sweet-modal
      :hide-close-button="true"
      :blocking="true"
      overlay-theme="dark"
      ref="modalName"
      width="30%"
    >
      <el-alert v-if="error !== ''" :title="error" type="error"></el-alert>

      <label>Name of the investment</label>
      <el-input
        placeholder="Name of the investment"
        @change="changeInvestmentName"
        v-model="selectedName"
      ></el-input>
      <a
        class="btn btn-primary"
        @click="changeNameModel"
        style="color:white;margin-top:10px;"
        type="primary"
        plain
      >Change</a>
    </sweet-modal>
  </div>
</template>

<script>
import portfolio from "@/components/portfolio";
import ICountUp from "vue-countup-v2";
import _ from "lodash";
import { TheMask } from "vue-the-mask";
export default {
  components: {
    portfolio,
    ICountUp,
    TheMask
  },
  props: ["calculator"],
  name: "InvestmentTable",
  mounted() {
    this.investments = this.calculator.getAnnualReturns();
    // console.log("inv", this.investments)
    this.calculator.calculate();
  },
  methods: {
    changeFirstYear() {
      this.$refs.modalYear.open();
    },
    onEnter(investment) {
      if (
        this.investments[this.investments.length - 1].YEAR === investment.YEAR
      ) {
        return;
      }

      if (investment.INVESTMENT) {
        // console.log(document.getElementById(investment.YEAR + 1))
        document.getElementById(investment.YEAR + 1).select();
      }
    },
    existResults() {
      return !_.isEmpty(this.calculator.results);
    },
    check00s(value) {
      return parseFloat(Math.round(value * 100) / 100).toFixed(2);
    },
    changeInvestmentName() {
      this.$refs.modalName.open();
    },
    clearInput(investment) {
      if (investment.INVESTMENT) {
        investment.INVESTMENT = "";
        document.getElementById(investment.YEAR).focus();
      }
    },
    changeNameModel() {
      if (this.selectedName.length < 20) {
        this.calculator.selectedName = this.selectedName;
        this.$refs.modalName.close();
        document.body.style.overflow = "visible";
        this.error = "";
      } else {
        this.error = "The name is too large.";
      }
    },
    changeFirstYearModel() {
      this.calculator.firstYear = this.selectedYear;
      this.investments = this.calculator.getAnnualReturns();
      this.calculator.calculate();
      this.$refs.modalYear.close();
      document.body.style.overflow = "visible";
    },
    calculate() {
      _.each(this.investments, function(investment) {
        if (investment.INVESTMENT === "") {
          investment.INVESTMENT = 0;
        }
      });

      this.calculator.calculate();
    },
    changedInput(investment) {
      if (investment.INVESTMENT === "") {
        return false;
      }

      investment.INVESTMENT = parseFloat(investment.INVESTMENT).toFixed(2);
    },
    changedInputOld: _.debounce(function(investment) {
      if (investment.INVESTMENT === "") {
        return false;
      }

      _.each(this.investments, function(investment) {
        if (investment.INVESTMENT === "") {
          investment.INVESTMENT = 0;
        }
      });

      investment.INVESTMENT = parseFloat(investment.INVESTMENT).toFixed(2);
      // console.log(investment.INVESTMENT)

      if (investment.INVESTMENT !== "") {
        this.calculator.calculate();
        this.$forceUpdate();
        this.$notify({
          title: "Success",
          message: this.calculator.selectedName + " was changed",
          type: "success"
        });
      } else {
        investment.INVESTMENT = 0;
      }
    }, 1000)
  },
  data() {
    return {
      error: "",
      selectedName: this.calculator.selectedName,
      investments: [],
      privateSecurities: this.calculator.privateSecurities,
      selectedYear: this.calculator.firstYear,
      years: [
        {
          name: "2004",
          year: "2004"
        },
        {
          name: "2005",
          year: "2005"
        },
        {
          name: "2006",
          year: "2006"
        },
        {
          name: "2007",
          year: "2007"
        }
      ]
    };
  }
};
</script>

<style>
.el-popper {
  z-index: 9999999 !important;
}
.el-tabs__nav-wrap {
  z-index: 0 !important;
}

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #007bff !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #007bff;
  border-color: #007bff;
}

.year {
  font-family: "Cutive Mono", monospace;
  font-size: 18px;
}

input[type="email"],
input[type="password"],
input[type="search"],
input[type="text"] {
  -webkit-appearance: textfield;
  -moz-appearance: none;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 0px solid #eceeef !important;
}
</style>
