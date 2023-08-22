import{_ as s,v as n,b as a,R as l}from"./chunks/framework.0f10bb36.js";const F=JSON.parse('{"title":"AcWing 339. 圆形数字","description":"","frontmatter":{"title":"AcWing 339. 圆形数字","date":"2023-08-22T00:00:00.000Z","tags":["数位dp","dp"]},"headers":[],"relativePath":"posts/AcWing 339. 圆形数字.md","filePath":"posts/AcWing 339. 圆形数字.md"}'),p={name:"posts/AcWing 339. 圆形数字.md"},o=l(`<hr><h2 id="数位dp" tabindex="-1">数位dp <a class="header-anchor" href="#数位dp" aria-label="Permalink to &quot;数位dp&quot;">​</a></h2><h2 id="acwing-339-圆形数字" tabindex="-1"><a href="https://www.acwing.com/problem/content/341/" target="_blank" rel="noreferrer">AcWing 339. 圆形数字</a> <a class="header-anchor" href="#acwing-339-圆形数字" aria-label="Permalink to &quot;[AcWing 339. 圆形数字](https://www.acwing.com/problem/content/341/)&quot;">​</a></h2><p>定义圆形数字如下：</p><p>把一个十进制数转换为一个无符号二进制数，若该二进制数中 0 的个数大于或等于 1 的个数，则它就是一个圆</p><p>形数字。现在给定两个正整数 a 和 b，请问在区间 [a,b] 内有多少个圆形数字。</p><h3 id="输入格式" tabindex="-1">输入格式 <a class="header-anchor" href="#输入格式" aria-label="Permalink to &quot;输入格式&quot;">​</a></h3><p>输入占一行，包含两个整数 a 和 b。</p><h3 id="输出格式" tabindex="-1">输出格式 <a class="header-anchor" href="#输出格式" aria-label="Permalink to &quot;输出格式&quot;">​</a></h3><p>输出一个整数，表示圆形数字的个数。</p><h3 id="数据范围" tabindex="-1">数据范围 <a class="header-anchor" href="#数据范围" aria-label="Permalink to &quot;数据范围&quot;">​</a></h3><ul><li>1 ≤ a &lt; b ≤ 2 × 10^9</li></ul><h3 id="输入样例" tabindex="-1">输入样例： <a class="header-anchor" href="#输入样例" aria-label="Permalink to &quot;输入样例：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">2 12</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="输出样例" tabindex="-1">输出样例： <a class="header-anchor" href="#输出样例" aria-label="Permalink to &quot;输出样例：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="代码" tabindex="-1">代码： <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码：&quot;">​</a></h3><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus has-diff"><code><span class="line"><span style="color:#008000;">// 数位 dp</span></span>
<span class="line"><span style="color:#AF00DB;">#include</span><span style="color:#0000FF;"> </span><span style="color:#A31515;">&lt;bits/stdc++.h&gt;</span></span>
<span class="line"><span style="color:#AF00DB;">#define</span><span style="color:#0000FF;"> endl &#39;\\n&#39;</span></span>
<span class="line"><span style="color:#AF00DB;">#define</span><span style="color:#0000FF;"> ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);</span></span>
<span class="line"><span style="color:#AF00DB;">using</span><span style="color:#000000;"> </span><span style="color:#0000FF;">namespace</span><span style="color:#000000;"> </span><span style="color:#267F99;">std</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">using</span><span style="color:#000000;"> </span><span style="color:#267F99;">i64</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#0000FF;">long</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> N = </span><span style="color:#098658;">2e5</span><span style="color:#000000;"> + </span><span style="color:#098658;">10</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">dp</span><span style="color:#000000;">[</span><span style="color:#098658;">50</span><span style="color:#000000;">][</span><span style="color:#098658;">1</span><span style="color:#000000;"> &lt;&lt; </span><span style="color:#098658;">10</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#008000;">// val: 已经构造的数位, 模 k = val, 最总结果 == 0, 表示可以整除 k</span></span>
<span class="line"><span style="color:#008000;">// diff: 表示 0 与 1 的差, diff &gt;= 0 表示 0 的个数大于等于 1 的个数</span></span>
<span class="line"><span style="color:#008000;">// 返回从 i 开始填数字</span></span>
<span class="line"><span style="color:#008000;">// is_limit 表示前面填的数字是否都是 n 对应位上, 如果为 true, 那么当前位至多为 int(s[i]), 否则至多为 9 </span></span>
<span class="line"><span style="color:#008000;">// is_num 表示前面是否填了数字(是否跳过), 如果为 true, 那么当前位可以从 0 开始, 如果为 false, 那么我们可以跳过, 或者从 1 开始填数字</span></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">f</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">i</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">diff</span><span style="color:#000000;">, </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">is_limit</span><span style="color:#000000;">, </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">is_num</span><span style="color:#000000;">, </span><span style="color:#267F99;">string</span><span style="color:#000000;"> </span><span style="color:#001080;">s</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (i == </span><span style="color:#001080;">s</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">())</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> is_num &amp;&amp; diff &gt;= </span><span style="color:#098658;">50</span><span style="color:#000000;">;</span><span style="color:#008000;"> // 找到了一个合法数字</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!is_limit &amp;&amp; is_num &amp;&amp; </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][diff] != -</span><span style="color:#098658;">1</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][diff];</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> res = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!is_num)</span><span style="color:#008000;"> // 可以跳过当前数位</span></span>
<span class="line"><span style="color:#000000;">        res = </span><span style="color:#795E26;">f</span><span style="color:#000000;">(i + </span><span style="color:#098658;">1</span><span style="color:#000000;">, diff, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, s);</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> down = </span><span style="color:#098658;">1</span><span style="color:#000000;"> - is_num;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> up = is_limit ? </span><span style="color:#001080;">s</span><span style="color:#000000;">[i] - </span><span style="color:#A31515;">&#39;0&#39;</span><span style="color:#000000;"> : </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span><span style="color:#008000;"> // 如果前面填的数字都和 n 的一样，那么这一位至多填数字 s[i] (否则就超过 n 啦)</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> d = down; d &lt;= up ; d ++ )</span></span>
<span class="line"><span style="color:#000000;">        res += </span><span style="color:#795E26;">f</span><span style="color:#000000;">(i + </span><span style="color:#098658;">1</span><span style="color:#000000;">, diff + (d == </span><span style="color:#098658;">0</span><span style="color:#000000;"> ? </span><span style="color:#098658;">1</span><span style="color:#000000;"> : -</span><span style="color:#098658;">1</span><span style="color:#000000;">), is_limit &amp;&amp; d == up, </span><span style="color:#0000FF;">true</span><span style="color:#000000;">, s);</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!is_limit &amp;&amp; is_num)</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][diff] = res;</span><span style="color:#008000;"> // 记忆化</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> res;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">calc</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">x</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">num</span><span style="color:#000000;">[</span><span style="color:#098658;">50</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> len = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (x) </span><span style="color:#001080;">num</span><span style="color:#000000;">[ ++ len] = x % </span><span style="color:#098658;">2</span><span style="color:#000000;">, x /= </span><span style="color:#098658;">2</span><span style="color:#000000;">;</span><span style="color:#008000;"> // 将数字转化为 r 进制</span></span>
<span class="line"><span style="color:#000000;">    string s = </span><span style="color:#A31515;">&quot;&quot;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = len; i &gt;= </span><span style="color:#098658;">1</span><span style="color:#000000;"> ; i -- )</span></span>
<span class="line"><span style="color:#000000;">        s += </span><span style="color:#001080;">num</span><span style="color:#000000;">[i] + </span><span style="color:#A31515;">&#39;0&#39;</span><span style="color:#000000;">;</span><span style="color:#008000;"> // 变为字符串, 正序</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> n = </span><span style="color:#001080;">s</span><span style="color:#000000;">.</span><span style="color:#795E26;">length</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">memset</span><span style="color:#000000;">(dp, -</span><span style="color:#098658;">1</span><span style="color:#000000;">, sizeof dp);</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#795E26;">f</span><span style="color:#000000;">(</span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#098658;">50</span><span style="color:#000000;">, </span><span style="color:#0000FF;">true</span><span style="color:#000000;">, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, s);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">void</span><span style="color:#000000;"> </span><span style="color:#795E26;">solve</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> l, r;</span></span>
<span class="line"><span style="color:#000000;">    cin &gt;&gt; l &gt;&gt; r;</span></span>
<span class="line"><span style="color:#000000;">    cout &lt;&lt; </span><span style="color:#795E26;">calc</span><span style="color:#000000;">(r) - </span><span style="color:#795E26;">calc</span><span style="color:#000000;">(l - </span><span style="color:#098658;">1</span><span style="color:#000000;">) &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">main</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">    ios;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> T = </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (T -- ) </span><span style="color:#795E26;">solve</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><hr><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#008000;">// 数位 dp</span></span>
<span class="line"><span style="color:#AF00DB;">#include</span><span style="color:#0000FF;"> </span><span style="color:#A31515;">&lt;bits/stdc++.h&gt;</span></span>
<span class="line"><span style="color:#AF00DB;">#define</span><span style="color:#0000FF;"> endl &#39;\\n&#39;</span></span>
<span class="line"><span style="color:#AF00DB;">#define</span><span style="color:#0000FF;"> ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);</span></span>
<span class="line"><span style="color:#AF00DB;">using</span><span style="color:#000000;"> </span><span style="color:#0000FF;">namespace</span><span style="color:#000000;"> </span><span style="color:#267F99;">std</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AF00DB;">using</span><span style="color:#000000;"> </span><span style="color:#267F99;">i64</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#0000FF;">long</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> N = </span><span style="color:#098658;">2e5</span><span style="color:#000000;"> + </span><span style="color:#098658;">10</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">dp</span><span style="color:#000000;">[</span><span style="color:#098658;">50</span><span style="color:#000000;">][</span><span style="color:#098658;">50</span><span style="color:#000000;">][</span><span style="color:#098658;">1</span><span style="color:#000000;"> &lt;&lt; </span><span style="color:#098658;">10</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#008000;">// val: 已经构造的数位, 模 k = val, 最总结果 == 0, 表示可以整除 k</span></span>
<span class="line"><span style="color:#008000;">// cnt0: 0 的个数</span></span>
<span class="line"><span style="color:#008000;">// cnt1: 1 的个数</span></span>
<span class="line"><span style="color:#008000;">// 返回从 i 开始填数字</span></span>
<span class="line"><span style="color:#008000;">// is_limit 表示前面填的数字是否都是 n 对应位上, 如果为 true, 那么当前位至多为 int(s[i]), 否则至多为 9 </span></span>
<span class="line"><span style="color:#008000;">// is_num 表示前面是否填了数字(是否跳过), 如果为 true, 那么当前位可以从 0 开始, 如果为 false, 那么我们可以跳过, 或者从 1 开始填数字</span></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">f</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">i</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">cnt0</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">cnt1</span><span style="color:#000000;">, </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">is_limit</span><span style="color:#000000;">, </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">is_num</span><span style="color:#000000;">, </span><span style="color:#267F99;">string</span><span style="color:#000000;"> </span><span style="color:#001080;">s</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (i == </span><span style="color:#001080;">s</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">())</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> is_num &amp;&amp; cnt0 &gt;= cnt1;</span><span style="color:#008000;"> // 找到了一个合法数字</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!is_limit &amp;&amp; is_num &amp;&amp; </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][cnt0][cnt1] != -</span><span style="color:#098658;">1</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][cnt0][cnt1];</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> res = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!is_num)</span><span style="color:#008000;"> // 可以跳过当前数位</span></span>
<span class="line"><span style="color:#000000;">        res = </span><span style="color:#795E26;">f</span><span style="color:#000000;">(i + </span><span style="color:#098658;">1</span><span style="color:#000000;">, cnt0, cnt1, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, s);</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> down = </span><span style="color:#098658;">1</span><span style="color:#000000;"> - is_num;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> up = is_limit ? </span><span style="color:#001080;">s</span><span style="color:#000000;">[i] - </span><span style="color:#A31515;">&#39;0&#39;</span><span style="color:#000000;"> : </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span><span style="color:#008000;"> // 如果前面填的数字都和 n 的一样，那么这一位至多填数字 s[i] (否则就超过 n 啦)</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> d = down; d &lt;= up ; d ++ )</span></span>
<span class="line"><span style="color:#000000;">        res += </span><span style="color:#795E26;">f</span><span style="color:#000000;">(i + </span><span style="color:#098658;">1</span><span style="color:#000000;">, cnt0 + (!d), cnt1 + (d == </span><span style="color:#098658;">1</span><span style="color:#000000;">), is_limit &amp;&amp; d == up, </span><span style="color:#0000FF;">true</span><span style="color:#000000;">, s);</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!is_limit &amp;&amp; is_num)</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][cnt0][cnt1] = res;</span><span style="color:#008000;"> // 记忆化</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> res;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">calc</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">x</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">num</span><span style="color:#000000;">[</span><span style="color:#098658;">50</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> len = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (x) </span><span style="color:#001080;">num</span><span style="color:#000000;">[ ++ len] = x % </span><span style="color:#098658;">2</span><span style="color:#000000;">, x /= </span><span style="color:#098658;">2</span><span style="color:#000000;">;</span><span style="color:#008000;"> // 将数字转化为 r 进制</span></span>
<span class="line"><span style="color:#000000;">    string s = </span><span style="color:#A31515;">&quot;&quot;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = len; i &gt;= </span><span style="color:#098658;">1</span><span style="color:#000000;"> ; i -- )</span></span>
<span class="line"><span style="color:#000000;">        s += </span><span style="color:#001080;">num</span><span style="color:#000000;">[i] + </span><span style="color:#A31515;">&#39;0&#39;</span><span style="color:#000000;">;</span><span style="color:#008000;"> // 变为字符串, 正序</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> n = </span><span style="color:#001080;">s</span><span style="color:#000000;">.</span><span style="color:#795E26;">length</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">memset</span><span style="color:#000000;">(dp, -</span><span style="color:#098658;">1</span><span style="color:#000000;">, sizeof dp);</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#795E26;">f</span><span style="color:#000000;">(</span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#0000FF;">true</span><span style="color:#000000;">, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, s);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">void</span><span style="color:#000000;"> </span><span style="color:#795E26;">solve</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> l, r;</span></span>
<span class="line"><span style="color:#000000;">    cin &gt;&gt; l &gt;&gt; r;</span></span>
<span class="line"><span style="color:#000000;">    cout &lt;&lt; </span><span style="color:#795E26;">calc</span><span style="color:#000000;">(r) - </span><span style="color:#795E26;">calc</span><span style="color:#000000;">(l - </span><span style="color:#098658;">1</span><span style="color:#000000;">) &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">main</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">    ios;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> T = </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (T -- ) </span><span style="color:#795E26;">solve</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,20),e=[o];function r(c,t,y,i,b,u){return n(),a("div",null,e)}const d=s(p,[["render",r]]);export{F as __pageData,d as default};
