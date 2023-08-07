import{_ as a,v as l,b as p,T as o,O as e,R as s,M as r,L as c}from"./chunks/framework.0f10bb36.js";const j=JSON.parse('{"title":"LeetCode 2812. 找出最安全路径","description":"","frontmatter":{"title":"LeetCode 2812. 找出最安全路径","date":"2023-08-07T00:00:00.000Z","tags":["bfs","二分"]},"headers":[],"relativePath":"posts/LeetCode 2812. 找出最安全路径.md","filePath":"posts/LeetCode 2812. 找出最安全路径.md"}'),t={name:"posts/LeetCode 2812. 找出最安全路径.md"},i=s('<hr><h2 id="bfs-二分" tabindex="-1">bfs + 二分 <a class="header-anchor" href="#bfs-二分" aria-label="Permalink to &quot;bfs + 二分&quot;">​</a></h2><h2 id="leetcode-2812-找出最安全路径" tabindex="-1"><a href="https://leetcode.cn/problems/find-the-safest-path-in-a-grid/description/" target="_blank" rel="noreferrer">LeetCode 2812. 找出最安全路径</a> <a class="header-anchor" href="#leetcode-2812-找出最安全路径" aria-label="Permalink to &quot;[LeetCode 2812. 找出最安全路径](https://leetcode.cn/problems/find-the-safest-path-in-a-grid/description/)&quot;">​</a></h2>',3),y=s(`<p>给你一个下标从 0 开始、大小为 n x n 的二维矩阵 grid ，其中 (r, c) 表示：</p><ul><li>如果 grid[r][c] = 1 ，则表示一个存在小偷的单元格</li><li>如果 grid[r][c] = 0 ，则表示一个空单元格</li></ul><p>你最开始位于单元格 (0, 0) 。在一步移动中，你可以移动到矩阵中的任一相邻单元格，包括存在小偷的单元格。</p><p>矩阵中路径的 安全系数 定义为：从路径中任一单元格到矩阵中任一小偷所在单元格的 最小 曼哈顿距离。</p><p>返回所有通向单元格 (n - 1, n - 1) 的路径中的 最大安全系数 。</p><p>单元格 (r, c) 的某个 相邻 单元格，是指在矩阵中存在的 (r, c + 1)、(r, c - 1)、(r + 1, c) 和 (r - 1, c) 之一。</p><p>两个单元格 (a, b) 和 (x, y) 之间的 曼哈顿距离 等于 | a - x | + | b - y | ，其中 |val| 表示 val 的绝对值。</p><h3 id="示例-1" tabindex="-1">示例 1： <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例 1：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：grid = [[1,0,0],[0,0,0],[0,0,1]]</span></span>
<span class="line"><span style="color:#000000;">输出：0</span></span>
<span class="line"><span style="color:#000000;">解释：从 (0, 0) 到 (n - 1, n - 1) 的每条路径都经过存在小偷的单元格 (0, 0) 和 (n - 1, n - 1) 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="示例-2" tabindex="-1">示例 2： <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例 2：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：grid = [[0,0,1],[0,0,0],[0,0,0]]</span></span>
<span class="line"><span style="color:#000000;">输出：2</span></span>
<span class="line"><span style="color:#000000;">解释：</span></span>
<span class="line"><span style="color:#000000;">上图所示路径的安全系数为 2：</span></span>
<span class="line"><span style="color:#000000;">- 该路径上距离小偷所在单元格（0，2）最近的单元格是（0，0）。它们之间的曼哈顿距离为 | 0 - 0 | + | 0 - 2 | = 2 。</span></span>
<span class="line"><span style="color:#000000;">可以证明，不存在安全系数更高的其他路径。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="示例-3" tabindex="-1">示例 3： <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例 3：&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki light-plus"><code><span class="line"><span style="color:#000000;">输入：grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]</span></span>
<span class="line"><span style="color:#000000;">输出：2</span></span>
<span class="line"><span style="color:#000000;">解释：</span></span>
<span class="line"><span style="color:#000000;">上图所示路径的安全系数为 2：</span></span>
<span class="line"><span style="color:#000000;">- 该路径上距离小偷所在单元格（0，3）最近的单元格是（1，2）。它们之间的曼哈顿距离为 | 0 - 1 | + | 3 - 2 | = 2 。</span></span>
<span class="line"><span style="color:#000000;">- 该路径上距离小偷所在单元格（3，0）最近的单元格是（3，2）。它们之间的曼哈顿距离为 | 3 - 3 | + | 0 - 2 | = 2 。</span></span>
<span class="line"><span style="color:#000000;">可以证明，不存在安全系数更高的其他路径。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="提示" tabindex="-1">提示： <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示：&quot;">​</a></h3><ul><li>1 &lt;= grid.length == n &lt;= 400</li><li>grid[i].length == n</li><li>grid[i][j] 为 0 或 1</li><li>grid 至少存在一个小偷</li></ul><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki light-plus"><code><span class="line"><span style="color:#008000;">/*</span></span>
<span class="line"><span style="color:#008000;">多源 bfs + 二分</span></span>
<span class="line"><span style="color:#008000;">以所有小偷所在位置为源点跑多源bfs，这样就求出了矩阵各个位置的安全系数，然后二分枚举答案；</span></span>
<span class="line"><span style="color:#008000;">设当前枚举值为res，判断当前枚举值是否可行：通过bfs判断(0,0)与(n−1,n−1)之间是否存在这样的路径，</span></span>
<span class="line"><span style="color:#008000;">使得该路径上任意位置的安全系数都不小于res。</span></span>
<span class="line"><span style="color:#008000;">*/</span></span>
<span class="line"><span style="color:#0000FF;">typedef</span><span style="color:#000000;"> pair&lt;</span><span style="color:#0000FF;">int</span><span style="color:#000000;">, </span><span style="color:#0000FF;">int</span><span style="color:#000000;">&gt; PII;</span></span>
<span class="line"><span style="color:#0000FF;">class</span><span style="color:#000000;"> </span><span style="color:#267F99;">Solution</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#0000FF;">public:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#795E26;">maximumSafenessFactor</span><span style="color:#000000;">(</span><span style="color:#267F99;">vector</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">vector</span><span style="color:#000000;">&lt;</span><span style="color:#0000FF;">int</span><span style="color:#000000;">&gt;&gt;</span><span style="color:#0000FF;">&amp;</span><span style="color:#000000;"> </span><span style="color:#001080;">grid</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> n = </span><span style="color:#001080;">grid</span><span style="color:#000000;">.</span><span style="color:#795E26;">size</span><span style="color:#000000;">(), m = </span><span style="color:#001080;">grid</span><span style="color:#000000;">[</span><span style="color:#098658;">0</span><span style="color:#000000;">].</span><span style="color:#795E26;">size</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">dir</span><span style="color:#000000;">[</span><span style="color:#098658;">4</span><span style="color:#000000;">][</span><span style="color:#098658;">2</span><span style="color:#000000;">] = {</span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#098658;">1</span><span style="color:#000000;">, </span><span style="color:#098658;">1</span><span style="color:#000000;">, </span><span style="color:#098658;">0</span><span style="color:#000000;">, -</span><span style="color:#098658;">1</span><span style="color:#000000;">, </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#098658;">0</span><span style="color:#000000;">, -</span><span style="color:#098658;">1</span><span style="color:#000000;">};</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">dis</span><span style="color:#000000;">[n][m];</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">memset</span><span style="color:#000000;">(dis, -</span><span style="color:#098658;">1</span><span style="color:#000000;">, sizeof dis);</span></span>
<span class="line"><span style="color:#000000;">        queue&lt;PII&gt; q;</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#098658;">0</span><span style="color:#000000;">; i &lt; n ; i ++ ) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> j = </span><span style="color:#098658;">0</span><span style="color:#000000;">; j &lt; m ; j ++ ) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">grid</span><span style="color:#000000;">[i][j] == </span><span style="color:#098658;">1</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">push</span><span style="color:#000000;">({i, j});</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">dis</span><span style="color:#000000;">[i][j] = </span><span style="color:#098658;">0</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#008000;">        // 多源 bfs</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (!</span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">empty</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#000000;">            PII p = </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">front</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">pop</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#001080;">p</span><span style="color:#000000;">.</span><span style="color:#001080;">first</span><span style="color:#000000;">, j = </span><span style="color:#001080;">p</span><span style="color:#000000;">.</span><span style="color:#001080;">second</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> k = </span><span style="color:#098658;">0</span><span style="color:#000000;">; k &lt; </span><span style="color:#098658;">4</span><span style="color:#000000;"> ; k ++ ) {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> ii = i + </span><span style="color:#001080;">dir</span><span style="color:#000000;">[k][</span><span style="color:#098658;">0</span><span style="color:#000000;">], jj = j + </span><span style="color:#001080;">dir</span><span style="color:#000000;">[k][</span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (ii &lt; </span><span style="color:#098658;">0</span><span style="color:#000000;"> || jj &lt; </span><span style="color:#098658;">0</span><span style="color:#000000;"> || ii &gt;= n || jj &gt;= m || </span><span style="color:#001080;">dis</span><span style="color:#000000;">[ii][jj] &gt;= </span><span style="color:#098658;">0</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#AF00DB;">continue</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">push</span><span style="color:#000000;">({ii, jj});</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">dis</span><span style="color:#000000;">[ii][jj] = </span><span style="color:#001080;">dis</span><span style="color:#000000;">[i][j] + </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#008000;">        // check</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">auto</span><span style="color:#000000;"> check = [&amp;](</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> </span><span style="color:#001080;">lim</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">bool</span><span style="color:#000000;"> </span><span style="color:#001080;">vis</span><span style="color:#000000;">[n][m];</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#795E26;">memset</span><span style="color:#000000;">(vis, </span><span style="color:#0000FF;">false</span><span style="color:#000000;">, sizeof vis);</span></span>
<span class="line"><span style="color:#000000;">            queue&lt;PII&gt; q;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">push</span><span style="color:#000000;">({</span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#098658;">0</span><span style="color:#000000;">});</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">vis</span><span style="color:#000000;">[</span><span style="color:#098658;">0</span><span style="color:#000000;">][</span><span style="color:#098658;">0</span><span style="color:#000000;">] = </span><span style="color:#0000FF;">true</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (!</span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">empty</span><span style="color:#000000;">()) {</span></span>
<span class="line"><span style="color:#000000;">                PII p = </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">front</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">pop</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> i = </span><span style="color:#001080;">p</span><span style="color:#000000;">.</span><span style="color:#001080;">first</span><span style="color:#000000;">, j = </span><span style="color:#001080;">p</span><span style="color:#000000;">.</span><span style="color:#001080;">second</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">for</span><span style="color:#000000;"> (</span><span style="color:#0000FF;">int</span><span style="color:#000000;"> k = </span><span style="color:#098658;">0</span><span style="color:#000000;">; k &lt; </span><span style="color:#098658;">4</span><span style="color:#000000;"> ; k ++ ) {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> ii = i + </span><span style="color:#001080;">dir</span><span style="color:#000000;">[k][</span><span style="color:#098658;">0</span><span style="color:#000000;">], jj = j + </span><span style="color:#001080;">dir</span><span style="color:#000000;">[k][</span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (ii &lt; </span><span style="color:#098658;">0</span><span style="color:#000000;"> || jj &lt; </span><span style="color:#098658;">0</span><span style="color:#000000;"> || ii &gt;= n || jj &gt;= m || </span><span style="color:#001080;">dis</span><span style="color:#000000;">[ii][jj] &lt; lim || </span><span style="color:#001080;">vis</span><span style="color:#000000;">[ii][jj])</span></span>
<span class="line"><span style="color:#000000;">                        </span><span style="color:#AF00DB;">continue</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">q</span><span style="color:#000000;">.</span><span style="color:#795E26;">push</span><span style="color:#000000;">({ii, jj});</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">vis</span><span style="color:#000000;">[ii][jj] = </span><span style="color:#0000FF;">true</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">vis</span><span style="color:#000000;">[n - </span><span style="color:#098658;">1</span><span style="color:#000000;">][m - </span><span style="color:#098658;">1</span><span style="color:#000000;">];</span></span>
<span class="line"><span style="color:#000000;">        };</span></span>
<span class="line"><span style="color:#008000;">        // 二分</span></span>
<span class="line"><span style="color:#008000;">        // 判断(0, 0) (n - 1, m - 1)位置</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> left = </span><span style="color:#098658;">0</span><span style="color:#000000;">, right = </span><span style="color:#795E26;">min</span><span style="color:#000000;">(</span><span style="color:#001080;">dis</span><span style="color:#000000;">[</span><span style="color:#098658;">0</span><span style="color:#000000;">][</span><span style="color:#098658;">0</span><span style="color:#000000;">], </span><span style="color:#001080;">dis</span><span style="color:#000000;">[n - </span><span style="color:#098658;">1</span><span style="color:#000000;">][m - </span><span style="color:#098658;">1</span><span style="color:#000000;">]);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">while</span><span style="color:#000000;"> (left &lt; right) {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">int</span><span style="color:#000000;"> mid = left + right + </span><span style="color:#098658;">1</span><span style="color:#000000;"> &gt;&gt; </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#795E26;">check</span><span style="color:#000000;">(mid)) left = mid;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">else</span><span style="color:#000000;"> right = mid - </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> left;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,16);function b(u,m,d,F,h,f){const n=r("font");return l(),p("div",null,[i,o(n,{color:"#dca124"},{default:e(()=>[c("中等")]),_:1}),y])}const v=a(t,[["render",b]]);export{j as __pageData,v as default};
