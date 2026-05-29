<script setup>
// Component configuration logic can go here
</script>

<template>
  <div class="bg-gray-50 min-h-screen w-full antialiased text-gray-800">
    <div class="max-w-5xl mx-auto p-6 md:p-12">
      
      <header class="mb-10">
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">
          Ecotourism & Highlands Hub
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-emerald-900 tracking-tight">
          Welcome to Northern Province
        </h1>
        <div class="h-1 w-20 bg-emerald-600 mt-4 rounded"></div>
      </header>

      <div class="w-full h-64 md:h-96 bg-gray-200 rounded-2xl mb-12 shadow-inner border border-gray-200 flex items-center justify-center overflow-hidden group hover:border-emerald-300 transition-colors">
        <img 
          src="../assets/nothern.jpg" 
          alt="Virunga Volcanoes or Twin Lakes" 
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <main class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <div class="md:col-span-2 space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
          <p class="font-medium text-gray-900 text-xl">
            The Northern Province is Rwanda's most iconic alpine region, defined by the soaring volcanic peaks of the Virunga Massif and a deeply rooted commitment to biodiversity conservation.
          </p>
          <p>
            Anchored by the bustling highland city of Musanze, this province serves as the premier gateway for global ecotourism. Its unique mist-covered rainforests offer a sanctuary to the world's remaining endangered mountain gorillas, drawing researchers, adventurers, and nature lovers from every corner of the earth.
          </p>
          <p>
            Beyond its legendary wildlife preserves, the Northern Province is a vital agricultural engine for Rwanda. Its fertile volcanic soils yield vast crops, while the stunning panoramic backdrops of the Twin Lakes—Burera and Ruhondo—represent some of the most pristine landscape waterscapes in East Africa.
          </p>
        </div>

        <aside class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
          <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">
            Province Highlights
          </h3>
          
          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-emerald-800 block">Virunga Chain</span>
            <span class="text-xs text-gray-500">Home to five of the eight magnificent dormant volcanic peaks in the Virunga Mountains range.</span>
          </div>

          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-emerald-800 block">Gorilla Trekking</span>
            <span class="text-xs text-gray-500">Centering around Volcanoes National Park, a historic baseline for global primate conservation.</span>
          </div>

          <div>
            <span class="text-2xl font-bold text-emerald-800 block">Highland Lakes</span>
            <span class="text-xs text-gray-500">Featuring rich interconnected wetlands and scenic viewpoints overlooking steep terraced hillsides.</span>
          </div>
        </aside>

      </main>

    </div>
  </div>
</template>

<style scoped>
</style>