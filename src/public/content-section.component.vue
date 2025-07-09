<template>
  <div>
    <div class="hero-banner">
      <img src="https://cdn.getcrowder.com/images/3551b73e-2aab-4034-9de3-a40df9476149-banner-desktop-actual-1.png" alt="Louis Tomlinson Tour Banner" />
    </div>

    <div class="section-title">{{$t("conoce")}}</div>
    <div class="concerts">
      <div class="concert-card">
        <img src="https://cdn.teleticket.com.pe/especiales/harry-styles-2020/images/harry_rs.jpg" alt="Harry Styles">
        <div>
          <strong>Harry Styles</strong><br>
          17 de Octubre, Jockey Club
        </div>
      </div>
      <div class="concert-card">
        <img src="https://elpopular.cronosmedia.glr.pe/original/2024/03/04/65e67fa711bb376bf307a651.jpg" alt="Niall Horan">
        <div>
          <strong>Niall Horan</strong><br>
          6 de Noviembre, Costa 21
        </div>
      </div>
      <div class="concert-card">
        <img src="https://cdn.teleticket.com.pe/especiales/emilia-lima-2025/images/ven051_rs.jpg" alt="Emilia">
        <div>
          <strong>Emilia</strong><br>
          25 de Julio, Costa 21
        </div>
      </div>
      <div class="concert-card">
        <img src="https://i.ytimg.com/vi/H-TDhyLmUJg/sddefault.jpg" alt="Arctic Monkeys">
        <div>
          <strong>Arctic Monkeys</strong><br>
          15 de Noviembre, Arena 1
        </div>
      </div>
      <div class="concert-card">
        <img src="https://perufolkradio.com/wp-content/uploads/2021/04/victor-manuel-del-peru-20-aniversario.jpg" alt="Victor">
        <div>
          <strong>Victor Manuel</strong><br>
          19 de Mayo, Costa 21
        </div>
      </div>
    </div>

    <div class="testimonial-title">{{$t("Testimonios")}}</div>

    <div class="testimonials-container">
      <div class="testimonial-card">
        <img src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/stay.jpg" alt="Fan de Stray Kids">
        <p>{{$t("testuno")}}<br><br>
          {{$t("testunoby")}}</p>
      </div>

      <div class="testimonial-card highlighted">
        <img src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/harry.jpg" alt="Fan de Harry Styles">
        <p>{{$t("testdos")}}<br><br>
          {{$t("testdosby")}}</p>
      </div>

      <div class="testimonial-card">
        <img src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/louis.jpg" alt="Fan de Louis Tomlinson">
        <p>{{$t("testtres")}}<br><br>
          {{$t("testtresby")}}</p>
      </div>
    </div>

    <div class="testimonial-title">{{$t("abouttheproduct")}}</div>
    <div class="video-card">
      <iframe width="100%" height="215"
              src="https://www.youtube.com/embed/z53nugGXFA4"
              title="About The Product"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
      </iframe>

    </div>

    <div class="testimonial-title">{{$t("abouttheteam")}}</div>
    <div class="video-card">
      <iframe width="100%" height="215"
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
  name: "content-section"
}

</script>
<style scoped>
.video-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
}

.video-card iframe {
  width: 80%;
  max-width: 800px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4); /* sombra blanca visible */
  border: none;
}
</style>