"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[5594],{2709:(e,o,d)=>{d.r(o),d.d(o,{data:()=>i});const i={key:"v-6eec9732",path:"/css/2023/20230129.html",title:"vh 存在问题？试试动态视口单位",lang:"zh-CN",frontmatter:{title:"vh 存在问题？试试动态视口单位",date:"2023-01-29T00:00:00.000Z",tags:["css"],categories:["css"]},excerpt:"",headers:[{level:2,title:"vh 在移动端存在的问题！",slug:"vh-在移动端存在的问题",children:[]},{level:2,title:"新视口相关单位之 lvh、svh、dvh",slug:"新视口相关单位之-lvh、svh、dvh",children:[]},{level:2,title:"dvh、svh、lvh 它们的兼容性（2023-01-25）",slug:"dvh、svh、lvh-它们的兼容性-2023-01-25",children:[]}],git:{updatedTime:null,contributors:[]}}},2818:(e,o,d)=>{d.r(o),d.d(o,{default:()=>w});var i=d(6252);const c=(0,i.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>大部分同学都知道，在 CSS 世界中，有 vw、vh、vmax、vmin 这几个与视口 Viewport 相关的单位。 正常而言：</p><ol><li>1vw 等于1/100的视口宽度 （Viewport Width）</li><li>1vh 等于1/100的视口高度 （Viewport Height）</li><li>vmin — vmin 的值是当前 vw 和 vh 中较小的值</li><li>vmax — vw 和 vh 中较大的值</li></ol></div><h2 id="vh-在移动端存在的问题" tabindex="-1"><a class="header-anchor" href="#vh-在移动端存在的问题" aria-hidden="true">#</a> vh 在移动端存在的问题！</h2><p>但是，在移动端，情况就不太一样了。<strong>100vh 不总是等于一屏幕的高度</strong>。有的时候，100vh 高度会出现滚动条。</p><p>根因在于：</p><ol><li>很多浏览器，在计算 100vh 的高度的时候，会把地址栏等相关控件的高度计算在内2</li><li>同时，很多时候，由于会弹出软键盘等操作，在弹出的过程中，<code>100vh</code> 的计算值并不会实时发生变化！</li></ol><p>这也就变相导致了许多基于 <code>100vh</code> 想实现的效果无形中会产生很多问题。</p>',6),l=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/022037bd4a0042be92533b7fd7e0f990~tplv-k3u1fbpfcp-watermark.image?",data:"aurora"})],-1),v=(0,i.uE)('<h2 id="新视口相关单位之-lvh、svh、dvh" tabindex="-1"><a class="header-anchor" href="#新视口相关单位之-lvh、svh、dvh" aria-hidden="true">#</a> 新视口相关单位之 lvh、svh、dvh</h2><p>为了解决上述的问题，规范新推出了三类单位，分别是：</p><ol><li>The large viewport units（大视口单位）：<code>lvw</code>,<code>lvh</code>, <code>lvi</code>, <code>lvb</code>, <code>lvmin</code>, and <code>lvmax</code></li><li>The small viewport units（小视口单位）：<code>svw</code>, <code>svh</code>, <code>svi</code>, <code>svb</code>, <code>svmin</code>, and <code>svmax</code></li><li>The dynamic viewport units（动态视口单位）：<code>dvw</code>, <code>dvh</code>, <code>dvi</code>, <code>dvb</code>, <code>dvmin</code>, and <code>dvmax</code></li></ol><p>别看看上去很多，其实很好记忆，vw/vw/vmax/vmin 的前缀是 v，而：</p><ol><li>大视口单位的前缀是 <code>lv</code>，意为 large viewport</li><li>小视口单位的前缀是 <code>sv</code>，意为 small viewport</li><li>动态视口单位的前缀是 <code>dv</code>，意为 dynamic viewport</li></ol><p>这里我们着重关注 <code>lvh</code>、<code>svh</code>、<code>dvh</code>。它们三者与 <code>vw</code> 有什么异同呢？</p><p>先来看大视口与小视口，规范对它们的定义是：</p><ol><li><strong>Large Viewport</strong>: The viewport sized assuming any UA interfaces that are dynamically expanded and retracted to be retracted.</li><li><strong>Small Viewport</strong>: The viewport sized assuming any UA interfaces that are dynamically expanded and retracted to be expanded.</li></ol><p>翻译一下：</p><ol><li>大视口（Large Viewport）：视口大小假设任何动态扩展和缩回的 UA 界面都没有展开</li><li>小视口（Small Viewport）：视口大小假设任何动态扩展和缩回的 UA 界面都展开了</li></ol>',10),t=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b23db58e216467ba5f2e542c1fb1967~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",data:"aurora"})],-1),a=(0,i._)("p",null,"因此，对应到高度之上，其状态大致如下：",-1),p=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea6ab4dee50646b2a887318ade837367~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",data:"aurora"})],-1),r=(0,i._)("p",null,"理解了大视口与小视口之后，再理解动态视口就轻松了些。",-1),n=(0,i._)("p",null,"简单而言，动态视口的意思是：",-1),h=(0,i._)("ol",null,[(0,i._)("li",null,"动态工具栏展开时，动态视口等于小视口的大小"),(0,i._)("li",null,"当动态工具栏被缩回时，动态视口等于大视口的大小")],-1),s=(0,i._)("p",null,"因此，也就能得到下面这张图：",-1),m=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8195ba51c544d2bb41878417db2ef36~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",data:"aurora"})],-1),b=(0,i.uE)('<p>其中，<code>dvh</code>、<code>dvw</code>、<code>dvmax</code>、<code>dvmin</code> 对标 <code>vh</code>、<code>vw</code>、<code>vmax</code>、<code>vmin</code> 比较好理解。</p><p>剩下，<code>dvi</code> 和 <code>dvb</code> 解释一下。其实，在之前也有 <code>vi</code> 和 <code>vb</code> 两个单位：</p><ol><li><code>vi</code>：vi 代表 Viewport Inline，代表文档的内联方向。在水平书写方向上，这对应于视口的宽度，而在垂直书写方向上，这表示视口的高度。记住 inline 方向的简单方法是记住它与文本的方向相同。</li><li><code>vb</code>：vb 代表 Viewport block，代表文档的块方向。这与 vi 水平书写方向相反，这将对应于视口高度，而在垂直文档中，这将表示视口的宽度。</li></ol><p>理解了 <code>vi</code> 与 <code>vb</code>，<code>dvi</code> 与 <code>dvb</code> 也就很好理解了，它们分别表示动态视口下的 Viewport Inline 与 Viewport block。同理去理解大视口、小视口下的 <code>lvi</code>、<code>lvb</code>、<code>dvi</code>、<code>dvb</code>。</p><h2 id="dvh、svh、lvh-它们的兼容性-2023-01-25" tabindex="-1"><a class="header-anchor" href="#dvh、svh、lvh-它们的兼容性-2023-01-25" aria-hidden="true">#</a> dvh、svh、lvh 它们的兼容性（2023-01-25）</h2><p>截止到书写本文的时间，它们已经被 Chrome 108+ 支持，而 firefox、Safari 在更早的阶段，就已经开始支持这些新单位了。</p><p>看看 CanIUse：</p>',7),u=(0,i._)("p",null,[(0,i._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"img",originSrc:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fc48b9a92cd4de987d8c8b0db2f936d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",data:"aurora"})],-1),g=(0,i._)("p",null,[(0,i._)("strong",null,"因此，在不久的将来，全面使用 dvh 替代 vh，能有效的减少非常多因为 vh 在移动端的表现而引起的问题"),(0,i.Uk)("。")],-1),f={},w=(0,d(3744).Z)(f,[["render",function(e,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[c,l,v,t,a,p,r,n,h,s,m,b,u,g],64)}]])}}]);