(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{291:function(t,e,r){"use strict";r.r(e);var o=r(14),n=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[t._v("#")]),t._v(" 文章")]),t._v(" "),e("p",[t._v("博客最重要的就是给访客查看文章了。优秀的文章需要配合优秀的访问体验才能恢复最大的价值。只给自己做的博客是没有出路的。")]),t._v(" "),e("h2",{attrs:{id:"外挂标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外挂标签"}},[t._v("#")]),t._v(" 外挂标签")]),t._v(" "),e("p",[t._v("通过外挂标签可以让文章的markdown插件渲染出你自己自定义的样式。使用外挂标签可以避免每次使用样式都要使用大量html代码的问题。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/615e2dec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tag Plugins Plus"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("已发布插件版，具体配置方案请参看插件文档。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.leonus.cn/2022/butterflyTag.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("作品推荐卡片- butterfly主题标签外挂"),e("OutboundLink")],1),t._v(" - Leonus")]),t._v(" "),e("blockquote",[e("p",[t._v("看到很多博客都有追番、豆瓣之类的页面，我也手痒想搞一个，不过我又不是很喜欢豆瓣的那个插件。")]),t._v(" "),e("ul",[e("li",[t._v("一是豆瓣作品限制大自由度不高。")]),t._v(" "),e("li",[t._v("二是样式也不是很满意，修改的话也很费时间。")])]),t._v(" "),e("p",[t._v("然后我就想到写一个标签外挂来实现这个效果。\n趁昨天下午休息的时间完成了大部分功能（包括 "),e("a",{attrs:{href:"https://blog.leonus.cn/stars/",target:"_blank",rel:"noopener noreferrer"}},[t._v("藏宝阁"),e("OutboundLink")],1),t._v(" 页面，毕竟写标签外挂就是为了这个页面服务的），今天进行了一些完善并发布此教程。")])]),t._v(" "),e("h2",{attrs:{id:"新的页面组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新的页面组件"}},[t._v("#")]),t._v(" 新的页面组件")]),t._v(" "),e("p",[t._v("魔改作者自己创造的页面组件，原主题并没有改功能。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/b77e1c58/",target:"_blank",rel:"noopener noreferrer"}},[t._v("butterfly文章页面上下篇按钮UI调整"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("我试图通过将文章底部的按钮改至左右两侧，类似翻页键，同时添加悬停动作，通过css对兄弟相邻元素的hover监测来控制显隐，悬停按钮时在页面正中显示对应文章卡片。")]),t._v(" "),e("p",[t._v("首先要解决的是按钮显示问题，如果是常显，有可能遮盖正文内容，尤其是手机端应该不会有足够的位置。所以尝试通过设置滚动事件监听，在页面滚动至原本上下页翻页的位置，也就是正文刚好读完的时候，才显示按钮。虽然会遮盖一部分评论，不过可以把按钮调整到正中，手机端调扁一点，毕竟不是正文的话，也不用太纠结遮盖问题。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/5ff2da64/",target:"_blank",rel:"noopener noreferrer"}},[t._v("给博客添加个性名片"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("为什么要做这个个性名片？\n因为再不把加群信息放在醒目位置，我的博客群就要彻底变成冰老师的售后群了。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/e2d3c450/",target:"_blank",rel:"noopener noreferrer"}},[t._v("信笺样式留言板"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("留言板动态弹出信封样式")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/780a2cea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bilibili Dynamic Banner"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("B站同款动态Banner")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/b7126498/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SAO UI Plan -- Ranklist"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("把SAO Utils Web也归入了 SAO UI PLAN ，复现SAO 风格界面算是告一段落啦。")]),t._v(" "),e("p",[t._v("这个榜单一开始是准备拿来当做打赏榜单的。可是临到头却发现没人打赏。（疯狂暗示）所以就只能拿来充当友链排行啦。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://yisous.xyz/posts/1b850b16/",target:"_blank",rel:"noopener noreferrer"}},[t._v("让butterfly主题支持文章点赞"),e("OutboundLink")],1),t._v(" - LYX")]),t._v(" "),e("blockquote",[e("p",[t._v("众所周知，b站的视频有点赞功能，这个功能能够充分地体现出观众们对视频的喜爱程度和白嫖率。")]),t._v(" "),e("p",[t._v("同样，我们可以在博客中添加这个功能，后续我可能也会增加一个收藏功能（或者说是直接整一个账号登录？用静态网页搞登录作死的博主是屑）")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.xlenco.top/posts/8fce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github样式代码高亮并上传到gist"),e("OutboundLink")],1),t._v(" - Xlenco")]),t._v(" "),e("blockquote",[e("p",[t._v("本教程，可以让你在hexo中体验到github的代码高亮，总体来说十分的好看。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://anzhiy.cn/posts/98c4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("butterfly文章顶部添加波浪效果"),e("OutboundLink")],1),t._v(" - 安知鱼")]),t._v(" "),e("blockquote",[e("p",[t._v("大功告成，需要注意的是 css 中"),e("code",[t._v("fill属性")]),t._v("可以控制波浪颜色，最好使其中一个颜色与背景颜色一致，否则会显的有点奇怪。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.yichkhun.com/p/9b8131b0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo博客添加站外跳出提示页面"),e("OutboundLink")],1),t._v(" - 苏易困")]),t._v(" "),e("blockquote",[e("p",[t._v("信大家在逛一些论坛、博客的时候，点到一些要跳转第三方的超链接时，都会跳出一个类似的提示页面")])]),t._v(" "),e("h2",{attrs:{id:"定制组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定制组件"}},[t._v("#")]),t._v(" 定制组件")]),t._v(" "),e("p",[t._v("原主题已有功能的修改和深度定制。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.zhheo.com/p/c86d8f1f.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成封面图片主色来作为文章封面顶图"),e("OutboundLink")],1),t._v(" - 张洪Heo")]),t._v(" "),e("blockquote",[e("p",[t._v("本教程只介绍Hexo下的Butterfly主题的方案，其他可供参考，通用性强。\n需要七牛云图床，其他图床需能提供纯色API，使用方法雷同（使用js计算可能涉及到跨域等诸多问题）")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.eurkon.com/post/3d2664bb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Butterfly 推荐文章增加描文章描述"),e("OutboundLink")],1),t._v(" - Eurkon")]),t._v(" "),e("blockquote",[e("p",[t._v("本文用于 butterfly 魔改，博主没有测试是否适配于其他主题，以及自定义样式 CSS 可能需要一定的前端知识进行优化。 _config.butterfly.yml 配置文件可修改显示 文字描述（文章 description 属性）还是 文章内容（默认截取 500 字），以及推荐文章数量。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://butterfly.js.org/posts/b37b5fe3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义代码配色"),e("OutboundLink")],1),t._v(" - Jerry")]),t._v(" "),e("blockquote",[e("p",[t._v("在Butterfly-安装文档-三-主题配置中已经介绍瞭如何使用自定义代码配色。")]),t._v(" "),e("p",[t._v("这篇文章是使用自定义代码配色的实例教程。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/8322f8e6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("版权声明美化"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("基于@Nesxc同学的项目修改。仅做微调。补齐了两个配置项的默认项。精简配置过程。针对文字偏移做了自适应优化。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/3e4b194c/",target:"_blank",rel:"noopener noreferrer"}},[t._v("源计划-方舟：标题样式修改"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("这个新代号，源计划-方舟，是我最近心血来潮又挖的一个大坑。\n为了让他的风格能够和谐的形成一个整体，我准备一个个版块重写过去。争取让整个博客的版块都大换血。时间可能会拖得很长。追更的可以先去看试做那篇文章："),e("a",{attrs:{href:"https://akilar.top/posts/9a853ad7/",target:"_blank",rel:"noopener noreferrer"}},[t._v("赛博朋克风格主题样式试做"),e("OutboundLink")],1),t._v("，挑些过渡方案凑活着用。\n只有我觉得满意的试做才会单独发文。")])]),t._v(" "),e("h2",{attrs:{id:"评论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评论"}},[t._v("#")]),t._v(" 评论")]),t._v(" "),e("p",[t._v("博客已有的评论功能修改。")]),t._v(" "),e("h3",{attrs:{id:"评论美化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评论美化"}},[t._v("#")]),t._v(" 评论美化")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/d99b5f01/",target:"_blank",rel:"noopener noreferrer"}},[t._v("twikoo评论块气泡风格魔改美化"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("要对twikoo进行魔改，同时又不破坏评论结构。那我首先想到的是用js附加class，然后针对新增的class进行样式覆写。")]),t._v(" "),e("p",[t._v("但是在尝试过程中，发现不论我如何推迟附加class的js执行时间，它永远早于twikoo评论加载。"),e("s",[t._v("原因还在排查……才怪咧，我它喵直接跑去提issue，才不要在这排查")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/d2222705/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine Visitor Tag Beautify"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("Valine评论添加[博主,小伙伴,访客]标签")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://akilar.top/posts/397b8b90/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Butterfly comment board beautify"),e("OutboundLink")],1),t._v(" - Akilar")]),t._v(" "),e("blockquote",[e("p",[t._v("评论区侧栏弹出式美化方案")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.zhheo.com/p/99d020fe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twikoo腾讯云函数部署转移到私有部署"),e("OutboundLink")],1),t._v(" - 张洪Heo")]),t._v(" "),e("blockquote",[e("p",[t._v("对于腾讯云毫无契约精神的行为表示强烈的抗议和严厉的谴责。")]),t._v(" "),e("p",[t._v("大概是去年领取到了腾讯云开发的五年期限免费使用权，可是腾讯云直接就毁约，以「计费方式调整」为由，强制要求现有用户退款结束服务。当然我相信是因为「所有解释权归腾讯所有」，腾讯云才可以肆无忌惮的毁约和取消订单。")]),t._v(" "),e("p",[t._v("作为一个个人的小用户，腾讯云直接以劝退的方式来行动。维权成本那么高，相信腾讯云也觉得没多少人愿意去为了这东西维权吧。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.zhheo.com/p/7469b3de.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("批量替换旧的Twikoo表情包地址，修复数据库里旧的jsdelivr链接"),e("OutboundLink")],1),t._v(" - 张洪Heo")]),t._v(" "),e("blockquote",[e("p",[t._v("之前sticker-heo一直使用的是jsdelivr链接，但是因为近期jsdelivr已经彻底失效，近一个多月以来本项目已经换了三家cdn了。更换cdn确实提高了访问速度，但是旧版的sticker-heo表情仍然是不可访问的状态。")]),t._v(" "),e("p",[t._v("这里介绍一下如何更改旧表情链接地址方法，其他评论系统大同小异，这里只介绍twikoo。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.zhheo.com/p/8b1dde4c.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twikoo魔改样式分享-博客评论系统的定制皮肤"),e("OutboundLink")],1),t._v(" - 张洪Heo")]),t._v(" "),e("blockquote",[e("p",[t._v("魔改了一下Twikoo的样式，拿出来分享一下，喜欢的可以搞一手。推荐用官方的。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.leonus.cn/2022/inputAlert.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("给你的评论添加一个输入提醒吧"),e("OutboundLink")],1),t._v(" - Leonus")]),t._v(" "),e("blockquote",[e("p",[t._v("适用于twikoo，其他评论系统改一下应该也可以使用")]),t._v(" "),e("p",[t._v("实现很简单，全是css，直接在自定义css文件内添加即可，不会使用自定义css文件的看这个教程：Hexo博客添加自定义css和js文件")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.leonus.cn/2022/owo-big.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("评论表情包放大功能，超实用"),e("OutboundLink")],1),t._v(" - Leonus")]),t._v(" "),e("blockquote",[e("p",[t._v("最近给评论区加了一些表情包，而有的表情包是带文字的。\n在评论时这些表情包因为太小会导致看不清具体内容。\n这就很影响使用了，你不知道它是什么意思的话怎么会去使用这个表情包。\n于是我就写了这个表情放大的功能。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cxl2020mc.top/post/Hexo-Butterfly-Twikoo%E8%AF%84%E8%AE%BA%E5%8C%BA%E7%BE%8E%E5%8C%96/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo-Butterfly Twikoo评论区美化"),e("OutboundLink")],1),t._v(" - 陈鑫磊")]),t._v(" "),e("blockquote",[e("p",[t._v("前几天，在给AG bot（作者的机器人）写原神功能的截图网页，因为作者不会css，所以开着教程网页，一边请教别人一边写网页。")]),t._v(" "),e("p",[t._v("直到昨天，我终于写完了，虽然不是特别好看。但好歹是自己写的，写完之后，感觉我这个小白也要变成小黑了。")])]),t._v(" "),e("h3",{attrs:{id:"邮件模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#邮件模板"}},[t._v("#")]),t._v(" 邮件模板")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.zhheo.com/p/169a1abb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twikoo评论回复邮件模板：Acrylic Mail 粉"),e("OutboundLink")],1),t._v(" - 张洪Heo")]),t._v(" "),e("blockquote",[e("p",[t._v("今天定制了一下邮件的回复样式，之前Twikoo默认的比较简洁，我做了一个和我博客比较相近的样式。定制了一下。")]),t._v(" "),e("p",[t._v("有需要的小伙伴可以自取。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.btwoa.com/4849469a/",target:"_blank",rel:"noopener noreferrer"}},[t._v("极简风格回复邮件样式模板 | Twikoo"),e("OutboundLink")],1),t._v(" - btwoa")]),t._v(" "),e("blockquote",[e("p",[t._v("Twikoo的默认模板主题色是蓝色，方方正正的，和我博客风格不太搭，于是搞了个极简风格的")])]),t._v(" "),e("h3",{attrs:{id:"部署方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署方法"}},[t._v("#")]),t._v(" 部署方法")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.leonus.cn/2022/twikoo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twikoo私有部署记录"),e("OutboundLink")],1),t._v(" - Leonus")]),t._v(" "),e("blockquote",[e("p",[t._v("使用vercel部署的twikoo也有两个月的时间了，不得不说确实很不错。\n既然不错那么为什么要换呢？\n主要是因为我写的一个获取评论总数的api，这个api的速度真的是一言难尽。\n快的时候3s多一点，慢的时候10s甚至几十秒都有可能。\n我也不清楚这是什么原因（排除代码问题，就只是获取数据慢），评论获取速度都还挺快，就这一个慢的离谱。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://tokiame.cn/2022/10/04/Twikoo%E7%A7%81%E6%9C%89%E5%8C%96%E9%83%A8%E7%BD%B2%E7%AC%AC%E4%B8%80%E5%BC%B9%EF%BC%9A%E5%9F%BA%E7%A1%80%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twikoo 私有化部署第一弹：基础篇"),e("OutboundLink")],1),t._v(" - Asurin")]),t._v(" "),e("blockquote",[e("p",[t._v("Twikoo 私有化部署第一弹：基础篇")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhangshier.vip/posts/33638/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twikoo 评论定时备份方案"),e("OutboundLink")],1),t._v(" - 张时贰")]),t._v(" "),e("blockquote",[e("p",[t._v("Hexo 博客与其它框架不同，它是前后端分离的，上个月在博客群看到了恶意刷评论的站点，这对于 Hexo 是致命的，解决办法就是勤备份，所以在八月初我就向作者提出了建议并附上方案 Issue #429 · imaegoo/twikoo ，原本想整理发出来，但一拖再拖，方案也迭代了三次做了一些优化。最近看了 @心流的如何申请一个永久免费的 Mongodb 数据库又想起来这回事了，于是优化代码、构建仓库、整理此文以及为作者附新方案")])])])}),[],!1,null,null,null);e.default=n.exports}}]);