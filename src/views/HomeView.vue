<script setup>
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
  <!-- area 1 -->
  <div class="p-8">
    <!-- Podcast -->
    <button
      type="button"
      class="ml-2.5 font-semibold text-white text-2xl hover:underline cursor-pointer"
    >
      Podcasts
    </button>

    <div class="py-1.5"></div>
    <!-- HomeCard for Podcast -->
    <div class="flex items-center">
      <HomeCard image="https://i.postimg.cc/DZVdjvS7/BBC-News.png" title="BBC News" subTitle="BBC"/>
      <HomeCard image="https://i.postimg.cc/wMVqMY3h/My-Favorite-Murder.jpg" title="My Favorite Murder" subTitle="Exactly Right Media"/>
      <HomeCard class="md:block hidden" image="https://i.postimg.cc/rs2gfvVR/In-The-Dark.jpg" title="In The Dark" subTitle="The New Yorker"/>
      <HomeCard class="lg:block hidden" image="https://i.postimg.cc/NF1tVqR3/The-Rewatchables.png" title="The Rewatchables" subTitle="Pizza Hut"/>
      <HomeCard class="xl:block hidden" image="https://i.postimg.cc/5tqtHzHc/The-Habitat.jpg" title="The Habbit" subTitle="Gimlet"/>
    </div>
  </div>

  <!-- area 2 -->
  <div class="p-8">
    <!-- Recommended Album -->
    <button
      type="button"
      class="ml-2.5 font-semibold text-white text-2xl hover:underline cursor-pointer"
    >
      Recommended Album
    </button>

    <div class="py-1.5"></div>
    <!-- HomeCard for Recommended Album -->
    <div class="flex items-center">
      <HomeCard image="https://i.postimg.cc/VLnWNYqx/bloom.jpg" title="Bloom" subTitle="Troye Sivan"/>
      <HomeCard image="https://i.postimg.cc/52JqYZp6/thank-u-next.jpg" title="Thank u, Next" subTitle="Ariana Grande"/>
      <HomeCard class="md:block hidden" image="https://i.postimg.cc/Z5LPrVDj/Twenties-Deluxe.jpg" title="Twenties Deluxe" subTitle="Bren Joy"/>
      <HomeCard class="lg:block hidden" image="https://i.postimg.cc/3wSgqWhv/Nine-Track-Mind.jpg" title="Nine Track Mind" subTitle="Charlie Puth"/>
      <HomeCard class="xl:block hidden" image="https://i.postimg.cc/HWftHJy0/fml.jpg" title="FML" subTitle="SEVENTEEN"/>
    </div>
  </div>

  <!-- area 3 -->
  <div class="p-8">
    <!-- Recommended Songs -->
    <button
      type="button"
      class="ml-2.5 font-semibold text-white text-2xl hover:underline cursor-pointer"
    >
      Recommended Songs
    </button>

    <div class="py-1.5"></div>
    <!-- HomeCard for Recommended Songs -->
    <div class="flex items-center">
        <HomeCard image="https://i.postimg.cc/C58zcp5F/selfless.jpg" title="Wicked Games" subTitle="Kiana Ledé"/>
        <HomeCard image="https://i.postimg.cc/W4sfXVNT/starboy.jpg" title="Die For You - remix" subTitle="The Weeknd"/>
        <HomeCard class="md:block hidden" image="https://i.postimg.cc/q7XYcR2k/TS-reputation.jpg" title="...Ready For It?" subTitle="Taylor Swift"/>
        <HomeCard class="lg:block hidden" image="https://i.postimg.cc/WbVQ3CCR/17.png" title="God Of Music" subTitle="SEVENTEEN"/>
        <HomeCard class="xl:block hidden" image="https://i.postimg.cc/Bv1j6jPn/ruby.png" title="Ruby" subTitle="Woozi"/>
      </div>
  </div>
</template>
