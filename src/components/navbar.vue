<template>
    <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full" >
        <img src="../assets/img.png" alt="Logo" class="h-10 w-auto">
        
        <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end">
            <li><a href="/" class="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" class="hover:text-yellow-300">About</a></li>
            <li><a href="/services" class="hover:text-yellow-300">Services</a></li>
            <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Gallery<span> v </span></a>
                <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-400 text-white-900 rounded shadow w-48 top-full left-o z-50">
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Images</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a></li>
                </ul>
            </li>
             <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Destination<span> v </span></a>
                <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-green-400 text-white-900 rounded shadow w-48 top-full left-o z-50">
                    <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</RouterLink></li>
                    <li><RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">Southern</RouterLink></li>
                    <li><RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">Western</RouterLink></li>
                    <li><RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">Northern</RouterLink></li>
                    <li><RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">Eastern</RouterLink></li>
                </ul>
                </li>
            <li><a href="/contact" class="hover:text-yellow-300">Contact</a></li>
        </ul>
    </nav>
    
</template>