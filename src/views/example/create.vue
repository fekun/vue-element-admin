<template>
  <div>
    <article-detail :is-edit="false" />
    <ClipBoard
      :code="code"
      :related-link="relatedLink"
    />
  </div>
</template>

<script>
import ArticleDetail from './components/ArticleDetail'
import ClipBoard from '@/components/ClipBoard'
export default {
  name: 'CreateForm',
  components: {
    ArticleDetail,
    ClipBoard
  },
  data () {
    return {
      relatedLink: [
        {
          title: './components/ArticleDetail',
          link: 'https://github.com/PanJiaChen/vue-element-admin/tree/master/src/views/example/components'
        }
      ],
      code: `
<template>
  <article-detail :is-edit="false" />
</template>

<script>
import ArticleDetail from './components/ArticleDetail'

export default {
  name: 'CreateForm',
  components: { ArticleDetail }
}
<//script>

      `
    }
  }
}
</script>
