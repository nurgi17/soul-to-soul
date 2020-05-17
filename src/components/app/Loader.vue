<template>
    <div :class="{'loader1' : loading, 'loader': !loading}">
        <b-img-lazy src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Main%2Floader.svg?alt=media&token=6bcf3222-0750-4e49-b965-52a291ed2572" class="mt-5 mb-5 d-block mx-auto" alt="Loader" ></b-img-lazy>
    </div>
</template>

<script>
export default {
  props: ['loading']
}
</script>

<style scoped>
 .loader1 {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: black center center no-repeat;
    opacity: 0.7;
}
.loader1 img {
  -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;
        top: 40%;
        left: 46%;
        width: 9%;
        height: 9%;
        position: absolute;
}
</style>
