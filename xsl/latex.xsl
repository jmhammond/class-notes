<?xml version="1.0" encoding="UTF-8"?>

<!-- I'm beginning with https://raw.githubusercontent.com/oscarlevin/discrete-book/master/xsl/dmoi-latex.xsl
and using it for discovery of what features I actually want to modify in my own.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:import href="./core/pretext-latex.xsl" />


<!--  -->
<!-- Geometry: page shape, margins, etc            -->
<!-- Pass a string with any of geometry's options  -->
<!-- Default is empty and thus ineffective         -->
<!-- Otherwise, happens early in preamble template -->
<!-- <xsl:param name="latex.geometry" select="'papersize={8.5in, 11in}, hmargin={1.2in, 1.0in}, twoside, ignoreheadfoot'"/> -->
<!--  -->
<!-- PDF Watermarking                    -->
<!-- Non-empty string makes it happen    -->
<!-- Scale works well for "CONFIDENTIAL" -->
<!-- or  for "DRAFT YYYY/MM/DD"          -->
<!-- <xsl:param name="latex.watermark" select="''"/> -->
<!-- <xsl:param name="latex.watermark.scale" select="2.0"/> -->
<!--  -->
<!-- Author's Tools                                            -->
<!-- Set the author-tools parameter to 'yes'                   -->
<!-- (Documented in mathbook-common.xsl)                       -->
<!-- Installs some LaTeX-specific behavior                     -->
<!-- (1) Index entries in margin of the page                   -->
<!--      where defined, on single pass (no real index)        -->
<!-- (2) LaTeX labels near definition and use                  -->
<!--     N.B. Some are author-defined; others are internal,    -->
<!--     and CANNOT be used as xml:id's (will raise a warning) -->
<!--  -->
<!-- Draft Copies                                              -->
<!-- Various options for working copies for authors            -->
<!-- (1) LaTeX's draft mode                                    -->
<!-- (2) Crop marks on letter paper, centered                  -->
<!--     presuming geometry sets smaller page size             -->
<!--     with paperheight, paperwidth                          -->
<!-- <xsl:param name="latex.draft" select="'no'"/> -->
<!--  -->
<!-- Print Option                                         -->
<!-- For a non-electronic copy, inactive links in black   -->
<!-- Any color options go to black and white, as possible -->
<!-- <xsl:param name="latex.print" select="'no'"/> -->
<!--  -->
<!-- Preamble insertions                    -->
<!-- Insert packages, options into preamble -->
<!-- early or late                          -->
<xsl:param name="latex.preamble.early" select="''" />
<!-- <xsl:param name="latex.preamble.late" select="''" /> -->
<!--  -->
<!-- Console characters allow customization of how    -->
<!-- LaTeX macros are recognized in the fancyvrb      -->
<!-- package's Verbatim clone environment, "console"  -->
<!-- The defaults are traditional LaTeX, we let any   -->
<!-- other specification make a document-wide default -->
<!-- <xsl:param name="latex.console.macro-char" select="'\'" />
<xsl:param name="latex.console.begin-char" select="'{'" />
<xsl:param name="latex.console.end-char" select="'}'" /> -->


<!-- List Chapters and Sections in Table of Contents -->
<!-- <xsl:param name="toc.level" select="'3'" /> -->


<xsl:param name="exercise.divisional.answer" select="'no'" />
<xsl:param name="exercise.divisional.solution" select="'no'" />


