# Footer 页脚

适用于页面底部信息描述。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Footer",
  "usingComponents": {
    "wux-footer": "../../dist/footer/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Footer</view>
    <view class="page__desc">页脚</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">基础页脚</view>
    <wux-footer theme="positive" label="WuxUI NB" />
    <view class="sub-title">带内容的页脚</view>
    <wux-footer
      theme="positive"
      content="@2019-2023 WuxUI.com All rights reserved"
    />
    <view class="sub-title">带链接的页脚</view>
    <wux-footer theme="positive" links="{{ links }}" />
    <view class="sub-title">通过点击事件跳转</view>
    <wux-footer
      theme="positive"
      links="{{ linksNoLinkData }}"
      bind:linkClick="onLinkClick"
    />
    <view class="sub-title">带标签的页脚</view>
    <wux-footer theme="positive" chips="{{ chipsNoLinkData }}" />
    <view class="sub-title">标签可点击</view>
    <wux-footer
      theme="positive"
      chips="{{ chips }}"
      bind:chipClick="onChipClick"
    />
    <view class="sub-title">组合使用</view>
    <wux-footer
      theme="positive"
      label="WuxUI NB"
      content="@2019-2023 WuxUI.com All rights reserved"
      links="{{ links }}"
      chips="{{ chips }}"
      bind:chipClick="onChipClick"
    />
  </view>
</view>
```

```js
const links = [
  {
    text: '首页',
    url: '/pages/index/index',
    openType: 'switchTab',
  },
  {
    text: '关于',
    url: '/pages/about/index',
    openType: 'switchTab',
  },
]

const chips = [
  {
    text: '组件化',
    type: 'link',
  },
  {
    text: '可复用',
    type: 'link',
  },
  {
    text: '易扩展',
    type: 'link',
  },
]

Page({
  data: {
    links,
    linksNoLinkData: links.map((v) => ({ text: v.text })),
    chips,
    chipsNoLinkData: chips.map((v) => ({ text: v.text })),
  },
  onLinkClick(e) {
    console.log('onLinkClick', e.detail)
    wx.showModal({
      title: `跳转到"${e.detail.item.text}"`,
      showCancel: !1,
    })
  },
  onChipClick(e) {
    console.log('onChipClick', e.detail)
    wx.showModal({
      title: `"${e.detail.item.text}"被点击了`,
      showCancel: !1,
    })
  },
})
```

## 视频演示

[Footer](./_media/footer.mp4 ':include :type=iframe width=375px height=667px')

## API

### Footer props

| 参数           | 类型       | 描述                                                                                        | 默认值     |
| -------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| prefixCls      | `string`   | 自定义类名前缀                                                                              | wux-footer |
| theme          | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced   |
| label          | `string`   | 带分割线的顶部内容                                                                          | -          |
| content        | `string`   | 普通的内容部分                                                                              | -          |
| links          | `array`    | 链接内容                                                                                    | -          |
| chips          | `array`    | 底部标签                                                                                    | -          |
| bind:linkClick | `function` | 点击链接触发事件                                                                            | -          |
| bind:chipClick | `function` | 点击底部标签触发，仅在标签 type 为 link 生效                                                | -          |

### Footer externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
