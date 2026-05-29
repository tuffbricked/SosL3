<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white">
    <!-- Header Section -->
    <section class="mt-12 px-4 py-16 text-center">
      <h1 class="text-6xl font-bold text-green-600 mb-4">About Rwanda</h1>
      <p class="text-xl text-gray-700 max-w-2xl mx-auto">
        Discover the beauty, culture, and heritage of the Land of a Thousand Hills
      </p>
    </section>

    <!-- Content Section -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <!-- Overview -->
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl font-bold text-green-600 mb-4">Welcome to Rwanda</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-4">
            Rwanda is a vibrant East African nation known for its stunning landscapes, 
            rich biodiversity, and resilient people. Located in the heart of Africa, 
            this small but mighty country has become a beacon of progress and innovation.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed">
            From the misty mountains where mountain gorillas roam to the pristine shores 
            of Lake Kivu, Rwanda offers unforgettable experiences for travelers and 
            adventurers alike.
          </p>
        </div>
        <div class="bg-green-200 rounded-lg h-64 flex items-center justify-center">
          <p class="text-gray-600 text-lg">Rwanda Landscape Image</p>
        </div>
      </div>

      <!-- Key Highlights -->
      <div class="bg-white rounded-lg shadow-lg p-12 mb-16">
        <h3 class="text-3xl font-bold text-green-600 mb-8 text-center">Key Highlights</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold text-green-500 mb-2">12.9M</div>
            <p class="text-gray-700 font-semibold">Population</p>
            <p class="text-gray-600 text-sm mt-2">Growing and dynamic</p>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-green-500 mb-2">26,338</div>
            <p class="text-gray-700 font-semibold">Km²</p>
            <p class="text-gray-600 text-sm mt-2">Land Area</p>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-green-500 mb-2">1,962m</div>
            <p class="text-gray-700 font-semibold">Average Elevation</p>
            <p class="text-gray-600 text-sm mt-2">Highest peak: 4,507m</p>
          </div>
        </div>
      </div>

      <!-- Regions -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-green-600 mb-8 text-center">Our Regions</h3>
        <div class="grid md:grid-cols-5 gap-4">
          <div class="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-6 text-white text-center cursor-pointer hover:shadow-lg transition">
            <h4 class="text-2xl font-bold mb-2">Northern</h4>
            <p class="text-sm">Mountain Gorillas & Volcanoes</p>
          </div>
          <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-6 text-white text-center cursor-pointer hover:shadow-lg transition">
            <h4 class="text-2xl font-bold mb-2">Southern</h4>
            <p class="text-sm">Tea Plantations & Lakes</p>
          </div>
          <div class="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-6 text-white text-center cursor-pointer hover:shadow-lg transition">
            <h4 class="text-2xl font-bold mb-2">Eastern</h4>
            <p class="text-sm">Wetlands & Wildlife</p>
          </div>
          <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-6 text-white text-center cursor-pointer hover:shadow-lg transition">
            <h4 class="text-2xl font-bold mb-2">Western</h4>
            <p class="text-sm">Pristine Forests</p>
          </div>
          <div class="bg-gradient-to-br from-red-400 to-red-600 rounded-lg p-6 text-white text-center cursor-pointer hover:shadow-lg transition">
            <h4 class="text-2xl font-bold mb-2">Kigali</h4>
            <p class="text-sm">Capital City</p>
          </div>
        </div>
      </div>

      <!-- Culture Section -->
      <div class="bg-green-100 rounded-lg p-12 mb-16">
        <h3 class="text-3xl font-bold text-green-700 mb-6">Our Culture</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xl font-bold text-green-600 mb-3">Language & Heritage</h4>
            <p class="text-gray-700">Rwanda's official languages are Kinyarwanda, English, French, and Swahili. Our rich cultural heritage reflects centuries of tradition and unity.</p>
          </div>
          <div>
            <h4 class="text-xl font-bold text-green-600 mb-3">Wildlife & Nature</h4>
            <p class="text-gray-700">Home to the iconic mountain gorillas, African forest elephants, and countless endemic species. Conservation is at the heart of our identity.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>