<script>
export default {
  data() {
    return {
      stage: 0,
      observer: null,
      showText: true,
      substage: 0,
    };
  },
  computed: {
    progress() {
      return (this.stage / 6) * 100;
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.1 });
    this.observer.observe(this.$refs.observerTarget);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleIntersection(entries) {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          this.showText = false;
          this.stage = 1;
        }, 3000);
        this.observer.disconnect();
      }
    },
    goToStage(targetStage) {
      if (targetStage >= 1 && targetStage <= 6) {
        this.stage = targetStage;
        this.substage = 0;
      }
    },
    goToSubStage(targetSubStage) {
      if (this.stage === 1 && targetSubStage >= 0 && targetSubStage <= 2) {
        this.substage = targetSubStage;
      } else if (this.stage === 2 && targetSubStage >= 0 && targetSubStage <= 2) {
        this.substage = targetSubStage;
      } else if (this.stage === 3 && targetSubStage >= 0 && targetSubStage <= 1) {
        this.substage = targetSubStage;
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="view">
      <div ref="observerTarget">
        <div v-if="showText">
          <h1 class="upper-heading">DO YOU WANT TO</h1>
          <h1 class="upper-heading ride">RIDE</h1>
          <h1 class="upper-heading">WITH ME?</h1>
        </div>
        <div v-if="!showText">
          <div class="top">
            <div class="edge"></div>
            <div class="progress-bar-container">
              <div class="progress-bar" :style="{ width: progress + '%' }"></div>
              <div class="progress-text">DO YOU WANT TO RIDE WITH ME?</div>
            </div>
            <div class="headings">
              <h3 v-if="stage === 1">What is your Level?</h3>
              <h3 v-if="stage === 2">What do you want?</h3>
              <h3 v-if="stage === 3">Do you need?</h3>
              <h3 v-if="stage === 4">When do you want to ride?</h3>
              <h3 v-if="stage === 5">Who are you?</h3>
              <h3 v-if="stage === 6">Summary</h3>
            </div>
            <div class="edge"></div>
          </div>
          <div v-if="stage === 1">
            <div class="below" v-if="substage === 0">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Beginner.png" alt="Beginner" /></div>
              <div class="below3"><img src="@/assets/sales/Intermediate.png" alt="Intermediate" /></div>
              <div class="below3"><img src="@/assets/sales/Professional.png" alt="Professional" /></div>
              <div class="edge"></div>
            </div>
          </div>

          <div v-if="stage === 2">
            <div v-if="substage < 0"></div>
          </div>

          <div v-if="stage === 3"></div>

          <div v-if="stage === 4"></div>

          <div v-if="stage === 5"></div>

          <div v-if="stage === 6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view {
  display: flex;
  flex-direction: column;
}

.progress-bar-container {
  width: 100%;
  height: 25px;
  position: relative;
  border: 2px solid black;
  border-radius: 15px;
}

.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: orange;
  transition: width 0.5s ease;
  border-radius: 15px;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.headings {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edge {
  width: 20px;
}

.top {
  width: 100%;
}
.below {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.below3 {
  flex: 1;
  text-align: center;
}

.upper-heading {
  text-align: center;
  font-size: 60px;
  line-height: 0.3;
}

.ride {
  color: orange;
}
</style>
