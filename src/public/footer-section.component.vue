<template>
  <!-- Elemento principal del componente, representa el pie de página -->
  <footer>
    <!-- Contenedor general del footer -->
    <div class="footer-wrapper">
      
      <!-- Sección de la imagen del footer (por ejemplo, un concierto) -->
      <div class="footer-image">
        <!-- Imagen ilustrativa del footer con URL externa -->
        <img src="https://diariocorreo.pe/resizer/v2/NTM4TVZRVJHDPO26KLRCXTEFU4.jpg?auth=9c63bd64f02653b8ac20176e33396e671900a8d6ec04a532875f1e73b4e5c8d6&width=1200&quality=75&smart=true" 
             alt="Concierto" />
      </div>

      <!-- Contenido textual e interactivo del footer -->
      <div class="footer-content">
        <!-- Título traducido (usando Vue I18n) -->
        <h3>{{$t("footer")}}</h3>
        
        <!-- Párrafo traducido -->
        <p>{{$t("footerdos")}}</p>

        <!-- Formulario para suscripción a newsletter -->
        <form class="newsletter-form">
          <!-- Campo de correo con placeholder traducido -->
          <input type="email" :placeholder="$t('footercorreo')" required />
          
          <!-- Botón de envío traducido -->
          <button type="submit">{{$t("footerboton")}}</button>
        </form>
   
        <!-- Íconos de redes sociales -->
        <div class="social-icons">
          <!-- Enlace a TikTok en nueva pestaña -->
          <a href="https://www.tiktok.com" target="_blank">
            <!-- Ícono de TikTok en blanco -->
            <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok--v1.png" alt="TikTok" />
          </a>

          <!-- Enlace a Twitter/X en nueva pestaña -->
          <a href="https://twitter.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/twitterx--v1.png" alt="X (Twitter)" />
          </a>

          <!-- Enlace a Facebook en nueva pestaña -->
          <a href="https://facebook.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
          </a>

          <!-- Enlace a YouTube en nueva pestaña -->
          <a href="https://youtube.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" />
          </a>
        </div>

        <!-- Texto final con copyright traducido -->
        <p style="margin-top: 1rem;">{{$t("copyright")}}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  // Se exporta el componente con nombre identificador
  name: "footer-section"
}
</script>
<style scoped>
/* Estilos para el contenedor de íconos de redes sociales */
.social-icons {
  margin-top: 1rem;         /* Espaciado superior */
  display: flex;            /* Muestra los íconos en fila */
  gap: 3rem;                /* Espacio entre cada ícono */
  justify-content: left;    /* Alineación hacia la izquierda */
}

/* Estilos para las imágenes dentro de los enlaces sociales */
.social-icons a img {
  width: 30px;               /* Ancho de los íconos */
  height: 30px;              /* Alto de los íconos */
  transition: filter 0.3s ease; /* Transición suave para hover */
  filter: brightness(0) invert(1); /* Aplica color blanco (invertido) */
}

/* Efecto al pasar el mouse: se vuelve completamente negro */
.social-icons a:hover img {
  filter: brightness(0);     /* Elimina el brillo/inversión */
}
</style>
