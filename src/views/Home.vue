<script setup>
// Defined paths matching your router setup layout parameters
const destinations = [
  { name: 'Kigali City', path: '/kigali', desc: 'The pristine, forward-thinking urban capital and innovation hub.', color: 'from-green-600 to-emerald-800' },
  { name: 'Northern Province', path: '/northern', desc: 'Misty volcanic peaks, bamboo forests, and mountain gorillas.', color: 'from-emerald-700 to-teal-900' },
  { name: 'Southern Province', path: '/southern', desc: 'The cultural heartbeat, royal history, and academic cradle.', color: 'from-amber-600 to-stone-800' },
  { name: 'Western Province', path: '/western', desc: 'The resort coastlines of Lake Kivu and the Congo Nile Trail.', color: 'from-cyan-600 to-emerald-700' },
  { name: 'Eastern Province', path: '/eastern', desc: 'Golden savanna plains, wildlife safaris, and lake systems.', color: 'from-amber-700 to-orange-600' }
]
</script>

<template>
  <div class="bg-gray-50 min-h-screen w-full antialiased text-gray-800">
    
    <!-- Hero / Navigation Banner -->
    <section class="relative bg-gradient-to-br from-green-800 via-emerald-700 to-slate-900 text-white py-32 px-6 text-center shadow-lg">
      <div class="absolute inset-0 bg-black/10 pointer-events-none"></div>
      <div class="relative max-w-4xl mx-auto space-y-6">
        <span class="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/40 border border-emerald-500/30 px-4 py-1.5 rounded-full inline-block">
          Official Travel Portal
        </span>
        <h1 class="text-5xl md:text-7xl font-black tracking-tight uppercase">
          Tembera U Rwanda
        </h1>
        <p class="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto font-light leading-relaxed">
          Discover the land of a thousand hills. From pristine urban streets to misty mountain rainforests and sweeping golden savannas.
        </p>
        <div class="pt-4">
          <a href="#explore" class="bg-white hover:bg-emerald-50 text-green-900 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all inline-block text-sm uppercase tracking-wider">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>

    <!-- Main Content Area -->
    <main id="explore" class="max-w-6xl mx-auto px-6 py-20">
      
      <!-- Project Mission Statement -->
      <section class="max-w-3xl mx-auto text-center mb-24 space-y-4">
        <h2 class="text-xs font-bold uppercase tracking-widest text-green-600">The Initiative</h2>
        <p class="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Promoting domestic tourism and sustainable global exploration.
        </p>
        <p class="text-gray-600 leading-relaxed text-base md:text-lg">
          The Tembera u Rwanda project highlights the stunning environmental diversity, cultural treasures, and pioneering eco-conservation practices across Rwanda's five core regions.
        </p>
      </section>

      <!-- Interactive Regional Grid Matrix -->
      <section class="space-y-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-4">
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Explore by Region</h2>
            <p class="text-sm text-gray-500 mt-1">Select a province to unveil its unique ecosystem and heritage.</p>
          </div>
          <div class="h-1 w-20 bg-green-600 mt-4 md:mt-0 rounded"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Changed outer container to a RouterLink for click-anywhere navigation layout accessibility -->
          <RouterLink 
            v-for="dest in destinations" 
            :key="dest.name"
            :to="dest.path"
            class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between p-6 transition-all hover:-translate-y-1 hover:shadow-md group block"
          >
            <div>
              <!-- Adaptive Color Block Tag -->
              <div :class="[dest.color, 'h-2 w-12 rounded mb-6 bg-gradient-to-r']"></div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                {{ dest.name }}
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                {{ dest.desc }}
              </p>
            </div>
            
            <div class="pt-6 border-t border-gray-50 mt-6 flex items-center justify-between text-xs font-bold text-green-600 group-hover:text-green-700 uppercase tracking-wider">
              <span>View Destination Guide</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </RouterLink>
        </div>
      </section>

    </main>

    <!-- Footer Identity -->
    <footer class="border-t border-gray-200 bg-white py-8 px-6 text-center text-xs text-gray-400 font-medium">
      &copy; {{ new Date().getFullYear() }} Tembera U Rwanda Project. All rights reserved.
    </footer>
  </div>
</template>