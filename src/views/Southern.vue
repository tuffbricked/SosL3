<template>
  <div class="bg-gray-50 min-h-screen w-full antialiased text-gray-800">
    <div class="max-w-5xl mx-auto p-6 md:p-12">
      
      <header class="mb-10 relative">
        <div class="absolute -left-4 top-0 h-full w-1 bg-amber-500 rounded-full hidden md:block"></div>
        <span class="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
          Heritage, Culture & Academia
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
          Welcome to Southern Province
        </h1>
        <div class="h-1 w-20 bg-green-700 mt-4 rounded"></div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div class="w-full h-64 bg-gray-200 rounded-2xl shadow-inner border border-gray-200 flex items-center justify-center overflow-hidden group hover:border-amber-300 transition-colors">
          <img 
            src="../assets/south.jpg" 
            alt="Kings Palace / Cultural Site" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div class="w-full h-64 bg-gray-200 rounded-2xl shadow-inner border border-gray-200 flex items-center justify-center overflow-hidden group hover:border-green-300 transition-colors">
          <img 
            src="../assets/noth.jpg" 
            alt="Nyungwe Forest / Canopy Walk" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <main class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <div class="md:col-span-2 space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
          <p class="font-medium text-stone-900 text-xl">
            The Southern Province preserves the soul of Rwanda's rich history, housing the ancient royal kingdoms, intellectual capitals, and expansive primordial rainforests.
          </p>
          <p>
            Centered around the cultural cities of Huye and Nyanza, this province serves as the historical epicentre of the nation. It is here that visitors can explore the reconstructed thatched-straw royal palaces of Rwanda's historic monarchs, alongside unmatched archives of traditional art, ethnography, and dance.
          </p>
          <p>
            As you journey further south, the rolling agricultural hills transition into the pristine canopy of Nyungwe National Park—one of the oldest preserved mountain rainforests in Africa. This biodiverse wilderness shelters a massive population of chimpanzees and rare primates, balancing the province's historical gravity with magnificent natural wonder.
          </p>
        </div>

        <aside class="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm space-y-6">
          <h3 class="text-xs font-bold uppercase tracking-wider text-amber-700">
            Cultural Pillars
          </h3>
          
          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-stone-800 block">Royal History</span>
            <span class="text-xs text-gray-500">Home to Nyanza, the traditional seat of the Kingdom of Rwanda and the historic Rukari Palace.</span>
          </div>

          <div class="border-b border-gray-100 pb-4">
            <span class="text-2xl font-bold text-stone-800 block">Academic Cradle</span>
            <span class="text-xs text-gray-500">Anchored by Huye, long considered the intellectual capital of Rwanda and home to pioneering research institutions.</span>
          </div>

          <div>
            <span class="text-2xl font-bold text-green-700 block">Nyungwe Canopy</span>
            <span class="text-xs text-gray-500">Features a breathtaking, high-altitude suspension bridge hanging 70 meters directly above the ancient forest floor.</span>
          </div>
        </aside>

      </main>

    </div>
  </div>
</template>