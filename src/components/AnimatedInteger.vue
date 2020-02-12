<script>
import TWEEN from "tween.js";
import VueNumeric from "vue-numeric";
export default {
  name: "animatedInteger",
  template: "<span>{{this.tweeningValue}}</span>",
  props: {
    value: {
      required: true
    }
  },
  components: {
    VueNumeric
  },
  data: function() {
    return {
      tweeningValue: 0
    };
  },
  watch: {
    value: {
      handler: function(newValue, oldValue) {
        this.tween(oldValue, newValue);
      },
      deep: true
    }
  },
  mounted: function() {
    this.tween(0, this.value);
  },
  methods: {
    tween: function(startValue, endValue) {
      var vm = this;
      var animationFrame;
      function animate(time) {
        TWEEN.update(time);
        animationFrame = window.requestAnimationFrame(animate);
      }
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function() {
          // console.log(this.tweeningValue)
          vm.tweeningValue = new Intl.NumberFormat("EN", {
            maximumFractionDigits: 4
          }).format(this.tweeningValue);
        })
        .onComplete(function() {
          window.cancelAnimationFrame(animationFrame);
        })
        .start();
      animationFrame = window.requestAnimationFrame(animate);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
