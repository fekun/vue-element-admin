<template>
  <div>
    <hr>
    <h2>源代码:</h2>
    <div
      class="toggler"
      @click="toggle"
    >
      {{ collapsed?'展开👉👉👉' : '折叠👇👇👇' }}
    </div>
    <div :class="{collapsed}">
      <el-button
        type="primary"
        class="btn"
        :data-clipboard-text="code | ridVerbose"
        @click="copy"
      >
        复制
      </el-button>
      <pre>
          <code v-text="code" />
      </pre>
      <h3>相关组件/指令/api等链接：</h3>
      <a
        v-for="item in relatedLink"
        :key="item.link"
        target="_blank"
        :href="item.link"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>
<script>
import ClipboardJS from 'clipboard'
export default {
  name: 'ClipBoard',
  filters: {
    ridVerbose (src) {
      let reg = /<\/\//g
      return src.replace(reg, '</')
    }
  },
  props: {
    code: {
      type: String,
      required: true
    },
    relatedLink: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      collapsed: true
    }
  },
  mounted () {
    new ClipboardJS('.btn')
  },
  methods: {
    copy () {
      this.$message({
        message: '复制成功',
        type: 'success'
      })
    },
    toggle () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="scss" scoped>
pre {
  white-space: pre-wrap;
  background: #CCCCCC
}
a {
  text-decoration: underline;
  cursor: pointer;
  display: block;
  &:hover {
    background: pink
  }
}
.collapsed {
  display: none
}
.toggler {
  height: 30px;
  cursor: pointer;
  transition: all .4s;
  &:hover {
    transform: translateX(30px);
  }
}
</style>
