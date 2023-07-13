# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "InputNumber",
  "usingComponents": {
    "wux-cell-group": "../../dist/cell-group/index",
    "wux-cell": "../../dist/cell/index",
    "wux-input-number": "../../dist/input-number/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">InputNumber</view>
    <view class="page__desc">数字输入框</view>
  </view>
  <view class="page__bd">
    <wux-cell-group title="默认">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number default-value="1024" slot="footer" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="主题色">
      <wux-cell title="Light" hover-class="none">
        <wux-input-number color="light" slot="footer" />
      </wux-cell>
      <wux-cell title="Stable" hover-class="none">
        <wux-input-number color="stable" slot="footer" />
      </wux-cell>
      <wux-cell title="Positive" hover-class="none">
        <wux-input-number color="positive" slot="footer" />
      </wux-cell>
      <wux-cell title="Calm" hover-class="none">
        <wux-input-number color="calm" slot="footer" />
      </wux-cell>
      <wux-cell title="Balanced" hover-class="none">
        <wux-input-number color="balanced" slot="footer" />
      </wux-cell>
      <wux-cell title="Energized" hover-class="none">
        <wux-input-number color="energized" slot="footer" />
      </wux-cell>
      <wux-cell title="Assertive" hover-class="none">
        <wux-input-number color="assertive" slot="footer" />
      </wux-cell>
      <wux-cell title="Royal" hover-class="none">
        <wux-input-number color="royal" slot="footer" />
      </wux-cell>
      <wux-cell title="Dark" hover-class="none">
        <wux-input-number color="dark" slot="footer" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="圆形按钮">
      <wux-cell title="Light" hover-class="none">
        <wux-input-number shape="circle" color="light" slot="footer" />
      </wux-cell>
      <wux-cell title="Stable" hover-class="none">
        <wux-input-number shape="circle" color="stable" slot="footer" />
      </wux-cell>
      <wux-cell title="Positive" hover-class="none">
        <wux-input-number shape="circle" color="positive" slot="footer" />
      </wux-cell>
      <wux-cell title="Calm" hover-class="none">
        <wux-input-number shape="circle" color="calm" slot="footer" />
      </wux-cell>
      <wux-cell title="Balanced" hover-class="none">
        <wux-input-number shape="circle" color="balanced" slot="footer" />
      </wux-cell>
      <wux-cell title="Energized" hover-class="none">
        <wux-input-number shape="circle" color="energized" slot="footer" />
      </wux-cell>
      <wux-cell title="Assertive" hover-class="none">
        <wux-input-number shape="circle" color="assertive" slot="footer" />
      </wux-cell>
      <wux-cell title="Royal" hover-class="none">
        <wux-input-number shape="circle" color="royal" slot="footer" />
      </wux-cell>
      <wux-cell title="Dark" hover-class="none">
        <wux-input-number shape="circle" color="dark" slot="footer" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="监听 onChange 事件，在调试窗口中输出">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number
          disabled="{{ false }}"
          value="{{ value }}"
          controlled
          min="{{ -10 }}"
          max="{{ 10 }}"
          bind:change="onChange"
          slot="footer"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="格式化到整数">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number
          digits="{{ 0 }}"
          disabled="{{ false }}"
          default-value="1"
          slot="footer"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="格式化到一位小数">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number
          digits="{{ 1 }}"
          disabled="{{ false }}"
          default-value="1.1"
          slot="footer"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="自定义样式">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number
          wux-sub-class="sub"
          wux-input-class="input"
          wux-add-class="add"
          slot="footer"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="设置步长为0.5">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number step="{{ .5 }}" slot="footer" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="设置值为1，最小值为-5，最大值为8">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number
          default-value="1"
          min="{{ -5 }}"
          max="{{ 8 }}"
          slot="footer"
        />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="设置可输入">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number disabled="{{ false }}" slot="footer" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="设置长按快速加减">
      <wux-cell title="数量" hover-class="none">
        <wux-input-number longpress slot="footer" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="循环输出多个组件">
      <block wx:for="{{ items }}" wx:key="index">
        <wux-cell title="{{ item.text }}" hover-class="none">
          <wux-input-number default-value="{{ item.value }}" slot="footer" />
        </wux-cell>
      </block>
    </wux-cell-group>
  </view>
</view>
```

```js
Page({
  data: {
    items: [
      {
        id: '001',
        text: '房间',
        value: 1,
      },
      {
        id: '002',
        text: '成人',
        value: 2,
      },
    ],
    value: 1,
  },
  onChange(e) {
    console.log(e)
    this.setData({
      value: e.detail.value,
    })
  },
})
```

## 视频演示

[InputNumber](./_media/input-number.mp4 ':include :type=iframe width=375px height=667px')

## API

### InputNumber props

| 参数         | 类型       | 描述                                                                                        | 默认值           |
| ------------ | ---------- | ------------------------------------------------------------------------------------------- | ---------------- |
| prefixCls    | `string`   | 自定义类名前缀                                                                              | wux-input-number |
| min          | `number`   | 最小值                                                                                      | -Infinity        |
| max          | `number`   | 最大值                                                                                      | Infinity         |
| step         | `number`   | 计数间隔                                                                                    | 1                |
| defaultValue | `number`   | 默认值，当 `controlled` 为 `false` 时才生效                                                 | 0                |
| value        | `number`   | 当前值，当 `controlled` 为 `true` 时才生效                                                  | 0                |
| controlled   | `boolean`  | 是否受控 [说明文档](controlled.md)                                                          | false            |
| disabled     | `boolean`  | 是否禁用输入                                                                                | true             |
| longpress    | `boolean`  | 是否支持长按                                                                                | false            |
| color        | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced         |
| shape        | `string`   | 形状，可选值为 circle、square                                                               | square           |
| digits       | `number`   | 格式化到小数点后固定位数，设置为 0 表示格式化到整数                                               | -                |
| bind:change  | `function` | 监听值变化的回调函数                                                                        | -                |
| bind:focus   | `function` | 输入框聚焦时触发的回调函数                                                                  | -                |
| bind:blur    | `function` | 输入框失去焦点时触发的回调函数                                                              | -                |

### InputNumber externalClasses

| 名称            | 描述           |
| --------------- | -------------- |
| wux-class       | 根节点样式类   |
| wux-sub-class   | 左侧按钮样式类 |
| wux-input-class | 输入框样式类   |
| wux-add-class   | 右侧按钮样式类 |
