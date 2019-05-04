<template>
  <div class="components-container">
    <el-drag-select
      v-model="value"
      style="width:500px;"
      multiple
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-drag-select>

    <div style="margin-top:30px;">
      <el-tag
        v-for="item of value"
        :key="item"
        style="margin-right:15px;"
      >
        {{ item }}
      </el-tag>
    </div>
    <ClipBoard
      :code="code"
      :related-link="relatedLink"
    />
  </div>
</template>

<script>
import ElDragSelect from '@/components/DragSelect' // base on element-ui
import ClipBoard from '@/components/ClipBoard'
export default {
  name: 'DragSelectDemo',
  components: {
    ElDragSelect,
    ClipBoard
  },
  data () {
    return {
      value: ['Apple', 'Banana', 'Orange'],
      options: [{
        value: 'Apple',
        label: 'Apple'
      }, {
        value: 'Banana',
        label: 'Banana'
      }, {
        value: 'Orange',
        label: 'Orange'
      }, {
        value: 'Pear',
        label: 'Pear'
      }, {
        value: 'Strawberry',
        label: 'Strawberry'
      }],
      relatedLink: [
        {
          title: '@/components/DragSelect',
          link: 'https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components/DragSelect'
        }
      ],
      code: `
<template>
  <div class="components-container">
    <el-drag-select
      v-model="value"
      style="width:500px;"
      multiple
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-drag-select>

    <div style="margin-top:30px;">
      <el-tag
        v-for="item of value"
        :key="item"
        style="margin-right:15px;"
      >
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import ElDragSelect from '@/components/DragSelect' // base on element-ui

export default {
  name: 'DragSelectDemo',
  components: { ElDragSelect },
  data () {
    return {
      value: ['Apple', 'Banana', 'Orange'],
      options: [{
        value: 'Apple',
        label: 'Apple'
      }, {
        value: 'Banana',
        label: 'Banana'
      }, {
        value: 'Orange',
        label: 'Orange'
      }, {
        value: 'Pear',
        label: 'Pear'
      }, {
        value: 'Strawberry',
        label: 'Strawberry'
      }]
    }
  }
}
<//script>

      `
    }
  }
}
</script>