<!-- bury the \require{cancel} used by mathjax when compiling latex -->
<xsl:param name="latex.preamble.late">
  <xsl:text> \newcommand{\require}[1]{\iffalse #1 \fi}  % bury the \require{cancel} flag needed by MathJax; latex doesn't handle it </xsl:text>
</xsl:param>



<!-- Include a style file at the end of the preamble: -->
<!-- <xsl:param name="latex.preamble.late"> -->
<!--   <xsl:text>%This should load all the style information that mbx does not.&#xa;</xsl:text> -->
<!--     <xsl:text>\input{latex-preamble-styles}&#xa;</xsl:text> -->
<!-- </xsl:param> -->


<!-- Override default frontmatter pages: -->

<!-- Remove "half-title" leading page with -->
<!-- title only, at about 1:2 split    -->
<xsl:template match="book" mode="half-title" >
    <xsl:text>%% no half-title&#xa;</xsl:text>
</xsl:template>

<!-- Remove Ad card (may contain list of other books        -->
<!-- Or may be overridden to make title page spread -->
<!-- Obverse of half-title                          -->
<xsl:template match="book" mode="ad-card">
    <xsl:text>%% No adcard&#xa;</xsl:text>
</xsl:template>


<!-- Import custom title page -->
<!-- <xsl:template match="book" mode="title-page"> -->
<!--     <xsl:text>%% begin: title page&#xa;</xsl:text> -->
<!--     <xsl:text>%% my custom page.&#xa;</xsl:text> -->
<!--     <xsl:text>\input{frontmatter/title-page}&#xa;</xsl:text> -->
<!--     <xsl:text>%% end: title page&#xa;</xsl:text> -->
<!-- </xsl:template> -->

<!-- Import custom copyright page -->
<!-- <xsl:template match="book" mode="copyright-page" > -->
<!--     <xsl:text>%% begin: copyright-page&#xa;</xsl:text> -->
<!--     <xsl:text>\input{frontmatter/copyright-page}&#xa;</xsl:text> -->
<!--     <xsl:text>%% end:   copyright-page&#xa;</xsl:text> -->
<!-- </xsl:template> -->

<!-- Dedication style -->
<!-- <xsl:template match="dedication/p|dedication/p[1]" priority="1"> -->
<!--     <xsl:text>\begin{flushright}\large%&#xa;</xsl:text> -->
<!--         <xsl:apply-templates /> -->
<!--     <xsl:text>%&#xa;</xsl:text> -->
<!--     <xsl:text>\end{flushright}&#xa;</xsl:text> -->
<!-- </xsl:template> -->

<!-- If gif is specified, substitute a png image -->
<xsl:template match="image[@source]" mode="image-inclusion">
    <xsl:variable name="extension">
        <xsl:call-template name="file-extension">
            <xsl:with-param name="filename" select="@source" />
        </xsl:call-template>
    </xsl:variable>
    <xsl:text>\includegraphics[width=</xsl:text>
    <xsl:apply-templates select="." mode="get-width-fraction" />
    <xsl:text>\linewidth]</xsl:text>
    <xsl:text>{</xsl:text>
    <xsl:choose>
      <xsl:when test="$extension!='gif'">
        <xsl:apply-templates select="@source" mode="internal-id" />
      </xsl:when>
      <xsl:otherwise>
        <!-- <xsl:apply-templates select="@source" mode="internal-id" /> -->
        <xsl:apply-templates select="substring-before(@source, '.')" mode="internal-id" />
      </xsl:otherwise>
    </xsl:choose>
    <xsl:text>}&#xa;</xsl:text>
</xsl:template>

<!-- Create a heading for each non-empty collection of solutions -->
<!-- Format as appropriate LaTeX subdivision for this level      -->
<!-- But number according to the actual Exercises section        -->
<xsl:template match="exercises" mode="backmatter">
    <xsl:variable name="nonempty" select="(.//hint and $exercise.backmatter.hint='yes') or (.//answer and $exercise.backmatter.answer='yes') or (.//solution and $exercise.backmatter.solution='yes')" />
    <xsl:if test="$nonempty='true'">
        <xsl:text>\</xsl:text>
        <xsl:apply-templates select="." mode="division-name" />
        <xsl:text>*{</xsl:text>
        <xsl:apply-templates select="." mode="number" />
        <xsl:text> </xsl:text>
        <xsl:apply-templates select="." mode="title-full" />
        <xsl:text>}&#xa;</xsl:text>
        <xsl:apply-templates select="*" mode="backmatter" />
    </xsl:if>
</xsl:template>

<!-- Create a heading for each non-empty collection of solutions -->
<!-- Format as appropriate LaTeX subdivision for this level      -->
<!-- But number according to the actual Exercises section        -->
<!-- This needs to be fixed! -->
<!-- <xsl:template match="exercises" mode="backmatter">
    <xsl:variable name="nonempty" select="(.//hint and $exercise.backmatter.hint='yes') or (.//answer and $exercise.backmatter.answer='yes') or (.//solution and $exercise.backmatter.solution='yes')" />
    <xsl:if test="$nonempty='true'">
        <xsl:text>\</xsl:text>
        <xsl:apply-templates select="." mode="subdivision-name" />
        <xsl:text>*{</xsl:text>
        <xsl:apply-templates select="." mode="number" />
        <xsl:text> </xsl:text>
        <xsl:apply-templates select="." mode="title-full" />
        <xsl:text>}&#xa;</xsl:text>
        <xsl:text>\markright{Solutions for Section &#xa;</xsl:text>
        <xsl:apply-templates select="." mode="number" />
        <xsl:text>}&#xa;</xsl:text>
        <xsl:apply-templates select="*" mode="backmatter" />
    </xsl:if>
</xsl:template> -->




<!-- Set up solution list -->
<!-- Print exercises with some solution component -->
<!-- Respect switches about visibility ("knowl" is assumed to be 'no') -->
<!-- <xsl:template match="exercise" mode="backmatter"> -->
<!--     <xsl:if test="answer or solution"> <!-\- revmoed hint, those are not displayed here.  If I move hints to the back, I need to put it back here too -\-> -->
<!--         <!-\- Lead with the problem number and some space -\-> -->
<!--         <xsl:text>\noindent\textbf{</xsl:text> -->
<!--         <xsl:apply-templates select="." mode="number" /> <!-\- changed serial-number to number -\-> -->
<!--         <xsl:text>.} </xsl:text> -->
<!--         <xsl:if test="$exercise.backmatter.statement='yes'"> -->
<!--             <!-\- TODO: not a "backmatter" template - make one possibly? Or not necessary -\-> -->
<!--             <xsl:apply-templates select="statement" /> -->
<!--             <xsl:text>\par\smallskip&#xa;</xsl:text> -->
<!--         </xsl:if> -->
<!--         <xsl:if test="hint and $exercise.backmatter.hint='yes'"> -->
<!--             <xsl:apply-templates select="hint" mode="backmatter" /> -->
<!--         </xsl:if> -->
<!--         <xsl:if test="answer and $exercise.backmatter.answer='yes'"> -->
<!--             <xsl:apply-templates select="answer" mode="backmatter" /> -->
<!--         </xsl:if> -->
<!--         <xsl:if test="solution and $exercise.backmatter.solution='yes'"> -->
<!--             <xsl:apply-templates select="solution" mode="backmatter" /> -->
<!--         </xsl:if> -->
<!--     </xsl:if> -->
<!-- </xsl:template> -->



<!-- Set up headers for index -->
<xsl:template match="index-list">
    <xsl:text>%&#xa;</xsl:text>
    <xsl:text>%% The index is here, setup is all in preamble&#xa;</xsl:text>
    <!-- Not sure why this is needed, but this will get the headings right -->
    <xsl:text>\markright{Index}&#xa;</xsl:text>
    <xsl:text>\renewcommand{\leftmark}{Index}&#xa;</xsl:text>
    <xsl:text>\printindex&#xa;</xsl:text>
    <xsl:text>%&#xa;</xsl:text>
</xsl:template>




<!-- Remove leavemode for assemblage -->
<!-- Lists themselves -->
<!-- If columns are specified, we        -->
<!-- wrap in the multicolumn environment -->
<!-- using the starred multicol* and \raggedcolumns -->
<!-- from the solution on https://tex.stackexchange.com/questions/116577/enumerate-in-multicols-how-to-move-the-last-element-upwards -->
<!-- Test for first node of "p", then test for the   -->
<!-- "p" being first node of some sectioning element -->
<!-- <xsl:template match="ol"> -->
<!--     <xsl:choose> -->
<!--         <xsl:when test="not(ancestor::ol or ancestor::ul or ancestor::dl or ancestor::assemblage or ancestor::investigation)"> -->
<!--             <xsl:call-template name="leave-vertical-mode" /> -->
<!--         </xsl:when> -->
<!--         <xsl:otherwise> -->
<!--             <xsl:text>%&#xa;</xsl:text> -->
<!--         </xsl:otherwise> -->
<!--     </xsl:choose> -->
<!--     <xsl:if test="@cols"> -->
<!--         <xsl:text>\raggedcolumns&#xa;\begin{multicols*}{</xsl:text> -->
<!--         <xsl:value-of select="@cols" /> -->
<!--         <xsl:text>}&#xa;</xsl:text> -->
<!--     </xsl:if> -->
<!--     <xsl:text>\begin{enumerate}</xsl:text> -->
<!--     <!-\- override LaTeX defaults as indicated -\-> -->
<!--     <xsl:if test="@label or ancestor::exercises or ancestor::references"> -->
<!--         <xsl:text>[label=</xsl:text> -->
<!--         <xsl:apply-templates select="." mode="latex-list-label" /> -->
<!--         <xsl:text>]</xsl:text> -->
<!--     </xsl:if> -->
<!--     <xsl:text>&#xa;</xsl:text> -->
<!--      <xsl:apply-templates /> -->
<!--     <xsl:text>\end{enumerate}&#xa;</xsl:text> -->
<!--     <xsl:if test="@cols"> -->
<!--         <xsl:text>\end{multicols*}&#xa;</xsl:text> -->
<!--     </xsl:if> -->
<!-- </xsl:template> -->

<!-- <xsl:template match="ul"> -->
<!--     <xsl:choose> -->
<!--         <xsl:when test="not(ancestor::ol or ancestor::ul or ancestor::dl or ancestor::assemblage or ancestor::investigation)"> -->
<!--             <xsl:call-template name="leave-vertical-mode" /> -->
<!--         </xsl:when> -->
<!--         <xsl:otherwise> -->
<!--             <xsl:text>%&#xa;</xsl:text> -->
<!--         </xsl:otherwise> -->
<!--     </xsl:choose> -->
<!--     <xsl:if test="@cols"> -->
<!--         <xsl:text>\raggedcolumns&#xa;\begin{multicols*}{</xsl:text> -->
<!--         <xsl:value-of select="@cols" /> -->
<!--         <xsl:text>}&#xa;</xsl:text> -->
<!--     </xsl:if> -->
<!--     <xsl:text>\begin{itemize}[label=</xsl:text> -->
<!--     <xsl:apply-templates select="." mode="latex-list-label" /> -->
<!--     <xsl:text>]&#xa;</xsl:text> -->
<!--     <xsl:apply-templates /> -->
<!--     <xsl:text>\end{itemize}&#xa;</xsl:text> -->
<!--     <xsl:if test="@cols"> -->
<!--         <xsl:text>\end{multicols*}&#xa;</xsl:text> -->
<!--     </xsl:if> -->
<!-- </xsl:template> -->

