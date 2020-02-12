<template>
	<div class="animated fadeIn">
		<div class="row">
			<div class="col-md-12">
			 	<div class="ui segment">
					<img width="900" src="/static/formula.png">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<Portfolio :calculator="calculator" style="margin-top:10px;"></Portfolio>
			</div>
			<div class="col-md-6">
				<InvestmentTable :calculator="calculator" style="margin-top:10px;"></InvestmentTable>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<Chart  style="margin-bottom:20px;"></Chart>
			</div>
		</div>
		<div class="row" style="margin-bottom:20px;">
			<div class="col-md-12">
				<CopyRight></CopyRight>				
			</div>
		</div>
	</div>
</template>

<script>
import Portfolio from './portfolio'
import Chart from './chart'
import CopyRight from './CopyRight'
export default {
  props: ['calculator'],
  name: 'AdvancedInterface',
  components: {
  	Portfolio,
  	Chart,
  	CopyRight
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>