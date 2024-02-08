<template>
  <div class="below">
    <div class="edge"><h1 @click="$emit('go-to-stage', 4)">&lt;</h1></div>
    <div class="below2">
      <input type="text" placeholder="* Name" v-model="localName" required />
      <input type="email" placeholder="* E-Mail" v-model="localEmail" required />
      <input type="tel" placeholder="* Handy Nr." v-model="localHandy" required />
      <p>* Pflichtfelder</p>
    </div>

    <div class="below2">
      <textarea
        rows="5"
        placeholder="Bemerkungen"
        v-model="localRemark"
        style="width: 300px; height: 150px; resize: none"
      ></textarea>
      <button
        @click="
          $emit('update-name', localName);
          $emit('update-email', localEmail);
          $emit('update-handy', localHandy);
          $emit('update-remark', localRemark);
          console.log(localName, localEmail, localHandy, localRemark);
          $emit('goToStage', 6);
        "
      >
        Bestätigen
      </button>
    </div>
    <div class="edge"></div>
  </div>
</template>
<script>
export default {
  name: 'SalesContactComponent',
  props: {
    email: {},
    goToStage: {},
    handy: {},
    name: {},
    remark: {},
    stage: {},
  },
  data() {
    return {
      localName: this.name,
      localEmail: this.email,
      localHandy: this.handy,
      localRemark: this.remark,
    };
  },
};
</script>
<style></style>
