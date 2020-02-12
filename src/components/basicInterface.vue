<template>
	<div class="row animated fadeIn">
		<div class="col-md-7">
			<InvestmentTable :calculator="calculator"></InvestmentTable>
		</div>
		<div class="col-md-5">
			<PerformanceResults :calculator="calculator"></PerformanceResults>
			<div class="row ui segment tall stacked" style="padding-bottom:30px;">
				<div class="col-md-6">
					<table class="table">
						<tr>
							<td style="font-size:13px; text-align: left;"><b>Beta (β)</b></td>
							<td>
								<i-count-up
			                      :start="0"
			                      :end="calculator.results.PortfolioVsSP"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%
                  			</td>
						</tr>
						<tr>
							<td style="font-size:13px; text-align: left;"><b>Sharpe Ratio</b></td>
							<td>
								<i-count-up
			                      :start="0"
			                      :end="calculator.results.Rs"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%
							</td>
						</tr>
						<tr  v-if="!isNaN(calculator.results.Oratio)">
							<td style="font-size:13px; text-align: left;"><b>Omega (Ω) <br> Ratio</b></td>
							<td>
								<i-count-up
			                      :start="0"
			                      :end="calculator.results.Oratio"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%
							</td>
						</tr>
						<tr>
							<td style="font-size:13px; text-align: left;"><b>Return Over Maximum Drawdown</b></td>
							<td>
								<i-count-up
			                      :start="0"
			                      :end="calculator.results.Romad"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%
							</td>
						</tr>
						</table>
				</div>

				<div class="col-md-6">
					<table class="table">
						<tr>
							<td style="font-size:13px; text-align: left;"><b>Alpha (α)</b></td>
							<td>
								<i-count-up
			                      :start="0"
			                      :end="calculator.results.a"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%
							</td>
						</tr>
						<tr v-if="!isNaN(calculator.results.Rso)">
							<td style="font-size:13px; text-align: left;"><b>Sortino Ratio</b></td>
							<td>

								<i-count-up
								  
			                      :start="0"
			                      :end="calculator.results.Rso"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%
							</td>
						</tr>
						<tr>
							<td style="font-size:13px; text-align: left;"><b>Capital Asset <br> Pricing Model</b></td>
							<td>
								<i-count-up
			                      :start="0"
			                      :end="calculator.results.eri"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%

							</td>
						</tr>
						<tr>
							<td style="font-size:13px; text-align: left;"><b>Modigliani Risk-Adjusted <br> Performance</b></td>
							<td>
								<i-count-up
			                      :start="0"
			                      :end="calculator.results.M2"
			                      :decimals="2"
			                      :duration="2.5"></i-count-up>%
							</td>
						</tr>
					</table>
				</div>


			</div>

		</div>
			<div class="col-md-12" style="margin-bottom:20px;">
				<CopyRight></CopyRight>
			</div>
	</div>
</template>

<script>
import PerformanceResults from './PerformanceResults'
import ICountUp from 'vue-countup-v2';
import CopyRight from './CopyRight'
export default {
  name: 'basicInterface',
  props: ['calculator'],
  components: {
  	PerformanceResults,
  	ICountUp,
  	CopyRight
  },
  data () {
    return {

    }
  }
}
</script>

<style>
body {
	margin-bottom: 40px !important;
}
</style>