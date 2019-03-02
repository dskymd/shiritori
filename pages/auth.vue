<template>
  <section class="uk-container">
    <div>

      <h1 class="title">nuxt-shiritori</h1>
      <h2 class="subtitle">Autentication</h2>

      <div class="links">
        <a class="uk-button uk-button-default" href="/">button</a>
        
        <button class="uk-button uk-button-default">save</button>
        <button class="uk-button uk-button-primary">GO</button>
        <button class="uk-button uk-button-default" disabled>cancel</button>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  components: {
    firebase
  },
  mounted: () => {

    const provider = new firebase.auth.GoogleAuthProvider()
    // firebase.
    firebase.auth().signInWithRedirect(provider)

      console.log('auth')
  }

//   project-806042985917 //shiritori-6e39a.firebaseapp.com
};
</script>

<style>
</style>

