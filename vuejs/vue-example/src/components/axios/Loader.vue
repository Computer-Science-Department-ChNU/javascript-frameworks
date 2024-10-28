<template>
  <div class="lds-roller">
    <div v-for="n in 8" :key="n"></div>
  </div>
</template>

<style lang="scss" scoped>
.lds-roller {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;

  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #79c56e;
      margin: -4px 0 0 -4px;
    }
  }

  @for $i from 1 through 8 {
    div:nth-child(#{$i}) {
      animation-delay: -0.036s * $i;

      &::after {
        @if $i == 1 {
          top: 63px;
          left: 63px;
        } @else if $i == 2 {
          top: 68px;
          left: 56px;
        } @else if $i == 3 {
          top: 71px;
          left: 48px;
        } @else if $i == 4 {
          top: 72px;
          left: 40px;
        } @else if $i == 5 {
          top: 71px;
          left: 32px;
        } @else if $i == 6 {
          top: 68px;
          left: 24px;
        } @else if $i == 7 {
          top: 63px;
          left: 17px;
        } @else if $i == 8 {
          top: 56px;
          left: 12px;
        }
      }
    }
  }
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>