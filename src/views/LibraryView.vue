<script setup>
import SongRow from 'src/components/SongRow.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';
import artist from 'src/artist.json'

import { useSongStore } from 'src/stores/song.js'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)

const playFunc = () => {
  if (currentTrack.value) {
    useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
    return
  }
  useSong.playFromFirst()
}
</script>

<template>
  <div class="p-8">
    
    <button
      type="button"
      class="ml-2.5 font-semibold text-white text-2xl hover:underline cursor-pointer"
    >
      {{ artist.fromWho }}
    </button>

    <div class="py-1.5"></div>

    <!-- for album cover -->
    <div class="relative flex items-center w-full h-full">
      <img width="140" :src="artist.albumCover">

      <!-- for artistName -->
      <div class="w-full ml-5">
        <div
          style="font-size: 33px;"
          class="absolute text-white font-semibold w-full top-0 hover:underline cursor-pointer"
        >
          {{ artist.name }}
        </div>

        <!-- album + dot + Year -->
        <div class="flex text-gray-300 text-[13px]">
          <div class="flex">Album</div>
          <div class="flex ml-2">
            <!-- little circle -->
            <div class="circle mt-2 mr-2" />
            <span class="-ml-0.5">{{ artist.releaseYear }}</span>
          </div>
          <div class="flex ml-2">
            <!-- little circle -->
            <div class="circle mt-2 mr-2" />
            <span class="-ml-0.5">{{ artist.tracks.length }} songs</span>
          </div>
        </div>

        <!-- icon -->
        <div class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5">
          <!-- play -->
          <button type="button" class="p-1 rounded-full bg-white" @click='playFunc()'>
            <Play v-if="!isPlaying" fillColor="#181818" :size="25" />
            <Pause v-else fillColor="#181818" :size="25" />
          </button>
          <!-- heart -->
          <button type="button">
            <Heart fillColor="#1BD760" :size="30" />
          </button>
          <!-- dots -->
          <button type="button">
              <DotsHorizontal fillColor="#FFFFFF" :size="25" />
            </button>
        </div>
      </div>
    </div>

    <!-- # Title  -->
    <div class="mt-6"></div>
    <div class="flex items-center justify-between px-5 pt-2">
      <div class="flex items-center justify-between text-gray-400">
        <div class="mr-7">#</div>
        <div class="text-sm">Title</div>
      </div>
      <!-- timing icon -->
      <div>
        <ClockTimeThreeOutline fillColor="#FFFFFF" :size="18" />
      </div>
    </div>
    <div class="border-b border-b-[#2A2A2A] mt-2"></div>
    <div class="mb-4"></div>
    <ul class="w-full" v-for="track, index in artist.tracks" :key="track">
      <SongRow :artist="artist" :track="track" :index="++index"/>
    </ul>
  </div>
</template>

<style scoped>
  .circle {
    width: 4px;
    height: 4px;
    background-color: rgb(189, 189, 189);
    border-radius: 100%;
  }
</style>