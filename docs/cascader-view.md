# CascaderView 级联选择视图

CascaderView 是 [Cascader](cascader.md) 的内容区域。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "CascaderView",
  "usingComponents": {
    "wux-cascader-view": "../../dist/cascader-view/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">CascaderView</view>
    <view class="page__desc">级联选择视图</view>
  </view>
  <view class="page__bd">
    <view class="sub-title">Default</view>
    <wux-cascader-view options="{{ options1 }}" bind:change="onChange1" />
    <view class="sub-title">Full</view>
    <wux-cascader-view full options="{{ options1 }}" bind:change="onChange1" />
    <view class="sub-title">Custom Height</view>
    <wux-cascader-view
      height="540rpx"
      options="{{ options1 }}"
      bind:change="onChange1"
    />
    <view class="sub-title">Skip Animation</view>
    <wux-cascader-view
      skipAnimation
      options="{{ options1 }}"
      bind:change="onChange1"
    />
    <view class="sub-title">Controlled</view>
    <wux-cascader-view
      controlled
      value="{{ value2 }}"
      options="{{ options2 }}"
      bind:change="onChange2"
      bind:tabsChange="onTabsChange2"
    />
    <view class="sub-title">Async</view>
    <wux-cascader-view
      controlled
      value="{{ value3 }}"
      options="{{ options3 }}"
      bind:change="onChange3"
      bind:load="onLoadOptions"
    />
  </view>
</view>
```

```js
Page({
  data: {
    options1: data,
    value2: ['浙江', '温州', '鹿城区'],
    options2: data,
    value3: [],
    options3: [
      {
        value: 'beijing',
        label: '北京',
        isLeaf: false,
      },
      {
        value: 'hangzhou',
        label: '杭州',
        isLeaf: false,
      },
    ],
  },
  onChange1(e) {
    console.log('onChange1', e.detail)
  },
  onChange2(e) {
    this.setData({
      value2: e.detail.value,
    })
    console.log('onChange2', e.detail)
  },
  onTabsChange2(e) {
    console.log('onTabsChange2', e.detail)
  },
  onChange3(e) {
    this.setData({
      value3: e.detail.value,
    })
    console.log('onChange3', e.detail)
  },
  onLoadOptions(e) {
    console.log('onLoadOptions', e.detail)
    const { value } = e.detail
    const options3 = [...this.data.options3]

    wx.showLoading({ mask: true })

    setTimeout(() => {
      if (value[value.length - 1] === 'beijing') {
        options3.forEach((n) => {
          if (n.value === 'beijing') {
            n.children = [
              {
                value: 'baidu',
                label: '百度',
              },
              {
                value: 'sina',
                label: '新浪',
              },
            ]
          }
        })
      } else if (value[value.length - 1] === 'hangzhou') {
        options3.forEach((n) => {
          if (n.value === 'hangzhou') {
            n.children = [
              {
                value: 'ali',
                label: '阿里巴巴',
              },
              {
                value: '163',
                label: '网易',
              },
            ]
          }
        })
      }

      wx.hideLoading()

      this.setData({ value3: value, options3 })
    }, 1000)
  },
})
```

## 视频演示

[CascaderView](./_media/cascader-view.mp4 ':include :type=iframe width=375px height=667px')

## API

### CascaderView props

| 参数         | 类型      | 描述                                        | 默认值            |
| ------------ | --------- | ------------------------------------------- | ----------------- |
| prefixCls    | `string`  | 自定义类名前缀                              | wux-cascader-view |
| defaultValue | `array`  | 默认选中项，当 `controlled` 为 `false` 时才生效 | -                 |
| value        | `array`  | 当前选中项，当 `controlled` 为 `true` 时才生效  | -                 |
| controlled   | `boolean` | 是否受控 [说明文档](controlled.md)          | false             |
| options        | `array`  | 配置每一列的选项  | []                 |
| options[].value    | `string`   | 属性值                                          | -                                                        |
| options[].label    | `string`   | 描述                                            | -                                                        |
| options[].children | `array`    | 子选项                                          | []                                                       |
| options[].disabled | `boolean`  | 是否禁用                                        | false                                                    |
| full        | `boolean`  | 是否通栏  | false                 |
| placeholder        | `string`  | 未选中时的提示文案  | 请选择                 |
| height        | `string,number`  | 滚动区域节点高度  | auto                 |
| defaultFieldNames        | `object`  | 自定义 options 中的 value、label、children、disabled 字段 | { label: 'label', value: 'value', children: 'children', disabled: 'disabled' }  |
| skipAnimation        | `boolean`  | 是否跳过动画  | false                 |
| bind:change        | `function` | 选择完成后的回调函数                            | -                                                        |
| bind:load          | `function` | 动态加载选项的回调函数                          | -                                                        |
| bind:tabsChange          | `function` | 切换面板的回调函数                          | -                                                        |

### CascaderView externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
| wux-scroll-view-class | 滚动区域节点样式类 |
