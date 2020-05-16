<template>
  <div class="main-editor">
    <hr />
    <div class="row editor">
      <div class="col-1">
        <a @click="show=!show" class="help-button">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/soul-to-soul.appspot.com/o/Blog%2Fhelp_button-min.jpg?alt=media&token=c6cb4a35-3a28-4aeb-af5b-9048eac7dd59"
            alt="Help button"
            width="30px"
            height="30px"
          />
        </a>

        <editor-menu-bar
          :class="{ 'close': show }"
          :editor="editor"
          v-slot="{ commands, isActive }"
        >
          <div class="menubar help-button">
            <a href :class="{ 'is-active': isActive.bold() }" @click.prevent="commands.bold">
              <i class="fas fa-bold"></i>
            </a>

            <a href :class="{ 'is-active': isActive.italic() }" @click.prevent="commands.italic">
              <i class="fas fa-italic"></i>
            </a>

            <a href :class="{ 'is-active': isActive.strike() }" @click.prevent="commands.strike">
              <i class="fas fa-strikethrough"></i>
            </a>

            <a
              href
              :class="{ 'is-active': isActive.underline() }"
              @click.prevent="commands.underline"
            >
              <i class="fas fa-underline"></i>
            </a>

            <a
              href
              :class="{ 'is-active': isActive.paragraph() }"
              @click.prevent="commands.paragraph"
            >
              <i class="fas fa-paragraph"></i>
            </a>
            <a
              href
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click.prevent="commands.heading({ level: 2 })"
            >H2</a>

            <a
              href
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click.prevent="commands.heading({ level: 3 })"
            >H3</a>

            <a
              href
              :class="{ 'is-active': isActive.bullet_list() }"
              @click.prevent="commands.bullet_list"
            >
              <i class="fas fa-list-ul"></i>
            </a>

            <a
              href
              :class="{ 'is-active': isActive.ordered_list() }"
              @click.prevent="commands.ordered_list"
            >
              <i class="fas fa-list-ol"></i>
            </a>

            <a href @click.prevent="commands.horizontal_rule">––</a>

            <a href @click.prevent="commands.undo">
              <i class="fas fa-undo"></i>
            </a>

            <a href @click.prevent="commands.redo">
              <i class="fas fa-redo"></i>
            </a>
            <a href class="a" @click.prevent="clearContent">
              <i class="fas fa-broom"></i>
            </a>

            <a href @click.prevent="triggerUpload">
              <i class="fas fa-images"></i>
            </a>
            <input
              ref="fileInput"
              type="file"
              style="display: none;"
              accept="image/*"
              @change="onFileChange"
            />
          </div>
        </editor-menu-bar>
      </div>
      <div class="container col-11">
        <img :src="imageSrc" height="100" v-if="imageSrc" />
        <!-- <div>
          <b-form-tags
          placeholder="Добавить тег"
          input-id="tags-basic"
          v-model="value"
          class="mb-2 w-25"
          remove-on-delete
          :disabled="isThree"
          :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
          ></b-form-tags>
        </div> TAG FORM-->
        <editor-content class="pb-5 mb-5" :editor="editor" />
        <!-- <p>
          <code>{{ html }}</code>
        </p> -->
      </div>
    </div>
    <div class="save-publish">
      <div class="container d-flex flex-wrap justify-content-between">
        <button class="save mt-3 mb-3" @click.prevent="emitToParent('DRAFT')">Сохранить</button>
        <button class="publish mt-3 mb-3" @click.prevent="emitToParent('CREATED')">Публиковать</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import Doc from '../../utils/Doc'
import Title from '../../utils/Title'
import {
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
  Placeholder
} from 'tiptap-extensions'
export default {
  props: ['currentBlog'],
  components: {
    EditorContent,
    EditorMenuBar
  },
  data () {
    return {
      imageSrc: this.currentBlog.images[0].url,
      image: null,
      show: true,
      html: `<h1>${this.currentBlog.title}</h1>${this.currentBlog.content}`,
      value: [],
      editor: new Editor({
        autoFocus: true,
        extensions: [
          new Doc(),
          new Title(),
          new BulletList(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new Link(),
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Image(),
          new Placeholder({
            showOnlyCurrent: false,
            emptyNodeText: node => {
              if (node.type.name === 'title') {
                return 'Заголовок'
              }
              return 'Начните с прекрасного..'
            }
          })
        ],
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
        },
        content: `<h1>${this.currentBlog.title}</h1>${this.currentBlog.content}`
      })
    }
  },
  computed: {
    cutContent () {
      try {
        const blog = {
          title: '',
          short_content: '',
          content: ''
        }
        const slice1 = this.html.split('</h1>')
        const slice2 = slice1[0].split('<h1>')
        blog.title = slice2[1]
        blog.content = slice1[1]
        blog.short_content = blog.content.substring(0, 43)
        return blog
      } catch (err) {
        console.log(err)
      }
      const blog1 = {
        title: '',
        short_content: '',
        content: ''
      }
      return blog1
    },
    isThree () {
      if (this.value.length === 3) {
        return true
      }
      return false
    }
  },
  methods: {
    clearContent () {
      this.editor.clearContent(true)
      this.editor.focus()
      this.imageSrc = ''
      this.image = null
      this.value = []
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    },
    emitToParent (status) {
      const blogObj = {
        content: this.cutContent.content,
        shortContent: this.cutContent.short_content,
        status: status,
        title: this.cutContent.title,
        image: this.image
      }
      this.$emit('emitToSP', blogObj)
    }
  }
}
</script>
