<template>
  <!-- Contenedor raíz del componente -->
  <div>

    <!-- Sección de banner principal que se muestra en la parte superior -->
    <div class="hero-banner">
      <img
        src="https://cdn.getcrowder.com/images/3551b73e-2aab-4034-9de3-a40df9476149-banner-desktop-actual-1.png"
        alt="Louis Tomlinson Tour Banner" />
    </div>

    <!-- Título de sección traducido dinámicamente con Vue i18n -->
    <div class="section-title">{{$t("conoce")}}</div>

    <!-- Contenedor de tarjetas de conciertos -->
    <div class="concerts">

      <!-- Tarjeta 1: información del concierto de Harry Styles -->
      <div class="concert-card">
        <img src="https://cdn.teleticket.com.pe/especiales/harry-styles-2020/images/harry_rs.jpg" alt="Harry Styles">
        <div>
          <strong>Harry Styles</strong><br>
          17 de Octubre, Jockey Club
        </div>
      </div>

      <!-- Tarjeta 2: concierto de Niall Horan -->
      <div class="concert-card">
        <img src="https://elpopular.cronosmedia.glr.pe/original/2024/03/04/65e67fa711bb376bf307a651.jpg" alt="Niall Horan">
        <div>
          <strong>Niall Horan</strong><br>
          6 de Noviembre, Costa 21
        </div>
      </div>

      <!-- Tarjeta 3: concierto de Emilia -->
      <div class="concert-card">
        <img src="https://cdn.teleticket.com.pe/especiales/emilia-lima-2025/images/ven051_rs.jpg" alt="Emilia">
        <div>
          <strong>Emilia</strong><br>
          25 de Julio, Costa 21
        </div>
      </div>

      <!-- Tarjeta 4: concierto de Arctic Monkeys -->
      <div class="concert-card">
        <img src="https://i.ytimg.com/vi/H-TDhyLmUJg/sddefault.jpg" alt="Arctic Monkeys">
        <div>
          <strong>Arctic Monkeys</strong><br>
          15 de Noviembre, Arena 1
        </div>
      </div>

      <!-- Tarjeta 5: concierto de Victor Manuel -->
      <div class="concert-card">
        <img src="https://perufolkradio.com/wp-content/uploads/2021/04/victor-manuel-del-peru-20-aniversario.jpg" alt="Victor">
        <div>
          <strong>Victor Manuel</strong><br>
          19 de Mayo, Costa 21
        </div>
      </div>
    </div>

    <!-- Título de la sección de testimonios -->
    <div class="testimonial-title">{{$t("Testimonios")}}</div>

    <!-- Contenedor de tarjetas de testimonios -->
    <div class="testimonials-container">

      <!-- Testimonio 1 -->
      <div class="testimonial-card">
        <img src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/stay.jpg" alt="Fan de Stray Kids">
        <p>
          {{$t("testuno")}}<br><br>
          {{$t("testunoby")}}
        </p>
      </div>

      <!-- Testimonio 2, visualmente destacado -->
      <div class="testimonial-card highlighted">
        <img src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/harry.jpg" alt="Fan de Harry Styles">
        <p>
          {{$t("testdos")}}<br><br>
          {{$t("testdosby")}}
        </p>
      </div>

      <!-- Testimonio 3 -->
      <div class="testimonial-card">
        <img src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/louis.jpg" alt="Fan de Louis Tomlinson">
        <p>
          {{$t("testtres")}}<br><br>
          {{$t("testtresby")}}
        </p>
      </div>
    </div>

    <!-- Sección de video sobre el producto -->
    <div class="testimonial-title">{{$t("abouttheproduct")}}</div>
    <div class="video-card">
      <!-- Video de YouTube incrustado explicando el producto -->
      <iframe
        width="100%"
        height="215"
        src="https://www.youtube.com/embed/z53nugGXFA4"
        title="About The Product"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>

    <!-- Sección de video sobre el equipo de desarrollo -->
    <div class="testimonial-title">{{$t("abouttheteam")}}</div>
    <div class="video-card">
      <iframe
        width="100%"
        height="215"
        src="https://www.youtube.com/embed/UqFMGNLxV3Q"
        title="About The Product"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>

  </div>
</template>

<script>
export default {
  // Nombre del componente. Es útil para herramientas de desarrollo o cuando se usa en rutas dinámicas
  name: "content-section"
}
</script>

</script>
<style scoped>
/* Contenedor de los videos embebidos */
.video-card {
  display: flex;                 /* Flexbox para controlar disposición del contenido */
  flex-direction: column;       /* Colocar elementos uno debajo del otro */
  justify-content: center;      /* Centrar verticalmente dentro del contenedor si hay espacio */
  align-items: center;          /* Centrar horizontalmente */
  margin-top: 2rem;             /* Separación respecto al bloque anterior */
  padding: 1rem;                /* Espaciado interno */
}

/* Estilos aplicados directamente al iframe que contiene el video */
.video-card iframe {
  width: 80%;                   /* Tamaño relativo del video (80% del contenedor) */
  max-width: 800px;             /* Límite de ancho para evitar que se vea muy grande en pantallas grandes */
  height: 450px;                /* Altura fija para mantener relación de aspecto */
  border-radius: 20px;          /* Bordes redondeados para un diseño más moderno */
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4); /* Sombra suave y blanca para resaltar el video */
  border: none;                 /* Se elimina el borde del iframe por defecto */
}
</style>
