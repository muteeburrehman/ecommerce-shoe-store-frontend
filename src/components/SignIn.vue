<template>
  <!-- Sign-in form -->
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4" alt="" />
      </div>
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right bg-body-tertiary" style="backdrop-filter: blur(30px);">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Sign In</h2>
            <form @submit.prevent="signIn">
              <!-- Email input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" v-model="email" id="signInEmail" class="form-control mb-2" />
                <label class="form-label" for="signInEmail">Email address</label>
              </div>
              <!-- Password input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" v-model="password" id="signInPassword" class="form-control mb-2" />
                <label class="form-label" for="signInPassword">Password</label>
              </div>
              <!-- Submit button -->
              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
                Sign In
              </button>
              <!-- Register buttons -->
              <div class="text-center">
                <p>Don't have an account? <router-link to="/signup" class="nav-link smaller text-primary">Sign Up</router-link></p>
                <!-- Forgot password link -->
                <p><router-link to="/forgot-password" class="nav-link smaller text-primary">Forgot Password?</router-link></p>
                <!-- Social media buttons -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Sign-in form -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Data properties
    const email = ref('');
    const password = ref('');

    // Method to handle sign in
    const signIn = () => {
      // Handle sign in logic here
      console.log('Sign in button clicked');
    };

    return {
      email,
      password,
      signIn
    };
  }
};
</script>

<style scoped>
.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>