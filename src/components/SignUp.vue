<template>
  <!-- Jumbotron -->
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right bg-body-tertiary" style="backdrop-filter: blur(30px);">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form class="needs-validation" novalidate>

              <div :class="['form-outline', 'mb-4', {'was-validated': usernameInvalid}]">
                <input type="text" v-model="username" id="username" class="form-control mb-2" required />
                <label class="form-label" for="username">Name</label>
                <div class="invalid-feedback">Please enter your name.</div>
              </div>

              <!-- Email input -->
              <div :class="['form-outline', 'mb-4', {'was-validated': emailInvalid}]">
                <input type="email" v-model="email" id="email" class="form-control mb-2" required />
                <label class="form-label" for="email">Email address</label>
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>

              <!-- Password input -->
              <div :class="['form-outline', 'mb-4', {'was-validated': passwordInvalid}]">
                <input type="password" v-model="password" id="password" class="form-control mb-2" required />
                <label class="form-label" for="password">Password</label>
                <div class="invalid-feedback">Please enter your password.</div>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4" @click.prevent="signUp">
                Sign up
              </button>

              <!-- Register buttons -->
              <div class="text-center">
                <p>Already have an account <router-link to="/login" class="nav-link smaller text-primary">SignIn</router-link></p>
                <!-- Social media buttons -->
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4" alt="" />
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // Data properties
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const usernameInvalid = ref(false);
    const emailInvalid = ref(false);
    const passwordInvalid = ref(false);

    // Method to validate email format
    const validateEmail = (email) => {
      // Regular expression for basic email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    // Method to handle sign up
    const signUp = () => {
      // Reset validation state
      usernameInvalid.value = false;
      emailInvalid.value = false;
      passwordInvalid.value = false;

      // Validate form fields
      if (!username.value) {
        usernameInvalid.value = true;
      }
      if (!email.value || !validateEmail(email.value)) {
        emailInvalid.value = true;
      }
      if (!password.value) {
        passwordInvalid.value = true;
      }

      // If any field is invalid, stop sign-up process
      if (usernameInvalid.value || emailInvalid.value || passwordInvalid.value) {
        return;
      }

      // Prepare data for the request
      const userData = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      // Make a POST request to your backend API
      axios.post('http://localhost:8000/register', userData)
          .then(response => {
            // Handle successful response
            console.log('Sign up successful', response.data);
            // Redirect to home page or show success message
            router.push('/home');
          })
          .catch(error => {
            // Handle error
            if (error.response && error.response.status === 400 && error.response.data.detail === "Email already registered") {
              alert('Email is already registered. Please use a different email.');
            } else {
              console.error('Sign up failed', error);
              alert('An error occurred during sign up.');
            }
          });
    }

    return {
      username,
      email,
      password,
      usernameInvalid,
      emailInvalid,
      passwordInvalid,
      signUp
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
