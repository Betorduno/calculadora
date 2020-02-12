<template>
  <div class="tall stacked ui segment" v-if="existResults()">
    <h4>
      <i class="line chart icon"></i>PERFORMANCE SUMMARY
    </h4>
    <!--
    <el-button style="margin-bottom:10px;" size="mini" type="success" plain>Download Excel</
    el-button>
    -->
    <table class="table" style="text-align: left">
      <tr>
        <td>
          “Risk-Free” Rate of Return (10 yr T-Note)
          <br />
          <small>Last Updated: {{formatDate()}}</small>
        </td>
        <td style="text-align:right;">
          <b v-if="calculator.results.Rf !== 'Infinty'">
            <i-count-up
              :options="{suffix:'%'}"
              :start="0"
              :end="calculator.results.Rf"
              :decimals="2"
              :duration="2.5"
            ></i-count-up>
          </b>

          <b v-if="calculator.results.Rf === 'Infinty'">∞</b>
        </td>
      </tr>
      <tr>
        <td>The average annual return of {{this.calculator.selectedName}}</td>
        <td style="text-align:right;">
          <b v-if="calculator.results.Rf !== 'Infinty'">
            <i-count-up
              :options="{suffix:'%'}"
              :start="0"
              :end="calculator.results.Ri"
              :decimals="2"
              :duration="2.5"
            ></i-count-up>
          </b>

          <b v-if="calculator.results.Rf === 'Infinty'">∞</b>
        </td>
      </tr>
      <tr>
        <td>The market risk of {{this.calculator.selectedName}} as a percentage</td>
        <td style="text-align:right;">
          <b v-if="calculator.results.Rp !== 'Infinty'">
            <i-count-up
              :options="{suffix:'%'}"
              :start="0"
              :end="calculator.results.Rp"
              :decimals="2"
              :duration="2.5"
            ></i-count-up>
          </b>

          <b v-if="calculator.results.Rp === 'Infinty'">∞</b>
        </td>
      </tr>

      <tr>
        <td>The maximum loss of {{this.calculator.selectedName}}</td>
        <td style="text-align:right;">
          <b v-if="calculator.results.MDD !== 'Infinty'">
            <i-count-up
              :options="{suffix:'%'}"
              :start="0"
              :end="calculator.results.MDD"
              :decimals="2"
              :duration="2.5"
            ></i-count-up>
          </b>

          <b v-if="calculator.results.MDD === 'Infinty'">∞</b>
        </td>
      </tr>

      <tr>
        <td>The return of {{this.calculator.selectedName}} after removing its market risk and the "Risk-Free" Rate of Return</td>
        <td style="text-align:right;">
          <b v-if="calculator.results.Rf !== 'Infinty'">
            <i-count-up
              :options="{suffix:'%'}"
              :start="0"
              :end="calculator.results.Alpha"
              :decimals="2"
              :duration="2.5"
            ></i-count-up>
          </b>

          <b v-if="calculator.results.Rf === 'Infinty'">∞</b>
        </td>
      </tr>
      <tr>
        <td>Summers Alternative Risk Rating ("SARR") of {{this.calculator.selectedName}}</td>
        <td style="text-align:right;">
          <div v-bind:style="getColor()">
            <span style="font-weight: bold;">{{ category }}</span>
          </div>
        </td>
      </tr>
    </table>
    <h6>Summers Alternative Risk Rating Scale</h6>
    <img width="100%" src="static/bar.png" />
  </div>
</template>

<script>
import chart from "./chart";
import ICountUp from "vue-countup-v2";
import dateFormat from "dateformat";
export default {
  name: "PerformanceResults",
  components: {
    chart,
    ICountUp
  },
  data() {
    return {
      category: ""
    };
  },
  props: ["calculator"],
  methods: {
    existResults() {
      return !_.isEmpty(this.calculator.results);
    },
    formatDate() {
      return dateFormat(
        this.calculator.RfTimestamp,
        "dddd, mmmm dS, yyyy, h:MM:ss TT, Z"
      );
    },
    getColor() {
      let data = this.calculator.results.categories;
      console.log('---->hey---->',this.calculator.results)

      if (data.columns.column1 == true) {
        if (data.rows.rowA == true) {
          this.category = "A1";
          return {
            background: "#1a9850",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
        if (data.rows.rowB == true) {
          this.category = "A2";
          return {
            background: "#66bd63",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
        if (data.rows.rowC == true) {
          this.category = "A3";
          return {
            background: "#a6d96a",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
      }
      if (data.columns.column2 == true) {
        this.category = "B1";
        if (data.rows.rowA == true) {
          return {
            background: "#d9ef8b",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
        if (data.rows.rowB == true) {
          this.category = "B2";
          return {
            background: "#ffffbf",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
        if (data.rows.rowC == true) {
          this.category = "B3";
          return {
            background: "#fee08b",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
      }
      if (data.columns.column3 == true) {
        if (data.rows.rowA == true) {
          this.category = "C1";
          return {
            background: "#fdae61",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
        if (data.rows.rowB == true) {
          this.category = "C2";
          return {
            background: "#f46d43",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
        if (data.rows.rowC == true) {
          this.category = "C3";
          return {
            background: "#d73027",
            width: "70px",
            height: "30px",
            border: "1px solid black",
            textAlign: "center",
            paddingTop: "5px",
            fontSize: "17px"
          };
        }
      }
      // if (this.calculator.results.Rs >= 2.5 && this.calculator.results.Rs < 3) {
      //   return {
      //     background: "#66bd63",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
      // if (this.calculator.results.Rs >= 2 && this.calculator.results.Rs < 2.5) {
      //   return {
      //     background: "#a6d96a",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
      // if (this.calculator.results.Rs >= 1.5 && this.calculator.results.Rs < 2) {
      //   return {
      //     background: "#d9ef8b",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
      // if (
      //   this.calculator.results.Rs <= 1.5 &&
      //   this.calculator.results.Rs > 0.74
      // ) {
      //   return {
      //     background: "#ffffbf",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
      // if (
      //   this.calculator.results.Rs <= 0.75 &&
      //   this.calculator.results.Rs > 0.4
      // ) {
      //   return {
      //     background: "#fee08b",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
      // if (
      //   this.calculator.results.Rs <= 0.5 &&
      //   this.calculator.results.Rs > 0.24
      // ) {
      //   return {
      //     background: "#fdae61",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
      // if (
      //   this.calculator.results.Rs <= 0.25 &&
      //   this.calculator.results.Rs > 0
      // ) {
      //   return {
      //     background: "#f46d43",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
      // if (this.calculator.results.Rs <= 0) {
      //   return {
      //     background: "#d73027",
      //     width: "70px",
      //     height: "30px",
      //     border: "1px solid black"
      //   };
      // }
    }
  },
  data() {
    return {
      results: {}
    };
  }
};
</script>

<style lang="css" scoped>
</style>
