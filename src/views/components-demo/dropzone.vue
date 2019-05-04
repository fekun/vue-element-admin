<template>
  <div class="components-container">
    <aside>
      Based on
      <a
        class="link-type"
        href="https://github.com/rowanwins/vue-dropzone"
      >
        dropzone
      </a>.
      {{ $t('components.dropzoneTips') }}
    </aside>
    <div class="editor-container">
      <dropzone
        id="myVueDropzone"
        url="https://httpbin.org/post"
        @dropzone-removedFile="dropzoneR"
        @dropzone-success="dropzoneS"
      />
    </div>
    <div>
      可在控制台看到文件信息，需要传到后端，用
      <a
        href="https://devdocs.io/dom/formdata/append"
        target="_blank"
        class="link-type"
      >
        formData
      </a>
      处理即可
    </div>
    <ClipBoard
      :code="code"
      :related-link="relatedLink"
    />
  </div>
</template>

<script>
import Dropzone from '@/components/Dropzone'
import ClipBoard from '@/components/ClipBoard'
export default {
  name: 'DropzoneDemo',
  components: {
    Dropzone,
    ClipBoard
  },
  data () {
    return {
      relatedLink: [
        {
          title: '@/components/Dropzone',
          link: 'https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components'
        }
      ],
      code: `
<template>
  <div class="components-container">
    <aside>
      Based on
      <a
        class="link-type"
        href="https://github.com/rowanwins/vue-dropzone"
      >
        dropzone
      </a>.
      {{ $t('components.dropzoneTips') }}
    </aside>
    <div class="editor-container">
      <dropzone
        id="myVueDropzone"
        url="https://httpbin.org/post"
        @dropzone-removedFile="dropzoneR"
        @dropzone-success="dropzoneS"
      />
    </div>
  </div>
</template>

<script>
import Dropzone from '@/components/Dropzone'

export default {
  name: 'DropzoneDemo',
  components: { Dropzone },
  methods: {
    dropzoneS (file) {
      console.log(file)
      this.$message({ message: 'Upload success', type: 'success' })
    },
    dropzoneR (file) {
      console.log(file)
      this.$message({ message: 'Delete success', type: 'success' })
    }
  }
}
<//script>

      `
    }
  },
  methods: {
    dropzoneS (file) {
      console.log(file)
      this.$message({ message: 'Upload success', type: 'success' })
    },
    dropzoneR (file) {
      console.log(file)
      this.$message({ message: 'Delete success', type: 'success' })
    }
  }
}
</script>
