# Selectable 选框组

选框组。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "Selectable",
    "usingComponents": {
        "wux-selectable": "../../dist/selectable/index",
        "wux-cell-group": "../../dist/cell-group/index",
        "wux-cell": "../../dist/cell/index"
    }
}
```

### 示例

```html
<view class="page">
    <view class="page__hd">
        <view class="page__title">Selectable</view>
        <view class="page__desc">选框组</view>
    </view>
    <view class="page__bd">
        <view class="sub-title">Checkbox & Radio</view>
        <wux-selectable color="light" value="1" defaultChecked />
        <wux-selectable color="stable" value="2" defaultChecked />
        <wux-selectable color="positive" value="3" defaultChecked />
        <wux-selectable color="calm" value="4" />
        <wux-selectable color="balanced" value="5" />
        <wux-selectable color="energized" value="6" />
        <wux-selectable color="assertive" value="7" disabled />
        <wux-selectable color="royal" value="8" disabled />
        <wux-selectable color="dark" value="9" disabled />
        <wux-selectable type="radio" color="light" value="1" defaultChecked />
        <wux-selectable type="radio" color="stable" value="2" defaultChecked />
        <wux-selectable type="radio" color="positive" value="3" defaultChecked />
        <wux-selectable type="radio" color="calm" value="4" defaultChecked />
        <wux-selectable type="radio" color="balanced" value="5" defaultChecked />
        <wux-selectable type="radio" color="energized" value="6" defaultChecked />
        <wux-selectable type="radio" color="assertive" value="7" disabled defaultChecked />
        <wux-selectable type="radio" color="royal" value="8" disabled defaultChecked />
        <wux-selectable type="radio" color="dark" value="9" disabled defaultChecked />
        <view class="sub-title">Controlled</view>
        <wux-selectable color="light" value="1" checked="{{ checked }}" bind:change="onCheckboxChange" />
        <view class="sub-title">Slot</view>
        <wux-selectable color="light" value="1" type="default">
            <view class="icon-on" slot="icon-on"></view>
            <view class="icon-off" slot="icon-off"></view>
        </wux-selectable>
        <view class="sub-title">With cellGroup</view>
        <wux-cell-group>
            <block wx:for="{{ items }}" wx:key="">
                <wux-cell title="{{ item.label }}">
                    <wux-selectable slot="header" wux-class="checkbox" value="{{ item.value }}" />
                </wux-cell>
            </block>
        </wux-cell-group>
        <view class="sub-title">With cellGroup</view>
        <wux-cell-group>
            <block wx:for="{{ items }}" wx:key="">
                <wux-cell title="{{ item.label }}">
                    <wux-selectable slot="footer" wux-class="checkbox" type="radio" value="{{ item.value }}" checked="{{ value === item.value }}" controlled bind:change="onChange" />
                </wux-cell>
            </block>
        </wux-cell-group>
        <view class="sub-title">Other</view>
        <wux-selectable color="light" value="1">Agree agreement</wux-selectable>
    </view>
</view>
```

```js
Page({
    data: {
        items: [{
            value: '1',
            label: 'Wux'
        }, {
            value: '2',
            label: 'Weapp'
        }],
        value: '1',
        checked: false,
    },
    onCheckboxChange(e) {
        console.log(e)
        this.setData({
            checked: e.detail.checked,
        })
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

[Selectable](./_media/selectable.mp4 ':include :type=iframe width=375px height=667px')

## API

### Selectable props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | <code>string</code> | 自定义类名前缀 | wux-selectable |
| type | <code>string</code> | 类型，可选值为 checkbox、radio | checkbox |
| value | <code>string</code> | 字段值 | - |
| defaultChecked | <code>boolean</code> | 默认是否选中，当 controlled 为 false 时才生效 | false |
| checked | <code>boolean</code> | 当前是否选中，当 controlled 为 true 时才生效 | false |
| controlled | <code>boolean</code> | 是否受控 [说明文档](controlled.md) | false |
| disabled | <code>boolean</code> | 是否禁用 | false |
| color | <code>string</code> | 主题色，可选值为 light、stable、positive、calm、assertive、balanced、energized、royal、dark  | balanced |
| wrapStyle | <code>string,object</code> | 自定义样式 | - |
| bind:change | <code>function</code> | change 事件触发的回调函数 | - |

### Selectable slot

| 名称 | 描述 |
| --- | --- |
| - | 自定义内容 |
| icon-on | 自定义已选中的内容 |
| icon-off | 自定义未选中的内容 |

### Selectable externalClasses

| 名称 | 描述 |
| --- | --- |
| wux-class | 根节点样式类 |
| wux-input-class | 选择框样式类 |