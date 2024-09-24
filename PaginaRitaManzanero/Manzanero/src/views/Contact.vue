<template>
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-6 text-center">Contacto</h1>
      <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input type="text" id="name" v-model="form.name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tu nombre">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico:</label>
          <input type="email" id="email" v-model="form.email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tu correo electrónico">
        </div>
        <div class="mb-6">
          <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
          <textarea id="message" v-model="form.message" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Aquí puedes agregar la lógica para enviar el formulario, como hacer una petición a una API
        console.log('Formulario enviado:', this.form);
        // Reiniciar el formulario después del envío
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados aquí si es necesario */
  </style>
  