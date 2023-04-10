# SearchBar 搜索栏

用于展现搜索栏，提醒用户输入相关内容进行搜索。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "SearchBar",
  "usingComponents": {
    "wux-search-bar": "../../dist/search-bar/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">SearchBar</view>
    <view class="page__desc">搜索栏</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Normal</view>
    <wux-search-bar clear maxlength="8" />
    <view class="sub-title">Focus</view>
    <wux-search-bar clear focus />
    <view class="sub-title">Show cancel button</view>
    <wux-search-bar
      clear
      show-cancel
      value="{{ value }}"
      controlled
      placeholder="Search"
      bind:change="onChange"
      bind:focus="onFocus"
      bind:blur="onBlur"
      bind:confirm="onConfirm"
      bind:clear="onClear"
      bind:cancel="onCancel"
    />
  </view>
</view>
```

```js
Page({
  data: {
    value: '',
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      value: e.detail.value,
    })
  },
  onFocus(e) {
    console.log('onFocus', e)
  },
  onBlur(e) {
    console.log('onBlur', e)
  },
  onConfirm(e) {
    console.log('onConfirm', e)
  },
  onClear(e) {
    console.log('onClear', e)
    this.setData({
      value: '',
    })
  },
  onCancel(e) {
    console.log('onCancel', e)
  },
})
```

## 视频演示

[SearchBar](./_media/search-bar.mp4 ':include :type=iframe width=375px height=667px')

## API

### SearchBar props

| 参数                   | 类型            | 描述                                                                                                  | 默认值            |
| ---------------------- | --------------- | ----------------------------------------------------------------------------------------------------- | ----------------- |
| prefixCls              | `string`        | 自定义类名前缀                                                                                        | wux-search-bar    |
| defaultValue           | `string`        | 输入框的默认值，当 `controlled` 为 `false` 时才生效                                                   | -                 |
| value                  | `string`        | 输入框的当前值，当 `controlled` 为 `true` 时才生效                                                    | -                 |
| controlled             | `boolean`       | 是否受控 [说明文档](controlled.md)                                                                    | false             |
| placeholder            | `string`        | 输入框为空时占位符                                                                                    | -                 |
| placeholder-style      | `string,object` | 指定 placeholder 的样式                                                                               | -                 |
| placeholder-class      | `string`        | 指定 placeholder 的样式类                                                                             | input-placeholder |
| disabled               | `boolean`       | 是否禁用                                                                                              | false             |
| maxlength              | `number`        | 最大输入长度，设置为 -1 的时候不限制最大长度                                                          | 140               |
| cursor-spacing         | `number`        | 指定光标与键盘的距离，单位 px                                                                         | 11                |
| focus                  | `boolean`       | 获取焦点                                                                                              | false             |
| confirm-type           | `string`        | 设置键盘右下角按钮的文字，仅在 type='text'时生效                                                      | search            |
| confirm-hold           | `boolean`       | 点击键盘右下角按钮时是否保持键盘不收起                                                                | false             |
| cursor                 | `number`        | 指定 focus 时的光标位置                                                                               | -1                |
| selection-start        | `number`        | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                                             | -1                |
| selection-end          | `number`        | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用                                           | -1                |
| adjust-position        | `boolean`       | 键盘弹起时，是否自动上推页面                                                                          | true              |
| clear                  | `boolean`       | 是否显示清除图标，当 `disabled` 为 `false` 时才生效                                                   | false             |
| cancelText             | `string`        | 自定义取消按钮的文字                                                                                  | 取消              |
| showCancel             | `boolean`       | 是否一直显示取消按钮                                                                                  | false             |
| onlyShowClearWhenFocus | `boolean`       | 如果 true，那么只有输入框聚焦时才会显示清除按钮；如果为 false，那么输入框失去焦点后依旧会显示清除按钮 | true              |
| bind:change            | `function`      | 键盘输入时触发                                                                                        | -                 |
| bind:focus             | `function`      | 输入框聚焦时触发                                                                                      | -                 |
| bind:blur              | `function`      | 输入框失去焦点时触发                                                                                  | -                 |
| bind:confirm           | `function`      | 点击完成按钮时触发                                                                                    | -                 |
| bind:clear             | `function`      | 点击清除图标时触发                                                                                    | -                 |
| bind:cancel            | `function`      | 点击取消按钮时触发                                                                                    | -                 |

### SearchBar externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
