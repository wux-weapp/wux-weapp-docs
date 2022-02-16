function graysale(d) {
  const pad = (num) => (num < 9 ? '0' + num : num)
  const day = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()
  const date = d || `${year}-${pad(month)}-${pad(day)}`

  const include = [
    {
      date: '2020-04-04',
      text: [
        '4月4日',
        '全国哀悼',
        '为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼，国务院发布公告，决定2020年4月4日举行全国性哀悼活动。',
        '在此期间，全国和驻外使领馆下半旗志哀，全国停止公共娱乐活动。4月4日10时起，全国人民默哀3分钟，汽车、火车、舰船鸣笛，防空警报鸣响。',
      ],
    },
  ]

  const index = include.map((v) => v.date).indexOf(date)

  if (index !== -1) {
    document.documentElement.style['-webkit-filter'] = 'grayscale(100%)'
  }
}

export { graysale }
