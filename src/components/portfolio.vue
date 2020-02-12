<template>
 <div>
<div class="ui segment row piled" style="margin-bottom:20px;" v-if="existResults()">
   <div class="col-md-12" style="margin-bottom:20px;">
      <h4><i class="book icon"></i>{{this.calculator.selectedName.toUpperCase()}} CHARACTERISTICS</h4>
   </div>
   <div class="col-md-12" style="text-align:left;">
      <div class="row">
         <div class="col-md-2">
          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                The return of a theoretically no-risk asset.<br> As a matter of practice, this is represented by a U.S. treasury of maturity that<br> matches that of the investment being analyzed or a three-month T-Bill. Note that <br>government securities are not actually risk free.                
              </div>
            <b> <el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Rf</el-tag></b>
          </el-tooltip>

         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Rf !== 'Infinity'">
            <i-count-up
                        :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.Rf"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
              </div>

              <b v-if="calculator.results.Rf === 'Infinity'">
                ∞
              </b>
         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Risk-Free Rate of Return (10 yr T-Note)</b>  
         </div>
      </div>

            
      <div class="row">
         <div class="col-md-2">

            <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                The S&P 500 is the generally accepted benchmark for the financial markets. <br>The expected market return is therefore the geometric mean of S&P 500 returns over a given period of time.                
              </div>
                <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Rm</el-tag></b>
            </el-tooltip>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
           
            <div v-if="calculator.results.Rm !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.Rm"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
         
            </div>

              <b v-if="calculator.results.Rm === 'Infinity'">
                ∞
              </b>




         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Expected Market Return</b>  
         </div>
      </div>               
               
               
           
      <div class="row">
         <div class="col-md-2">
            <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                The geometric mean of an investment's returns over a given period of time. <br>It's effectively the average historical return of an investment, br which is equivalent to the return it is expected to generate in the future.
              </div>
              <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Ri</el-tag></b>
            </el-tooltip>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div  v-if="calculator.results.Ri !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.Ri"
                          :decimals="2"
                          :duration="2.5">          
              </i-count-up>
            </div>

            <b v-if="calculator.results.Ri === 'Infinity'">
              ∞
            </b>
        </div>


         <div class="col-md-8" style="font-size:11px;">
            <b>Expected {{getNameWithoutYoursByDefault()}} Return</b>  
         </div>
      </div>

            
      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">σi</el-tag></b>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.oi !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.oi"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>


            <b v-if="calculator.results.oi === 'Infinity'">
              ∞
            </b>

        </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Standard Deviation of {{this.calculator.selectedName}} Annual Returns</b>  
         </div>
      </div>

      <div class="row table-warning">
         <div class="col-md-2">
          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures the dependence of an investment on  the performance of the market as a whole. <br> A beta of 1 means the investment moves in tandem with the market;  <br> beta of -1 means the investment moves exactly opposite of the market; <br> beta of 2 moves exactly double the market, etc. <br> A beta of zero is ideal for actively managed portfolios.
              </div>
              <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">β</el-tag></b>
            </el-tooltip>


         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.B !== 'Infinity'">
              <i-count-up
                          :start="0"
                          :end="calculator.results.B"
                          :decimals="3"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.B === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>{{this.calculator.selectedName}} vs. S&P Covariance / S&P Variance </b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">


          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
              Measures the break-even return of an investment given its market risk. <br> The lower the number, the better.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">E(Ri)</el-tag></b>
            </el-tooltip>


         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div  v-if="calculator.results.ERi !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.ERi"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.ERi === 'Infinity'">
              ∞
            </b>

         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Risk-Adjusted Expected {{this.calculator.selectedName}} Return [ Rf + β * (Rm - Rf)]</b>  
         </div>
      </div>


      <div class="row table-warning">
         <div class="col-md-2">

          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures the return an investment generates above what would be break-even given its market risk.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">α</el-tag></b>
            </el-tooltip>


         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Alpha !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.Alpha"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.Alpha === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>{{this.calculator.selectedName}} Excess Return to Risk Borne</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Rp</el-tag></b>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Rp !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.Rp"
                          :decimals="2"
                          :duration="2.5"></i-count-up>

            </div>

            <b v-if="calculator.results.Rp === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>{{this.calculator.selectedName}} Risk Premium [E(Ri) - Rf]</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Re</el-tag></b>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div  v-if="calculator.results.Re !== 'Infinity' || calculator.results.Re !== 'NaN'">
                <i-count-up
                            :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.Re"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.Re === 'Infinity'">
              ∞
            </b>
         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>{{this.calculator.selectedName}} Excess Return to Risk Free Return [α + E(Ri) - Rf]   </b>  
         </div>
      </div>

      <div class="row table-warning">
         <div class="col-md-2">

          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                The most widely used measure of risk-adjusted performance, it measures the total risk-adjusted performance of an investment. <br> It's sometimes referred to as the Reward-To-Variability Ratio. <br> A Sharpe Ratio greater than 1 is considered good, greater than 2 is very good, and above 3 is excellent.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Rs</el-tag></b>
            </el-tooltip>


         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
           
            <div v-if="calculator.results.Rs !== 'Infinity'"> 
                <i-count-up
                          :start="0"
                          :end="calculator.results.Rs"
                          :decimals="3"
                          :duration="2.5"></i-count-up>
            </div>


            <b v-if="calculator.results.Rs === 'Infinity'">
              ∞
            </b>

         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Sharpe Ratio [(Ri - Rf) / σi]</b>  
         </div>
      </div>

      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">σm</el-tag></b>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.om !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.om"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.om === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Standard Deviation of the S&P's Annual Returns</b>  
         </div>
      </div>


      <div class="row table-warning">
         <div class="col-md-2">
          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Derived from the Sharpe Ratio, M2 measures the total risk-adjusted performance of an investment as a percentage. <br> The higher the number, the better.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">M2</el-tag></b>
          </el-tooltip>


         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.M2 !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"
                    :start="0"
                    :end="calculator.results.M2"
                    :decimals="2"
                    :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.M2 === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Modigliani Risk-Adjusted Performance [(Ri - Rf) * σm / σi + Rf]</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Σi+</el-tag></b>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Acumig !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"

                :start="0"
                :end="calculator.results.Acumig"
                :decimals="2"
                :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.Acumig === 'Infinity'">
              ∞
            </b>

         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Sum of {{this.calculator.selectedName}} Annual Returns > E(Ri)</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Σi-</el-tag></b>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Acumil !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.Acumil"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.Acumil === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Sum of {{this.calculator.selectedName}} Annual Returns < E(Ri)</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">σi-</el-tag></b>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.oiminus !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.oiminus"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.oiminus === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Standard Deviation of {{this.calculator.selectedName}} Annual Returns < E(Ri)</b>  
         </div>
      </div>
            

      <div class="row table-warning">
         <div class="col-md-2">
          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Identical to the Sharpe Ratio except that risk is defined to be only negative deviation as opposed to total deviation. <br> The higher the number, the better.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Rso</el-tag></b>
          </el-tooltip>



         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Rso !== 'Infinity'">
              <i-count-up
                          :start="0"
                          :end="calculator.results.Rso"
                          :decimals="3"
                          :duration="2.5"></i-count-up>
            </div>


            <b v-if="calculator.results.Rso === 'Infinity'">
              ∞
            </b>



         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Sortino Ratio {[Ri - E(Ri)] / σi-}</b>  
         </div>
      </div>


      <div class="row table-warning">
         <div class="col-md-2">

          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures the total positive returns over the total negative returns of an investment. <br> The higher the number, the better.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:4px;" size="mini">Ω</el-tag></b>
          </el-tooltip>



         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Ome !== 'Infinity'">
            <i-count-up
                          :start="0"
                          :end="calculator.results.Ome"
                          :decimals="3"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.Ome === 'Infinity'">
              ∞
            </b>

         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Omega Ratio (Σi+ / -Σi-)</b>  
         </div>
      </div>

      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">imax</el-tag></b>            
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.imax !== 'Infinity'">
            <i-count-up
                        :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.imax"
                          :decimals="2"
                          :duration="2.5"></i-count-up>

            </div>

            <b v-if="calculator.results.imax === 'Infinity'">
              ∞
            </b>



         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>{{this.calculator.selectedName}} Maximum Annual Return</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">imin</el-tag></b>                        
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.imin !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.imin"
                          :decimals="2"
                          :duration="2.5"></i-count-up>

            </div>
            <b v-if="calculator.results.imin === 'Infinity'">
              ∞
            </b>
         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>{{this.calculator.selectedName}} Minimum Annual Return</b>  
         </div>
      </div>



      <div class="row">
         <div class="col-md-2">

        <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures an investment's maximum loss from its peak to its trough before a new peak is attained. <br> The lower the number, the better.
            </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">MDD</el-tag></b>
          </el-tooltip>

         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
              <div v-if="calculator.results.MDD !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.MDD"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
              </div>
            <b v-if="calculator.results.MDD === 'Infinity'">
              ∞
            </b>
         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>{{getNameWithoutYoursByDefault()}} Maximum Drawdown</b>  
         </div>
      </div>

      <div class="row table-warning">
         <div class="col-md-2">

         <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
               Measures an investment's average return over its Maximum Drawdown. The higher the number, the better.
            </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">RoMaD</el-tag></b>                   
          </el-tooltip>



         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.RoMaD !== 'Infinity'">
              <i-count-up
                          :start="0"
                          :end="calculator.results.RoMaD"                          
                          :decimals="3"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.RoMaD === 'Infinity'">
              ∞
            </b>

         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Return Over Maximum Drawdown [Ri / MDD]</b>  
         </div>
      </div>

      <div class="row">
         <div class="col-md-2">


          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
