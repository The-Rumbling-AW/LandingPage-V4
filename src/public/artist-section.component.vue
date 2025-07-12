<script>
export default {
  name: \"artist-section.component\" // Identificador único del componente Vue, utilizado para debugging y organización del proyecto.
}
</script>

<template>
  <!-- Contenedor principal del componente -->
  <main>
    <!-- Título principal traducido y dividido en tres partes para resaltar un texto específico. 
         Usa la función de internacionalización ($t) para soportar múltiples idiomas. -->
    <h2>
      {{ $t('titulo_beneficios_artista_parte1') }}
      <span class="highlight">{{ $t('titulo_beneficios_artista_resaltado') }}</span>
      {{ $t('titulo_beneficios_artista_parte2') }}
    </h2>

    <!-- Sección que agrupa visualmente las tarjetas que presentan beneficios específicos para artistas -->
    <section class=\"benefits\">

      <!-- Primera tarjeta de beneficio con ícono de campana -->
      <div class=\"card\">
        <div class=\"icon\"><i class=\"fas fa-bell\"></i></div>
        <!-- Texto traducido dividido en partes para resaltar cierta información específica -->
        <p>
          {{ $t('beneficioartista1_parte1') }}
          <span class=\"highlight\">{{ $t('beneficioartista1_resaltado') }}</span>,
          {{ $t('beneficioartista1_parte2') }}
        </p>
      </div>

      <!-- Segunda tarjeta con fondo morado para diferenciación visual y un ícono de sobre (email) -->
      <div class=\"card purple\">
        <div class=\"icon\"><i class=\"fas fa-envelope\"></i></div>
        <!-- Texto separado por salto de línea para mejor legibilidad -->
        <p>
          {{ $t('beneficioartista2_parte1') }}<br/>
          {{ $t('beneficioartista2_parte2') }}
        </p>
      </div>

      <!-- Tercera tarjeta, informativa sobre beneficios sociales o comunitarios -->
      <div class=\"card\">
        <div class=\"icon\"><i class=\"fas fa-user-friends\"></i></div>
        <!-- Contenido textual con resaltado específico para destacar puntos clave -->
        <p>
          {{ $t('beneficioartista3_parte1') }}<br/>
          <span class=\"highlight\">{{ $t('beneficioartista3_resaltado') }}</span>
          {{ $t('beneficioartista3_parte2') }}
        </p>
      </div>

      <!-- Cuarta tarjeta de beneficio, diferenciada con fondo morado e ícono relacionado con mapas/localización -->
      <div class=\"card purple\">
        <div class=\"icon\"><i class=\"fas fa-map\"></i></div>
        <p>
          {{ $t('beneficioartista4_parte1') }}<br/>
          {{ $t('beneficioartista4_parte2') }}
        </p>
      </div>

    </section>
  </main>
</template>

<style scoped>
/* Estilos principales aplicados únicamente dentro del alcance del componente actual */
main {
  text-align: center; /* Centra el texto para mejorar la presentación visual del contenido principal */
  padding: 2rem 1rem; /* Espaciado interno generoso para claridad y separación del contenido respecto a bordes */
}

/* Clase específica para resaltar textos clave, usando un color morado distintivo */
.highlight {
  color: #CB6CE6;
}

/* Contenedor flexible para organizar tarjetas responsivamente */
.benefits {
  display: flex; /* Flexbox para fácil manejo del contenido interno */
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten a diferentes tamaños de pantalla */
  justify-content: center; /* Centrado horizontal de las tarjetas */
  gap: 1rem; /* Espacio uniforme entre cada tarjeta para mantener armonía visual */
  margin-top: 2rem; /* Espacio superior que separa esta sección del título principal */
}

/* Estilos base comunes para todas las tarjetas de beneficios */
.card {
  background-color: #fff; /* Fondo claro para resaltar contenido textual */
  color: #000; /* Texto negro para buena legibilidad */
  padding: 2rem 1rem; /* Espaciado interno amplio para comodidad visual */
  width: 230px; /* Ancho fijo para consistencia en presentación */
  min-height: 280px; /* Altura mínima para mantener la uniformidad */
  border-radius: 30px; /* Bordes redondeados para suavizar la estética */
  text-align: left; /* Texto alineado a la izquierda para mejor lectura */
  display: flex; /* Uso de flexbox para alinear contenido interno */
  flex-direction: column; /* Columna para organización vertical del contenido */
  gap: 0.5rem; /* Espacio interno entre elementos del contenido */
  justify-content: flex-start; /* Alineación superior del contenido */
  align-items: flex-start; /* Alineación izquierda del contenido */
  font-size: 1.5rem; /* Tamaño de fuente grande para fácil lectura */
  line-height: 1.6; /* Interlineado adecuado para claridad textual */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones suaves al interactuar con el usuario */
}

/* Efecto visual interactivo al pasar cursor sobre tarjetas */
.card:hover {
  transform: translateY(-8px); /* Movimiento ligero hacia arriba para indicar interactividad */
  box-shadow: 0 8px 20px rgba(184, 110, 255, 0.3); /* Sombra suave que aumenta percepción de profundidad */
}

/* Estilos específicos para los íconos dentro de las tarjetas */
.card .icon {
  font-size: 2rem; /* Tamaño prominente para íconos visualmente atractivos */
  align-self: center; /* Centrados horizontalmente para mayor equilibrio visual */
  margin-bottom: 1rem; /* Espacio inferior para separación del texto */
}

/* Estilos especiales para navegación activa */
nav a.active {
  color: #CB6CE6; /* Color activo resaltado */
  font-weight: bold; /* Texto en negrita para destacar enlace actual */
}

/* Clase adicional para diferenciar tarjetas con color morado */
.card.purple {
  background-color: #CB6CE6; /* Fondo morado para diferenciar visualmente */
  color: #fff; /* Texto blanco para contraste óptimo */
}

/* Estilos adicionales para enlaces internos */
.link {
  margin-top: 2rem;
}

.link a {
  color: #CB6CE6; /* Color específico para enlaces */
  text-decoration: none; /* Sin subrayado para mantener limpieza visual */
}
</style>
