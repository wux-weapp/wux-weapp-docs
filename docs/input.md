# Input 文本输入框

文本输入框。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "Input",
    "usingComponents": {
        "wux-cell-group": "../../dist/cell-group/index",
        "wux-cell": "../../dist/cell/index",
        "wux-input": "../../dist/input/index"
    }
}
```

### 示例

!> Input 组件建议用 Cell 组件包裹使用。

```html
<view class="page">
    <view class="page__hd">
        <view class="page__title">Input</view>
        <view class="page__desc">文本输入框</view>
    </view>
    <view class="page__bd">
        <wux-cell-group title="Normal Usage">
            <wux-cell hover-class="none">
                <wux-input placeholder="No label" />
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input label="WeChat" />
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input label="QQ" placeholder="Input your QQ" />
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input label="Password" placeholder="Input your password" password type="number" />
            </wux-cell>
        </wux-cell-group>
        <wux-cell-group title="Custom title">
            <wux-cell hover-class="none">
                <wux-input>WeChat</wux-input>
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input placeholder="Input your QQ">
                    <image style="width: 20px; height: 20px; margin-right: 5px" src="https://wux.cdn.cloverstd.com/logo.png" />
                </wux-input>
            </wux-cell>
        </wux-cell-group>
        <wux-cell-group title="Show clear">
            <wux-cell hover-class="none">
                <wux-input clear label="WeChat" />
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input clear label="QQ" placeholder="Input your QQ" />
            </wux-cell>
        </wux-cell-group>
        <wux-cell-group title="Extra">
            <wux-cell hover-class="none">
                <wux-input label="Dollar" defaultValue="1024" extra="$" />
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input label="RMB" defaultValue="1024">
                    <view slot="footer" style="margin-left: 5px">￥</view>
                </wux-input>
            </wux-cell>
        </wux-cell-group>
        <wux-cell-group title="Disabled">
            <wux-cell hover-class="none">
                <wux-input disabled label="WeChat" />
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input disabled label="QQ" defaultValue="1024" />
            </wux-cell>
        </wux-cell-group>
        <wux-cell-group title="Controlled">
            <wux-cell hover-class="none">
                <wux-input label="Uncontrolled" defaultValue="1024" />
            </wux-cell>
            <wux-cell hover-class="none">
                <wux-input label="Controlled" value="{{ value }}" controlled type="number" bind:change="onChange" bind:focus="onFocus" bind:blur="onBlur" bind:confirm="onConfirm" bind:clear="onClear" />
            </wux-cell>
        </wux-cell-group>
        <wux-cell-group title="Error">
            <wux-cell hover-class="none">
                <wux-input label="Tel number" value="{{ value }}" controlled error="{{ error }}" type="number" bind:change="onChange" bind:focus="onFocus" bind:blur="onBlur" bind:confirm="onConfirm" bind:clear="onClear" bind:error="onError" />
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

[Input](./_media/input.mp4 ':include :type=iframe width=375px height=667px')

## API

### Input props

| 参数 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | `string` | 自定义类名前缀 | wux-input |
| label | `string` | 左侧内容 | - |
| extra | `string` | 右侧内容 | - |
| defaultValue | `string` | 默认值，当 `controlled` 为 `false` 时才生效 | - |
| value | `string` | 当前值，当 `controlled` 为 `true` 时才生效 | - |
| controlled | `boolean` | 是否受控 [说明文档](controlled.md) | false |
| type | `string` | 类型，可选值为 text、number、idcard、digit | text |
| password | `boolean` | 是否是密码类型 | false |
| placeholder | `string` | 输入框为空时占位符 | - |
| placeholder-style | `string,object` | 指定 placeholder 的样式 | - |
| placeholder-class | `string` | 指定 placeholder 的样式类 | input-placeholder |
| disabled | `boolean` | 是否禁用 | false |
| maxlength | `number` | 最大输入长度，设置为 -1 的时候不限制最大长度 | 140 |
| cursor-spacing | `number` | 指定光标与键盘的距离，单位 px | 11 |
| focus | `boolean` | 获取焦点 | false |
| confirm-type | `string` | 设置键盘右下角按钮的文字，仅在type='text'时生效 | done |
| confirm-hold | `boolean` | 点击键盘右下角按钮时是否保持键盘不收起 | false |
| cursor | `number` | 指定focus时的光标位置 | -1 |
| selection-start | `number` | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 | -1 |
| selection-end | `number` | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 | -1 |
| adjust-position | `boolean` | 键盘弹起时，是否自动上推页面 | true |
| clear | `boolean` | 是否显示清除图标，当 `disabled` 为 `false` 时才生效 | false |
| error | `boolean` | 是否显示报错图标 | false |
| bind:change | `function` | 键盘输入时触发 | - |
| bind:focus | `function` | 输入框聚焦时触发 | - |
| bind:blur | `function` | 输入框失去焦点时触发 | - |
| bind:confirm | `function` | 点击完成按钮时触发 | - |
| bind:clear | `function` | 点击清除图标时触发 | - |
| bind:error | `function` | 点击报错图标时触发 | - |

### Input slot

| 名称 | 描述 |
| --- | --- |
| - | 自定义左侧内容 |

### Input externalClasses

| 名称 | 描述 |
| --- | --- |
| wux-class | 根节点样式类 |