# Select 下拉框

用于弹出一个下拉菜单给用户选择操作。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Select",
  "usingComponents": {
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-select": "../../dist/select/index"
  }
}
```

### 示例

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-select` 或其他，之后在 page.js 中调用 `$wuxSelect(id)` 获取匹配到的第一个组件实例对象。

```html
<wux-select id="wux-select1" />
<wux-select id="wux-select2" />
<wux-select id="wux-select3" />

<view class="page">
  <view class="page__hd">
    <view class="page__title">Select</view>
    <view class="page__desc">下拉框</view>
  </view>
  <view class="page__bd">
    <wux-cell-group title="Select">
      <wux-cell
        title="职业"
        extra="{{ title1 }}"
        bind:click="onClick1"
      ></wux-cell>
      <wux-cell
        title="手机"
        extra="{{ title2 }}"
        bind:click="onClick2"
      ></wux-cell>
      <wux-cell
        title="爱好"
        extra="{{ title3 }}"
        bind:click="onClick3"
      ></wux-cell>
    </wux-cell-group>
  </view>
</view>
```

```js
import { $wuxSelect } from '../../dist/index'

Page({
  data: {
    value1: '',
    title1: '',
    value2: '',
    title2: '',
    value3: '',
    title3: '',
  },
  onClick1() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: ['法官', '医生', '猎人', '学生', '记者', '其他'],
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            value1: value,
            title1: options[index],
          })
        }
      },
    })
  },
  onClick2() {
    $wuxSelect('#wux-select2').open({
      value: this.data.value2,
      options: [
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
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        if (index !== -1) {
          this.setData({
            value2: value,
            title2: options[index].title,
          })
        }
      },
    })
  },
  onClick3() {
    $wuxSelect('#wux-select3').open({
      value: this.data.value3,
      multiple: true,
      toolbar: {
        title: 'Please choose',
        confirmText: 'ok',
      },
      options: [
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
      onChange: (value, index, options) => {
        console.log('onChange', value, index, options)
        this.setData({
          value3: value,
          title3: index.map((n) => options[n].title),
        })
      },
      onConfirm: (value, index, options) => {
        console.log('onConfirm', value, index, options)
        this.setData({
          value3: value,
          title3: index.map((n) => options[n].title),
        })
      },
    })
  },
})
```

## 视频演示

[Select](./_media/select.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数                        | 类型                       | 描述                                     | 默认值     |
| --------------------------- | -------------------------- | ---------------------------------------- | ---------- |
| options                     | `object`                   | 配置项                                   | -          |
| options.prefixCls           | `string`                   | 自定义类名前缀                           | wux-select |
| options.value               | `any`                      | 指定当前选中的条目                       | -          |
| options.options             | `array`                    | 下拉列表                                 | []         |
| options.multiple            | `boolean`                  | 是否支持多选                             | false      |
| options.max                 | <code>number,stirng</code> | 最多选择几项，设置为 -1 的时候不限制选择 | -1         |
| options.toolbar             | `any`                      | 工具栏配置项                             | {}         |
| options.toolbar.title       | `string`                   | 标题的文字                               | 请选择     |
| options.toolbar.cancelText  | `string`                   | 取消按钮的文字                           | 取消       |
| options.toolbar.confirmText | `string`                   | 确定按钮的文字                           | 确定       |
| options.onChange            | `function`                 | 选择完成后的回调函数                     | -          |
| options.onConfirm           | `function`                 | 点击确定按钮时的回调函数                 | -          |
| options.onCancel            | `function`                 | 点击取消按钮时的回调函数                 | -          |

> 下拉列表：options 参数请参考 [Radio](radio.md) 或 [Checkbox](checkbox.md)。