Similar to the Sharpe Ratio except that it measures performance  relative to market risk as opposed to total risk. <br> It's sometimes   referred to as the Reward-To-Volatility Ratio. The higher the number, the better.              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Rt</el-tag></b>       
          </el-tooltip>


         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Rt !== 'Infinity'">
              <i-count-up
                          :start="0"
                          :end="calculator.results.Rt"
                          :decimals="3"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.Rt === 'Infinity'">
              ∞
            </b>

         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Treynor Ratio [(Ri - Rf) / β]</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">

          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures risk-adjusted return above the market. The higher the number, the better.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Rn</el-tag></b>    
          </el-tooltip>



         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.Rn !== 'Infinity'">
                <i-count-up
                          :start="0"
                          :end="calculator.results.Rn"
                          :decimals="3"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.Rn === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Information Ratio [Ri - Rm / σi]</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">ΣRle2</el-tag></b>
         </div>
         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.AcumRle2 !== 'Infinity'">
                <i-count-up
                          :start="0"
                          :end="calculator.results.AcumRle2"
                          :decimals="2"
                          :duration="2.5"></i-count-up>%
            </div>

            <b v-if="calculator.results.AcumRle2 === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Sum of Regression Line Error Squared</b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">ΣRie2</el-tag></b>            
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.AcumRie2 !== 'Infinity'">
                <i-count-up
                          :start="0"
                          :end="calculator.results.AcumRie2"
                          :decimals="2"
                          :duration="2.5"></i-count-up>%
            </div>


            <b v-if="calculator.results.AcumRie2 === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Sum of Error from Ri Squared  </b>  
         </div>
      </div>


      <div class="row">
         <div class="col-md-2">

          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures the percentage of an investment's movement that can be explained by the market.  <br> R-squared of zero is ideal for actively managed portfolios.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">R2</el-tag></b>
          </el-tooltip>

         </div>


         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.R2 !== 'Infinity'">
              <i-count-up
                          :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.R2"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.R2 === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>R-Squared (ΣRle2 / ΣRie2)</b>  
         </div>
      </div> 
      <div v-if="calculator.privateSecurities" style="margin-top:10px;">
      <h4>For Private Securities</h4>
      <div class="row">
         <div class="col-md-2">
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">λ</el-tag></b>                                    
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
              <div v-if="calculator.results.lamda">
                  <i-count-up
                              :options="{suffix:''}"

                          :start="0"
                          :end="calculator.results.lamda"
                          :decimals="3"
                          :duration="2.5"></i-count-up>
              </div>

            <b v-if="calculator.results.lamda === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Illiquidity Premium for Private Securities</b>  
         </div>
      </div>

      <div class="row">
         <div class="col-md-2">

          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures an investment's maximum loss from its peak to its trough before a new peak is attained. The lower the number, the better.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">Eλ(Ri)</el-tag></b>                                         
          </el-tooltip>

         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.ERi2 !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"

                          :start="0"
                          :end="calculator.results.ERi2"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.ERi === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Liquidity-Adjusted Expected Return [E(Ri) * λ]</b>  
         </div>
      </div>

      <div class="row">
         <div class="col-md-2">

          <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">
                Measures the return an investment generates above what would be break-even given its market risk.
              </div>
            <b><el-tag type="info" style="margin-bottom:4px;margin-top:2px;" size="mini">αλ</el-tag></b>                
          </el-tooltip>
         </div>

         <div style="text-align:right; vertical-align:center;" class="col-md-2">
            <div v-if="calculator.results.AlphaLambda !== 'Infinity'">
                <i-count-up
                            :options="{suffix:'%'}"
                          :start="0"
                          :end="calculator.results.AlphaLambda"
                          :decimals="2"
                          :duration="2.5"></i-count-up>
            </div>

            <b v-if="calculator.results.AlphaLambda === 'Infinity'">
              ∞
            </b>


         </div>

         <div class="col-md-8" style="font-size:11px;">
            <b>Porfolio Excess Return to Risk & Illiquidity Borne [Ri - Eλ(Ri)]</b>  
         </div>
      </div>
   </div>



   </div>
</div>
 </div>

</template>

<script>
import ICountUp from 'vue-countup-v2';
import axios from 'axios'
import $ from 'JQuery'
import dateFormat from 'dateformat';
export default {
   components: {
      ICountUp
   },
  name: 'component_name',
  props: ['calculator'],
  mounted () {
    this.getTreasury()
  },
  methods: {
    existResults () {
      return !_.isEmpty(this.calculator.results)
    },
    formatDate () {
      return dateFormat(this.calculator.RfTimestamp, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    },
    getTreasury () {
      var that = this
      axios.get('https://cors-anywhere.herokuapp.com/https://www.marketwatch.com/investing/bond/tmubmusd10y?countrycode=bx').
          then(function(r) {
            var el = $( r.data);
            var Rf = $('bg-quote.value', el).html()
            if (!_.isNil(Rf)) {
              that.calculator.Rf = Rf
            }
            that.calculator.RfTimestamp = new Date()
      })
    },
    getNameWithoutYoursByDefault () {
      if (this.calculator.selectedName === 'Your Investment') {
        return 'Your Investment'
      } else {
        return this.calculator.selectedName
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>