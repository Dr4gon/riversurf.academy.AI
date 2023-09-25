<script>
import SummaryComponent from '@/views/components/SummaryComponent.vue';
import componentsContactComponent from '@/views/components/SalesContactComponent.vue';
import TimeComponent from '@/views/components/TimeComponent.vue';
import EquipmentComponent from '@/views/components/EquipmentComponent.vue';
import CourseComponent from '@/views/components/CourseComponent.vue';
import LevelComponent from '@/views/components/LevelComponent.vue';

export default {
  components: {
    LevelComponent,
    CourseComponent,
    EquipmentComponent,
    TimeComponent,
    componentsContactComponent,
    SummaryComponent,
  },

  data() {
    return {
      stage: 0,
      observer: null,
      showText: true,
      level: '',
      course: '',
      bodyHeight: 0,
      bodyWeight: 0,
      gender: '',
      clothingSize: '',
      date: '',
      timeSlot: '',
      name: '',
      email: '',
      handy: '',
      remark: '',
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
            <LevelComponent @go-to-stage="goToStage" @update-level="level = $event" />
          </div>

          <div v-if="stage === 2">
            <CourseComponent @go-to-stage="goToStage" @update-course="course = $event" />
          </div>

          <div v-if="stage === 3">
            <EquipmentComponent
              @update-bodyHeight="bodyHeight = $event"
              @update-bodyWeight="bodyWeight = $event"
              @update-gender="gender = $event"
              @update-clothingSize="clothingSize = $event"
              @go-to-stage="goToStage"
            />
          </div>

          <div v-if="stage === 4">
            <TimeComponent @update-date="date = $event" @update-timeSlot="timeSlot = $event" @go-to-stage="goToStage" />
          </div>

          <div v-if="stage === 5">
            <componentsContactComponent
              @update-name="name = $event"
              @update-email="email = $event"
              @update-handy="handy = $event"
              @update-remark="remark = $event"
              @go-to-stage="goToStage"
              :stage="stage"
            />
          </div>

          <div v-if="stage === 6">
            <SummaryComponent
              :body-height="bodyHeight"
              :body-weight="bodyWeight"
              :clothing-size="clothingSize"
              :course="course"
              :date="date"
              :email="email"
              :gender="gender"
              :handy="handy"
              :level="level"
              :name="name"
              :time-slot="timeSlot"
              @go-to-stage="goToStage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

.below2 {
  flex: 2;

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
