<script>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
export default {
  components: { DatePicker },

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
      if (targetSubStage >= 0 && targetSubStage <= 3) {
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
              <div class="below3">
                <img @click="goToSubStage(1)" src="@/assets/sales/Beginner.png" alt="Beginner" />
              </div>
              <div class="below3">
                <img @click="goToSubStage(2)" src="@/assets/sales/Intermediate.png" alt="Intermediate" />
              </div>
              <div class="below3">
                <img @click="goToSubStage(3)" src="@/assets/sales/Professional.png" alt="Professional" />
              </div>
              <div class="edge"></div>
            </div>
            <div class="below" v-if="substage === 1">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Beginner.png" alt="Beginner" /></div>
              <div class="below2">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam
                </p>
                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToStage(2)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
            <div class="below" v-if="substage === 2">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Intermediate.png" alt="Intermediate" /></div>
              <div class="below2">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam
                </p>
                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToStage(2)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
            <div class="below" v-if="substage === 3">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Professional.png" alt="Professional" /></div>
              <div class="below2">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam
                </p>
                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToStage(2)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
          </div>

          <div v-if="stage === 2">
            <div class="below" v-if="substage === 0">
              <div class="edge"><h1 @click="goToStage(1)">&lt;</h1></div>
              <div class="below3">
                <img @click="goToSubStage(1)" src="@/assets/sales/Schnuppern.png" alt="Schnuppern" />
              </div>
              <div class="below3">
                <img @click="goToSubStage(2)" src="@/assets/sales/Einzelkurs.png" alt="Einzelkurs" />
              </div>
              <div class="below3">
                <img @click="goToSubStage(3)" src="@/assets/sales/Tagestour.png" alt="Tagestour" />
              </div>
              <div class="edge"></div>
            </div>
            <div class="below" v-if="substage === 1">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Schnuppern.png" alt="Schnuppern" /></div>
              <div class="below2">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam
                </p>
                <h2>30 €</h2>
                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToStage(3)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
            <div class="below" v-if="substage === 2">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Einzelkurs.png" alt="Einzelkurs" /></div>
              <div class="below2">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam
                </p>
                <h2>90 €</h2>
                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToStage(3)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
            <div class="below" v-if="substage === 3">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Tagestour.png" alt="Tagestour" /></div>
              <div class="below2">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam
                </p>
                <h2>150 €</h2>
                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToStage(3)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
          </div>

          <div v-if="stage === 3">
            <div class="below" v-if="substage === 0">
              <div class="edge"><h1 @click="goToStage(2)">&lt;</h1></div>
              <div class="below2">
                <img @click="goToSubStage(1)" src="@/assets/sales/Board.png" alt="Board" />
              </div>
              <div class="below2">
                <img @click="goToSubStage(2)" src="@/assets/sales/Neo.png" alt="Neo" />
              </div>
              <div class="edge"><h1 @click="goToStage(4)">&gt;</h1></div>
            </div>
            <div class="below" v-if="substage === 1">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Board.png" alt="Board" /></div>
              <div class="below2">
                <label for="height">Körpergröße (cm):</label>
                <input type="number" id="height" name="height" />
                <br />

                <label for="weight">Gewicht (kg):</label>
                <input type="number" id="weight" name="weight" />
                <br />

                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToSubStage(0)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
            <div class="below" v-if="substage === 2">
              <div class="edge"></div>
              <div class="below3"><img src="@/assets/sales/Neo.png" alt="Neo" /></div>
              <div class="below2">
                <fieldset>
                  <legend>Geschlecht:</legend>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label for="male">Männlich</label>

                  <input type="radio" id="female" name="gender" value="female" />
                  <label for="female">Weiblich</label>
                </fieldset>

                <fieldset>
                  <legend>Größe:</legend>
                  <input type="radio" id="small" name="size" value="S" />
                  <label for="small">S</label>

                  <input type="radio" id="medium" name="size" value="M" />
                  <label for="medium">M</label>

                  <input type="radio" id="large" name="size" value="L" />
                  <label for="large">L</label>
                </fieldset>
                <button @click="goToSubStage(0)">zurück</button>
                <button @click="goToSubStage(0)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
          </div>

          <div v-if="stage === 4">
            <div class="below" v-if="substage === 0">
              <div class="edge"><h1 @click="goToStage(3)">&lt;</h1></div>
              <div class="below2">
                <DatePicker v-model="date" mode="date" :min-date="new Date()" />
              </div>
              <div class="below2">
                <fieldset>
                  <legend>Available Timeslots:</legend>
                  <input type="radio" id="small" name="time" value="first" />
                  <label for="small">10.00 - 12.00</label>
                  <br />
                  <input type="radio" id="medium" name="time" value="second" />
                  <label for="small">12.00 - 14.00</label>
                  <br />
                  <input type="radio" id="large" name="time" value="third" />
                  <label for="small">14.00 - 16.00</label>
                  <br />
                  <input type="radio" id="large" name="time" value="fourth" />
                  <label for="small">16.00 - 18.00</label>
                </fieldset>
                <button @click="goToStage(5)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
          </div>

          <div v-if="stage === 5">
            <div class="below" v-if="substage === 0">
              <div class="edge"><h1 @click="goToStage(4)">&lt;</h1></div>
              <div class="below2">
                <input type="text" placeholder="* Name" />
                <input type="email" placeholder="* E-Mail" />
                <input type="tel" placeholder="* Handy Nr." />
                <p>* Pflichtfelder</p>
              </div>

              <div class="below2">
                <textarea
                  rows="5"
                  placeholder="Bemerkungen"
                  style="width: 300px; height: 150px; resize: none"
                ></textarea>
                <button @click="goToStage(6)">Bestätigen</button>
              </div>
              <div class="edge"></div>
            </div>
          </div>

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

.below2 {
  flex: 2;
  background-color: orange;
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
