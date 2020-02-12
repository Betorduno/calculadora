<template>
  <div>
    <sweet-modal ref="modalLicense" hide-close-button blocking>
      <h3>Access to the Risk-Adjusted Performance Calculator Requires a License Key.</h3>

      <el-alert v-if="codeInvalid" title="The License Key is Invalid" type="error" show-icon></el-alert>

      <input
        style="margin-top: 10px;"
        v-model="serial"
        placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        class="form-control"
        type="text"
      />

      <button
        @click="validateSerial()"
        style="margin-top: 10px;"
        class="btn btn-primary btn-lg"
      >Access</button>
    </sweet-modal>

    <sweet-modal ref="modal" hide-close-button blocking>
      <h3>Access to the Risk-Adjusted Performance Calculator requires a subscription.</h3>

      <hr />

      <el-button @click="goToMembersArea" type="primary">Login to Members Area</el-button>
      <el-button @click="subscribeAccess" type="primary">Subscribe for Access</el-button>
    </sweet-modal>

    <div class="container" v-if="loading && canAccess">
      <div class="row">
        <div class="col-md-12">
          <navbar></navbar>
        </div>
      </div>

      <div class="row" style="margin-top:10px;">
        <div class="col-md-1">
          <img src="static/logo.png" width="230px" />
        </div>
      </div>

      <div class="row" style="margin-top:10px;">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <!-- put the tabs -->
              <el-tabs @tab-click="changedTab">
                <el-tab-pane label="Instructions">
                  <Information></Information>
                </el-tab-pane>

                <el-tab-pane label="Calculator">
                  <CalculatorInterface :calculator="calculator"></CalculatorInterface>
                </el-tab-pane>

                <el-tab-pane label="Glossary">
                  <Glosary></Glosary>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar";
import Information from "./purpose";
import Glosary from "./Glosary";
import BasicInterface from "./basicInterface";
import AdvancedInterface from "./advancedInterface";
import CalculatorInterface from "./calculatorInterface";
import calculator from "@/services/calculator";
import { SweetModal, SweetModalTab } from "sweet-modal-vue";
import { db } from "../services/db";

export default {
  name: "Main",
  components: {
    Information,
    navbar,
    Glosary,
    BasicInterface,
    AdvancedInterface,
    CalculatorInterface,
    SweetModal
  },
  mounted() {
    this.showLoading();

    var url = document.referrer;
    var a = document.createElement("a");
    a.setAttribute("href", url);
    var domain = a.hostname;
    if (!this.$route.query.usb) {
      if (
        domain === "https://www.coursesites.com" ||
        domain === "https://www.adagioinstitute.org" ||
        domain === "http://www.coursesites.com" ||
        domain === "http://www.adagioinstitute.org" ||
        domain === "www.coursesites.com" ||
        domain === "www.adagioinstitute.org" ||
        domain === "app.clickfunnels.com" ||
        domain === "http://app.clickfunnels.com" ||
        domain === "https://app.clickfunnels.com" ||
        domain === "www.app.clickfunnels.com" ||
        domain === "localhost"
      ) {
        this.canAccess = true;
      } else {
        this.$refs.modal.open();
      }
    } else {
      var license = localStorage.getItem("license");

      if (license) {
        this.serial = license;
        this.validateSerial();
      }

      this.$refs.modalLicense.open();
    }
  },
  methods: {
    validateSerial() {
      this.codeInvalid = false;
      var ref = db.ref("licenses");

      ref
        .orderByChild("license")
        .equalTo(this.serial)
        .on("value", v => {
          var value = v.val();
          if (!value) {
            this.canAccess = false;
            this.$refs.modalLicense.open();
          }
        });

      ref
        .orderByChild("license")
        .equalTo(this.serial)
        .once("value", v => {
          var model = v.val();
          if (model) {
            if (model.license === this.license) {
              this.canAccess = true;
              this.$refs.modalLicense.close();
              this.setLastConnection(v);
              localStorage.setItem("license", this.serial);
            }
          } else {
            this.codeInvalid = true;
          }
        });
    },
    setLastConnection(model) {
      var model = model.val();
      var key = Object.keys(model)[0];
      window.k = key;
      window.model = model;
      db.ref("licenses/" + key).set(
        {
          created: model[key].created,
          owner: model[key].owner,
          email: model[key].email,
          license: model[key].license,
          expiration: model[key].expiration,
          last: new Date().getTime()
        },
        function(error) {
          if (error) {
            // console.log("lol" + error);
          } else {
            // console.log("saved");
            // Data saved successfully!
          }
        }
      );

      //model.set(, new Date().getTime())
    },
    subscribeAccess() {
      var win = window.open(
        "https://www.adagioinstitute.org/calculator-optin",
        "_blank"
      );
    },
    goToMembersArea() {
      var win = window.open(
        "https://www.adagioinstitute.org/sbs-members-access",
        "_blank"
      );
    },
    changedTab() {
      calculator.calculate();
    },
    showLoading() {
      var that = this;
      const loading = this.$loading({
        lock: true,
        text: "",
        spinner: "el-icon-loading",
        background: "rgba(24, 32, 40, 0.94)"
      });
      setTimeout(() => {
        that.loading = true;
        loading.close();
      }, 1000);
    }
  },
  data() {
    return {
      codeInvalid: false,
      serial: "",
      calculator: calculator,
      loading: false,
      canAccess: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
table,
div,
button,
a {
  font-family: "Pontano Sans", sans-serif !important;
}

.table {
  font-family: "Pontano Sans", sans-serif !important;
}

b {
  font-family: "Pontano Sans", sans-serif !important;
}

.el-button,
.el-button--primary {
  background: #5b6d86 !important;
  border-color: #5b6d86 !important;
}
</style>
