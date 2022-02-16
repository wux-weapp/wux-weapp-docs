# Timeline 时间轴

用于展现时间流信息。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Timeline",
  "usingComponents": {
    "wux-icon": "../../dist/icon/index",
    "wux-timeline": "../../dist/timeline/index",
    "wux-timeline-item": "../../dist/timeline-item/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Timeline</view>
    <view class="page__desc">时间轴</view>
  </view>
  <view class="page__bd page__bd_spacing">
    <view class="sub-title">Default</view>
    <wux-timeline>
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
    </wux-timeline>
    <view class="sub-title">Position = alternate</view>
    <wux-timeline position="alternate">
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
    </wux-timeline>
    <view class="sub-title">Position = right</view>
    <wux-timeline position="right">
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
    </wux-timeline>
    <view class="sub-title">Pending</view>
    <wux-timeline pending>
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
      <wux-timeline-item content="2018-10-24 v1.0.0" />
    </wux-timeline>
    <view class="sub-title">Slot</view>
    <wux-timeline>
      <wux-timeline-item>
        <view>2018-10-24 v1.0.0</view>
      </wux-timeline-item>
      <wux-timeline-item custom>
        <wux-icon slot="dot" type="ios-time" size="23" />
        <view>2018-10-24 v1.0.0</view>
      </wux-timeline-item>
      <wux-timeline-item dotStyle="border-color: #33cd5f; color: #33cd5f">
        <view>2018-10-24 v1.0.0</view>
      </wux-timeline-item>
      <wux-timeline-item dotStyle="border-color: #ef473a; color: #ef473a">
        <view>2018-10-24 v1.0.0</view>
      </wux-timeline-item>
    </wux-timeline>
  </view>
</view>
```

## 视频演示

[Timeline](./_media/timeline.mp4 ':include :type=iframe width=375px height=667px')

## API

### Timeline props

| 参数      | 类型      | 描述                                                    | 默认值       |
| --------- | --------- | ------------------------------------------------------- | ------------ |
| prefixCls | `string`  | 自定义类名前缀                                          | wux-timeline |
| pending   | `boolean` | 最后一个节点是否为幽灵节点                              | false        |
| position  | `string`  | 时间轴和内容的相对位置，可选值为 left、alternate、right | left         |

### Timeline externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |

### TimelineItem props

| 参数      | 类型            | 描述               | 默认值            |
| --------- | --------------- | ------------------ | ----------------- |
| prefixCls | `string`        | 自定义类名前缀     | wux-timeline-item |
| content   | `string`        | 内容               | -                 |
| dotStyle  | `string,object` | 时间轴点样式       | -                 |
| custom    | `boolean`       | 是否自定义时间轴点 | false             |

### TimelineItem slot

| 名称 | 描述                                           |
| ---- | ---------------------------------------------- |
| -    | 自定义内容                                     |
| dot  | 自定义时间轴点，当 `custom` 为 `true` 时才生效 |

### TimelineItem externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
