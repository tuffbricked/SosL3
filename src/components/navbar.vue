<script setup>
// No custom import scripts needed; Vue Router handles RouterLink components globally.
</script>

<template>
  <nav class="sticky top-0 z-50 bg-green-800 text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-lg w-full backdrop-blur-md bg-opacity-95">
    
    <!-- Brand / Logo Link -->
    <RouterLink to="/" class="flex items-center shrink-0">
      <img src="../assets/img.png" alt="Logo" class="h-10 w-auto hover:scale-105 transition-transform duration-200">
    </RouterLink>
    
    <!-- Navigation Links -->
    <ul class="flex items-center gap-8 text-sm font-semibold tracking-wide">
      <li>
        <RouterLink to="/" class="hover:text-yellow-300 transition-colors py-2 block">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="hover:text-yellow-300 transition-colors py-2 block">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/services" class="hover:text-yellow-300 transition-colors py-2 block">Services</RouterLink>
      </li>
      
      <!-- Dropdown: Gallery -->
      <li class="relative group py-2">
        <button class="hover:text-yellow-300 flex items-center gap-1 transition-colors focus:outline-none">
          <span>Gallery</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-green-900 border border-green-700/50 rounded-xl shadow-2xl w-48 top-full left-0 z-50 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
          <li>
            <RouterLink to="/gallery/images" class="block px-5 py-3 hover:bg-green-700 hover:text-yellow-300 transition-colors">Images</RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery/videos" class="block px-5 py-3 hover:bg-green-700 hover:text-yellow-300 transition-colors">Videos</RouterLink>
          </li>
        </ul>
      </li>
      
      <!-- Dropdown: Destinations -->
      <li class="relative group py-2">
        <button class="hover:text-yellow-300 flex items-center gap-1 transition-colors focus:outline-none">
          <span>Destination</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-green-900 border border-green-700/50 rounded-xl shadow-2xl w-52 top-full left-0 z-50 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
          <li><RouterLink to="/kigali" class="block px-5 py-3 hover:bg-green-700 hover:text-yellow-300 transition-colors">Kigali</RouterLink></li>
          <li><RouterLink to="/southern" class="block px-5 py-3 hover:bg-green-700 hover:text-yellow-300 transition-colors">Southern Province</RouterLink></li>
          <li><RouterLink to="/western" class="block px-5 py-3 hover:bg-green-700 hover:text-yellow-300 transition-colors">Western Province</RouterLink></li>
          <li><RouterLink to="/northern" class="block px-5 py-3 hover:bg-green-700 hover:text-yellow-300 transition-colors">Northern Province</RouterLink></li>
          <li><RouterLink to="/eastern" class="block px-5 py-3 hover:bg-green-700 hover:text-yellow-300 transition-colors">Eastern Province</RouterLink></li>
        </ul>
      </li>
      
      <li>
        <RouterLink to="/contact" class="hover:text-yellow-300 transition-colors py-2 block">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Extra transitional styles to match route configurations */
.router-link-active:not(button) {
  color: #fde047; /* Yellow-300 active highlight */
}
</style>