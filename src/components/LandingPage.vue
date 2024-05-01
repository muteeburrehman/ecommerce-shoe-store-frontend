<template>
  <div class="landing-page">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="login-signup">
          <span class="separator">
            <router-link to="/signup" class="nav-link smaller">Sign Up</router-link>
            <span>|</span>
            <router-link to="/login" class="nav-link smaller">Sign In</router-link>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container class="content">
      <b-row>
        <b-col cols="12" lg="6" class="middle">
          <h4><strong>Welcome to Our Shoe Store</strong></h4>
          <p>Make the best choice for you and your kids.</p>
        </b-col>
        <b-col cols="12" lg="6">
          <img src="../assets/images/landingPage.jpg" alt="Landing Page Image" class="img-fluid">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
.landing-page {
  background-image: url('../assets/images/landingPage.jpg');
  height: 100vh; /* Adjusted height */
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  overflow: hidden; /* Prevent scrolling */
}

.content {
  text-align: center;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.login-signup {
  position: absolute;
  bottom: 10vh; /* Adjusted bottom spacing */
  left: 50%;
  transform: translateX(-50%);
}

.separator {
  display: flex;
  align-items: center;
}

.separator span {
  margin: 0 10px;
}

.nav-link.smaller {
  font-size: 16px; /* Adjusted font size */
}

@media only screen and (max-width: 767px) {
  .login-signup {
    bottom: 20px; /* Adjusted bottom spacing for smaller screens */
  }
}
</style>
