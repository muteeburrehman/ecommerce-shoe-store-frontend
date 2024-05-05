<template>
  <nav class="navbar navbar-expand-lg navbar-primary" style="background-color:#DDA431;">
    <div class="container-fluid">
      <div class="d-flex align-items-center"> <!-- Using Bootstrap grid to align logo and text -->
        <router-link to="/" class="navbar-brand d-flex align-items-center" id="font">
          <img src="@/assets/icons/shoe_icon.svg" alt="Shoe-logo" class="icon-shoe me-2" />
          Shoe Store
        </router-link>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { 'show': showNavbar }]" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="isUserLoggedIn">
            <router-link to="/dashboard" class="nav-link active" aria-current="page">
              <i class="uil uil-user me-1"></i>{{ userName }}
            </router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link to="/contact" class="nav-link">Contact Us</router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link to="/about" class="nav-link">About</router-link>-->
<!--          </li>-->

          <li class="nav-item">
             <router-link to="/shopping-cart" class="nav-link" >
              <img src="@/assets/icons/shopping-cart.svg" alt="Logout" class="icon-svg" /> ShoppingCart
             </router-link>
          </li>
          <li class="nav-item">
            <a @click="logout" class="nav-link"> <!-- Modified to call logout method on click -->
              <img src="@/assets/icons/logout.svg" alt="Logout" class="icon-svg" /> Logout
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios'; // Import Axios

export default {
  data() {
    return {
      isUserLoggedIn: false,
      userName: '',
      showNavbar: false // Added data property for toggling navbar visibility
    }
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    logout() {
      axios.post('http://localhost:8000/logout') // Make a POST request to the logout endpoint
          .then(response => {
            // Handle successful logout (if needed)
            console.log('Logout successful', response.data);
            // Redirect to login page or perform any other action
            this.$router.push('/login');
          })
          .catch(error => {
            // Handle logout error
            console.error('Logout failed', error);
            // Display error message or perform any other action
            alert('An error occurred during logout.');
          });
    }
  }
}
</script>

<style scoped>
.icon-svg {
  width: 20px;
  height: 20px;
}

.icon-shoe {
  width: 30px;
  height: 40px;
}
</style>
