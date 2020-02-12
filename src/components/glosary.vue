<template>
<div class="animated fadeIn ui segment stacked" style="margin-bottom:20px;">
	<div style="margin-bottom:10px;">
<div class="input-group mb-3">
  <input v-on:keyup="changeTerm" placeholder="Search" @change="changeTerm" v-model="searchBox" type="text" class="form-control" aria-label="" aria-describedby="basic-addon1">
</div>
  	</div>

<p>
  <h2 v-if="wordsFiltered.length === 0"><i class="cube icon large circular"></i>
  Sorry, No results with your terms.</h2></p>

<button @click="clear" v-if="wordsFiltered.length === 0" class="huge ui button blue">
  <i class="book icon large"></i> Show all
</button>


<table v-if="wordsFiltered.length > 0" style="text-align:left;" class="table table-bordered table-hover table-condensed">
   <tbody>
      <tr v-for="term in wordsFiltered">
         <td><b>{{term.name}} <el-tag v-if="term.symbol" type="info" size="mini">{{term.symbol}}</el-tag></b></td>
         <td style="text-align: left; width:60%;">{{term.description}}
          <span v-if="wordsFiltered.length-2 == wordsFiltered.indexOf(term)">

            <a href="javascript:void(0)" @click="open">Click Here</a>
          </span>
         </td>

      </tr>
   </tbody>
</table>
</div>
</template>

<script>
export default {
  name: 'glosary',
  mounted () {
    this.wordsFiltered = this.terms
  },
  methods: {
     open() {
        this.$alert('<img src="static/matriz.png" style="width: 378px; heigth: 390px;" alt="">', {
          dangerouslyUseHTMLString: true
        });
      },
    clear () {
      this.searchBox = ''
      this.wordsFiltered = this.terms
    },
    changeTerm (e) {
      this.wordsFiltered = []
      var that = this
      this.terms.forEach(function(term) {
        if (term.name.toLowerCase().indexOf(that.searchBox) != -1) {
          that.wordsFiltered.push(term)
        }
      })
    },
  },
  data () {
    return {
      wordsFiltered: [],
    	searchBox: '',
    	terms: [
 {
"name": "Alpha",
"description": "Measures the return an investment generates above what would be break-even given its market risk.",
"symbol": "α"
},
{
"name": "Beta",
"description": "Measures the dependence of an investment on the performance of the market as a whole. A beta of 1 means the investment moves in tandem with the market; beta of -1 means the investment moves exactly opposite of the market; beta of 2 moves exactly double the market, etc. A beta of zero is ideal for actively managed portfolios.",
"symbol": "β"
},
{
"name": "Capital Asset Pricing Model/Risk-Adjusted Expected Return",
"description": "Measures the break-even return of an investment given its market risk. The lower the number, the better.",
"symbol": "E(Ri)"
},
{
"name": "Expected Investment Return",
"description": " The geometric mean of an investment's returns over a given period of time. It's effectively the average historical return of an investment, which is equivalent to the return it is expected to generate in the future.",
"symbol": "Ri"
},
{
  "name": "Expected Market Return",
  "symbol": "Rm",
  "description": "The S&P 500 is the generally accepted benchmark for the financial markets. The expected market return is therefore the geometric mean of S&P 500 returns over a given period of time."
},
{
"name": "Geometric Mean",
"description": "A form of average that accounts for the asymmetry between a given percentage loss vs. gain. For example, a 10% loss is not equivalent to a 10% gain: a 10% loss on $100 leaves you $90, but a 10% gain the following period leaves you only $99. The geometric means accounts for this difference."
},
{
"name": "Illiquidity Premium",
"description": "The factor of increase in return that an illiquid investment should generate as compared to its liquid counterpart.",
"symbol": "λ"
},
{
"name": "Information Ratio",
"description": "Measures risk-adjusted return above the market. The higher the number, the better.",
"symbol": "Rn"
},
{
"name": "Liquidity-Adjusted Expected Return",
"description": "Measures the break-even return of an investment given both its market risk and illiquidity. Only used for private or restricted securities.",
"symbol": "Eλ(Ri)"
},
{
"name": "Maximum Drawdown",
"description": "Measures an investment's maximum loss from its peak to its trough before a new peak is attained. The lower the number, the better.",
"symbol": "MDD"
},
{
"name": "Modigliani Risk-Adjusted Performance",
"description": "Derived from the Sharpe Ratio, M2 measures the total risk-adjusted performance of an investment as a percentage. The higher the number, the better.",
"symbol": "M2"
},
{
"name": "Omega Ratio",
"description": "Measures the total positive returns over the total negative returns of an investment. The higher the number, the better.",
"symbol": "Ω"
},
{
"name": "Private Securities",
"description": "Securities that are exempt from registration with the U.S. Securities & Exchange Commission (“SEC”) and do not trade on a secondary exchange. As a result, private securities are illiquid, and the owner should expect to hold them for the term defined in their respective offering documents."
},
{
"name": "R-Squared",
"description": "Measures the percentage of an investment's movement that can be explained by the market. R-squared of zero is ideal for actively managed portfolios.",
"symbol": "R2"
},
{
"name": "Return Over Maximum Drawdown",
"description": "Measures an investment's average return over its Maximum Drawdown. The higher the number, the better.",
"symbol": "RoMaD"
},
{
"name": "“Risk-Free” Rate of Return",
"description": "The return of a theoretically no-risk asset. As a matter of practice, this is represented by a U.S. treasury of maturity that matches that of the investment being analyzed or a three-month T-Bill. Note that government securities are not actually risk free.",
"symbol": "Rf"
},
{
"name": "Sharpe Ratio",
"description": "The most widely used measure of risk-adjusted performance, it measures the total risk-adjusted performance of an investment. It's sometimes referred to as the Reward-To-Variability Ratio. A Sharpe Ratio greater than 1 is considered good, greater than 2 is very good, and above 3 is excellent.",
"symbol": "Rs"
},
{
"name": "Sortino Ratio",
"description": "Identical to the Sharpe Ratio except that risk is defined to be only negative deviation as opposed to total deviation. The higher the number, the better.",
"symbol": "Rso"
},
{
"name": "Summers Alternative Risk Rating",
"description": "Takes takes into account all four statistical moments (geometric mean, variance, skewness and kurtosis) of both systematic and idiosyncratic risk, including total potential loss. The first index of the SARR  matrix (rows A, B and C) represents functions of maximum drawdown (“MDD”); the second index (columns 1, 2 and 3) represents functions of the Modigliani Measure (“M2”), Omega Ratio (“Ω”), and the asset’s or portfolio’s expected return (“E(Ri)”).",
"symbol":"SARR"
},
{
"name": "Treynor Ratio",
"description": "Similar to the Sharpe Ratio except that it measures performance relative to market risk as opposed to total risk. It's sometimes referred to as the Reward-To-Volatility Ratio. The higher the number, the better.",
"symbol":"Rt"
}
]
    }
  }
}
</script>

<style lang="css">
  .blue {
    color: #fff !important;
    background-color: #007bff!important;
    border-color: #007bff!important;
  }
</style>
