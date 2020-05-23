<template>
    <div>
        <h3>Please Login with your google account</h3>
        <button @click="login">Login with Google</button>
    </div>
</template>

<script>
import firebase from "firebase/app"

export default {
    methods:{
        login(){
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

            firebase.auth().signInWithPopup(provider)
            .then(() => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            
            // The signed-in user info.
            // var user = result.user;
            

            this.$router.push('/');
            
            }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            console.log(error.code);

            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
            });

        }
    }
}
</script>

<style lang="stylus" scoped>

</style>