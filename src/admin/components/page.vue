<template lang="pug">
  div
    h1 this is page {{pageId}}
    .icon

</template>
<script>

export default {
  props : {
    pageId: String
  }
};
</script>

<style lang="scss">

// @function svg($url, $color) {
//   $base-color: str-slice(inspect($color), 2);
//   @return unquote('url("' + $url + "?fill=%23" + $base-color +'")');
// }

.icon {
  // background: svg('../assets/img/icons/phone.svg', '#ccc') center center no-repeat;
  width: 40px;
  height: 40px;

  &:hover {
    // background-image: svg('../assets/img/icons/phone.svg', '#000');
  }
}

</style>
