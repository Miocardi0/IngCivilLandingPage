<template>
    <div class="container mx-auto py-10 bg-white">
      <header class="text-center py-10">
        <h1 class="text-5xl font-bold text-gray-800">Mis Servicios</h1>
        <p class="text-lg mt-4 max-w-2xl mx-auto text-gray-600">
          Ofrecemos una amplia gama de servicios de ingeniería civil para satisfacer tus necesidades, garantizando calidad y profesionalismo.
        </p>
      </header>
  
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mt-10">
        <!-- Service 1 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Diseño Estructural"
            class="w-full h-40 object-cover filter brightness-75 hover:brightness-100 transition duration-300"
          />
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800">Diseño Estructural</h2>
            <p class="text-gray-700 mt-2">
              Servicios de diseño y análisis estructural para garantizar la seguridad y eficacia de las construcciones.
            </p>
            <a href="#more-info" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
              Más Información
            </a>
          </div>
        </div>
  
        <!-- Service 2 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Supervisión de Construcción"
            class="w-full h-40 object-cover filter brightness-75 hover:brightness-100 transition duration-300"
          />
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800">Supervisión de Construcción</h2>
            <p class="text-gray-700 mt-2">
              Supervisión integral de obras para asegurar que se cumplan los estándares de calidad y seguridad.
            </p>
            <a href="#more-info" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
              Más Información
            </a>
          </div>
        </div>
  
        <!-- Service 3 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Gestión de Proyectos"
            class="w-full h-40 object-cover filter brightness-75 hover:brightness-100 transition duration-300"
          />
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800">Gestión de Proyectos</h2>
            <p class="text-gray-700 mt-2">
              Planificación y ejecución de proyectos de construcción, asegurando cumplimiento de plazos y presupuestos.
            </p>
            <a href="#more-info" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
              Más Información
            </a>
          </div>
        </div>
  
        <!-- Service 4 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Consultoría Técnica"
            class="w-full h-40 object-cover filter brightness-75 hover:brightness-100 transition duration-300"
          />
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800">Consultoría Técnica</h2>
            <p class="text-gray-700 mt-2">
              Asesoramiento profesional en todos los aspectos técnicos de proyectos de ingeniería civil.
            </p>
            <a href="#more-info" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
              Más Información
            </a>
          </div>
        </div>
  
        <!-- Service 5 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Análisis Geotécnico"
            class="w-full h-40 object-cover filter brightness-75 hover:brightness-100 transition duration-300"
          />
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800">Análisis Geotécnico</h2>
            <p class="text-gray-700 mt-2">
              Evaluación de las condiciones del suelo para garantizar la estabilidad y seguridad de las construcciones.
            </p>
            <a href="#more-info" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
              Más Información
            </a>
          </div>
        </div>
  
        <!-- Service 6 -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Ingeniería Ambiental"
            class="w-full h-40 object-cover filter brightness-75 hover:brightness-100 transition duration-300"
          />
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800">Ingeniería Ambiental</h2>
            <p class="text-gray-700 mt-2">
              Soluciones para mitigar el impacto ambiental en proyectos de infraestructura.
            </p>
            <a href="#more-info" class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
              Más Información
            </a>
          </div>
        </div>
      </section>
  
      
    </div>
  </template>
  
  <script>
  export default {
    name: "Services",
  };
  </script>
  
  <style scoped>
  .container {
    padding: 0 1rem;
  }
  
  /* Additional styles can be added here if needed */
  h2 {
    position: relative;
  }
  
  h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background: #3B82F6; /* Blue color */
    margin-top: 8px;
    transition: width 0.3s ease;
  }
  
  h2:hover::after {
    width: 70px; /* Increase underline width on hover */
  }
  </style>
  