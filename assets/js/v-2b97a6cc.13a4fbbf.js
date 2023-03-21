"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[7299],{1521:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-2b97a6cc",path:"/axios/2019/20191102.html",title:"axios拦截器",lang:"zh-CN",frontmatter:{title:"axios拦截器",date:"2019-11-02T00:00:00.000Z",tags:["axios"],categories:["axios"]},excerpt:"",headers:[{level:2,title:"请求拦截器：interceptors.request",slug:"请求拦截器-interceptors-request",children:[]},{level:2,title:"响应拦截器：interceptors.response",slug:"响应拦截器-interceptors-response",children:[]},{level:2,title:"使用注意事项",slug:"使用注意事项",children:[]}],git:{updatedTime:null,contributors:[]}}},6438:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<p>axios本身有两种拦截器:请求拦截器、响应拦截器</p><h2 id="请求拦截器-interceptors-request" tabindex="-1"><a class="header-anchor" href="#请求拦截器-interceptors-request" aria-hidden="true">#</a> 请求拦截器：interceptors.request</h2><pre><code>axios每次开始请求时先执行此逻辑，进行axios出发前的配置，也可以做检查工作\n\n检查ok的情况下就开始向服务器端发请求\n</code></pre><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 请求拦截器</span>\naxios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 放置业务逻辑代码</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// axios发生错误的处理</span>\n  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="响应拦截器-interceptors-response" tabindex="-1"><a class="header-anchor" href="#响应拦截器-interceptors-response" aria-hidden="true">#</a> 响应拦截器：interceptors.response</h2><pre><code>axios完成与服务器端交互回到客户端后就执行此处逻辑，在这个地方可以做一些后续收尾事宜，例如判断axios请求是否成功\n</code></pre><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 响应拦截器</span>\naxios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 放置业务逻辑代码</span>\n  <span class="token comment">// response是服务器端返回来的数据信息，与Promise获得数据一致</span>\n  <span class="token keyword">return</span> response<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// axios请求服务器端发生错误的处理</span>\n  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="使用注意事项" tabindex="-1"><a class="header-anchor" href="#使用注意事项" aria-hidden="true">#</a> 使用注意事项</h2><pre><code>1.各个拦截器的第一个函数参数需要设置为 “箭头函数” ，使得内部this与外部保持一致，都是Vue实例\n2.拦截器需要写请求之前\n</code></pre>',9),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])}}]);