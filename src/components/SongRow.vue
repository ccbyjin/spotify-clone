<script setup>
import { ref, toRefs, onMounted } from 'vue'
import Heart from 'vue-material-design-icons/Heart.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';

let isHover = ref(false)
let isTrackTime = ref(null)

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

const props = defineProps({
  track: Object,
  artist: Object,
  index:Number,
})

const { track, artist, index } = toRefs(props)

onMounted(() => {
  // 導入音樂，track.value."PATH"，才能準確找到音樂位置
  const audio = new Audio(track.value.path);
  // 在音樂的 metadata 被成功加載後，計算音樂的持續時間
  audio.addEventListener('loadedmetadata', function () {
    // 格式化
    const duration = audio.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    // 格式化儲存在isTrackTime
    isTrackTime.value = minutes + ":" + seconds.toString().padStart(2, "0")
  })
})

</script>

<template>
  <li
    class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- index number + play or pause-btn -->
    <div class="flex items-center w-full py-1.5">
      <!-- hover → switch icon -->
      <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
        <!-- 未播放 -->
        <Play 
          v-if="!isPlaying" 
          fillColor="#FFFFFF" 
          :size="25"
          @click="useSong.playOrPauseThisSong(artist, track)"
        />
        <!-- 未播放且有當前曲目 -->
        <Play 
          v-else-if="!isPlaying && currentTrack.name !== track.name" 
          fillColor="#FFFFFF" 
          :size="25"
          @click="useSong.
          loadSong(artist, track)"
        />
        <!-- 已播放，暫停中 -->
        <Pause 
          v-else 
          fillColor="#FFFFFF" 
          :size="25"
          @click="useSong.playOrPauseSong()"
        />
      </div>
      <!-- else : show index number -->
      <div v-else class="w-[40px] text-white font-semibold ml-5">
        <span :class="{ 'text-green-500': currentTrack && currentTrack.name === track.name }">
          {{ index }}
        </span>
      </div>
      <!-- track name -->
      <div>
        <div 
          :class="{ 'text-green-500': currentTrack && currentTrack.name === track.name }"
          class="text-white font-semibold">
          {{ track.name }}
        </div>
        <div class="text-sm font-semibold text-gray-400">{{ track.author }}</div>
      </div>
    </div>
    <!-- isHover : heart -->
    <div class="flex items-center">
      <button type="button" v-if="isHover">
        <Heart fillColor="#1BD760" :size="22"/>
      </button>
      <div 
        v-if="isTrackTime"
        class="text-xs mx-5 text-gray-400"
      >
        {{ isTrackTime }}
      </div>
    </div>
  </li>
</template>