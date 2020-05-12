<template>
  <div class="container">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar d-flex flex-row justify-content-around">
        <a href :class="{ 'is-active': isActive.bold() }" @click.prevent="commands.bold">
          <i class="fas fa-bold"></i>
        </a>

        <a href :class="{ 'is-active': isActive.italic() }" @click.prevent="commands.italic">
          <i class="fas fa-italic"></i>
        </a>

        <a href :class="{ 'is-active': isActive.strike() }" @click.prevent="commands.strike">
          <i class="fas fa-strikethrough"></i>
        </a>

        <a href :class="{ 'is-active': isActive.underline() }" @click.prevent="commands.underline">
          <i class="fas fa-underline"></i>
        </a>

        <a href :class="{ 'is-active': isActive.paragraph() }" @click.prevent="commands.paragraph">
          <i class="fas fa-paragraph"></i>
        </a>

        <a
          href
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click.prevent="commands.heading({ level: 1 })"
        >H1</a>

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

        <!-- <a
            :class="{ 'is-active': isActive.blockquote() }"
            @click.prevent="commands.blockquote"
          >blockquote
        </a>-->

        <a href @click.prevent="commands.horizontal_rule">––</a>

        <a href @click.prevent="commands.undo">
          <i class="fas fa-undo"></i>
        </a>

        <a href @click.prevent="commands.redo">
          <i class="fas fa-redo"></i>
        </a>

        <a href @click.prevent="showImagePrompt(commands.image)">
          <i class="fas fa-images"></i>
        </a>
      </div>
    </editor-menu-bar>

    <editor-content :editor="editor" />
    <div class="actions">
      <a href class="a" @click.prevent="clearContent">Clear Content</a>
      <a href class="a" @click.prevent="setContent">Set Content</a>
    </div>

    <div class="export">
      <h3>HTML</h3>
      <pre><code>{{ html }}</code></pre>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
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
  components: {
    EditorContent,
    EditorMenuBar
  },
  data () {
    return {
      editor: new Editor({
        autoFocus: true,
        extensions: [
          new Blockquote(),
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
                return 'Give me a name'
              }
              return 'Write something'
            }
          })
        ],
        // content: `
        //   <h2>
        //     Export HTML or JSON
        //   </h2>
        //   <p>
        //     You are able to export your data as <code>HTML</code> or <code>JSON</code>.
        //   </p>
        // `,
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
        }
      }),
      html: 'Update content to see changes'
    }
  },
  methods: {
    clearContent () {
      this.editor.clearContent(true)
      this.editor.focus()
    },
    setContent () {
      // you can pass a json document
      this.editor.setContent(
        {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'This is some inserted text. 👋'
                }
              ]
            }
          ]
        },
        true
      )

      // HTML string is also supported
      // this.editor.setContent('<p>This is some inserted text. 👋</p>')

      this.editor.focus()
    },
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  max-width: 30rem;
  margin: 0 auto 2rem auto;
}

.export {
  max-width: 30rem;
  margin: 0 auto 2rem auto;

  pre {
    padding: 1rem;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: bold;
    background: rgba(black, 0.05);
    color: rgba(black, 0.8);
  }

  code {
    display: block;
    white-space: pre-wrap;
  }
}
</style>
