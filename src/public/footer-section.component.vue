<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-image">
        <img src="https://diariocorreo.pe/resizer/v2/NTM4TVZRVJHDPO26KLRCXTEFU4.jpg?auth=9c63bd64f02653b8ac20176e33396e671900a8d6ec04a532875f1e73b4e5c8d6&width=1200&quality=75&smart=true" alt="Concierto" />
      </div>

      <div class="footer-content">
        <h3>{{$t("footer")}}</h3>
        <p>{{$t("footerdos")}}</p>

        <form class="newsletter-form">
          <input type="email" :placeholder="$t('footercorreo')" required />
          <button type="submit">{{$t("footerboton")}}</button>
        </form>
   
        <div class="social-icons">
          <a href="https://www.tiktok.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok--v1.png" alt="TikTok" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/twitterx--v1.png" alt="X (Twitter)" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" />
          </a>
        </div>

        <p style="margin-top: 1rem;">{{$t("copyright")}}</p>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-section"
}
</script>
<style scoped>
.social-icons {
  margin-top: 1rem;
  display: flex;
  gap: 3rem;
  justify-content: left;
}

.social-icons a img {
  width: 30px;
  height: 30px;
  transition: filter 0.3s ease;
  filter: brightness(0) invert(1);
}

.social-icons a:hover img {
  filter: brightness(0);
}

</style>
