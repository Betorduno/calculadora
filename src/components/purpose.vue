<template>
<div class="animated fadeIn">
	<div class="ui segment piled">
   <h5 style="text-align:left;"><i class="info icon circular blue inverted"></i> Purpose</h5>
   <p style="text-align:left;"><i>Most investors only consider one variable when determining how to choose an investment: possible return (which explains the success of the lottery as a business model); but this approach (admittedly, in addition to other factors) is what leads to the big financial firms of Wall Street growing more and more profitable at the expense of the investing public, or retail investors. To meaningfully evaluate an investment, you must take into account and measure the risk as well as the return. This calculator employs every major risk-adjusted performance metric used by the most sophisticated financial firms over an effectively complete market cycle to analyze any investment you choose. The outputs will allow you to clearly and objectively rank any and every investment option at your disposal with the most thorough and accurate analysis available. This calculator is designed to accommodate investors of every level... outputting a simple color code for novices and a comprehensive set of metric calculations for financial professionals. Note that liquidity, tax consequences, and other considerations must also be taken into account with respect to your individual circumstances to determine the suitability of any investment for you.</i></p>
  
     <h5 style="text-align:left;"><i class="ordered list icon circular inverted blue"></i> Instructions</h5>
<p style="text-align:left;">
   <ol>

      <li class="ol">Select the User Interface tab and click the YOUR INVESTMENT button to name the investment you are analyzing (it can be anything from a single publicly traded stock to a real estate portfolio).</li>

      <li class="ol">If the investment you are analyzing is not a publicly traded security, check the box next to private security.</li>

      <li class="ol">
        Select the first year you would like to begin analyzing your investment. If your first year was prior to 2004, select 2004; if your first year was after 2007, select 2007. Quantitative analysis requires data across a minimum of one market cycle to generate meaningful results. If your investment performance began after 2007, you must input a theoretical track record to best estimate how your investment would have performed going back to 2007.
        <b>For assistance with constructing a theoretical track record, email us at <a href="mailto:solutions@adagiollc.com">solutions@adagiollc.com.</a></b>
      </li>

   </ol>

   


</p>




   <h5 style="text-align:left;"><i class="send outline circular inverted blue icon"></i> References</h5>
   <div style="text-align:left; margin-left:50px;">

    <a target="_blank" href="http://pages.stern.nyu.edu/~adamodar/pdfiles/ovhds/inv2E/PvtFirm.pdf">
    <i class="circle icon grey small"></i>Damodaran, Aswath. Private Company Valuation. New York University Stern School of Business, p.183</a><br> 
    <a target="_blank" href="https://en.wikipedia.org/wiki/S%26P_500_Index#Annual_returns">
    <i class="circle icon grey small"></i>Historical S&P 500 Returns</a><br>           
    <a target="_blank" href="https://www.msci.com/resources/factsheets/index_fact_sheet/msci-us-reit-index.pdf"><i class="circle icon grey small"></i>Historical MSCI US REIT Returns</a><br>
      <a href="http://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yield "><i class="circle icon grey small"></i>Historical Treasury Rates</a>      





  </div>


  <h5 style="text-align:left;"><i class="address book outline icon blue inverted circular"></i> Credits</h5>
   <div style="text-align:left;">
    <hr>
    <p><a target="_blank" style="color:black;" href="https://www.linkedin.com/in/bensummers/">Benjamin D. Summers</a> <br><small>Managing Director, Adagio Group</small></p>

  </div>

</div style="margin-bottom:120px; margin-top:30px;">
  <CopyRight></CopyRight>
</div>
</template>

<script>
import CopyRight from './CopyRight'
export default {

  name: 'purpose',
  components: {
    CopyRight
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
 ol {
   list-style: none;
 }
 .ol {
   counter-increment: item;
   margin-bottom: 5px;
 }
 .ol:before {
   margin-right: 10px;
   content: counter(item);
   background: #409EFF;
   border-radius: 100%;
   color: white;
   width: 1.2em;
   text-align: center;
   display: inline-block;
 }
</style>