# Picker 选择器

选择器。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Picker",
  "usingComponents": {
    "wux-picker": "../../dist/picker/index",
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-button": "../../dist/button/index"
  }
}
```

### 示例

```html
<wux-picker
  visible="{{ visible }}"
  controlled
  options="{{ options }}"
  value="{{ value1 }}"
  cascade
  cols="3"
  data-index="1"
  bind:confirm="onConfirm"
  bind:valueChange="onValueChange"
  bind:visibleChange="onVisibleChange"
/>

<view class="page">
  <view class="page__hd">
    <view class="page__title">Picker</view>
    <view class="page__desc">选择器</view>
  </view>
  <view class="page__bd">
    <wux-cell-group>
      <wux-picker
        options="{{ options }}"
        value="{{ value1 }}"
        cascade
        cols="3"
        data-index="1"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell
          title="Multiple & cascader"
          is-link
          extra="{{ displayValue1 }}"
        ></wux-cell>
      </wux-picker>
      <wux-picker
        options="{{ seasons }}"
        value="{{ value2 }}"
        data-index="2"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell
          title="Multiple"
          is-link
          extra="{{ displayValue2 }}"
        ></wux-cell>
      </wux-picker>
      <wux-picker
        options="{{ options }}"
        value="{{ value3 }}"
        cascade
        cols="1"
        data-index="3"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell title="Single" is-link extra="{{ displayValue3 }}"></wux-cell>
      </wux-picker>
      <wux-picker
        options="{{ asyncOptions }}"
        value="{{ value4 }}"
        cascade
        cols="{{ asyncCols }}"
        loading="{{ loading }}"
        data-index="4"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell
          title="Multiple & async"
          is-link
          extra="{{ displayValue4 }}"
        ></wux-cell>
      </wux-picker>
    </wux-cell-group>
    <view class="button-sp-area">
      <wux-button block type="light" bind:click="onClick"
        >Button click - {{ displayValue1 }}</wux-button
      >
    </view>
  </view>
</view>
```

```js
import data from '../cascader/data'

const seasons = [
  ['王', '马', '蔡'],
  ['撕葱', '粑粑', '🏀'],
]

const provinceLite = [
  {
    value: 'bj',
    label: '北京市',
  },
  {
    value: 'zj',
    label: '浙江省',
  },
  {
    value: 'gd',
    label: '广东省',
    disabled: true,
  },
  {
    value: 'hn',
    label: '海南省',
  },
  {
    value: 'cq',
    label: '重庆市',
  },
  {
    value: 'sc',
    label: '四川省',
  },
]

