# Ellipsis 文本省略

展示空间不足时，隐去部分内容并用“...”替代。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Ellipsis",
  "usingComponents": {
    "wux-ellipsis": "../../dist/ellipsis/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Ellipsis</view>
    <view class="page__desc">文本省略</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">尾部省略</view>
    <wux-ellipsis
      direction="end"
      content="{{ content }}"
      bind:click="onContentClick"
    />
    <view class="sub-title">头部省略</view>
    <wux-ellipsis direction="start" content="{{ content }}" />
    <view class="sub-title">中间省略</view>
    <wux-ellipsis direction="middle" content="{{ content }}" />
    <view class="sub-title">多行省略</view>
    <wux-ellipsis rows="3" content="{{ content }}" />
    <view class="sub-title">展开收起</view>
    <wux-ellipsis
      expandText="展开"
      collapseText="收起"
      content="{{ content }}"
    />
    <view class="sub-title">仅展开</view>
    <wux-ellipsis direction="end" expandText="展开" content="{{ content }}" />
    <wux-ellipsis direction="start" expandText="展开" content="{{ content }}" />
    <wux-ellipsis
      direction="middle"
      expandText="展开"
      content="{{ content }}"
    />
    <view class="sub-title">默认展开</view>
    <wux-ellipsis
      defaultExpanded
      expandText="展开"
      collapseText="收起"
      content="{{ content }}"
    />
    <view class="sub-title">emoji</view>
    <wux-ellipsis
      expandText="展开"
      collapseText="收起"
      content="🐮🐮🐮🐶🐶🐶🐱🐱🐱🐯🐯🐯🐻🐻🐻🐮🐮🐮🐶🐶🐶🐱🐱🐱🐯🐯🐯🐻🐻🐻"
    />
    <view class="sub-title">数字或英文</view>
    <wux-ellipsis
      wux-class="word-break"
      expandText="展开"
      collapseText="收起"
      content="6666666666666666666666666666666666666666666666666666"
    />
    <wux-ellipsis
      wux-class="word-break"
      expandText="展开"
      collapseText="收起"
      content="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
    />
    <view class="page__desc"
      >当文本内容中包含大量数字或英文时，文本内容无法省略；此时，如果需要让文本省略生效，可以手动添加
      word-break 样式（如 word-break: break-word），从而实现自动省略。</view
    >
  </view>
</view>
```

```js
Page({
  data: {
    content:
      'Wux Weapp 是一套组件化、可复用、易扩展的微信小程序 UI 组件库。UI 样式可配置，拓展灵活，轻松适应不同的设计风格；80+ 丰富的组件，能够满足移动端开发的基本需求。',
  },
  onContentClick(e) {
    console.log('onContentClick', e)
  },
})
```

## 视频演示

[Ellipsis](./_media/ellipsis.mp4 ':include :type=iframe width=375px height=667px')

## API

### Ellipsis props

| 参数            | 类型       | 描述                                  | 默认值       |
| --------------- | ---------- | ------------------------------------- | ------------ |
| prefixCls       | `string`   | 自定义类名前缀                        | wux-ellipsis |
| content         | `string`   | 文本内容                              | -            |
| direction       | `string`   | 省略位置，可选值为 start、end、middle | end          |
| defaultExpanded | `boolean`  | 默认展开                              | false        |
| expandText      | `string`   | 展开操作的文案                        | -            |
| collapseText    | `string`   | 收起操作的文案                        | -            |
| rows            | `number`   | 展示几行                              | 1            |
| bind:click      | `function` | 点击事件                              | -            |

### Ellipsis externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
