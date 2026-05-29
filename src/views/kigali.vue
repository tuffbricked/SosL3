<script setup>
// Component configuration logic can go here
</script>

<template>
  <div class="bg-gray-50 min-h-screen w-full antialiased text-gray-800">
    <div class="max-w-5xl mx-auto p-6 md:p-12">
      
      <!-- Main Header Section -->
      <header class="mb-10">
        <span class="text-xs font-bold uppercase tracking-widest text-green-600 block mb-2">
          Capital Spotlight
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">
          Welcome to Kigali
        </h1>
        <div class="h-1 w-20 bg-green-600 mt-4 rounded"></div>
      </header>

      <!-- ============================================================= -->
      <!-- KIGALI IMAGE DISPLAY CONTAINER                               -->
      <!-- ============================================================= -->
      <div class="w-full h-64 md:h-96 rounded-2xl mb-12 shadow-md border border-gray-200 overflow-hidden group">
        <img 
          src="../assets/kigali.jpg" 
          alt="Beautiful Kigali Skyline" 
          class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <!-- ============================================================= -->

      <!-- Kigali Narrative / Description Grid -->
      <main class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <!-- Left 2 Columns: Detailed Description -->
        <div class="md:col-span-2 space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
          <p class="font-medium text-gray-900 text-xl">
            Kigali, the geographic and cultural heartbeat of Rwanda, stands as one of the most dynamic, organized, and progressive metropolitan hubs on the African continent.
          </p>
          <p>
            Spanning across a series of scenic ridges and lush valleys, the city effortlessly marries modern urban architecture with its famous natural typography. It has garnered widespread international acclaim for its immaculate, pristine streets, vibrant public green spaces, and progressive, forward-thinking environmental legislation.
          </p>
          <p>
            Beyond its striking cleanliness, Kigali serves as a bustling nucleus for African tech start-ups, corporate innovation, and international conventions. It is a city defined by an inspiring story of deep structural resilience, welcoming community values, and a clear, ambitious path toward a smart, climate-neutral future.
          </p>
        </div>

        <!-- Right 1 Column: Quick Metrics Panel -->
        <aside class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
          <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">
            Kigali at a Glance
          </h3>
          
          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-green-800 block">Clean & Green</span>
            <span class="text-xs text-gray-500">Widely celebrated as Africa’s cleanest city due to civic initiatives like Umuganda.</span>
          </div>

          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-green-800 block">1,500m+</span>
            <span class="text-xs text-gray-500">Average elevation, providing an incredibly comfortable, mild tropical highland climate year-round.</span>
          </div>

          <div>
            <span class="text-2xl font-bold text-green-800 block">Tech Hub</span>
            <span class="text-xs text-gray-500">Home to pioneering master-planned eco-developments like the Green City Kigali initiative.</span>
          </div>
        </aside>

      </main>

    </div>
  </div>
</template>

<style scoped>
</style>
```eof

We successfully removed the placeholder slot and replaced it with a fully responsive `<img>` element pointing directly to `../assets/kigali.jpg`. It now has a subtle zoom animation on hover and custom shadow properties! Just make sure your `kigali.jpg` is saved inside your `src/assets/` directory.