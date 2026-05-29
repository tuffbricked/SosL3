<template>
  <div class="bg-gray-50 min-h-screen w-full antialiased text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      
      <!-- Header Area -->
      <header class="text-center mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-green-600 block mb-2">
          Get in Touch
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Help &amp; Inquiries
        </h1>
        <p class="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Have questions about the regional guides, itineraries, or platform access? Reach out directly through any of our channels below.
        </p>
        <div class="h-1 w-16 bg-green-600 mx-auto mt-6 rounded"></div>
      </header>

      <!-- Contact Interface Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        <!-- Communication Options Panel -->
        <div class="space-y-4 flex flex-col justify-between">
          
          <!-- Email Card -->
          <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-green-200 transition-colors">
            <div class="p-3 bg-green-50 rounded-xl text-green-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v11z" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Us</h3>
              <a href="mailto:your.email@example.com" class="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors break-all">
                your.email@example.com
              </a>
              <p class="text-xs text-gray-400 mt-1">We typically reply within 24 operational hours.</p>
            </div>
          </div>

          <!-- Telephone Card -->
          <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-green-200 transition-colors">
            <div class="p-3 bg-green-50 rounded-xl text-green-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Call Directly</h3>
              <a href="tel:+250000000000" class="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                +250 788 000 000
              </a>
              <p class="text-xs text-gray-400 mt-1">Available Monday to Friday, 8:00 AM – 5:00 PM CAT.</p>
            </div>
          </div>

          <!-- HQ Location Card -->
          <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-green-200 transition-colors">
            <div class="p-3 bg-green-50 rounded-xl text-green-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Main Hub</h3>
              <p class="text-lg font-semibold text-gray-900">Kigali, Rwanda</p>
              <p class="text-xs text-gray-400 mt-1">Nyarugenge District, City Center Hub</p>
            </div>
          </div>

        </div>

        <!-- Interactive Quick Contact Form Panel -->
        <form @submit.prevent class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Full Name</label>
              <input type="text" placeholder="John Doe" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Your Email</label>
              <input type="email" placeholder="name@domain.com" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all" />
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Message</label>
              <textarea rows="4" placeholder="How can we assist you today?" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all resize-none"></textarea>
            </div>
          </div>

          <button type="submit" class="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm shadow-sm">
            Send Message
          </button>
        </form>

      </div>

    </div>
  </div>
</template>