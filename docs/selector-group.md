# SelectorGroup 选择组

在一组选项中选择一个或多个（按钮样式）。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "SelectorGroup",
    "usingComponents": {
        "wux-selector-group": "../../dist/selector-group/index"
    }
}
```

### 示例

```html
<view class="page">
    <view class="page__hd">
        <view class="page__title">SelectorGroup</view>
        <view class="page__desc">选择组</view>
    </view>
    <view class="page__bd page__bd_spacing">
        <view class="sub-title">简单 options</view>
        <wux-selector-group options="{{ stringOptions }}" defaultValue="{{ value1 }}" />
        <view class="sub-title">单选</view>
        <wux-selector-group options="{{ options }}" defaultValue="{{ value2 }}" />
        <view class="sub-title">多选</view>
        <wux-selector-group options="{{ options }}" defaultValue="{{ value3 }}" multiple />
        <view class="sub-title">可选 theme</view>
        <wux-selector-group theme="positive" options="{{ options }}" defaultValue="{{ value2 }}" />
        <view class="sub-title">两列布局</view>
        <wux-selector-group columns="2" options="{{ options }}" defaultValue="{{ value2 }}" />
        <view class="sub-title">禁用状态</view>
        <wux-selector-group options="{{ disabledOptions }}" defaultValue="{{ value2 }}" />
        <view class="sub-title">选项带描述</view>
        <wux-selector-group options="{{ descriptionOptions }}" defaultValue="{{ value2 }}" />
        <view class="sub-title">自定义 FieldName</view>
        <wux-selector-group options="{{ fieldNamesOptions }}" defaultValue="{{ value2 }}" defaultFieldNames="{{ fieldNames }}" />
        <view class="sub-title">圆角样式</view>
        <wux-selector-group options="{{ options }}" defaultValue="{{ value2 }}" shape="rounded" />
        <view class="sub-title">不显示对角</view>
        <wux-selector-group options="{{ options }}" defaultValue="{{ value2 }}" showCheckMark="{{ false }}" />
        <view class="sub-title">Controlled</view>
        <wux-selector-group options="{{ options }}" value="{{ value4 }}" controlled bind:change="onChange" />
        <view class="sub-title">必须选择一项</view>
        <wux-selector-group options="{{ options }}" value="{{ value5 }}" controlled bind:change="onRadioChange" />
    </view>
</view>
```

```js
const options = [
    {
        label: '选项一',
        value: '1',
    },
    {
        label: '选项二',
        value: '2',
    },
    {
        label: '选项三',
        value: '3',
    },
]

const stringOptions = options.map((option) => option.label)
const descriptionOptions = options.map((option) => ({ ...option, desc: '描述信息' }))
const disabledOptions = options.map((option) => ({ ...option, disabled: true }))

const fieldNamesOptions = [
    {
        labelT: '选项一',
        valueT: '1',
    },
    {
        labelT: '选项二',
        valueT: '2',
    },
    {
        labelT: '选项三',
        valueT: '3',
        disabledT: true,
    },
]

Page({
    data: {
        fieldNames: {
            label: 'labelT',
            value: 'valueT',
            disabled: 'disabledT',
        },
        fieldNamesOptions,
        stringOptions,
        descriptionOptions,
        disabledOptions,
        options,
        value1: ['选项一'],
        value2: ['1'],
        value3: ['2', '3'],
        value4: ['3'],
        value5: ['1'],
    },
    onChange(e) {
        console.log('onChange', e.detail)
        this.setData({
            value4: e.detail.value,
        })
    },
    onRadioChange(e) {
        console.log('onChange', e.detail)
        const { value } = e.detail
        if (value.length) {
            this.setData({
                value5: value,
            })
        }
    },
})
```

## 视频演示

[SelectorGroup](./_media/selector-group.mp4 ':include :type=iframe width=375px height=667px')

## API

### SelectorGroup props

| 参数           | 类型       | 描述                                                             | 默认值  |
| -------------- | ---------- | ---------------------------------------------------------------- | ------- |
| prefixCls      | `string`   | 自定义类名前缀                                                   | wux-selector-group |
| theme      | `string`   | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark | balanced            |
| shape     | `string` | 指定头像的形状，可选值为 default、rounded、rectangular | default              |
| columns     | `number` | 列数 | 3              |
| gap     | `number` | 间距大小 | 8              |
| options            | `array`         | 以配置形式设置子元素         | []              |
| defaultFieldNames  | `object`        | 自定义 options 中的 value、label、disabled 字段 | { label: 'label', value: 'value', disabled: 'disabled' } |
| defaultValue | `array`  | 默认选中项，当 `controlled` 为 `false` 时才生效 | -                 |
| value        | `array`  | 当前选中项，当 `controlled` 为 `true` 时才生效  | -                 |
| controlled   | `boolean` | 是否受控 [说明文档](controlled.md)          | false             |
| multiple            | `boolean`               | 是否支持多选                                                   | false                                     |
| showCheckMark     | `boolean` | 是否显示对勾角标 | true              |
| bind:change        | `function`      | change 事件触发的回调函数                      | -               |

### SelectorGroup slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### SelectorGroup externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
