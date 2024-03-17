# PopupSelect 下拉框

用于弹出一个下拉菜单给用户选择操作。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "PopupSelect",
  "usingComponents": {
    "wux-popup-select": "../../dist/popup-select/index",
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-button": "../../dist/button/index"
  }
}
```

### 示例

```html
<wux-popup-select
  visible="{{ visible }}"
  controlled
  value="{{ value1 }}"
  options="{{ options1 }}"
  data-index="1"
  bind:confirm="onConfirm"
  bind:valueChange="onValueChange"
  bind:visibleChange="onVisibleChange"
/>

<view class="page">
  <view class="page__hd">
    <view class="page__title">PopupSelect</view>
    <view class="page__desc">下拉框</view>
  </view>
  <view class="page__bd">
    <wux-cell-group>
      <wux-popup-select
        value="{{ value1 }}"
        options="{{ options1 }}"
        data-index="1"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell title="Single" is-link extra="{{ displayValue1 }}"></wux-cell>
      </wux-popup-select>
      <wux-popup-select
        value="{{ value2 }}"
        options="{{ options2 }}"
        data-index="2"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell
          title="Multiple"
          is-link
          extra="{{ displayValue2 }}"
        ></wux-cell>
      </wux-popup-select>
      <wux-popup-select
        value="{{ value3 }}"
        options="{{ options3 }}"
        multiple
        max="3"
        data-index="3"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell
          title="Multiple & max = 3"
          is-link
          extra="{{ displayValue3 }}"
        ></wux-cell>
      </wux-popup-select>
      <wux-popup-select
        value="{{ value4 }}"
        options="{{ options4 }}"
        data-index="4"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
      >
        <wux-cell title="Group" is-link extra="{{ displayValue4 }}"></wux-cell>
      </wux-popup-select>
      <wux-popup-select
        value="{{ value5 }}"
        options="{{ options5 }}"
        notFoundContent="{{ null }}"
        data-index="5"
        bind:confirm="onConfirm"
        bind:valueChange="onValueChange"
        bind:visibleChange="onVisibleChange5"
      >
        <wux-cell title="Async" is-link extra="{{ displayValue5 }}"></wux-cell>
        <wux-spin slot="notFoundContent" spinColor="dark" />
      </wux-popup-select>
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
Page({
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    displayValue1: '请选择',
    displayValue2: '请选择',
    displayValue3: '请选择',
    displayValue4: '请选择',
    displayValue5: '请选择',
    options1: ['法官', '医生', '猎人', '学生', '记者', '其他'],
    options2: [
      {
        title: 'iPhone 3GS',
        value: '001',
      },
      {
        title: 'iPhone 5',
        value: '002',
      },
      {
        title: 'iPhone 5S',
        value: '003',
        disabled: true,
      },
      {
        title: 'iPhone 6',
        value: '004',
      },
      {
        title: 'iPhone 6S',
        value: '005',
      },
      {
        title: 'iPhone 6P',
        value: '006',
        disabled: true,
      },
      {
        title: 'iPhone 6SP',
        value: '007',
      },
      {
        title: 'iPhone SE',
        value: '008',
      },
      {
        title: 'iPhone 7',
        value: '009',
      },
    ],
    options3: [
      {
        title: '画画',
        value: '1',
      },
      {
        title: '打球',
        value: '2',
      },
      {
        title: '唱歌',
        value: '3',
      },
      {
        title: '游泳',
        value: '4',
      },
      {
        title: '健身',
        value: '5',
      },
      {
        title: '睡觉',
        value: '6',
      },
    ],
    options4: [
      {
        title: '富二代',
        options: [
          { title: '王撕葱', value: 'wang' },
          { title: '秦愤', value: 'qin' },
        ],
      },
      {
        title: '练习生',
        options: [
          { title: '蔡🏀', value: 'cai' },
          { title: '赵四', value: 'zhao', disabled: true },
        ],
      },
    ],
    options5: [],
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
  },
  onVisibleChange(e) {
    this.setData({ visible: e.detail.visible })
  },
  onClick() {
    this.setData({ visible: true })
  },
  onVisibleChange5(e) {
    if (e.detail.visible && !this.data.options5.length) {
      setTimeout(() => {
        this.setData({
          options5: this.data.options1,
          value5: this.data.options1[1],
        })
      }, 3000)
    }
  },
})
```

## 视频演示

[PopupSelect](./_media/popup-select.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数                | 类型                    | 描述                                                           | 默认值                                    |
| ------------------- | ----------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| prefixCls           | `string`                | 自定义类名前缀                                                 | wux-select                                |
| value               | `string, array`         | 指定当前选中的条目                                             | -                                         |
| multiple            | `boolean`               | 是否支持多选                                                   | false                                     |
| max                 | `number`                | 最多选择几项，设置为 -1 的时候不限制选择                       | -1                                        |
| notFoundContent     | `string,object,boolean` | 当下拉列表为空时显示的内容                                     | { icon: '', title: '', text: '暂无数据' } |
| options             | `array`                 | 下拉列表                                                       | []                                        |
| options[].value     | `string`                | 默认根据此属性值进行筛选值                                     | -                                         |
| options[].title     | `string`                | 选项上的 title 提示                                            | -                                         |
| options[].disabled  | `boolean`               | 是否禁用                                                       | -                                         |
| toolbar             | `object`                | 工具栏配置项                                                   | {}                                        |
| toolbar.title       | `string`                | 标题的文字                                                     | 请选择                                    |
| toolbar.cancelText  | `string`                | 取消按钮的文字                                                 | 取消                                      |
| toolbar.confirmText | `string`                | 确定按钮的文字                                                 | 确定                                      |
| trigger             | `string`                | 触发事件，当包裹的子元素为 `<wux-cell />` 时，点击控制组件显隐 | onClick                                   |
| defaultVisible      | `boolean`               | 默认是否显隐，当 `controlled` 为 `false` 时才生效              | false                                     |
| visible             | `boolean`               | 用于手动控制组件显隐，当 `controlled` 为 `true` 时才生效       | false                                     |
| controlled          | `boolean`               | 是否受控 [说明文档](controlled.md)                             | false                                     |
| disabled            | `boolean`               | 是否禁用                                                       | false                                     |
| virtualized            | `boolean`               | 是否虚拟列表                    | false                                     |
| bind:change         | `function`              | 选择完成后的回调函数                                           | -                                         |
| bind:confirm        | `function`              | 点击确定按钮时的回调函数                                       | -                                         |
| bind:cancel         | `function`              | 点击取消按钮时的回调函数                                       | -                                         |
| bind:visibleChange  | `function`              | 当显隐状态变化时的回调函数                                     | -                                         |
| bind:valueChange    | `function`              | 每列数据选择变化后的回调函数                                   | -                                         |

### OptGroup props

| 参数    | 类型     | 描述     | 默认值 |
| ------- | -------- | -------- | ------ |
| title   | `string` | 组名     | -      |
| options | `string` | 下拉列表 | []     |

### PopupSelect slot

| 名称            | 描述                         |
| --------------- | ---------------------------- |
| -               | 建议包裹 `<wux-cell />` 组件 |
| notFoundContent | 当下拉列表为空时显示的内容   |

> 下拉列表：options 参数请参考 [Radio](radio.md) 或 [Checkbox](checkbox.md)。
