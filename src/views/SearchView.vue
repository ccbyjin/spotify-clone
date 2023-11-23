<script setup>
import CategorySelect from '../components/CategorySelect.vue';
</script>

<template>
  <div class="p-8">
    <!-- Recommended Album -->
    <button
      type="button"
      class="ml-2.5 font-semibold text-white text-2xl hover:underline cursor-pointer"
    >
      All
    </button>

    <div class="py-1.5"></div>
    <!-- HomeCard for Recommended Album -->
    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <CategorySelect category="Podcasts" image="https://i.postimg.cc/wMVqMY3h/My-Favorite-Murder.jpg"/>
      <CategorySelect category="Albums" image="https://i.postimg.cc/HWftHJy0/fml.jpg"/>
      <CategorySelect category="Live Events" image="https://i.postimg.cc/MpBDkpZ1/live-event.png"/>
      <CategorySelect category="Made For You" image="https://i.postimg.cc/FH40k5Q4/made-for-you.png"/>
      <CategorySelect category="New Release" image="https://i.postimg.cc/902qRZvB/new-release.png"/>

      <CategorySelect category="Happy Holidays" image="https://i.postimg.cc/4xTKd6R2/happy-holiday.png"/>
      <CategorySelect category="Mandopop" image="https://i.postimg.cc/52nzjsq9/mandpop.png"/>
      <CategorySelect category="Pop" image="https://i.postimg.cc/cLpS7ScF/pop.png"/>
      <CategorySelect category="K-pop" image="https://i.postimg.cc/bwhXdTY5/kpop.png"/>
      <CategorySelect category="Charts" image="https://i.postimg.cc/xjzFHzZV/charts.png"/>

      <CategorySelect category="Hip-Hop" image="https://i.postimg.cc/263kSWv1/hip-hop.png"/>
      <CategorySelect category="J-Tracks" image="https://i.postimg.cc/FsGh3GZY/j-pop.png"/>
      <CategorySelect category="Indie" image="https://i.postimg.cc/V65tPdkR/indie.png"/>
      <CategorySelect category="Dance/Electronic" image="https://i.postimg.cc/bvwLCx4V/dance.png"/>
      <CategorySelect category="Discover" image="https://i.postimg.cc/k5M9THJr/discovery.png"/>

      <CategorySelect category="Mood" image="https://i.postimg.cc/gcxhMSj6/mood.png"/>
      <CategorySelect category="Sleep" image="https://i.postimg.cc/L6RHq5c6/sleep.png"/>
      <CategorySelect category="Chill" image="https://i.postimg.cc/vZ2MSzcc/chill.png"/>
      <CategorySelect category="Love" image="https://i.postimg.cc/xdj5qvRy/love.png"/>
      <CategorySelect category="RADAR" image="https://i.postimg.cc/QxLqcGmM/radar.png"/>

      <CategorySelect category="EQUAL" image="https://i.postimg.cc/6pb2LCKh/equal.png"/>
      <CategorySelect category="Netflix" image="https://i.postimg.cc/PrPPfPYp/netflix.png"/>
      <CategorySelect category="Trending" image="https://i.postimg.cc/J08v6D8T/trending.png"/>
      <CategorySelect category="Karaoke" image="https://i.postimg.cc/nL73yF0N/karaoke.png"/>
      <CategorySelect category="R&B" image="https://i.postimg.cc/65mzT2PD/r-b.png"/>

      <CategorySelect category="Workout" image="https://i.postimg.cc/dtkN2jGq/work-out.png"/>
      <CategorySelect category="Disney" image="https://i.postimg.cc/tT42Y3XG/disney.png"/>
      <CategorySelect category="Party" image="https://i.postimg.cc/J0yxQRDT/party.png"/>
      <CategorySelect category="Rock" image="https://i.postimg.cc/FsLGdsQz/rock.png"/>
      <CategorySelect category="Latin" image="https://i.postimg.cc/52Wgwdx3/latin.png"/>

      <CategorySelect category="Country" image="https://i.postimg.cc/bwGGNsXV/country.png"/>
      <CategorySelect category="At Home" image="https://i.postimg.cc/zBkvPhWv/at-home.png"/>
      <CategorySelect category="Decades" image="https://i.postimg.cc/Y0n9twdw/decades.png"/>
      <CategorySelect category="Metal" image="https://i.postimg.cc/qvCRHSn9/metal.png"/>
      <CategorySelect category="Jazz" image="https://i.postimg.cc/XYKR5g0r/jazz.png"/>

      <CategorySelect category="Classical" image="https://i.postimg.cc/BZYHSWL6/classical.png"/>
      <CategorySelect category="Folk&Acoustic" image="https://i.postimg.cc/dVdyjLWk/folk.png"/>
      <CategorySelect category="Focus" image="https://i.postimg.cc/D08WJZJz/focus.png"/>
      <CategorySelect category="Soul" image="https://i.postimg.cc/Y2sLc1ZL/soul.png"/>
      <CategorySelect category="Anime" image="https://i.postimg.cc/HLk7DBY5/anime.png"/>

    </div>
  </div>
</template>

