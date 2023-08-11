import{_ as s,v as n,b as a,R as l}from"./chunks/framework.0f10bb36.js";const m=JSON.parse('{"title":"LeetCode 2787. 将一个数字表示成幂的和的方案数","description":"","frontmatter":{"title":"LeetCode 2787. 将一个数字表示成幂的和的方案数","date":"2023-08-11T00:00:00.000Z","tags":["dp","01背包"]},"headers":[],"relativePath":"posts/LeetCode 2787. 将一个数字表示成幂的和的方案数.md","filePath":"posts/LeetCode 2787. 将一个数字表示成幂的和的方案数.md"}'),p={name:"posts/LeetCode 2787. 将一个数字表示成幂的和的方案数.md"},e=l(`<hr><h2 id="dp-01背包" tabindex="-1">dp | 01背包 <a class="header-anchor" href="#dp-01背包" aria-label="Permalink to &quot;dp | 01背包&quot;">​</a></h2><h2 id="leetcode-2787-将一个数字表示成幂的和的方案数" tabindex="-1"><a href="https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers/" target="_blank" rel="noreferrer">LeetCode 2787. 将一个数字表示成幂的和的方案数</a> <a class="header-anchor" href="#leetcode-2787-将一个数字表示成幂的和的方案数" aria-label="Permalink to &quot;[LeetCode 2787. 将一个数字表示成幂的和的方案数](https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers/)&quot;">​</a></h2><p>给你两个 <strong>正</strong> 整数 <code>n</code> 和 <code>x</code> 。</p><p>请你返回将 <code>n</code> 表示成一些 <strong>互不相同</strong> 正整数的 <code>x</code> 次幂之和的方案数。换句话说，你需要返回互不相同整数、</p><p><code>[n1, n2, ..., nk]</code> 的集合数目，满足 <code>n = n1^x + n2^x + ... + nk^x</code> 。</p><p>由于答案可能非常大，请你将它对 <code>10^9 + 7</code> 取余后返回。</p><p>比方说，<code>n = 160</code> 且 <code>x = 3</code> ，一个表示 <code>n</code> 的方法是 <code>n = 2^3 + 3^3 + 5^3</code> 。</p><h3 id="示例-1" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例 1：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：n = 10, x = 2</span></span>
<span class="line"><span style="color:#000000;">输出：1</span></span>
<span class="line"><span style="color:#000000;">解释：我们可以将 n 表示为：n = 3^2 + 1^2 = 10 。</span></span>
<span class="line"><span style="color:#000000;">这是唯一将 10 表达成不同整数 2 次方之和的方案。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="示例-2" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例 2：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：n = 4, x = 1</span></span>
<span class="line"><span style="color:#000000;">输出：2</span></span>
<span class="line"><span style="color:#000000;">解释：我们可以将 n 按以下方案表示：</span></span>
<span class="line"><span style="color:#000000;">- n = 4^1 = 4 。</span></span>
<span class="line"><span style="color:#000000;">- n = 3^1 + 1^1 = 4 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="提示" tabindex="-1">提示： <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示：&quot;">​</a></h3><ul><li>1 &lt;= n &lt;= 300</li><li>1 &lt;= x &lt;= 5</li></ul><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#008000;">// 01背包 朴素版 200ms</span></span>
<span class="line"><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> MOD = </span><span style="color:#098658;">1000000007</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">Solution</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">public:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">numberOfWays</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">x</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#008000;">        // 预处理 i 的 x 次幂</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#001080;">p</span><span style="color:#000000;">[n + </span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">1</span><span style="color:#000000;">; i &lt;= n ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">p</span><span style="color:#000000;">[i] = i;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = </span><span style="color:#098658;">2</span><span style="color:#000000;">; j &lt;= x ; j ++ )</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">p</span><span style="color:#000000;">[i] *= i;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#008000;">        // 01 背包</span></span>
<span class="line"><span style="color:#008000;">        // f[i][j] 从前 i 个数中挑选若干个数，组成和为 j 的方案数</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#001080;">f</span><span style="color:#000000;">[n + </span><span style="color:#098658;">1</span><span style="color:#000000;">][n + </span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">memset</span><span style="color:#000000;">(f, </span><span style="color:#098658;">0</span><span style="color:#000000;">, sizeof f);</span></span>
<span class="line"><span style="color:#008000;">        // 初始化 从前 0 个数中挑选，组成和为 0 的方案数为 1 </span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">f</span><span style="color:#000000;">[</span><span style="color:#098658;">0</span><span style="color:#000000;">][</span><span style="color:#098658;">0</span><span style="color:#000000;">] = </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#008000;">        // for(int i = 0; i &lt;= n ; i ++ ) f[i][0] = 1;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">1</span><span style="color:#000000;">; i &lt;= n ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = </span><span style="color:#098658;">0</span><span style="color:#000000;">; j &lt;= n ; j ++ ) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">f</span><span style="color:#000000;">[i][j] = </span><span style="color:#001080;">f</span><span style="color:#000000;">[i - </span><span style="color:#098658;">1</span><span style="color:#000000;">][j];</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (j &gt;= </span><span style="color:#001080;">p</span><span style="color:#000000;">[i])</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">f</span><span style="color:#000000;">[i][j] = </span><span style="color:#001080;">f</span><span style="color:#000000;">[i][j] + </span><span style="color:#001080;">f</span><span style="color:#000000;">[i - </span><span style="color:#098658;">1</span><span style="color:#000000;">][j - </span><span style="color:#001080;">p</span><span style="color:#000000;">[i]];</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">f</span><span style="color:#000000;">[n][n] % MOD;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><hr><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#008000;">// 01背包 优化版 24ms</span></span>
<span class="line"><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> MOD = </span><span style="color:#098658;">1000000007</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">Solution</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">public:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">numberOfWays</span><span style="color:#000000;">(</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">x</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#008000;">        // 预处理 i 的 x 次幂</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#001080;">p</span><span style="color:#000000;">[n + </span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">1</span><span style="color:#000000;">; i &lt;= n ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">p</span><span style="color:#000000;">[i] = i;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = </span><span style="color:#098658;">2</span><span style="color:#000000;">; j &lt;= x ; j ++ )</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">p</span><span style="color:#000000;">[i] *= i;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#008000;">        // 01 背包</span></span>
<span class="line"><span style="color:#008000;">        // f[i][j] 从前 i 个数中挑选若干个数，组成和为 j 的方案数</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#0000FF;">long</span><span style="color:#000000;"> </span><span style="color:#001080;">f</span><span style="color:#000000;">[n + </span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">memset</span><span style="color:#000000;">(f, </span><span style="color:#098658;">0</span><span style="color:#000000;">, sizeof f);</span></span>
<span class="line"><span style="color:#008000;">        // 初始化 从前 0 个数中挑选，组成和为 0 的方案数为 1 </span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">f</span><span style="color:#000000;">[</span><span style="color:#098658;">0</span><span style="color:#000000;">] = </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#008000;">        // for(int i = 0; i &lt;= n ; i ++ ) f[i][0] = 1;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">1</span><span style="color:#000000;">; i &lt;= n ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = n; j &gt;= </span><span style="color:#001080;">p</span><span style="color:#000000;">[i] ; j -- ) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">f</span><span style="color:#000000;">[j] = </span><span style="color:#001080;">f</span><span style="color:#000000;">[j] + </span><span style="color:#001080;">f</span><span style="color:#000000;">[j - </span><span style="color:#001080;">p</span><span style="color:#000000;">[i]];</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">f</span><span style="color:#000000;">[n] % MOD;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,17),o=[e];function r(c,t,i,y,b,u){return n(),a("div",null,o)}const F=s(p,[["render",r]]);export{m as __pageData,F as default};
