<template>
  <section class="uk-container">
    <div>
      <div class="input-container">
        <form class v-on:submit.prevent="shiritori">
          <input
            type="text"
            v-model="newword"
            v-bind:placeholder="$store.state.shiri"
            class="uk-input uk-form-width-large uk-form-large"
          >
          <button class="uk-button uk-button-large uk-button-primary">しりとり</button>
        </form>
      </div>

      <!-- <h1 class="title">nuxt-shiritori</h1>
      <h2 class="subtitle">Nuxt.js project</h2>

      <div class="links">
        <a class="uk-button uk-button-default" href="auth">Auth</a>
        <button class="uk-button uk-button-default">save</button>
        <button class="uk-button uk-button-primary">GO</button>
        <button class="uk-button uk-button-default" disabled>cancel</button>
      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      newword: '',
      words: Array.apply(null, { length: 45 }).map(v => []),
      history: [],
    };
  },
  created() {
    if (this.history.length > 2) {
      this.$store.commit("setShiri", this.words[this.history.slice(-1)]);
    }
  },
  mounted() {
    console.log("しりとり");
  },
  computed: {
    ___: function(){
      return false
    }
  },
  methods: {
    shiritori: function() {
      console.log(this.newword)
    }
  }
};
//あかさたなはまら x 5
//やゆよ
//わワ	ゐヰ	ゑヱ	をヲ
</script>

<style>
.input-container {
  margin: 32px auto;
  text-align: center;
}
</style>

