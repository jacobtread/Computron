<template>
  <footer id="footer">
    <!-- Left side of the footer -->
    <div class="contact">
      <h2>Contact</h2>
      <!-- Contact info block -->
      <div class="contact__info">
        <h3>Josh</h3>
        <p><span>Email</span>josh@computron.co.nz</p>
      </div>
      <!-- Website creator credit -->
      <p>Website Designed by Jacob Read</p>
    </div>
    <!-- Right side of the footer -->
    <div class="logo-block">
      <!-- Computron logo -->
      <img
        class="logo"
        src="~/assets/img/logo.svg"
        alt="Computron Logo"
        title="Computron"
        width="16"
        height="16"
      />
    </div>
  </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style scoped lang="scss">
@import "~/assets/css/variables";

footer {
  margin-top: 20vh;

  display: flex;
  flex-flow: row;

  width: 100%;
  padding: 4em;

  background-color: $background;
}

.logo-block {
  display: flex;
  flex: auto;
  justify-content: flex-end;
}

.logo {
  align-self: center;
  width: 100%;
  height: 70px;
  max-width: 300px;
}

.contact {
  h2 {
    color: white;
    font-weight: normal;
    font-size: 1.1em;
  }

  &__info {
    margin-top: 1em;

    h3 {
      color: #bdbdbd;
      margin-bottom: 0.5em;
      font-weight: normal;
      font-size: 0.9em;
    }

    p {
      color: #a1a1a1;
      margin-bottom: 2em;

      span {
        color: white;
        margin-right: 0.25em;
        font-weight: bold;
      }
    }
  }

  p {
    color: #bdbdbd;
  }
}

@media all and (max-width: 835px) {
  footer {
    flex-flow: column;
  }

  .logo {
    width: 100%;
    max-width: 500px;
    margin: 4em auto 0;
  }
}
</style>
