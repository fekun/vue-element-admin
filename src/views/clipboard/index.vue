<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="use clipboard  directly"
        name="directly"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px;max-width:100%;"
        />
        <el-button
          type="primary"
          icon="document"
          @click="handleCopy(inputData,$event)"
        >
          copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="use clipboard by v-directive"
        name="v-directive"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px;max-width:100%;"
        />
        <el-button
          v-clipboard:copy="inputData"
          v-clipboard:success="clipboardSuccess"
          type="primary"
          icon="document"
        >
          copy
        </el-button>
      </el-tab-pane>
    </el-tabs>
    <ClipBoard
      :code="code"
      :related-link="relatedLink"
    />
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import clipboard from '@/directive/clipboard/index.js' // use clipboard by v-directive
import ClipBoard from '@/components/ClipBoard'
export default {
  name: 'ClipboardDemo',
  directives: {
    clipboard
  },
  components: {
    ClipBoard
  },
  data () {
    return {
      activeName: 'directly',
      inputData: 'https://github.com/PanJiaChen/vue-element-admin',
      relatedLink: [
        {
          title: '@/utils/clipboard',
          link: 'https://github.com/PanJiaChen/vue-element-admin/tree/master/src/utils'
        },
        {
          title: '@/directive/clipboard/index.js',
          link: 'https://github.com/PanJiaChen/vue-element-admin/tree/master/src/directive/clipboard'
        }
      ],
      code: `
<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="use clipboard  directly"
        name="directly"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px;max-width:100%;"
        />
        <el-button
          type="primary"
          icon="document"
          @click="handleCopy(inputData,$event)"
        >
          copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="use clipboard by v-directive"
        name="v-directive"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px;max-width:100%;"
        />
        <el-button
          v-clipboard:copy="inputData"
          v-clipboard:success="clipboardSuccess"
          type="primary"
          icon="document"
        >
          copy
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly
import clipboard from '@/directive/clipboard/index.js' // use clipboard by v-directive

export default {
  name: 'ClipboardDemo',
  directives: {
    clipboard
  },
  data () {
    return {
      activeName: 'directly',
      inputData: 'https://github.com/PanJiaChen/vue-element-admin'
    }
  },
  methods: {
    handleCopy (text, event) {
      clip(text, event)
    },
    clipboardSuccess () {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  }
}
<//script>

      `
    }
  },
  methods: {
    handleCopy (text, event) {
      clip(text, event)
    },
    clipboardSuccess () {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>
