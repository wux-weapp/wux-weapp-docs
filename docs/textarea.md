# Textarea 多行输入框

多行输入框。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Textarea",
  "usingComponents": {
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-textarea": "../../dist/textarea/index"
  }
}
```

### 示例

!> Input 组件建议用 Cell 组件包裹使用。

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Textarea</view>
    <view class="page__desc">多行输入框</view>
  </view>
  <view class="page__bd">
    <wux-cell-group title="Normal Usage">
      <wux-cell hover-class="none">
        <wux-textarea placeholder="No label" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea label="First name" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea label="Last name" placeholder="Input your last name" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Auto / Fixed height">
      <wux-cell hover-class="none">
        <wux-textarea autoHeight label="First name" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea
          rows="3"
          label="Last name"
          placeholder="Input your last name"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Count">
      <wux-cell hover-class="none">
        <wux-textarea
          hasCount
          rows="3"
          cursorSpacing="80"
          placeholder="Count..."
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Custom title">
      <wux-cell hover-class="none">
        <wux-textarea>First name</wux-textarea>
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea placeholder="Input your last name">
          <image
            style="width: 20px; height: 20px; margin-right: 5px"
            src="http://cdn.skyvow.cn/logo.png"
          />
        </wux-textarea>
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Show clear">
      <wux-cell hover-class="none">
        <wux-textarea clear label="First name" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea
          clear
          label="Last name"
          placeholder="Input your last name"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Extra">
      <wux-cell hover-class="none">
        <wux-textarea label="Dollar" defaultValue="1024" extra="$" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea label="RMB" defaultValue="1024">
          <view slot="footer" style="margin-left: 5px">￥</view>
        </wux-textarea>
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Disabled">
      <wux-cell hover-class="none">
        <wux-textarea disabled label="First name" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea disabled label="Last name" defaultValue="1024" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Controlled">
      <wux-cell hover-class="none">
        <wux-textarea label="Uncontrolled" defaultValue="1024" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-textarea
          label="Controlled"
          value="{{ value }}"
          controlled
          bind:change="onChange"
          bind:focus="onFocus"
          bind:blur="onBlur"
          bind:confirm="onConfirm"
          bind:clear="onClear"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="Error">
      <wux-cell hover-class="none">
        <wux-textarea
          label="Tel number"
          value="{{ value }}"
          controlled
          error="{{ error }}"
          bind:change="onChange"
          bind:focus="onFocus"
          bind:blur="onBlur"
          bind:confirm="onConfirm"
          bind:clear="onClear"
          bind:error="onError"
        />
      </wux-cell>
    </wux-cell-group>
  </view>
</view>
```

```js
const isTel = (value) => !/^1[34578]\d{9}$/.test(value)

Page({
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      error: isTel(e.detail.value),
      value: e.detail.value,
    })
  },
  onFocus(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onFocus', e)
  },
  onBlur(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onBlur', e)
  },
  onConfirm(e) {
    console.log('onConfirm', e)
  },
  onClear(e) {
    console.log('onClear', e)
    this.setData({
      error: true,
      value: '',
    })
  },
  onError() {
    wx.showModal({
      title: 'Please enter 11 digits',
      showCancel: !1,
    })
  },
})
```

## 视频演示

[Textarea](./_media/textarea.mp4 ':include :type=iframe width=375px height=667px')

## API

### Textarea props

| 参数                      | 类型            | 描述                                                        | 默认值            |
| ------------------------- | --------------- | ----------------------------------------------------------- | ----------------- |
| prefixCls                 | `string`        | 自定义类名前缀                                              | wux-textarea      |
| label                     | `string`        | 左侧内容                                                    | -                 |
| extra                     | `string`        | 右侧内容                                                    | -                 |
| defaultValue              | `string`        | 默认值，当 `controlled` 为 `false` 时才生效                 | -                 |
| value                     | `string`        | 当前值，当 `controlled` 为 `true` 时才生效                  | -                 |
| controlled                | `boolean`       | 是否受控 [说明文档](controlled.md)                          | false             |
| placeholder               | `string`        | 输入框为空时占位符                                          | -                 |
| placeholder-style         | `string,object` | 指定 placeholder 的样式                                     | -                 |
| placeholder-class         | `string`        | 指定 placeholder 的样式类                                   | input-placeholder |
| disabled                  | `boolean`       | 是否禁用                                                    | false             |
| readOnly                  | `boolean`       | 是否只读                                                    | false             |
| maxlength                 | `number`        | 最大输入长度，设置为 -1 的时候不限制最大长度                | 140               |
| autoHeight                | `boolean`       | 是否自动增高，设置 auto-height 时，style.height 不生效      | false             |
| cursor-spacing            | `number`        | 指定光标与键盘的距离，单位 px                               | 11                |
| focus                     | `boolean`       | 获取焦点                                                    | false             |
| cursor                    | `number`        | 指定 focus 时的光标位置                                     | -1                |
| showConfirmBar            | `boolean`       | 是否显示键盘上方带有”完成“按钮那一栏                        | true              |
| selection-start           | `number`        | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用   | -1                |
| selection-end             | `number`        | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | -1                |
| adjust-position           | `boolean`       | 键盘弹起时，是否自动上推页面                                | true              |
| hold-keyboard             | `boolean`       | focus 时，点击页面的时候不收起键盘                          | false             |
| disable-default-padding   | `boolean`       | 是否去掉 iOS 下的默认内边距                                 | false             |
| confirm-type              | `string`        | 设置键盘右下角按钮的文字                                    | return            |
| confirm-hold              | `boolean`       | 点击键盘右下角按钮时是否保持键盘不收起                      | false             |
| rows                      | `number`        | 行数                                                        | 1                 |
| hasCount                  | `boolean`       | 是否显示计数功能                                            | false             |
| clear                     | `boolean`       | 是否显示清除图标，当 `disabled` 为 `false` 时才生效         | false             |
| error                     | `boolean`       | 是否显示报错图标                                            | false             |
| bind:linechange           | `function`      | 输入框行数变化时调用                                        | -                 |
| bind:change               | `function`      | 键盘输入时触发                                              | -                 |
| bind:focus                | `function`      | 输入框聚焦时触发                                            | -                 |
| bind:blur                 | `function`      | 输入框失去焦点时触发                                        | -                 |
| bind:confirm              | `function`      | 点击完成按钮时触发                                          | -                 |
| bind:keyboardheightchange | `function`      | 键盘高度发生变化的时候触发此事件                            | -                 |
| bind:clear                | `function`      | 点击清除图标时触发                                          | -                 |
| bind:error                | `function`      | 点击报错图标时触发                                          | -                 |

### Textarea slot

| 名称 | 描述           |
| ---- | -------------- |
| -    | 自定义左侧内容 |
| keyboard-accessory    | 设置工具栏视图 |

### Textarea externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
