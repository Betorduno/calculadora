/* eslint-disable  no-unused-vars */
import _ from 'lodash';
import gmean from 'compute-gmean'
import computeVariance from 'compute-variance';
import covariance from 'covariance'
export default {
  firstYear: 2007,
  privateSecurities: false,
  selectedName: 'Your Investment',
  results: {},
  RfTimestamp: new Date(),
  Rf: 2.64,
  variables: [{
    "label": "Rf",
    "description": "Risk-Free",
    "name": "Rf",
    "value": 1.97,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Rm",
    "description": "Expected Market Return (S&P Average Annual Return)",
    "name": "Rm",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Ri", // Ri -
    "description": "Expected Asset Return (Portfolio Average Return)",
    "name": "Ri",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "σi",
    "description": "Standard Deviation of Portfolio's Annual Returns",
    "name": "Oi",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "β",
    "description": "Portfolio vs. S&P Covariance / S&P Variance",
    "name": "PortfolioVsSP",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "E(Ri)",
    "description": "Risk-Adjusted Expected Portfolio Return [ Rf + β * (Rm - Rf)]",
    "name": "Eri",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "α",
    "description": "Portfolio Excess Return to Risk Borne",
    "name": "a",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Rp",
    "description": "Portfolio Risk Premium [E(Ri) - Rf]",
    "name": "Rp",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Re",
    "description": "Portfolio Excess Return to Risk Free Return [α + E(Ri) - Rf]",
    "name": "Re",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Rs",
    "description": "Sharpe Ratio [(Ri - Rf) / σi]",
    "name": "Rs",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "σm",
    "description": "Standard Deviation of the S&P's Annual Returns",
    "name": "Om",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "M2",
    "description": "Modigliani Risk-Adjusted Performance [(Ri - Rf) * σm / σi + Rf]",
    "name": "M2",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Σi+",
    "description": "Sum of Portfolio's Annual Returns > E(Ri)",
    "name": "Eiplus",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Σi-",
    "description": "Sum of Portfolio's Annual Returns < E(Ri)",
    "name": "Eiminus",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "σi-",
    "description": "Standard Deviation of Portfolio's Annual Returns < E(Ri)",
    "name": "Oiminus",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "Rso",
    "description": "Sortino Ratio {[Ri - E(Ri)] / σi-}",
    "name": "Rso",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "Ω",
    "description": "Omega Ratio (Σi+ / -Σi-)",
    "name": "Oratio",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "imax",
    "description": "Portfolio's Maximum Annual Return",
    "name": "imax",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "imin",
    "description": "Portfolio's Minimum Annual Return",
    "name": "imin",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "RoMaD",
    "description": "Return Over Maximum Drawdown [Ri / (imax - imin)]",
    "name": "Romad",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "Rt",
    "description": "Treynor Ratio [(Ri - Rf) / β]",
    "name": "Rt",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "Rn",
    "description": "Information Ratio [Ri - Rm / σi]",
    "name": "Rn",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "ΣRle2",
    "description": "Sum of Regression Line Error Squared",
    "name": "SumRlEsq",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "ΣRie2",
    "description": "Sum of Error from Ri Squared",
    "name": "SumERiEsq",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "R2",
    "description": "R-Squared (ΣRle2 / ΣRie2)",
    "name": "R2",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "λ",
    "description": "Illiquidity Premium for Private Securities ☨",
    "name": "IliquidityPremium",
    "value": null,
    "type": "number",
    "unit": ""
  },
  {
    "label": "Eλ(Ri)",
    "description": "Liquidity-Adjusted Expected Return [E(Ri) * λ]",
    "name": "LiquidityAdjusted",
    "value": null,
    "type": "number",
    "unit": "%"
  },
  {
    "label": "αλ",
    "description": "Porfolio Excess Return to Risk & Illiquidity Borne [Ri - Eλ(Ri)]",
    "name": "PortfolioExcess",
    "value": null,
    "type": "number",
    "unit": "%"
  }
  ],

  annualReturns: [{
    "YEAR": 2004,
    "INVESTMENT_TESTING": 31.49,
    "INVESTMENT": 31.49,
    "SP500": 10.88,
    "MSCI": 31.49
  },
  {
    "YEAR": 2005,
    "INVESTMENT_TESTING": 12.13,
    "INVESTMENT": 12.13,
    "SP500": 4.91,
    "MSCI": 12.13
  },
  {
    "YEAR": 2006,
    "INVESTMENT_TESTING": 35.92,
    "INVESTMENT": 35.92,
    "SP500": 15.79,
    "MSCI": 35.92
  },
  {
    "YEAR": 2007,
    "INVESTMENT": -16.82,
    "INVESTMENT_TESTING": 127.40,
    "SP500": 5.49,
    "MSCI": -16.82
  },
  {
    "YEAR": 2008,
    "INVESTMENT": -37.97,
    "INVESTMENT_TESTING": 20.60,
    "SP500": -37.00,
    "MSCI": -37.97
  },
  {
    "YEAR": 2009,
    "INVESTMENT": 28.61,
    "INVESTMENT_TESTING": 12.70,
    "SP500": 26.46,
    "MSCI": 28.61
  },
  {
    "YEAR": 2010,
    "INVESTMENT": 28.48,
    "INVESTMENT_TESTING": 18.20,
    "SP500": 15.06,
    "MSCI": 28.48
  },
  {
    "YEAR": 2011,
    "INVESTMENT": 8.69,
    "INVESTMENT_TESTING": 22.10,
    "SP500": 2.11,
    "MSCI": 8.69
  },
  {
    "YEAR": 2012,
    "INVESTMENT": 17.77,
    "INVESTMENT_TESTING": 23.00,
    "SP500": 16.00,
    "MSCI": 17.77
  },
  {
    "YEAR": 2013,
    "INVESTMENT": 2.47,
    "INVESTMENT_TESTING": 23.20,
    "SP500": 32.39,
    "MSCI": 2.47
  },
  {
    "YEAR": 2014,
    "INVESTMENT": 30.38,
    "INVESTMENT_TESTING": 23.50,
    "SP500": 13.69,
    "MSCI": 30.38
  },
  {
    "YEAR": 2015,
    "INVESTMENT": 2.52,
    "INVESTMENT_TESTING": 23.50,
    "SP500": 1.38,
    "MSCI": 2.52
  },
  {
    "YEAR": 2016,
    "INVESTMENT": 8.60,
    "INVESTMENT_TESTING": 22.70,
    "SP500": 11.96,
    "MSCI": 8.60
  },
  {
    "YEAR": 2017,
    "INVESTMENT": 5.07,
    "INVESTMENT_TESTING": 22.00,
    "SP500": 21.83,
    "MSCI": 5.07
  },
  {
    "YEAR": 2018,
    "INVESTMENT": -4.57,
    "INVESTMENT_TESTING": -4.57,
    "SP500": -4.38,
    "MSCI": -4.57
  },
  {
    "YEAR": 2019,
    "INVESTMENT": 25.84,
    "INVESTMENT_TESTING": 25.84,
    "SP500": 31.46,
    "MSCI": 25.84
  }
  ],
  setFirstYear(year) {
    this.firstYear = year
  },
  getAnnualReturns() {
    var that = this
    return _.filter(this.annualReturns, function (investment) {
      return (investment.YEAR >= that.firstYear)
    })
  },
  getMedian(values) {
    values.sort(function (a, b) {
      return a - b;
    });
    var half = Math.floor(values.length / 2);

    if (values.length % 2)
      return values[half];
    else
      return (values[half - 1] + values[half]) / 2.0;

  },
  stdev(arr) {
    var n = arr.length;
    var sum = 0;

    arr.map(function (data) {
      sum += data;
    });

    var mean = sum / n;

    var variance = 0.0;
    var v1 = 0.0;
    var v2 = 0.0;

    if (n != 1) {
      for (var i = 0; i < n; i++) {
        v1 = v1 + (arr[i] - mean) * (arr[i] - mean);
        v2 = v2 + (arr[i] - mean);
      }

      v2 = v2 * v2 / n;
      variance = (v1 - v2) / (n - 1);
      if (variance < 0) {
        variance = 0;
      }
      var stddev = Math.sqrt(variance);
    }

    return {
      mean: Math.round(mean * 100) / 100,
      variance: variance,
      deviation: Math.round(stddev * 100) / 100
    }
  },
  getValue(name) {
    return _.find(this.variables, {
      name: name
    }).value
  },
  calculate() {
    var that = this

    // Variable Name - Variable Type - Unity - Lower Bound - Upper Bound - Visible

    //---------------------------------------------------------------------------------------------------------
    //---------------------------------- RISK-ADJUSTED PERFORMANCE CALCULATIONS -------------------------------
    //---------------------------------------------------------------------------------------------------------

    //--------- Conditionals -----------

    var Analysis = this.privateSecurities // Type of Analysis - Option Variable - Dimensionless - 1 - 2 - Yes - Choose Between 'Standard Case' or 'For Private Securities'



    //console.log( ' Analysis :  ' + Analysis );

    //--------- Calculations -----------

    var Rf = parseFloat(this.Rf) // "Risk-Free" Rate of Return (5 yr T-Note) - Output Variable - % - 0 - 100 - Yes
    // var Rf = 2.64

    console.log("Rf updated", Rf)

    // get the sumatories of investments, MSCI, SP500
    var data = _.filter(this.annualReturns, function (investment) {
      return (investment.YEAR >= that.firstYear)
    })

    //console.log( ' Rf :  ' + Rf );
    var GeoMeanSP500 = []
    data.forEach(function (investment, k) {
      GeoMeanSP500[k] = parseFloat(investment.SP500) / 100
    })

    console.log(GeoMeanSP500)

    //var GeoMeanSP500 = [0.0549, -0.3700, 0.2646, 0.1506, 0.0211, 0.1600, 0.3239, 0.1369, 0.0138, 0.1174, 0.2164],
    var sGeoMeanSP500 = 0,
      pGeoMeanSP500 = 1

    var GeoMeanYourInvestment = [] // Your Investment - Input Variable - % - 0 - 100 - Yes


    data.forEach(function (investment, k) {
      GeoMeanYourInvestment[k] = parseFloat(investment.INVESTMENT) / 100
    })

    console.log("GeoMeanYourInvestment", GeoMeanYourInvestment)

    var sGeoMeanYourInvestment = 0,
      pGeoMeanYourInvestment = 1


    //console.log( ' Rf :  ' + Rf );
    var GeoMeanMSCIUSREIT = []
    data.forEach(function (investment, k) {
      GeoMeanMSCIUSREIT[k] = parseFloat(investment.MSCI) / 100
    })

    console.log("GeoMeanMSCIUSREIT", GeoMeanMSCIUSREIT)
    // var GeoMeanMSCIUSREIT = [-0.1682, -0.3797, 0.2861, 0.2848, 0.0869, 0.1777, 0.0247, 0.3038, 0.0252, 0.0860, 0.0507],


    var pGeoMeanMSCIUSREIT = 1,
      i;
    for (i = 0; i < GeoMeanSP500.length; i += 1) {
      pGeoMeanSP500 *= GeoMeanSP500[i] + 1;
      pGeoMeanYourInvestment *= GeoMeanYourInvestment[i] + 1;
      pGeoMeanMSCIUSREIT *= GeoMeanMSCIUSREIT[i] + 1;
    }

    var Rm = (Math.pow(pGeoMeanSP500, 1 / GeoMeanSP500.length) - 1) * 100 // Expected Market Return (S&P Average Annual Return) - Output Variable - % - 0 - 100 - Yes
    var Ri = (Math.pow(pGeoMeanYourInvestment, 1 / GeoMeanYourInvestment.length) - 1) * 100 // Expected Asset Return (Portfolio Average Return) - Output Variable - % - 0 - 100 - Yes

    var pGeoMeanMSCIUSREIT = (Math.pow(pGeoMeanMSCIUSREIT, 1 / GeoMeanMSCIUSREIT.length) - 1) * 100
    //console.log( ' Rm :  ' +Rm );
    //console.log( ' Ri :  ' +Ri );

    var CovSPandYI = 0,
      VarSP = 0,
      i;
    for (i = 0; i < GeoMeanSP500.length - 1; i += 1) {
      sGeoMeanSP500 += GeoMeanSP500[i];
      sGeoMeanYourInvestment += GeoMeanYourInvestment[i];
    }


    var SP500Mean = (sGeoMeanSP500 / (GeoMeanSP500.length - 1))
    var YourInvestmentMean = (sGeoMeanYourInvestment / (GeoMeanYourInvestment.length - 1))


    // for (i = 0; i < GeoMeanSP500.length - 1; i += 1) {
    //     // CovSPandYI += (GeoMeanSP500[i] - SP500Mean) * (GeoMeanYourInvestment[i] - YourInvestmentMean);
    //     //VarSP += Math.pow((GeoMeanSP500[i] - SP500Mean), 2);
    // }

    CovSPandYI = covariance(GeoMeanYourInvestment, GeoMeanSP500);

    VarSP = computeVariance(GeoMeanSP500, {
      'bias': true
    })

    var CovSPandYI = CovSPandYI / (GeoMeanSP500.length - 1);
    VarSP = VarSP / (GeoMeanSP500.length - 1);
    ////console.log( ' CovSPandYI :  ' +CovSPandYI );

    var sGeoMeanYourInvestment2 = 0,
      sGeoMeanSP5002 = 0,
      i;
    for (i = 0; i < GeoMeanSP500.length; i += 1) {
      sGeoMeanYourInvestment2 += GeoMeanYourInvestment[i];
      sGeoMeanSP5002 += GeoMeanSP500[i];
    }

    var YourInvestmentMean2 = (sGeoMeanYourInvestment2 / (GeoMeanSP500.length));
    var SP500Mean2 = (sGeoMeanSP5002 / (GeoMeanSP500.length));

    var preStaDevYI = 0,
      preStaDevSP = 0;
    for (i = 0; i < GeoMeanSP500.length; i += 1) {
      preStaDevYI += Math.pow((GeoMeanYourInvestment[i] - YourInvestmentMean2), 2);
      preStaDevSP += Math.pow((GeoMeanSP500[i] - SP500Mean2), 2);
    }

    var oi = parseFloat((Math.pow((preStaDevYI / (GeoMeanYourInvestment.length - 1)), 0.5) * 100).toFixed(4)); // Standard Deviation of Portfolio's Annual Returns - Output Variable - % - 0 - 100 - Yes

    //console.log( ' oi :  ' +oi );


    console.log(GeoMeanSP500)

    console.log(CovSPandYI, "CovSPandYI")
    console.log(VarSP, "VarSP")

    var B = parseFloat((CovSPandYI / VarSP).toFixed(10)); // Portfolio vs. S&P Covariance / S&P Variance - Output Variable - Dimensionless - 0 - 5 - Yes

    console.log(' B :  ' + B);

    var ERi = Rf + Math.abs(B) * (Rm - Rf); // Risk-Adjusted Expected Portfolio Return [ Rf + β * (Rm - Rf)] - Output Variable - % - 0 - 100 - Yes
    var Alpha = Ri - ERi

    // if (!Analysis) {

    //     //console.log( ' ERi :  ' +ERi );

    //     //var Alpha = Ri - ERi // Portfolio Risk Premium [E(Ri) - Rf] - Output Variable - % - -100 - 100 - Yes
    //     //console.log( ' Alpha :  ' +Alpha );

    // }

    if (Analysis) {

      var lamda = 10 / 9; // Illiquidity Premium for Private Securities ☨ - Output Variable - Dimensionless - -5 - 5 - Yes

      //console.log( ' lamda :  ' +lamda );

      var ERi2 = ERi * lamda // Liquidity-Adjusted Expected Return [E(Ri) * λ] - Output Variable - % - 0 - 100 - Yes

      //console.log( ' ERi :  ' +ERi );

      var AlphaLambda = Ri - ERi2; // Porfolio Excess Return to Risk & Illiquidity Borne [Ri - Eλ(Ri)] - Output Variable - % - -100 - 100 - Yes

      //console.log( ' Alpha :  ' +Alpha );
    }






    //console.log( ' Rp :  ' +Rp );

    var Re = parseFloat(Alpha) + parseFloat(ERi) - parseFloat(Rf) // Portfolio Excess Return to Risk Free Return [α + E(Ri) - Rf] - Output Variable - % - 0 - 100 - Yes

    if (oi === 0) {
      var Rs = 'Infinity';
    } else {
      var Rs = (Ri - Rf) / oi; // Sharpe Ratio [(Ri - Rf) / σi] - Output Variable - Dimensionless - 0 - 5 - Yes
    }

    //console.log( ' Rs :  ' +Rs );

    var om = parseFloat((Math.pow((preStaDevSP / (GeoMeanSP500.length - 1)), 0.5) * 100).toFixed(2)); // Standard Deviation of the S&P's Annual Returns - Output Variable - % - 0 - 100 - Yes

    //console.log( ' om :  ' +om );

    if (Rs === 'Infinity') {

      if (Ri === 0) {
        var M2 = 0;
      } else {
        var M2 = 'Infinity';
      }

    } else {
      var M2 = Rs * om + Rf; // Modigliani Risk-Adjusted Performance [(Ri - Rf) * σm / σi + Rf] - Output Variable - % - 0 - 100 - Yes
    }

    var Rp = ERi - Rf // Portfolio Risk Premium [E(Ri) - Rf] - Output Variable - % - 0 - 100 - Yes


    //console.log( ' M2 :  ' +M2 );

    var Alphai = [],
      UpsideReturns = [],
      DownsideReturns = [],
      Acumig = 0;
    var Acumil = 0;

    for (i = 0; i < GeoMeanSP500.length; i += 1) {
      Alphai[i] = GeoMeanYourInvestment[i] - ERi / 100;

      if (GeoMeanYourInvestment[i] > (ERi / 100)) {
        UpsideReturns[i] = Alphai[i]
        DownsideReturns[i] = 0;
      } else {
        UpsideReturns[i] = 0;
        DownsideReturns[i] = Alphai[i]
      }
      Acumig += 100 * UpsideReturns[i]; // Sum of Portfolio's Annual Returns > E(Ri) - Output Variable - % - -100 - 100 - Yes
      Acumil += 100 * DownsideReturns[i]; // Sum of Portfolio's Annual Returns < E(Ri) - Output Variable - % - -100 - 100 - Yes
    }


    console.log(' Acumig :  ' + Acumig);

    console.log(' Acumil :  ' + Acumil);

    var UpsideReturnsMean = Acumig / UpsideReturns.length;
    var DownsideReturnsMean = Acumil / DownsideReturns.length


    var preStaDevUR = 0;
    var preStaDevDR = 0;
    var oiminus = 0;
    for (i = 0; i < UpsideReturns.length; i += 1) {
      preStaDevUR += Math.pow((UpsideReturns[i] - UpsideReturnsMean / 100), 2);
      preStaDevDR += Math.pow((DownsideReturns[i] - DownsideReturnsMean / 100), 2);
    }

    oiminus = parseFloat((Math.pow((preStaDevDR / (DownsideReturns.length - 1)), 0.5) * 100).toFixed(2)); // Standard Deviation of Portfolio's Annual Returns < E(Ri) - Output Variable - % - 0 - 100 - Yes

    console.log(' oiminus :  ' + oiminus);

    if (oiminus === 0) {
      var Rso = 'Infinity';
    } else {
      var Rso = (Ri - ERi) / oiminus; // Sortino Ratio {[Ri - E(Ri)] / σi-} - Output Variable - Dimensionless - -5 - 5 - Yes
    }

    //console.log( ' Rso :  ' +Rso );
    if (Acumil === 0) {
      var Ome = 'Infinity';
    } else {
      var Ome = ((Acumig / Acumil) * - 1).toFixed(4); // Omega Ratio (Σi+ / -Σi-) - Output Variable - Dimensionless - 0 - 5 - Yes
    }



    //console.log( ' Ome :  ' +Ome );

    var imax = Math.max(...GeoMeanYourInvestment) * 100 // Portfolio's Maximum Annual Return - Output Variable - % - -100 - 100 - Yes

    console.log(' imax :  ' + imax);

    var imin = Math.min(...GeoMeanYourInvestment) * 100 // Portfolio's Minimum Annual Return - Output Variable - % - -100 - 100 - Yes

    console.log(' imin :  ' + imin);

    var MaD = (imax - imin);

    //console.log( ' MaD :  ' +MaD );

    if (B === 0) {
      var Rt = 'Infinity';
    } else {
      var Rt = (Ri - Rf) / B / 100; // Treynor Ratio [(Ri - Rf) / β] - Output Variable - Dimensionless - 0 - 5 - Yes
    }

    //console.log( ' Rt :  ' +Rt );

    if (oi === 0) {
      var Rn = 'Infinity';
    } else {
      var Rn = (Ri - Rm) / oi; // Information Ratio [Ri - Rm / σi] - Output Variable - Dimensionless - -5 - 5 - Yes
    }

    //console.log( ' Rn :  ' +Rn );

    var m = parseFloat(B.toFixed(4));
    var b = parseFloat((Ri - (m * Rm)).toFixed(2));
    console.log(b)
    console.log(m)
    var Rl = [];
    var RIES = [];
    var ES = [];
    var AcumRle2 = 0;
    var AcumRie2 = 0;
    for (i = 0; i < GeoMeanSP500.length; i += 1) {
      Rl[i] = parseFloat((m * (GeoMeanSP500[i] * 100) + b).toFixed(2));
      RIES[i] = Math.pow(((GeoMeanYourInvestment[i] * 100) - Rl[i]), 2) / 100;
      AcumRle2 += RIES[i]; // Sum of Regression Line Error Squared - Output Variable - Dimensionless - -5 - 5 - Yes
      ES[i] = Math.pow(((GeoMeanYourInvestment[i]) - Ri / 100), 2) * 100;
      AcumRie2 += ES[i]; // Sum of Error from Ri Squared - Output Variable - Dimensionless - -5 - 5 - Yes
    }

    console.log(' AcumRle2 :  ' + AcumRle2);

    console.log(' AcumRie2 :  ' + AcumRie2);

    var R2 = 100 * (1 - AcumRle2 / AcumRie2); // R-Squared (ΣRle2 / ΣRie2) - Output Variable - % - 0 - 100 - Yes

    //console.log( ' R2 :  ' +R2 );

    //--------- Geometric Mean Additional Calculations -----------

    var pGeoMeanPortPlus100 = 1;
    var pGeoMeanSPPlus100 = 1;
    var pGeoMeanMSCIUSREITPlus100 = 1;
    var PortPlus100 = [];
    var SPPlus100 = [];
    var MSCIUSREITPlus100 = [];
    for (i = 0; i < GeoMeanYourInvestment.length; i += 1) {
      pGeoMeanPortPlus100 *= GeoMeanYourInvestment[i] + 1;
      PortPlus100[i] = GeoMeanYourInvestment[i] + 1;
      pGeoMeanSPPlus100 *= GeoMeanSP500[i] + 1;
      SPPlus100[i] = GeoMeanSP500[i] + 1;
      pGeoMeanMSCIUSREITPlus100 *= GeoMeanMSCIUSREIT[i] + 1;
      MSCIUSREITPlus100[i] = GeoMeanMSCIUSREIT[i] + 1;
    }

    var GeoMeanPortPlus100 = (Math.pow(pGeoMeanPortPlus100, 1 / GeoMeanYourInvestment.length)) * 100 //

    //console.log( ' GeoMeanPortPlus100 :  ' +GeoMeanPortPlus100 );

    var GeoMeanSPPlus100 = (Math.pow(pGeoMeanSPPlus100, 1 / GeoMeanSP500.length)) * 100 //

    //console.log( ' GeoMeanSPPlus100 :  ' +GeoMeanSPPlus100 );

    var GeoMeanMSCIUSREITPlus100 = (Math.pow(pGeoMeanMSCIUSREITPlus100, 1 / GeoMeanMSCIUSREIT.length)) * 100 //

    //console.log( ' GeoMeanMSCIUSREITPlus100 :  ' +GeoMeanMSCIUSREITPlus100);

    var Growthof = 10000; //

    var Portfolio0 = [Growthof * PortPlus100[0]];
    var SP0 = [Growthof * SPPlus100[0]];
    var MSCI0 = [Growthof * MSCIUSREITPlus100[0]];

    var Portfolio = Portfolio0;
    var SP = SP0;
    var MSCI = MSCI0;
    for (i = 1; i < GeoMeanSP500.length; i += 1) {
      Portfolio[i] = Portfolio[i - 1] * PortPlus100[i];
      SP[i] = SP[i - 1] * SPPlus100[i];
      MSCI[i] = MSCI[i - 1] * MSCIUSREITPlus100[i];
    }

    var PortfolioLastYear = Portfolio[Portfolio.length - 1]
    var SPLastYear = SP[SP.length - 1]
    var MSCILastYear = MSCI[MSCI.length - 1]
    //console.log( ' PortfolioLastYear :  ' +Portfolio[Portfolio.length - 1]);
    //console.log( ' SPLastYear :  ' +SP[SP.length - 1]);
    //console.log( ' MSCILastYear :  ' +MSCI[MSCI.length - 1]);

    var OMaxDrawDo = [];

    for (i = 0; i < data.length; i += 1) {

      var PortfolioSum = []

      for (var j = i; j >= 0; j--) {

        PortfolioSum.push(Portfolio[j])

      }

      PortfolioSum.push(Growthof)

      OMaxDrawDo[i] = Portfolio[i] / _.max(PortfolioSum) - 1;

    }




    console.log(OMaxDrawDo, "OMaxDrawDo")
    var MDD = (Math.min(...OMaxDrawDo) * 100) * - 1; // Portfolio's Maximum Drawdown - Output Variable - % - -100 - 100 - Yes
    console.log(' MDD :  ' + MDD);

    if (MDD === 0) {
      var RoMaD = 'Infinity';
    } else {
      var RoMaD = Ri / MDD; // Return Over Maximum Drawdown [Ri / (imax - imin)] - Output Variable - Dimensionless - -5 - 5 - Yes
    }

    //console.log( ' RoMaD :  ' +RoMaD);

    var investmentsSumatory = GeoMeanYourInvestment
    var MSCISumatory = GeoMeanMSCIUSREIT
    var SP500Sumatory = GeoMeanSP500

    _.each(investmentsSumatory, (v, k) => {
      investmentsSumatory[k] = investmentsSumatory[k] * 100
      SP500Sumatory[k] = SP500Sumatory[k] * 100
      MSCISumatory[k] = MSCISumatory[k] * 100
    })

    var column1 = [M2 * Ome - ERi] / (M2 * Ome) > 0.50
    var column2 = 0.50 >= [M2 * Ome - ERi] / (M2 * Ome) >= 0
    var column3 = [M2 * Ome - ERi] / (M2 * Ome) > 0

    // console.log(column1, column2, column3, "first");

    var rowA = MDD < 0.10
    var rowB = 0.10 <= MDD <= 0.35
    var rowC = MDD > 0.35

    var categories = {
      columns: { column1, column2, column3 },
      rows: { rowA, rowB, rowC }
    }
    // console.log(rowA, rowB, rowC, "second");

    window.scope = this

    GeoMeanMSCIUSREIT


    this.results = {
      categories,
      MSCISumatory,
      SP500Sumatory,
      Rf,
      Analysis,
      Rf,
      Rm,
      Ri,
      pGeoMeanMSCIUSREIT,
      oi,
      B,
      ERi,
      Alpha,
      lamda,
      ERi,
      Alpha,
      Rp,
      Re,
      oi,
      Rs,
      om,
      M2,
      Acumig,
      Acumil,
      oiminus,
      Rso,
      Ome,
      imax,
      imin,
      MaD,
      Rt,
      oi,
      Rn,
      m,
      b,
      Rl,
      RIES,
      ES,
      AcumRle2: AcumRle2.toFixed(2),
      AcumRie2: AcumRie2.toFixed(2),
      R2,
      pGeoMeanPortPlus100,
      pGeoMeanSPPlus100,
      pGeoMeanMSCIUSREITPlus100,
      PortPlus100,
      SPPlus100,
      MSCIUSREITPlus100,
      GeoMeanPortPlus100,
      GeoMeanSPPlus100,
      GeoMeanMSCIUSREITPlus100,
      lamda,
      Growthof,
      Portfolio0,
      SP0,
      MSCI0,
      Portfolio,
      SP,
      MSCI,
      OMaxDrawDo,
      MDD,
      RoMaD,
      investmentsSumatory,
      pGeoMeanMSCIUSREIT,
      SPLastYear,
      PortfolioLastYear,
      MSCILastYear,
      ERi2,
      AlphaLambda
    }

    //console.log(this.results, "lol")

  }




}
