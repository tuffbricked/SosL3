<script setup>
// Component configuration logic can go here
</script>

<template>
  <div class="bg-gray-50 min-h-screen w-full antialiased text-gray-800">
    <div class="max-w-5xl mx-auto p-6 md:p-12">
      
      <!-- Main Header Section -->
      <header class="mb-10">
        <span class="text-xs font-bold uppercase tracking-widest text-cyan-600 block mb-2">
          The Riviera & Adventure Coast
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Welcome to Western Province
        </h1>
        <div class="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-600 mt-4 rounded"></div>
      </header>

      <!-- ============================================================= -->
      <!-- IMAGE PLACEHOLDER SLOT                                        -->
      <!-- Replace the div below with your actual <img /> or picture component -->
      <!-- ============================================================= -->
      <div class="w-full h-64 md:h-96 bg-gray-200 rounded-2xl mb-12 shadow-inner border border-gray-200 flex items-center justify-center overflow-hidden group hover:border-cyan-300 transition-colors">
        <div class="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 group-hover:text-cyan-500 transition-colors mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p class="text-sm font-medium text-gray-500 group-hover:text-cyan-700 transition-colors">
            [ Paste your image tag here ]
          </p>
          <p class="text-xs text-gray-400 mt-1">Recommended: Sunset landscape of Lake Kivu or kayaking along the shore</p>
        </div>
      </div>
      <!-- ============================================================= -->

      <!-- Western Province Narrative / Description Grid -->
      <main class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <!-- Left 2 Columns: Detailed Description -->
        <div class="md:col-span-2 space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
          <p class="font-medium text-slate-900 text-xl">
            Framed by the dramatic, deep-blue expanse of Lake Kivu, Rwanda's Western Province is a spectacular landscape of pristine beaches, alpine tea fields, and historic hiking trails.
          </p>
          <p>
            The province functions as the country’s playground for outdoor adventure and marine leisure. Vibrant shoreline cities like Rubavu offer sandy emerald bays, hot springs, and premium lakeside resorts, serving as the perfect oasis for travelers resting after high-intensity gorilla safaris in the adjacent mountains.
          </p>
          <p>
            For adventurers, the region is legendary for the Congo Nile Trail—a world-class trail system winding alongside steep, terraced hills that trace the continental watershed division. Between the dense montane forests and the island-filled lake waters, the Western Province offers an unforgettable side of Rwanda's natural beauty.
          </p>
        </div>

        <!-- Right 1 Column: Quick Metrics Panel -->
        <aside class="bg-white border border-cyan-100 rounded-2xl p-6 shadow-sm space-y-6">
          <h3 class="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Coastal Highlights
          </h3>
          
          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-cyan-800 block">Lake Kivu</span>
            <span class="text-xs text-gray-500">One of Africa's Great Lakes, famous for its safe, emerald-tinted, completely crocodile-free waters.</span>
          </div>

          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-emerald-800 block">227 Kilometers</span>
            <span class="text-xs text-gray-500">The total expanse of the legendary Congo Nile Trail, threading through the entire length of the province.</span>
          </div>

          <div>
            <span class="text-2xl font-bold text-cyan-800 block">Highland Coffee</span>
            <span class="text-xs text-gray-500">Rich volcanic shores produce some of the finest premium Bourbon specialty coffee varieties in the world.</span>
          </div>
        </aside>

      </main>

    </div>
  </div>
</template>

<style scoped>
</style>
