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
            <form @submit.prevent="signIn" :class="{'was-validated': formInvalid}">
              <!-- Email input -->
              <div :class="['form-outline', 'mb-4', {'has-danger': emailInvalid}]">
                <input type="email" v-model="email" id="signInEmail" class="form-control mb-2" required />
                <label class="form-label" for="signInEmail">Email address</label>
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>
              <!-- Password input -->
              <div :class="['form-outline', 'mb-4', {'has-danger': passwordInvalid}]">
                <input type="password" v-model="password" id="signInPassword" class="form-control mb-2" required />
                <label class="form-label" for="signInPassword">Password</label>
                <div class="invalid-feedback">Please enter your password.</div>
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
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // Data properties
    const email = ref('');
    const password = ref('');
    const emailInvalid = ref(false);
    const passwordInvalid = ref(false);
    const formInvalid = ref(false);

    // Method to handle sign in
    const signIn = () => {
      // Reset validation state
      emailInvalid.value = false;
      passwordInvalid.value = false;
      formInvalid.value = false;

      // Validate form fields
      if (!email.value || !password.value) {
        formInvalid.value = true;
        return;
      }

      // Prepare data for the request
      const userData = {
        email: email.value,
        password: password.value,
      };

      // Make a POST request to the login endpoint
      axios.post('http://localhost:8000/login', userData)
          .then(response => {
            // Handle successful authentication
            console.log('Sign in successful', response.data);

            // Redirect to home page or wherever needed after successful login
            router.push('/home');
          })
          .catch(error => {
            // Handle authentication error
            console.error('Sign in failed', error);
            alert('Invalid email or password. Please try again.');
          });
    };

    return {
      email,
      password,
      emailInvalid,
      passwordInvalid,
      formInvalid,
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
