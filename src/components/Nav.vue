<template>
  <div class="navbar">
    <div class="menu-logo">
      <div class="logo">Your Logo</div>
      <button class="menu-toggle" @click="toggleMenu">
        <span v-if="isMenuOpen" class="">
          <span class="burger"></span>
          <span class="burger"></span>
          <span class="burger"></span>
        </span>
        <span v-else class="">
          <span class="burger-close"></span>
          <span class="burger-close"></span>
        </span>
      </button>
    </div>
    <transition name="fade">
      <ul :class="{ 'nav-list-active': isMenuOpen }" class="nav-list">
        <li><a href="#">Features</a></li>
        <li><a href="#">Available Tools</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">login</a></li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {},
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Your existing styles */

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #000000;
  color: white;
}

a {
  color: white;
  text-decoration: none;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.burger {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
}

.burger-close {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
  transform: rotate(45deg);
}
.burger-close:nth-child(2) {
  transform: rotate(-45deg);
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-list-active {
  display: block;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  background-color: #000000;
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
}

/* Responsive styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .menu-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-list {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .nav-list-active {
    top: 100%;
    left: 0;
    transform: translateY(0);
    padding-top: 2rem;
  }
}
</style>
