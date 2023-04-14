import{_ as t,o as e,c as a,N as i}from"./chunks/framework.7e203a6d.js";const f=JSON.parse('{"title":"SMI BeGaze upload","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"upload-data/smi-begaze.md"}'),o={name:"upload-data/smi-begaze.md"},d=i('<h1 id="smi-begaze-upload" tabindex="-1">SMI BeGaze upload <a class="header-anchor" href="#smi-begaze-upload" aria-label="Permalink to &quot;SMI BeGaze upload&quot;">​</a></h1><p>GazePlotter supports the upload of data from the SMI BeGaze eye-tracking software, which is currently unfortunately no longer supported. Some researchers still use this software, and we want to support them in visualizing their data.</p><p>From SMI BeGaze, you can visualize eye-tracking AOI data with all timeline types (absolute, relative, and ordinal). You can also visualize dynamic AOI visibility information.</p><h2 id="export-upload-basic-data" tabindex="-1">Export &amp; upload basic data <a class="header-anchor" href="#export-upload-basic-data" aria-label="Permalink to &quot;Export &amp; upload basic data&quot;">​</a></h2><h3 id="no-overlaying-aois" tabindex="-1">No overlaying AOIs <a class="header-anchor" href="#no-overlaying-aois" aria-label="Permalink to &quot;No overlaying AOIs&quot;">​</a></h3><p>If you don&#39;t have multiple AOI hits in the same fixation (caused by AOI overlay), the <code>.csv</code> file can be exported from the SMI BeGaze software by selecting</p><ol><li><code>Export</code></li><li><code>Metrics Export</code></li><li><code>Event Statistics</code></li><li><code>Single</code></li></ol><p>In this tab, check the following metrics for export:</p><table><thead><tr><th>Column Group</th><th>Column Name</th></tr></thead><tbody><tr><td>Presentation Information</td><td>Stimulus</td></tr><tr><td>Participant Information</td><td>Participant</td></tr><tr><td></td><td>Participant Properties<br>*if participant attributes needed for analysis</td></tr><tr><td>General Information</td><td>Category</td></tr><tr><td>AOI Information</td><td>AOI Name</td></tr><tr><td>Event Details</td><td>Event Start Trial Time [ms]</td></tr><tr><td></td><td>Event End Trial Time [ms]</td></tr></tbody></table><p>Make sure that columns are separated by a comma (<code>tab</code>) and decimal separator is a point (<code>.</code>).</p><p>Then click <code>Export</code> to export the data.</p><p>The exported <code>.csv</code> file can be then simply uploaded to the workplace by clicking the <code>Upload data</code> button (see <a href="/basic/">GazePlotter GUI overview</a>) and selecting this file for upload.</p><h3 id="data-with-overlaying-aois" tabindex="-1">Data with overlaying AOIs <a class="header-anchor" href="#data-with-overlaying-aois" aria-label="Permalink to &quot;Data with overlaying AOIs&quot;">​</a></h3><p>If you have multiple AOI hits in the same fixation (caused by AOI overlay), firstly export data as in the previous section.</p><p>Then, in the SMI BeGaze software, select:</p><ol><li><code>Export</code></li><li><code>Metrics Export</code></li><li><code>AOI Statistics</code></li><li><code>Single</code></li></ol><table><thead><tr><th>Column Group</th><th>Column Name</th></tr></thead><tbody><tr><td>Presentation Information</td><td>Stimulus</td></tr><tr><td>Participant Information</td><td>Participant</td></tr><tr><td></td><td>Participant Properties<br>*if participant attributes needed for analysis</td></tr><tr><td>General Information</td><td>Category</td></tr><tr><td>AOI Information</td><td>AOI Name</td></tr><tr><td>Event Details</td><td>Event Start Trial Time [ms]</td></tr><tr><td></td><td>Event End Trial Time [ms]</td></tr></tbody></table><p>Make sure that columns are separated by a comma (<code>tab</code>) and decimal separator is a point (<code>.</code>).</p><p>Then click <code>Export</code> to export the data.</p><p>After that, click the <code>Upload data</code> button (see <a href="/basic/">GazePlotter GUI overview</a>) and select both the first exported <code>.csv</code> file and the second one for starting the upload and visualization.</p><h2 id="adding-dynamic-aoi-visibility-information" tabindex="-1">Adding dynamic AOI visibility information <a class="header-anchor" href="#adding-dynamic-aoi-visibility-information" aria-label="Permalink to &quot;Adding dynamic AOI visibility information&quot;">​</a></h2><p>If you have dynamic AOI visibility information you wish to visualize, firstly export and upload the data as in the one of the previous sections. Then follow instruction in <a href="/basic/aoi-visibility.html">AOI visibility</a> section.</p>',22),r=[d];function n(l,s,c,p,h,m){return e(),a("div",null,r)}const b=t(o,[["render",n]]);export{f as __pageData,b as default};
