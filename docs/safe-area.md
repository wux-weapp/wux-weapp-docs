# SafeArea 安全区

在全面屏下提供自适应的边距调整。

## 使用指南

### 在 page.json 中引入组件

```json
{
    "navigationBarTitleText": "SafeArea",
    "navigationStyle": "custom",
    "usingComponents": {
        "wux-safe-area": "../../dist/safe-area/index"
    }
}
```

### 示例

```html
<view class="page">
    <wux-safe-area safeArea="top" wrapStyle="{{ { background: '#11c1f3' } }}" forceRender />
    <view class="page__hd">
        <view class="page__title">SafeArea</view>
        <view class="page__desc">安全区</view>
    </view>
    <view class="page__bd page__bd_spacing page__bd_bottom-0">
        <view>龙是中华民族的图腾，具有刚健威武的雄姿、勇猛无畏的气概、福泽四海的情怀、强大无比的力量，既象征着五千年来中华民族自强不息、奋斗进取的精神血脉，更承载着新时代新征程亿万中华儿女推进强国建设、民族复兴伟业的坚定意志和美好愿望。</view>
        <view>甲辰龙年，希望全国人民振奋龙马精神，以龙腾虎跃、鱼跃龙门的干劲闯劲，开拓创新、拼搏奉献，共同书写中国式现代化建设新篇章。</view>
        <view>龙是中华民族的图腾，具有刚健威武的雄姿、勇猛无畏的气概、福泽四海的情怀、强大无比的力量，既象征着五千年来中华民族自强不息、奋斗进取的精神血脉，更承载着新时代新征程亿万中华儿女推进强国建设、民族复兴伟业的坚定意志和美好愿望。</view>
        <view>甲辰龙年，希望全国人民振奋龙马精神，以龙腾虎跃、鱼跃龙门的干劲闯劲，开拓创新、拼搏奉献，共同书写中国式现代化建设新篇章。</view>
        <view>龙是中华民族的图腾，具有刚健威武的雄姿、勇猛无畏的气概、福泽四海的情怀、强大无比的力量，既象征着五千年来中华民族自强不息、奋斗进取的精神血脉，更承载着新时代新征程亿万中华儿女推进强国建设、民族复兴伟业的坚定意志和美好愿望。</view>
        <view>甲辰龙年，希望全国人民振奋龙马精神，以龙腾虎跃、鱼跃龙门的干劲闯劲，开拓创新、拼搏奉献，共同书写中国式现代化建设新篇章。</view>
        <view>龙是中华民族的图腾，具有刚健威武的雄姿、勇猛无畏的气概、福泽四海的情怀、强大无比的力量，既象征着五千年来中华民族自强不息、奋斗进取的精神血脉，更承载着新时代新征程亿万中华儿女推进强国建设、民族复兴伟业的坚定意志和美好愿望。</view>
        <view>甲辰龙年，希望全国人民振奋龙马精神，以龙腾虎跃、鱼跃龙门的干劲闯劲，开拓创新、拼搏奉献，共同书写中国式现代化建设新篇章。</view>
        <view>龙是中华民族的图腾，具有刚健威武的雄姿、勇猛无畏的气概、福泽四海的情怀、强大无比的力量，既象征着五千年来中华民族自强不息、奋斗进取的精神血脉，更承载着新时代新征程亿万中华儿女推进强国建设、民族复兴伟业的坚定意志和美好愿望。</view>
        <view>甲辰龙年，希望全国人民振奋龙马精神，以龙腾虎跃、鱼跃龙门的干劲闯劲，开拓创新、拼搏奉献，共同书写中国式现代化建设新篇章。</view>
    </view>
    <wux-safe-area safeArea="bottom" wrapStyle="{{ { background: '#ffc900' } }}" />
</view>
```

## 视频演示

[SafeArea](./_media/safe-area.mp4 ':include :type=iframe width=375px height=667px')

## API

### SafeArea props

| 参数           | 类型       | 描述                                                             | 默认值  |
| -------------- | ---------- | ---------------------------------------------------------------- | ------- |
| prefixCls      | `string`   | 自定义类名前缀                                                   | wux-safe-area |
| multiple          | `number`   | 显示的倍数                                                        | 1       |
| wrapStyle          | `string,object`   | 自定义样式                                                           | -       |
| forceRender          | `boolean`   | 当其值为 false 时，组件内部会判断是否刘海屏，进而计算出安全区的距离 | false       |
| supports          | `boolean`   | 使用 css 的 @supports 属性适配安全区 | false       |
| safeArea        | `boolean,string,object`  | 是否适配刘海屏，可选值为 top、bottom、{ top, bottom } | false      |
| safeAreaStyle        | `string`  | 安全区的范围，可选值为 default、navBar、statusBar， 当其值为 default 或 navBar，顶部计算的安全区包含 StatusBar & NavBar | default      |

### SafeArea slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义内容 |

### SafeArea externalClasses

| 名称      | 描述         |
| --------- | ------------ |
| wux-class | 根节点样式类 |
