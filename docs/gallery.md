# Gallery 画廊

用于预览图片或其他操作。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Gallery",
  "usingComponents": {
    "wux-gallery": "../../dist/gallery/index"
  }
}
```

### 示例

!> 该组件主要依靠 JavaScript 主动调用，所以一般只需在 wxml 中添加一个组件，并设置 id 为 `#wux-gallery` 或其他，之后在 page.js 中调用 `$wuxGallery(id)` 获取匹配到的第一个组件实例对象。

```html
<wux-gallery id="wux-gallery" />

<view class="page">
  <view class="page__hd">
    <view class="page__title">Gallery</view>
    <view class="page__desc">画廊</view>
  </view>
  <view class="page__bd">
    <view class="weui-cells__title">基于小程序原生的wx.previewImage</view>
    <view class="weui-cells weui-cells_after-title">
      <view class="weui-cell">
        <view class="weui-cell__bd">
          <view class="weui-uploader">
            <view class="weui-uploader__bd">
              <view class="weui-uploader__files">
                <block wx:for-items="{{ urls }}" wx:key="{{ index }}">
                  <view
                    class="weui-uploader__file"
                    bindtap="previewImage"
                    data-current="{{ item }}"
                  >
                    <image class="weui-uploader__img" src="{{ item }}" />
                  </view>
                </block>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="weui-cells__title">自定义gallery</view>
    <view class="weui-cells weui-cells_after-title">
      <view class="weui-cell">
        <view class="weui-cell__bd">
          <view class="weui-uploader">
            <view class="weui-uploader__bd">
              <view class="weui-uploader__files">
                <block wx:for-items="{{ urls }}" wx:key="{{ index }}">
                  <view
                    class="weui-uploader__file"
                    bindtap="showGallery"
                    data-current="{{ index }}"
                  >
                    <image class="weui-uploader__img" src="{{ item }}" />
                  </view>
                </block>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="weui-cells__title">带说明文案 & 自定义图标</view>
    <view class="weui-cells weui-cells_after-title">
      <view class="weui-cell">
        <view class="weui-cell__bd">
          <view class="weui-uploader">
            <view class="weui-uploader__bd">
              <view class="weui-uploader__files">
                <block wx:for-items="{{ urls }}" wx:key="{{ index }}">
                  <view
                    class="weui-uploader__file"
                    bindtap="showGallery2"
                    data-current="{{ index }}"
                  >
                    <image class="weui-uploader__img" src="{{ item }}" />
                  </view>
                </block>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</view>
```

```js
import { $wuxGallery } from '../../dist/index'

Page({
  data: {
    urls: [
      'http://cdn.skyvow.cn/logo.png',
      'http://cdn.skyvow.cn/logo.png',
      'http://cdn.skyvow.cn/logo.png',
      'http://cdn.skyvow.cn/logo.png',
    ],
  },
  onLoad() {},
  showGallery(e) {
    const { current } = e.currentTarget.dataset
    const { urls } = this.data

    this.$wuxGallery = $wuxGallery()

    this.$wuxGallery.show({
      current,
      urls,
      [`delete`]: (current, urls) => {
        urls.splice(current, 1)
        this.setData({
          urls,
        })
        return true
      },
      cancel() {
        console.log('Close gallery')
      },
      onTap(current, urls) {
        console.log(current, urls)
        return true
      },
      onChange(e) {
        console.log(e)
      },
    })
  },
  showGallery2(e) {
    const { current } = e.currentTarget.dataset
    const { urls } = this.data

    $wuxGallery().show({
      current,
      urls: urls.map((n) => ({ image: n, remark: n })),
      indicatorDots: true,
      indicatorColor: '#fff',
      indicatorActiveColor: '#04BE02',
      icon: 'http://cdn.skyvow.cn/logo.png',
      [`delete`]: (current, urls) => {
        console.log('onIconClick')
        return true
      },
    })
  },
  previewImage(e) {
    const { current } = e.currentTarget.dataset
    const { urls } = this.data

    wx.previewImage({
      current,
      urls,
    })
  },
})
```

## 视频演示

[Gallery](./_media/gallery.mp4 ':include :type=iframe width=375px height=667px')

## API

| 参数                         | 类型       | 描述                                                                    | 默认值                    |
| ---------------------------- | ---------- | ----------------------------------------------------------------------- | ------------------------- |
| options                      | `object`   | 配置项                                                                  | -                         |
| options.prefixCls            | `string`   | 自定义类名前缀                                                          | wux-gallery               |
| options.classNames           | `any`      | 过渡的类名，更多内置过渡效果请参考 [AnimationGroup](animation-group.md) | wux-animate--slideInRight |
| options.indicatorDots        | `boolean`  | 是否显示面板指示点                                                      | false                     |
| options.indicatorColor       | `string`   | 指示点颜色                                                              | rgba(0, 0, 0, .3)         |
| options.indicatorActiveColor | `string`   | 当前选中的指示点颜色                                                    | #000000                   |
| options.autoplay             | `boolean`  | 是否自动切换                                                            | false                     |
| options.interval             | `number`   | 自动切换时间间隔                                                        | 5000                      |
| options.duration             | `number`   | 滑动动画时长                                                            | 500                       |
| options.circular             | `boolean`  | 是否采用衔接滑动                                                        | false                     |
| options.vertical             | `boolean`  | 滑动方向是否为纵向                                                      | false                     |
| options.showDelete           | `boolean`  | 是否显示删除按钮                                                        | true                      |
| options.icon                 | `string`   | 自定义图标                                                              | -                         |
| options.allowScale           | `boolean`  | 是否支持手势缩放                                                        | true                      |
| options.current              | `number`   | 当前显示图片的索引值                                                    | 0                         |
| options.urls                 | `array`    | 需要预览的图片链接列表                                                  | []                        |
| options.delete               | `function` | 点击删除的回调函数，返回值为 true 时将会关闭组件                        | -                         |
| options.cancel               | `function` | 点击关闭的回调函数                                                      | -                         |
| options.onTap                | `function` | 图片点击事件，返回值为 true 时将会关闭组件                              | -                         |

### Gallery.method

- Gallery.show
- Gallery.hide
- Gallery.slideTo
- Gallery.slideNext
- Gallery.slidePrev
