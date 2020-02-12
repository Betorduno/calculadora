<template>
    <div>
        <h6><i class="line chart icon"></i> ANNUAL RETURNS</h6>
    <hr>
	<canvas id="canvas"></canvas>
</div>
</template>

<script>
import Chart from 'chart.js';
export default {
  name: 'chart',
  props: ['calculator'],
  data: function () {
    return {
        date: null
    }
  },
  mounted () {
    this.date = new Date()
  },
  methods: {
    getLabels () {
      if (this.calculator.firstYear === "2004") {
        return ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
      }

      if (this.calculator.firstYear === "2005") {
        return ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
      }

      if (this.calculator.firstYear === "2006") {
        return ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
      }

      if (this.calculator.firstYear === 2007 || this.calculator.firstYear === "2007") {
        return ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
      }


    },
    renderChart () {

/*     

      if (this.calculator.results.Rs <= 1) {
        mainColor = 'red'    
      }
      if (this.calculator.results.Rs >= 1 ) {
        mainColor = '#FFC300'     
      }
      if (this.calculator.results.Rs >= 3) {
        mainColor = 'green'        
      }*/ 
      var mainColor = null
      if (this.calculator.results.Rs >= 3) {
          mainColor =  '#1a9850'  
              
      }

      if (this.calculator.results.Rs >= 2.5 && this.calculator.results.Rs < 3) {
          mainColor =  '#66bd63'        
      }

      if (this.calculator.results.Rs >= 2 && this.calculator.results.Rs < 2.5) {
          mainColor =  '#a6d96a'       
      }


      if (this.calculator.results.Rs >= 1.5 && this.calculator.results.Rs < 2) {
          mainColor =  '#d9ef8b'                
      }

      if (this.calculator.results.Rs <= 1.5 && this.calculator.results.Rs > 0.74) {
          mainColor =  '#ffffbf'          
      }

      if (this.calculator.results.Rs <= 0.75 && this.calculator.results.Rs > 0.4) {
          mainColor =  '#fee08b'
      }


      if (this.calculator.results.Rs <= 0.5 && this.calculator.results.Rs > 0.24) {
          mainColor =  '#fdae61'
      }

      if (this.calculator.results.Rs <= 0.25 && this.calculator.results.Rs > 0 ) {
          mainColor =  '#f46d43'
      }


      if (this.calculator.results.Rs <= 0) {
          mainColor =  '#d73027'
      }

    this.mainColor = mainColor


    var lineChartData = {
        labels: this.getLabels(),
        datasets: [{
            label: this.calculator.selectedName,
            borderColor: mainColor,
            backgroundColor: mainColor,
            fill: false,
            data: this.calculator.results.investmentsSumatory,

            yAxisID: "y-axis-1",
        }, {
            label: "S&P 500",
            borderColor: '#4f99c1',
            backgroundColor: '#4f99c1',
            fill: false,
            data: this.calculator.results.SP500Sumatory,
            yAxisID: "y-axis-1",
        },{
            label: "MSCI US REIT",
            borderColor: '#37607b',
            backgroundColor: '#37607b',
            fill: false,
            data: this.calculator.results.MSCISumatory,
            yAxisID: "y-axis-1",
        }]
    };

        var ctx = document.getElementById("canvas").getContext("2d");
        window.myLine = Chart.Line(ctx, {
            data: lineChartData,
            options: {
                hoverMode: 'index',
                stacked: false,
                title:{
                    display: false,
                    text:'Annual Returns'
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'Percentage (%)'
                        },
                        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: "left",
                        id: "y-axis-1"
                    }],
                }
            }
        });



    }
  },
  watch: {
    '$props.calculator':{
      handler: function (val, oldVal) {
        if (val.results.date !== this.date) {
            if (window.myLine) {
                window.myLine.destroy()
            }
            this.renderChart()

        }
        //this.renderChart()
      },
      deep: true
    }

  },
  data () {
    return {
      mainColor: ''
    }
  }
}
</script>

<style lang="css" scoped>
    canvas {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }


</style>