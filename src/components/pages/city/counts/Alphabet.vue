<template>
  <div class="alphabet">
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
       timer: null
    };
  },
  updated(){
  this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // console.log(this.touchStatus);
        // const startY = this.$refs['A'][0].offsetTop;
        // console.log(startY)
      //  const touchY=e.touches[0].clientY-79
      // const index = Math.floor((touchY-this.startY) / 20)
      //  console.log(index)
      // if (index >= 0 && index < this.letters.length) {
      //       this.$emit('change', this.letters[index])
      //     }
       if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
    this.touchStatus = false;
    },
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
      // console.log(e.target.innerText)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.list {
  display: flex;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  color: $bgcolor;
  flex-direction: column;
  justify-content: center;

  .item {
    line-height: 0.44rem;
    text-align: center;
  }
}
</style>
