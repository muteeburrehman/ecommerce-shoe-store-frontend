<template>
  <!-- Jumbotron -->
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right bg-body-tertiary" style="backdrop-filter: blur(30px);">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form @submit.prevent="signUp">


              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" v-model="name" id="name" class="form-control mb-2" />
                <label class="form-label" for="form3Example3">Name</label>
              </div>
              <!-- Email input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" v-model="email" id="form3Example3" class="form-control mb-2" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              <!-- Password input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" v-model="password" id="form3Example4" class="form-control mb-2" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>



              <!-- Submit button -->
              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
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

export default {
  setup() {
    // Data properties
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const subscribeToNewsletter = ref(true); // Initial value for the checkbox

    // Method to handle sign up
    const signUp = () => {
      // Handle sign up logic here
      console.log('Sign up button clicked');
    };

    return {
      name,
      email,
      password,
      subscribeToNewsletter,
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