Page({
  data: {
    value1: ['320000', '320800', '320831'],
    value2: [],
    value3: [],
    value4: [],
    asyncCols: 1,
    asyncOptions: provinceLite,
    displayValue1: '请选择',
    displayValue2: '请选择',
    displayValue3: '请选择',
    displayValue4: '请选择',
    options: [],
    seasons,
  },
  onLoad() {
    this.setData({ options: data })
  },
  setValue(values, key) {
    this.setData({
      [`value${key}`]: values.value,
      [`displayValue${key}`]: values.label,
    })
  },
  onConfirm(e) {
    const { index } = e.currentTarget.dataset
    this.setValue(e.detail, index)
    console.log(`onConfirm${index}`, e.detail)
  },
  onValueChange(e) {
    const { index } = e.currentTarget.dataset
    console.log(`onValueChange${index}`, e.detail)
    if (index === '4') {
      this.setValue(e.detail, index)
      this.setData({ loading: true })

      setTimeout(() => {
        const val = e.detail.value
        const d = [...this.data.asyncOptions]
        const value4 = [...val]
        let colNum = 1

        if (val[0] === 'zj') {
          d.forEach((i) => {
            if (i.value === 'zj') {
              colNum = 2
              if (!i.children) {
                i.children = [
                  {
                    value: 'zj-nb',
                    label: '宁波',
                  },
                  {
                    value: 'zj-hz',
                    label: '杭州',
                  },
                ]
                value4.push('zj-nb')
              } else if (val[1] === 'zj-hz') {
                i.children.forEach((j) => {
                  if (j.value === 'zj-hz') {
                    j.children = [
                      {
                        value: 'zj-hz-xh',
                        label: '西湖区',
                      },
                    ]
                    value4.push('zj-hz-xh')
                  }
                })
                colNum = 3
              }
            }
          })
        } else {
          colNum = 1
        }

        this.setData({
          asyncOptions: d,
          asyncCols: colNum,
          value4,
          loading: false,
        })
      }, 300)
    }
  },
  onVisibleChange(e) {
    this.setData({ visible: e.detail.visible })
  },
  onClick() {
    this.setData({ visible: true })
  },
})
```

## 视频演示

[MultiPickerView](./_media/picker.mp4 ':include :type=iframe width=375px height=667px')

## API

### Picker props

| 参数                 | 类型            | 描述                                                           | 默认值                                                   |
| -------------------- | --------------- | -------------------------------------------------------------- | -------------------------------------------------------- |
| prefixCls            | `string`        | 自定义类名前缀                                                 | wux-popup-picker                                         |
| pickerPrefixCls      | `string`        | picker 自定义类名前缀                                          | wux-picker-col                                           |
| multiPickerPrefixCls | `string`        | picker 自定义类名前缀(多列)                                    | wux-picker                                               |
| cascade              | `boolean`       | 是否级联                                                       | false                                                    |
| cols                 | `number`        | picker 列数                                                    | 3                                                        |
| value                | `array`         | 当前值                                                         | []                                                       |
| itemHeight           | `number`        | 每列子元素的高度                                               | 34                                                       |
| itemStyle            | `string,object` | 每列子元素的样式                                               | -                                                        |
| indicatorStyle       | `string,object` | 设置选择器中间选中框的样式                                     | -                                                        |
| indicatorClass       | `string`        | 设置选择器中间选中框的类名                                     | -                                                        |
| maskStyle            | `string,object` | 设置蒙层的样式                                                 | -                                                        |
| maskClass            | `string`        | 设置蒙层的类名                                                 | -                                                        |
| labelAlign           | `string`        | 设置文本对齐方式，可选值为 right、center、left                 | center                                                   |
| loading              | `boolean`       | 是否显示 loading 状态                                          | false                                                    |
| defaultFieldNames    | `object`        | 自定义 options 中的 value、label、children 字段                | { label: 'label', value: 'value', children: 'children' } |
| options              | `array`         | 可选项数据源                                                   | []                                                       |
| options[].value      | `string`        | 属性值                                                         | -                                                        |
| options[].label      | `string`        | 描述                                                           | -                                                        |
| options[].children   | `array`         | 子选项                                                         | []                                                       |
| options[].disabled   | `boolean`       | 是否禁用                                                       | false                                                    |
| toolbar              | `object`        | 工具栏配置项                                                   | {}                                                       |
| toolbar.title        | `string`        | 标题的文字                                                     | 请选择                                                   |
| toolbar.cancelText   | `string`        | 取消按钮的文字                                                 | 取消                                                     |
| toolbar.confirmText  | `string`        | 确定按钮的文字                                                 | 确定                                                     |
| trigger              | `string`        | 触发事件，当包裹的子元素为 `<wux-cell />` 时，点击控制组件显隐 | onClick                                                  |
| defaultVisible       | `boolean`       | 默认是否显隐，当 `controlled` 为 `false` 时才生效              | false                                                    |
| visible              | `boolean`       | 用于手动控制组件显隐，当 `controlled` 为 `true` 时才生效       | false                                                    |
| controlled           | `boolean`       | 是否受控 [说明文档](controlled.md)                             | false                                                    |
| disabled             | `boolean`       | 是否禁用                                                       | false                                                    |
| bind:change          | `function`      | 选择完成后的回调函数                                           | -                                                        |
| bind:confirm         | `function`      | 点击确定按钮时的回调函数                                       | -                                                        |
| bind:cancel          | `function`      | 点击取消按钮时的回调函数                                       | -                                                        |
| bind:visibleChange   | `function`      | 当显隐状态变化时的回调函数                                     | -                                                        |
| bind:valueChange     | `function`      | 每列数据选择变化后的回调函数                                   | -                                                        |

### Picker slot

| 名称 | 描述                         |
| ---- | ---------------------------- |
| -    | 建议包裹 `<wux-cell />` 组件 |
