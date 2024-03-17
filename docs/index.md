# Index 索引选择器

用于通讯录、城市选择的索引选择器。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Index",
  "usingComponents": {
    "wux-index": "../../dist/index/index",
    "wux-index-item": "../../dist/index-item/index"
  }
}
```

### 示例

!> 注意：示例中组件为了撑满屏，设置高度为 `100%`，继承了父级元素高度，所以需要设置 `Page{ height: 100% }`，否则会导致组件右侧导航点击无效。

```html
<wux-index height="100%" bind:change="onChange">
  <wux-index-item wx:for="{{ alphabet }}" wx:key="" name="{{ item.initial }}">
    <view
      class="demo-item"
      wx:for="{{ item.cells }}"
      wx:for-item="cell"
      wx:key=""
      >{{ cell }}</view
    >
  </wux-index-item>
</wux-index>
```

```js
const NAMES = [
  'Aaron',
  'Alden',
  'Austin',
  'Baldwin',
  'Braden',
  'Carl',
  'Chandler',
  'Clyde',
  'David',
  'Edgar',
  'Elton',
  'Floyd',
  'Freeman',
  'Gavin',
  'Hector',
  'Henry',
  'Ian',
  'Jason',
  'Joshua',
  'Kane',
  'Lambert',
  'Matthew',
  'Morgan',
  'Neville',
  'Oliver',
  'Oscar',
  'Perry',
  'Quinn',
  'Ramsey',
  'Scott',
  'Seth',
  'Spencer',
  'Timothy',
  'Todd',
  'Trevor',
  'Udolf',
  'Victor',
  'Vincent',
  'Walton',
  'Willis',
  'Xavier',
  'Yvonne',
  'Zack',
  'Zane',
]

Page({
  data: {
    alphabet: [],
  },
  onLoad() {
    const alphabet = []

    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((initial) => {
      const cells = NAMES.filter((name) => name.charAt(0) === initial)
      alphabet.push({
        initial,
        cells,
      })
    })

    this.setData({
      alphabet,
    })
  },
  onChange(e) {
    console.log('onChange', e.detail)
  },
})
```

## 视频演示

[Index](./_media/index.mp4 ':include :type=iframe width=375px height=667px')

## API

### Index props

| 参数            | 类型                       | 描述           | 默认值    |
| --------------- | -------------------------- | -------------- | --------- |
| prefixCls       | `string`                   | 自定义类名前缀 | wux-index |
| height          | <code>string,number</code> | 设置容器的高度 | 300       |
| showIndicator   | `boolean`                  | 是否显示提示框 | true      |
| indicatorPosition   | `string`                  | 提示框的位置，可选值为 right、center | center      |
| parentOffsetTop | `number`                   | 定位偏移量     | 0         |

### Index externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### indexItem props

| 参数      | 类型     | 描述           | 默认值         |
| --------- | -------- | -------------- | -------------- |
| prefixCls | `string` | 自定义类名前缀 | wux-index-item |
| name      | `string` | 名称           | -              |

### IndexItem slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### IndexItem externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