<!-- <xsl:template match="dl"> -->
<!--     <xsl:choose> -->
<!--         <xsl:when test="not(ancestor::ol or ancestor::ul or ancestor::dl or ancestor::assemblage or ancestor::investigation)"> -->
<!--             <xsl:call-template name="leave-vertical-mode" /> -->
<!--         </xsl:when> -->
<!--         <xsl:otherwise> -->
<!--             <xsl:text>%&#xa;</xsl:text> -->
<!--         </xsl:otherwise> -->
<!--     </xsl:choose> -->
<!--     <xsl:if test="@cols"> -->
<!--         <xsl:text>\raggedcolumns&#xa;\begin{multicols*}{</xsl:text> -->
<!--         <xsl:value-of select="@cols" /> -->
<!--         <xsl:text>}&#xa;</xsl:text> -->
<!--     </xsl:if> -->
<!--     <xsl:text>\begin{description}&#xa;</xsl:text> -->
<!--     <xsl:apply-templates /> -->
<!--     <xsl:text>\end{description}&#xa;</xsl:text> -->
<!--     <xsl:if test="@cols"> -->
<!--         <xsl:text>\end{multicols*}&#xa;</xsl:text> -->
<!--     </xsl:if> -->
<!-- </xsl:template> -->



</xsl:stylesheet>
