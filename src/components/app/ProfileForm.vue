<template>
  <section id="user-profile" class="mt-5">
    <h3 class="mb-3">Настройка профиля</h3>
    <div class="profile-img middle mb-4">
      <b-img-lazy :src="imageSrc" width="75px" height="75px" alt="Profile img" ></b-img-lazy>
      <input
        ref="fileInput"
        type="file"
        style="display: none;"
        accept="image/*"
        @change="onFileChange"
      />
      <a href class="align" @click.prevent="triggerUpload">Поменять аватар</a>
      <a href class="align" :class="{ close: !no}" @click.prevent="emitToParent(1)">Сохранить изменение</a>
    </div>
    <div class="FIO">
      <span class="mb-2">ФИО</span>
      <div class="middle" :class="{close: yes}">
        <span style="color: #333333;">{{ fio }}</span>
        <a href class="align" @click.prevent="yes=!yes">(изменить)</a>
      </div>
      <div class="middle" :class="{close: !yes}">
        <input type="text" class="form-control mr-2" v-model="fio" />
        <button @click.prevent="emitToParent(2)">Сохранить</button>
      </div>
    </div>
    <hr />
    <div>
      <div class="mb-3">
        <span>Ваш E-mail</span>
        <div class="middle">
          <span style="color: #333333;">{{ user.username }}</span>
        </div>
      </div>
      <div class="d-flex flex-column">
        <span>Сброс пароля</span>
        <a href @click.prevent="emitToParent(3)">сбросить пароль</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['user'],
  data () {
    return {
      yes: false,
      no: false,
      imageSrc: this.user.imageUrl,
      fio: this.user.firstName + ' ' + this.user.lastName
    }
  },
  computed: {
    cutContent () {
      const fl = this.fio.split(' ')
      let cC = {
      }
      if (fl.length >= 2) {
        cC = {
          firstName: fl[0],
          lastName: fl[1]
        }
      } else {
        cC = {
          firstName: fl[0],
          lastName: 'Anonymus'
        }
      }
      return cC
    }
  },
  methods: {
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      this.no = true
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    },
    emitToParent (status) {
      const emitted = {
        status,
        image: this.image,
        firstName: this.cutContent.firstName,
        lastName: this.cutContent.lastName
      }
      this.$emit('emitToSP', emitted)
    }
  }
}
</script>
