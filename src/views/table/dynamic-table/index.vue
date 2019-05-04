<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      {{ $t('table.dynamicTips1') }}
    </div>
    <fixed-thead />

    <div style="margin:30px 0 5px 20px">
      {{ $t('table.dynamicTips2') }}
    </div>
    <unfixed-thead />
    <ClipBoard
      :code="code"
      :related-link="relatedLink"
    />
  </div>
</template>

<script>
import FixedThead from './components/FixedThead'
import UnfixedThead from './components/UnfixedThead'
import ClipBoard from '@/components/ClipBoard'
export default {
  name: 'DynamicTable',
  components: {
    FixedThead,
    UnfixedThead,
    ClipBoard
  },
  data () {
    return {
      relatedLink: [
        {
          title: './components/FixedThead && ./components/UnfixedThead',
          link: 'https://github.com/PanJiaChen/vue-element-admin/tree/master/src/views/table/dynamic-table/components'
        }
      ],
      code: `
<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      {{ $t('table.dynamicTips1') }}
    </div>
    <fixed-thead />

    <div style="margin:30px 0 5px 20px">
      {{ $t('table.dynamicTips2') }}
    </div>
    <unfixed-thead />
  </div>
</template>

<script>
import FixedThead from './components/FixedThead'
import UnfixedThead from './components/UnfixedThead'

export default {
  name: 'DynamicTable',
  components: { FixedThead, UnfixedThead }
}
<//script>


      `
    }
  }
}
</script>
