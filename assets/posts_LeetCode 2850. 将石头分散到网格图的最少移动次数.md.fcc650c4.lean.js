import{_ as a,v as l,b as p,T as e,O as o,R as s,M as r,L as c}from"./chunks/framework.0f10bb36.js";const _=JSON.parse('{"title":"LeetCode 2850. 将石头分散到网格图的最少移动次数","description":"","frontmatter":{"title":"LeetCode 2850. 将石头分散到网格图的最少移动次数","date":"2023-09-12T00:00:00.000Z","tags":["全排列"]},"headers":[],"relativePath":"posts/LeetCode 2850. 将石头分散到网格图的最少移动次数.md","filePath":"posts/LeetCode 2850. 将石头分散到网格图的最少移动次数.md"}'),t={name:"posts/LeetCode 2850. 将石头分散到网格图的最少移动次数.md"},i=s('<hr><h2 id="全排列-next-permutation" tabindex="-1">全排列, next_permutation <a class="header-anchor" href="#全排列-next-permutation" aria-label="Permalink to &quot;全排列, next_permutation&quot;">​</a></h2><h2 id="leetcode-2850-将石头分散到网格图的最少移动次数" tabindex="-1"><a href="https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/" target="_blank" rel="noreferrer">LeetCode 2850. 将石头分散到网格图的最少移动次数</a> <a class="header-anchor" href="#leetcode-2850-将石头分散到网格图的最少移动次数" aria-label="Permalink to &quot;[LeetCode 2850. 将石头分散到网格图的最少移动次数](https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/)&quot;">​</a></h2>',3),y=s(`<p>给你一个大小为 3 * 3 ，下标从 0 开始的二维整数矩阵 grid ，分别表示每一个格子里石头的数目。网格图中总共恰好有 9 个石头，一个格子里可能会有 多个 石头。</p><p>每一次操作中，你可以将一个石头从它当前所在格子移动到一个至少有一条公共边的相邻格子。</p><p>请你返回每个格子恰好有一个石头的 最少移动次数 。</p><h3 id="示例-1" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例 1：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：grid = [[1,1,0],[1,1,1],[1,2,1]]</span></span>
<span class="line"><span style="color:#000000;">输出：3</span></span>
<span class="line"><span style="color:#000000;">解释：让每个格子都有一个石头的一个操作序列为：</span></span>
<span class="line"><span style="color:#000000;">1 - 将一个石头从格子 (2,1) 移动到 (2,2) 。</span></span>
<span class="line"><span style="color:#000000;">2 - 将一个石头从格子 (2,2) 移动到 (1,2) 。</span></span>
<span class="line"><span style="color:#000000;">3 - 将一个石头从格子 (1,2) 移动到 (0,2) 。</span></span>
<span class="line"><span style="color:#000000;">总共需要 3 次操作让每个格子都有一个石头。</span></span>
<span class="line"><span style="color:#000000;">让每个格子都有一个石头的最少操作次数为 3 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="示例-2" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例 2：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：grid = [[1,3,0],[1,0,0],[1,0,3]]</span></span>
<span class="line"><span style="color:#000000;">输出：4</span></span>
<span class="line"><span style="color:#000000;">解释：让每个格子都有一个石头的一个操作序列为：</span></span>
<span class="line"><span style="color:#000000;">1 - 将一个石头从格子 (0,1) 移动到 (0,2) 。</span></span>
<span class="line"><span style="color:#000000;">2 - 将一个石头从格子 (0,1) 移动到 (1,1) 。</span></span>
<span class="line"><span style="color:#000000;">3 - 将一个石头从格子 (2,2) 移动到 (1,2) 。</span></span>
<span class="line"><span style="color:#000000;">4 - 将一个石头从格子 (2,2) 移动到 (2,1) 。</span></span>
<span class="line"><span style="color:#000000;">总共需要 4 次操作让每个格子都有一个石头。</span></span>
<span class="line"><span style="color:#000000;">让每个格子都有一个石头的最少操作次数为 4 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="提示" tabindex="-1">提示： <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示：&quot;">​</a></h3><ul><li>grid.length == grid[i].length == 3</li><li>0 &lt;= grid[i][j] &lt;= 9</li><li>grid 中元素之和为 9 。</li></ul><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">全排列是排列数学中常用的算法之一，而C++ STL中就提供了内置的全排列函数 next_permutation.</span></span>
<span class="line"><span style="color:#000000;">next_permutation是一个原地算法（会直接改变这个集合，而不是返回一个集合），</span></span>
<span class="line"><span style="color:#000000;">它对一个可以遍历的集合（如string，如vector），将迭代器范围 [first, last] 的排列 </span></span>
<span class="line"><span style="color:#000000;">排列到下一个排列（第一个是名词，第二个是动词，第三个是名词），其中所有排列的</span></span>
<span class="line"><span style="color:#000000;">集合默认按照operator &lt; 或者 字典序 或者 按照输入到第三个参数 comp 的排列方法排列。</span></span>
<span class="line"><span style="color:#000000;">如果存在这样的“下一个排列”，返回true并执行排列，否则返回false。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">Solution</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">public:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">minimumMoves</span><span style="color:#000000;">(</span><span style="color:#267F99;">vector</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">vector</span><span style="color:#000000;">&lt;</span><span style="color:#0000FF;">int</span><span style="color:#000000;">&gt;&gt;</span><span style="color:#0000FF;">&amp;</span><span style="color:#000000;"> </span><span style="color:#001080;">g</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#008000;">        // next_permutation 全排列</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> n = </span><span style="color:#001080;">g</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">(), m = </span><span style="color:#001080;">g</span><span style="color:#000000;">[</span><span style="color:#098658;">0</span><span style="color:#000000;">].</span><span style="color:#795E26;">size</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        vector&lt;pair&lt;</span><span style="color:#0000FF;">int</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;">&gt;&gt; from, to;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">0</span><span style="color:#000000;">; i &lt; </span><span style="color:#098658;">3</span><span style="color:#000000;"> ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = </span><span style="color:#098658;">0</span><span style="color:#000000;">; j &lt; </span><span style="color:#098658;">3</span><span style="color:#000000;"> ; j ++ ) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">g</span><span style="color:#000000;">[i][j] &gt; </span><span style="color:#098658;">1</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> k = </span><span style="color:#098658;">1</span><span style="color:#000000;">; k &lt; </span><span style="color:#001080;">g</span><span style="color:#000000;">[i][j] ; k ++ )</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#001080;">from</span><span style="color:#000000;">.</span><span style="color:#795E26;">push_back</span><span style="color:#000000;">({i, j});</span></span>
<span class="line"><span style="color:#000000;">                } </span><span style="color:#AF00DB;">else</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">g</span><span style="color:#000000;">[i][j] == </span><span style="color:#098658;">0</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">to</span><span style="color:#000000;">.</span><span style="color:#795E26;">push_back</span><span style="color:#000000;">({i, j});</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> res = </span><span style="color:#098658;">2e9</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">do</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> tmp = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">0</span><span style="color:#000000;">; i &lt; </span><span style="color:#001080;">from</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">() ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0000FF;">auto</span><span style="color:#000000;"> x = </span><span style="color:#001080;">from</span><span style="color:#000000;">[i].</span><span style="color:#001080;">first</span><span style="color:#000000;">, y = </span><span style="color:#001080;">from</span><span style="color:#000000;">[i].</span><span style="color:#001080;">second</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0000FF;">auto</span><span style="color:#000000;"> tx = </span><span style="color:#001080;">to</span><span style="color:#000000;">[i].</span><span style="color:#001080;">first</span><span style="color:#000000;">, ty = </span><span style="color:#001080;">to</span><span style="color:#000000;">[i].</span><span style="color:#001080;">second</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                tmp += </span><span style="color:#795E26;">abs</span><span style="color:#000000;">(x - tx) + </span><span style="color:#795E26;">abs</span><span style="color:#000000;">(y - ty);</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            res = </span><span style="color:#795E26;">min</span><span style="color:#000000;">(res, tmp);</span></span>
<span class="line"><span style="color:#000000;">        } </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (</span><span style="color:#795E26;">next_permutation</span><span style="color:#000000;">(</span><span style="color:#001080;">from</span><span style="color:#000000;">.</span><span style="color:#795E26;">begin</span><span style="color:#000000;">(), </span><span style="color:#001080;">from</span><span style="color:#000000;">.</span><span style="color:#795E26;">end</span><span style="color:#000000;">()));</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> res;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><hr><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">Solution</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">def</span><span style="color:#000000;"> </span><span style="color:#795E26;">minimumMoves</span><span style="color:#000000;">(</span><span style="color:#001080;">self</span><span style="color:#000000;">, </span><span style="color:#001080;">grid</span><span style="color:#000000;">: List[List[</span><span style="color:#267F99;">int</span><span style="color:#000000;">]]) -&gt; </span><span style="color:#267F99;">int</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">        from_ = []</span></span>
<span class="line"><span style="color:#000000;">        to = []</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> i, row </span><span style="color:#AF00DB;">in</span><span style="color:#000000;"> </span><span style="color:#795E26;">enumerate</span><span style="color:#000000;">(grid):</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> j, cnt </span><span style="color:#AF00DB;">in</span><span style="color:#000000;"> </span><span style="color:#795E26;">enumerate</span><span style="color:#000000;">(row):</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> cnt &gt; </span><span style="color:#098658;">1</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">                    from_.extend([(i, j)] * (cnt - </span><span style="color:#098658;">1</span><span style="color:#000000;">))</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">elif</span><span style="color:#000000;"> cnt == </span><span style="color:#098658;">0</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">                    to.append((i, j))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">        ans = inf</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> from2 </span><span style="color:#AF00DB;">in</span><span style="color:#000000;"> permutations(from_):</span></span>
<span class="line"><span style="color:#000000;">            total = </span><span style="color:#098658;">0</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (x1, y1), (x2, y2) </span><span style="color:#AF00DB;">in</span><span style="color:#000000;"> </span><span style="color:#795E26;">zip</span><span style="color:#000000;">(from2, to):</span></span>
<span class="line"><span style="color:#000000;">                total += </span><span style="color:#795E26;">abs</span><span style="color:#000000;">(x1 - x2) + </span><span style="color:#795E26;">abs</span><span style="color:#000000;">(y1 - y2)</span></span>
<span class="line"><span style="color:#000000;">            ans = </span><span style="color:#795E26;">min</span><span style="color:#000000;">(ans, total)</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> ans</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,15);function b(u,m,d,h,F,g){const n=r("font");return l(),p("div",null,[i,e(n,{color:"#dca124"},{default:o(()=>[c("中等")]),_:1}),y])}const v=a(t,[["render",b]]);export{_ as __pageData,v as default};
