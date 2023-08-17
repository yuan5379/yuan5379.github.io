"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[8972],{6525:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-966a1ee0",path:"/js/2023/20230612.html",title:"js练习题",lang:"zh-CN",frontmatter:{title:"js练习题",date:"2023-06-12T00:00:00.000Z",tags:["js"],categories:["js"]},excerpt:"",headers:[{level:2,title:"实现一个数组扁平化的函数 flat",slug:"实现一个数组扁平化的函数-flat",children:[]},{level:2,title:"手写实现一个instanceof",slug:"手写实现一个instanceof",children:[]},{level:2,title:"手写Promise.all",slug:"手写promise-all",children:[]},{level:2,title:"手写一个并发函数",slug:"手写一个并发函数",children:[]}],git:{updatedTime:null,contributors:[]}}},742:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>js常见面试题</p></div><h2 id="实现一个数组扁平化的函数-flat" tabindex="-1"><a class="header-anchor" href="#实现一个数组扁平化的函数-flat" aria-hidden="true">#</a> 实现一个数组扁平化的函数 flat</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">flatten</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> depth <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list\n  <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">flatten</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> depth <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="手写实现一个instanceof" tabindex="-1"><a class="header-anchor" href="#手写实现一个instanceof" aria-hidden="true">#</a> 手写实现一个instanceof</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myInstanceOf</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 获取对象原型</span>\n  <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 遍历原型链</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 如果原型等于右侧构造函数的原型，返回 true</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 继续向上查找原型链</span>\n    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 如果没有找到，返回 false</span>\n  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="手写promise-all" tabindex="-1"><a class="header-anchor" href="#手写promise-all" aria-hidden="true">#</a> 手写Promise.all</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 该函数接受一个包含 Promise 对象的数组参数，在所有 Promise 都成功的情况下，返回一个包含所有 Promise 结果的数组；如果其中一个 Promise 失败，则返回一个拒绝状态的 Promise，并将失败原因作为拒绝的原因。</span>\n<span class="token keyword">function</span> <span class="token function">myPromiseAll</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> completedPromisesCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    promises<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          results<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">;</span>\n          completedPromisesCount<span class="token operator">++</span><span class="token punctuation">;</span>\n\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>completedPromisesCount <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="手写一个并发函数" tabindex="-1"><a class="header-anchor" href="#手写一个并发函数" aria-hidden="true">#</a> 手写一个并发函数</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * \n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">urls</span> 待请求的 url 数组\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">maxNum</span> 最大并发数 \n * <span class="token keyword">@returns</span> \n */</span>\n<span class="token keyword">function</span> <span class="token function">ComplicatedBy</span><span class="token punctuation">(</span><span class="token parameter">urls<span class="token punctuation">,</span>maxNum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>urls<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n         <span class="token keyword">return</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 存储成功的数组</span>\n      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 当前请求数组的下标</span>\n      <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 当前请求完成的数量</span>\n      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> urls<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">const</span> url <span class="token operator">=</span> urls<span class="token punctuation">[</span>index<span class="token punctuation">]</span>\n        <span class="token keyword">const</span> i <span class="token operator">=</span> index <span class="token comment">// 记录放在 results 哪一个位置</span>\n        index<span class="token operator">++</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n           <span class="token keyword">const</span> resp <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>\n           results<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> resp\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n           results<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> error\n        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n          count<span class="token operator">++</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> urls<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n             <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n          <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// 控制并发数</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> maxNum<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>',9),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])}}]);