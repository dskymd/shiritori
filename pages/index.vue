<template>
  <section class="uk-container">
    <div>
      <div class="input-container">
        <form class v-on:submit.prevent="shiritori">
          <input
            type="text"
            v-on:change="onChange"
            v-on:focus="onFocus"
            v-on:blur="onBlur"
            v-model="newword"
            v-bind:placeholder="$store.state.shiri"
            class="uk-input uk-form-width-medium uk-form-large"
          >
          <button class="uk-button uk-button-large uk-button-primary">送信</button>
        </form>
      </div>

      <div class="history">
        <div v-for="item in history" v-bind:key="item.id">
          {{item.wordId}}
          /
          {{item.id}}
          //
          {{item.num}}
          //
          {{words[item.wordId][item.num-1]}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      charCodeA: "あ".charCodeAt(),
      newword: "り",
      words: Array.apply(null, { length: 345 }).map(v => []),
      history: []
    };
  },
  created() {
    if (this.history.length > 2) {
      this.$store.commit("setShiri", this.words[this.history.slice(-1)]);
    }
  },
  mounted() {
    console.log(this.charCodeA, "しりとり");
  },
  computed: {
    ___: function() {
      return false;
    }
  },
  methods: {
    shiritori: function() {
      console.log(this.newword);

      // if (this.newword.slice(0, 1) === this.$store.state.shiri) {
      if (this.wordCheck(this.newword)) {
        let newShiri = this.newword.slice(-1);
        let wordId = this.newword.slice(0, 1).charCodeAt() - this.charCodeA;

        this.words[wordId].push(this.newword);
        this.history.push({
          id: this.history.length + 1,
          num: this.words[wordId].length,
          wordId: wordId
        });
        this.$store.commit("setShiri", newShiri);

        this.newword = newShiri;
      }
    },
    //送信されたワードのチェック retutn boolean
    wordCheck: function(word) {
      // - 前のしりで始まる
      // - ん で終わらない
      //重複していない
      //意味があるか
      // ? 一文字以上

      if (
        this.newword.slice(0, 1) === this.$store.state.shiri &&
        this.newword.slice(-1) != "ん"
      ) {
        return true;
      } else {
        return false;
      }
    },
    //Event
    onFocus: function() {
      console.log("onFocus");
    },
    onChange: function() {
      console.log("onChange");
    },
    onBlur: function() {
      console.log("onBlur");
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

