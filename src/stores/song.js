import { defineStore } from 'pinia'
import artist from 'src/artist.json'

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentArtist: null,
    currentTrack: null
  }),
  actions: {
    loadSong(artist, track) {
      this.currentArtist = artist
      this.currentTrack = track

      if (this.audio && this.audio.src) {
        this.audio.pause()
        this.isPlaying = false
        this.audio.src = ''
      }

      this.audio = new Audio()
      this.audio.src = track.path

      setTimeout(() => {
        this.isPlaying = true
        this.audio.play()
      }, 200)
    },

    // 切換歌曲播放暫停狀態
    playOrPauseSong() {
      if (this.audio.paused) {
        this.isPlaying = true
        this.audio.play()
      } else {
        this.isPlaying = false
        this.audio.pause()
      }
    },

    // 檢查當前歌曲狀態是否符合條件
    playOrPauseThisSong(artist, track) {
      // 若有其中任一條件不符
      if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
        // 載入正確的歌曲
        this.loadSong(artist, track)
        return
      }

      // 若都符合條件則播放歌曲
      this.playOrPauseSong()
    },

    // 上一首歌曲
    prevSong(currentTrack) {
      let track = artist.tracks[currentTrack.id - 2]
      this.loadSong(artist, track)
    },

    // 下一首歌
    nextSong(currentTrack) {
      if (currentTrack.id == artist.tracks.length) {
        let track = artist.tracks[0]
        this.loadSong(artist, track)
      } else {
        let track = artist.tracks[currentTrack.id]
        this.loadSong(artist, track)
      }
    },

    playFromFirst() {
      let track = artist.tracks[0]
      this.loadSong(artist, track)
    },

    resetState() {
      this.isPlaying = false
      this.audio = null
      this.currentArtist = null
      this.currentTrack = null
    }
  },
  persist: true
})
