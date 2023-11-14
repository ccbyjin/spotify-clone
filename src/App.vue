<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MusicPlayer from 'src/components/MusicPlayer.vue';
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import MenuItem from 'src/components/MenuItem.vue';

import { useSongStore } from 'src/stores/song.js'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => {
  isPlaying.value = false
})

let openMenu = ref(false)
</script>

<template>
  <div>
    <!-- main layout section -->
    <!-- Top bar background-->
    <div 
      class="
      w-[calc(100%-240px)] 
      h-[60px] 
      fixed 
      right-0 
      z-20 
      bg-[#101010] 
      bg-opacity-80 
      flex 
      items-center 
      justify-between"
    >
      <!-- left & right control button-->
      <div class="flex items-center ml-6">
        <!-- btn-left -->
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <!-- btn-right -->
        <button type="button" class="rounded-full bg-black p-[1px] ml-4 cursor-pointer">
          <ChevronRight fillColor="#FFFFFF" :size="30" />
        </button>
      </div>
      <!-- info + openMenu -->
      <button 
        @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <!-- user-img -->
          <img 
            class="rounded-full" 
            width="27"
            src="https://i.postimg.cc/59qk6Q59/IMG-8684.jpg"
          >
          <!-- user-name -->
          <div class="text-white text-[14px] font-semibold pl-1">Hannah Chen</div>
          <!-- btn control @click="openMenu"!!!-->
          <ChevronDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFF" :size="25" />
          <ChevronUp v-else @click="openMenu = false" fillColor="#FFFFFF" :size="25" />
        </div>
      </button>
      <!-- IF openMenu setting -->
      <span 
        v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
        </ul>
      </span>
    </div>

    <!-- left-side-nav -->
    <div
      id="sideNav"
      class="h-[100%] w-[240px] fixed p-6 z-50 bg-black"
    >
      <!-- spotify logo -->
      <RouterLink to="/">
        <img width="125" src="/images/icons/spotify-logo.png" alt="spotify-logo">
      </RouterLink>
      <!-- nav-control bar -->
      <div class="my-8"></div>
      <ul>
        <!-- home -->
        <RouterLink to="/">
          <MenuItem
            class="ml-[1px]" :iconSize="23" iconString="home" name="Home" pageUrl="/" />
        </RouterLink>
        <!-- search -->
        <RouterLink to="/search">
          <MenuItem
            class="ml-[1px]" :iconSize="24" iconString="search" name="Search" pageUrl="/search" />
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem
            class="ml-[2px]" :iconSize="23" iconString="library" name="Library" pageUrl="/library" />
        </RouterLink>
        <!-- useful -->
        <div class="py-4"></div>
        <MenuItem
          :iconSize="24" iconString="playlist" name="Create Playlist"   pageUrl="/playlist" />
        <MenuItem
          class="-ml-[1px]"
          :iconSize="27" iconString="liked" name="Liked Songs"   pageUrl="/liked" />
      </ul>

      <div class="border-b border-b-gray-700"></div>

      <!-- user's playlist -->
      <ul>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">Musical</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">KrOWN</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">K-Pop ON!</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">RNB X</li>
      </ul>
    </div>

    <!-- main content-->
    <div 
      class="
        fixed
        top-0
        right-0
        h-full
        w-[calc(100%-240px)]
        overflow-auto
        bg-gradient-to-b
        from-[#1c1c1c]
        to-black
      "
    >
      <div class="mt-[70px]"></div>
      <RouterView />
      <div class="mb-[100px]"></div>
    </div>
  </div>

  <MusicPlayer v-if="currentTrack" />
</template>