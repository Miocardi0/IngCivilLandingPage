<template>
    <div class="max-w-7xl mx-auto p-5">
      <!-- Sección de Introducción -->
      <section class="text-center mb-10">
        <h1 class="text-5xl font-bold text-gray-800 mb-4">Bienvenido a Mi Portafolio</h1>
        <p class="text-lg text-gray-600 mb-4">Soy ingeniero civil con experiencia en diseño y gestión de proyectos innovadores.</p>
        <a href="#contact" class="mt-5 inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Contáctame
        </a>
      </section>
  
      <!-- Sección de Proyectos Destacados -->
      <section class="mb-10">
        <h2 class="text-4xl font-semibold text-gray-700 mb-4 text-center">Proyectos Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-semibold text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Proyecto 1
            </h3>
            <p class="text-gray-600 mb-2">Descripción breve del proyecto 1, resaltando sus características clave.</p>
            <img src="" alt="Proyecto 1" class="rounded-lg w-full mb-2" />
          </div>
          <div class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-semibold text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Proyecto 2
            </h3>
            <p class="text-gray-600 mb-2">Descripción breve del proyecto 2, resaltando sus características clave.</p>
            <img src="" alt="Proyecto 2" class="rounded-lg w-full mb-2" />
          </div>
          <div class="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-semibold text-blue-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Proyecto 3
            </h3>
            <p class="text-gray-600 mb-2">Descripción breve del proyecto 3, resaltando sus características clave.</p>
            <img src="" alt="Proyecto 3" class="rounded-lg w-full mb-2" />
          </div>
        </div>
      </section>     
  
      <!-- Sección de Llamada a la Acción -->
      <section class="text-center mb-10">
        <h2 class="text-4xl font-semibold text-gray-700 mb-4">¿Listo para iniciar un nuevo proyecto?</h2>
        <p class="text-gray-600 mb-4">Estoy aquí para ayudarte a llevar tus ideas a la realidad.</p>
  
        <!-- Lista de Beneficios -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">¿Por qué trabajar conmigo?</h3>
          <ul class="text-left mx-auto max-w-lg text-gray-600">
            <li class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1zm-1 8a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              Experiencia comprobada en proyectos de ingeniería civil.
            </li>
            <li class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1zm-1 8a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              Enfoque personalizado y atención al detalle.
            </li>
            <li class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1zm-1 8a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              Compromiso con la sostenibilidad y prácticas responsables.
            </li>
          </ul>
        </div>
  
        <!-- Cita Inspiradora -->
        <blockquote class="text-lg italic text-gray-500 mb-4">
          "El futuro pertenece a quienes creen en la belleza de sus sueños." – Eleanor Roosevelt
        </blockquote>
  
      </section>
      <section class="mb-10">
        <h2 class="text-4xl font-semibold text-gray-700 mb-4 text-center">Testimonios</h2>
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <p class="text-gray-600 italic">“El trabajo de [Tu Nombre] fue fundamental para el éxito de nuestro proyecto. Su atención al detalle y profesionalismo son inigualables.”</p>
          <p class="mt-4 font-bold text-gray-800">- Nombre del Cliente</p>
        </div>
        <!-- Puedes agregar más testimonios de la misma forma -->
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  /* Agregar estilos personalizados si es necesario */
  </style>
  