# Radio 单选框

用于展现一组可选项单项选择，或者单独用于切换到选中状态，预设 9 种颜色 `light`, `stable`, `positive`, `calm`, `assertive`, `balanced`, `energized`, `royal`, `dark` 可选用。

## 使用指南

### 在 page.json 中引入组件

```json
{
  "navigationBarTitleText": "Radio",
  "usingComponents": {
    "wux-radio-group": "../../dist/radio-group/index",
    "wux-radio": "../../dist/radio/index"
  }
}
```

### 示例

```html
<view class="page">
  <view class="page__hd">
    <view class="page__title">Radio</view>
    <view class="page__desc">单选框</view>
  </view>
  <view class="page__bd">
    <form bindsubmit="formSubmit">
      <wux-radio-group
        name="a"
        value="{{ value1 }}"
        title="Default"
        bind:change="onChange1"
      >
        <wux-radio color="light" title="Light" value="1" />
        <wux-radio color="stable" title="Stable" value="2" />
        <wux-radio color="positive" title="Positive" value="3" />
        <wux-radio color="calm" title="Calm" value="4" />
        <wux-radio color="balanced" title="Balanced" value="5" />
        <wux-radio color="energized" title="Energized" value="6" />
        <wux-radio color="assertive" title="Assertive" value="7" />
        <wux-radio color="royal" title="Royal" value="8" />
        <wux-radio color="dark" title="Dark" value="9" />
      </wux-radio-group>
      <wux-radio-group
        name="b"
        value="{{ value2 }}"
        title="Label"
        bind:change="onChange2"
      >
        <wux-radio title="Java" label="details" value="1" />
        <wux-radio title="PHP" label="details" value="2" />
      </wux-radio-group>
      <wux-radio-group
        name="c"
        value="{{ value3 }}"
        title="Thumb"
        bind:change="onChange3"
      >
        <wux-radio
          thumb="http://cdn.skyvow.cn/logo.png"
          title="Java"
          value="1"
        />
        <wux-radio
          thumb="http://cdn.skyvow.cn/logo.png"
          title="PHP"
          value="2"
        />
      </wux-radio-group>
      <wux-radio-group
        name="d"
        value="{{ value4 }}"
        title="Trigger onChange"
        bind:change="onChange4"
      >
        <wux-radio title="Java" value="1" />
        <wux-radio title="PHP" value="2" />
      </wux-radio-group>
      <wux-radio-group name="e" title="Disabled" value="1">
        <wux-radio title="AV" value="1" disabled />
        <wux-radio title="PHP" value="2" disabled />
      </wux-radio-group>
      <wux-radio-group
        name="f"
        value="{{ value5 }}"
        options="{{ options }}"
        title="Options"
        bind:change="onChange5"
      />
      <view class="btn-area">
        <button formType="submit">Submit</button>
      </view>
    </form>
  </view>
</view>
```

```js
Page({
  data: {
    value1: '1',
    value2: '1',
    value3: '1',
    value4: '1',
    value5: '1',
    options: [
      { title: 'Java', value: '1' },
      { title: 'PHP', value: '2' },
    ],
    // options: ['1', '2'],
  },
  onChange(field, e) {
    this.setData({
      [field]: e.detail.value,
    })

    console.log('radio发生change事件，携带value值为：', e.detail)
  },
  onChange1(e) {
    this.onChange('value1', e)
  },
  onChange2(e) {
    this.onChange('value2', e)
  },
  onChange3(e) {
    this.onChange('value3', e)
  },
  onChange4(e) {
    this.onChange('value4', e)
  },
  onChange5(e) {
    this.onChange('value5', e)
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
})
```

## 视频演示

[Radio](./_media/radio.mp4 ':include :type=iframe width=375px height=667px')

## API

### RadioGroup props

| 参数               | 类型            | 描述                                           | 默认值          |
| ------------------ | --------------- | ---------------------------------------------- | --------------- |
| prefixCls          | `string`        | 自定义类名前缀                                 | wux-radio-group |
| cellGroupPrefixCls | `string`        | 自定义 cellGroup 类名前缀                      | wux-cell-group  |
| name               | `string`        | 在表单中的字段名                               | -               |
| value              | `string`        | 在表单中的字段值（当前选中项的值）             | -               |
| title              | `string`        | 标题                                           | -               |
| label              | `string`        | 描述                                           | -               |
| options            | `array`         | 以配置形式设置子元素，优先级高于 slot          | []              |
| disabled           | `boolean`       | 是否禁用                                       | false           |
| readOnly           | `boolean`       | 是否只读                                       | false           |
| mode               | `string`        | 支持默认和卡片两种模式，可选值为 default、card | default         |
| bodyStyle          | `string,object` | 自定义样式                                     | -               |
| hasLine          | `boolean` | 是否有底部横线 | true               |
| withListComponent          | `boolean` | 是否包裹 List 组件 | true               |
| iconPosition          | `string` | 图标的位置，可选值 right、left | right               |
| iconSize      | `string` | 图标大小 | -              |
| iconOn      | `string` | 选中时的图标 | -              |
| iconOff      | `string` | 未选中时的图标 | -              |
| bind:change        | `function`      | change 事件触发的回调函数                      | -               |

### Radio props

| 参数                | 类型       | 描述                                                                                        | 默认值         |
| ------------------- | ---------- | ------------------------------------------------------------------------------------------- | -------------- |
| prefixCls           | `string`   | 自定义类名前缀                                                                              | wux-radio      |
| cellPrefixCls       | `string`   | 自定义 cell 类名前缀                                                                        | wux-cell       |
| selectablePrefixCls | `string`   | 自定义 selectable 类名前缀                                                                  | wux-selectable |
| thumb               | `string`   | 左侧缩略图                                                                                  | -              |
| title               | `string`   | 左侧标题                                                                                    | -              |
| label               | `string`   | 标题下方的描述信息                                                                          | -              |
| value               | `string`   | 当前项的值                                                                                  | -              |
| checked             | `boolean`  | 是否默认选中                                                                                | false          |
| disabled            | `boolean`  | 是否不可修改                                                                                | false          |
| readOnly            | `boolean`  | 是否只读                                                                                    | false          |
| color               | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced       |
| hasLine          | `boolean` | 是否有底部横线 | true               |
| bind:change         | `function` | change 事件触发的回调函数，优先级低于父级 change 事件                                       | -              |
