<script>
export default {
  name: "artist-section.component"
}
</script>

<template>
  <main>
    <h2>
      {{ $t('titulo_beneficios_artista_parte1') }}
      <span class="highlight">{{ $t('titulo_beneficios_artista_resaltado') }}</span>
      {{ $t('titulo_beneficios_artista_parte2') }}
    </h2>

    <section class="benefits">
      <div class="card">
        <div class="icon"><i class="fas fa-bell"></i></div>
        <p>
          {{ $t('beneficioartista1_parte1') }}
          <span class="highlight">{{ $t('beneficioartista1_resaltado') }}</span>,
          {{ $t('beneficioartista1_parte2') }}
        </p>
      </div>

      <div class="card purple">
        <div class="icon"><i class="fas fa-envelope"></i></div>
        <p>
          {{ $t('beneficioartista2_parte1') }}<br/>
          {{ $t('beneficioartista2_parte2') }}
        </p>
      </div>

      <div class="card">
        <div class="icon"><i class="fas fa-user-friends"></i></div>
        <p>
          {{ $t('beneficioartista3_parte1') }}<br/>
          <span class="highlight">{{ $t('beneficioartista3_resaltado') }}</span>
          {{ $t('beneficioartista3_parte2') }}
        </p>
      </div>

      <div class="card purple">
        <div class="icon"><i class="fas fa-map"></i></div>
        <p>
          {{ $t('beneficioartista4_parte1') }}<br/>
          {{ $t('beneficioartista4_parte2') }}
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  padding: 2rem 1rem;
}

.highlight {
  color: #CB6CE6;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  background-color: #fff;
  color: #000;
  padding: 2rem 1rem;
  width: 230px;
  min-height: 280px;
  border-radius: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.5rem;
  line-height: 1.6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(184, 110, 255, 0.3);
}
.card .icon {
  font-size: 2rem;
  align-self: center;
  margin-bottom: 1rem;
}

nav a.active {
  color: #CB6CE6;
  font-weight: bold;
}

.card.purple {
  background-color: #CB6CE6;
  color: #fff;
}

.link {
  margin-top: 2rem;
}

.link a {

  color: #CB6CE6;
  text-decoration: none;
}
</style>
