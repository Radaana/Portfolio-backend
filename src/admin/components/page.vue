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

.icon {
  width: 40px;
  height: 40px;

  &:hover {
    // background-image: svg('../assets/img/icons/phone.svg', '#000');
  }
}

</style>
