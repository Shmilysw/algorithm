import{_ as s,v as n,b as a,R as l}from"./chunks/framework.12f635d0.js";const d=JSON.parse('{"title":"LeetCode 2376. 统计特殊整数","description":"","frontmatter":{"title":"LeetCode 2376. 统计特殊整数","date":"2023-07-31T00:00:00.000Z","tags":["dp","数位dp"]},"headers":[],"relativePath":"posts/LeetCode 2376. 统计特殊整数.md","filePath":"posts/LeetCode 2376. 统计特殊整数.md"}'),p={name:"posts/LeetCode 2376. 统计特殊整数.md"},o=l(`<hr><h2 id="数位dp" tabindex="-1">数位dp <a class="header-anchor" href="#数位dp" aria-label="Permalink to &quot;数位dp&quot;">​</a></h2><h2 id="_2376-统计特殊整数" tabindex="-1"><a href="https://leetcode.cn/problems/count-special-integers/" target="_blank" rel="noreferrer">2376. 统计特殊整数</a> <a class="header-anchor" href="#_2376-统计特殊整数" aria-label="Permalink to &quot;[2376. 统计特殊整数](https://leetcode.cn/problems/count-special-integers/)&quot;">​</a></h2><p><code>困难</code></p><p>如果一个正整数每一个数位都是 互不相同 的，我们称它是 特殊整数 。</p><p>给你一个 正 整数 n ，请你返回区间 [1, n] 之间特殊整数的数目。</p><h3 id="示例-1" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例 1：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：n = 20</span></span>
<span class="line"><span style="color:#000000;">输出：19</span></span>
<span class="line"><span style="color:#000000;">解释：1 到 20 之间所有整数除了 11 以外都是特殊整数。所以总共有 19 个特殊整数。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="示例-2" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例 2：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：n = 5</span></span>
<span class="line"><span style="color:#000000;">输出：5</span></span>
<span class="line"><span style="color:#000000;">解释：1 到 5 所有整数都是特殊整数。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="示例-3" tabindex="-1">示例 3： <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例 3：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：n = 135</span></span>
<span class="line"><span style="color:#000000;">输出：110</span></span>
<span class="line"><span style="color:#000000;">解释：从 1 到 135 总共有 110 个整数是特殊整数。</span></span>
<span class="line"><span style="color:#000000;">不特殊的部分数字为：22 ，114 和 131 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="提示" tabindex="-1">提示： <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示：&quot;">​</a></h3><ul><li>1 &lt;= n &lt;= 2 * 10^9</li></ul><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">Solution</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">public:</span></span>
<span class="line"><span style="color:#008000;">    // 返回从 i 开始填数字，能构造出的特殊整数的数目</span></span>
<span class="line"><span style="color:#008000;">    // is_limit 表示前面填的数字是否都是 n 对应位上的，如果为 true，那么当前位至多为 int(s[i])，否则至多为 9 </span></span>
<span class="line"><span style="color:#008000;">    // is_num 表示前面是否填了数字（是否跳过），如果为 true，那么当前为可以从 0 开始，如果为false，那么我们可以跳过，或者从 1 开始填数字</span></span>
<span class="line"><span style="color:#008000;">    // 时间复杂度，对于 DP 来说，等于状态个数 * 转移个数</span></span>
<span class="line"><span style="color:#008000;">    // O(len(s)) = O(log(n)) * O(digits)</span></span>
<span class="line"><span style="color:#000000;">    string s;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> m;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">countSpecialNumbers</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">        s = </span><span style="color:#795E26;">to_string</span><span style="color:#000000;">(n);</span></span>
<span class="line"><span style="color:#000000;">        m = </span><span style="color:#001080;">s</span><span style="color:#000000;">.</span><span style="color:#795E26;">length</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">memset</span><span style="color:#000000;">(dp, -</span><span style="color:#098658;">1</span><span style="color:#000000;">, </span><span style="color:#0000FF;">sizeof</span><span style="color:#000000;">(dp));</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#795E26;">f</span><span style="color:#000000;">(</span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#0000FF;">true</span><span style="color:#000000;">, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    } </span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">dp</span><span style="color:#000000;">[</span><span style="color:#098658;">10</span><span style="color:#000000;">][</span><span style="color:#098658;">1</span><span style="color:#000000;"> &lt;&lt; </span><span style="color:#098658;">10</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">f</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">i</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">mask</span><span style="color:#000000;">, </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">isLimit</span><span style="color:#000000;">, </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">isNum</span><span style="color:#000000;">){</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (i == m) </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> isNum;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!isLimit &amp;&amp; isNum &amp;&amp; </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][mask] &gt;= </span><span style="color:#098658;">0</span><span style="color:#000000;">) </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][mask];</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> res = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!isNum) res = </span><span style="color:#795E26;">f</span><span style="color:#000000;">(i + </span><span style="color:#098658;">1</span><span style="color:#000000;">, mask, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">);</span><span style="color:#008000;"> // 可以跳过当前数位</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> d = </span><span style="color:#098658;">1</span><span style="color:#000000;"> - isNum, up = isLimit ? </span><span style="color:#001080;">s</span><span style="color:#000000;">[i] - </span><span style="color:#A31515;">&#39;0&#39;</span><span style="color:#000000;"> : </span><span style="color:#098658;">9</span><span style="color:#000000;">; d &lt;= up; ++d)</span><span style="color:#008000;"> // 枚举要填入的数字 d</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> ((mask &gt;&gt; d &amp; </span><span style="color:#098658;">1</span><span style="color:#000000;">) == </span><span style="color:#098658;">0</span><span style="color:#000000;">)</span><span style="color:#008000;"> // d 不在 mask 中</span></span>
<span class="line"><span style="color:#000000;">                res += </span><span style="color:#795E26;">f</span><span style="color:#000000;">(i + </span><span style="color:#098658;">1</span><span style="color:#000000;">, mask | (</span><span style="color:#098658;">1</span><span style="color:#000000;"> &lt;&lt; d), isLimit &amp;&amp; d == up, </span><span style="color:#0000FF;">true</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (!isLimit &amp;&amp; isNum) </span><span style="color:#001080;">dp</span><span style="color:#000000;">[i][mask] = res;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> res;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><hr><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">Solution</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">public:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">countSpecialNumbers</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">        vector&lt;</span><span style="color:#0000FF;">int</span><span style="color:#000000;">&gt; nums;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (n) </span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">push_back</span><span style="color:#000000;">(n % </span><span style="color:#098658;">10</span><span style="color:#000000;">), n /= </span><span style="color:#098658;">10</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> res = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">1</span><span style="color:#000000;">; i &lt; </span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">() ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> t = </span><span style="color:#098658;">9</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = </span><span style="color:#098658;">0</span><span style="color:#000000;">, k = </span><span style="color:#098658;">9</span><span style="color:#000000;">; j &lt; i - </span><span style="color:#098658;">1</span><span style="color:#000000;"> ; j ++ , k -- ) {</span></span>
<span class="line"><span style="color:#000000;">                t *= k;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            res += t;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">reverse</span><span style="color:#000000;">(</span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">begin</span><span style="color:#000000;">(), </span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">end</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">st</span><span style="color:#000000;">[</span><span style="color:#098658;">10</span><span style="color:#000000;">] = {</span><span style="color:#098658;">0</span><span style="color:#000000;">};</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">0</span><span style="color:#000000;">; i &lt; </span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">() ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = !i; j &lt; </span><span style="color:#001080;">nums</span><span style="color:#000000;">[i] ; j ++ ) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">st</span><span style="color:#000000;">[j]) </span><span style="color:#AF00DB;">continue</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> t = </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> k = </span><span style="color:#098658;">0</span><span style="color:#000000;">, u = </span><span style="color:#098658;">9</span><span style="color:#000000;"> - i; k &lt; </span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">() - i - </span><span style="color:#098658;">1</span><span style="color:#000000;"> ; k ++ , u -- ) {</span></span>
<span class="line"><span style="color:#000000;">                    t *= u;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">                res += t;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            </span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">st</span><span style="color:#000000;">[</span><span style="color:#001080;">nums</span><span style="color:#000000;">[i]]) </span><span style="color:#AF00DB;">break</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">st</span><span style="color:#000000;">[</span><span style="color:#001080;">nums</span><span style="color:#000000;">[i]] = </span><span style="color:#0000FF;">true</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#000000;">        set&lt;</span><span style="color:#0000FF;">int</span><span style="color:#000000;">&gt; </span><span style="color:#795E26;">hash</span><span style="color:#000000;">(</span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">begin</span><span style="color:#000000;">(), </span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">end</span><span style="color:#000000;">());</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">hash</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">() == </span><span style="color:#001080;">nums</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">()) res ++ ;</span></span>
<span class="line"><span style="color:#000000;">        </span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> res;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,17),e=[o];function r(c,t,y,i,b,u){return n(),a("div",null,e)}const F=s(p,[["render",r]]);export{d as __pageData,F as default};
