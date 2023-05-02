(TeX-add-style-hook
 "class-notes"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("book" "twoside" "10pt" "")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("geometry" "margin=1in" "paperwidth=6in" "paperheight=9in") ("inputenc" "utf8") ("fontenc" "T1") ("inconsolata" "varqu" "varl") ("pdfpages" "final") ("titlesec" "explicit" "newparttoc" "pagestyles") ("hyperref" "hyperfootnotes=false")))
   (add-to-list 'LaTeX-verbatim-environments-local "VerbatimOut")
   (add-to-list 'LaTeX-verbatim-environments-local "SaveVerbatim")
   (add-to-list 'LaTeX-verbatim-environments-local "LVerbatim*")
   (add-to-list 'LaTeX-verbatim-environments-local "LVerbatim")
   (add-to-list 'LaTeX-verbatim-environments-local "BVerbatim*")
   (add-to-list 'LaTeX-verbatim-environments-local "BVerbatim")
   (add-to-list 'LaTeX-verbatim-environments-local "Verbatim*")
   (add-to-list 'LaTeX-verbatim-environments-local "Verbatim")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "Verb*")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "Verb")
   (TeX-run-style-hooks
    "latex2e"
    "snapshot"
    "book"
    "bk10"
    "geometry"
    "ifthen"
    "etoolbox"
    "ifxetex"
    "ifluatex"
    "graphicx"
    "xcolor"
    "tcolorbox"
    "fixltx2e"
    "xstring"
    "chngcntr"
    "xltxtra"
    "realscripts"
    "inputenc"
    "fontspec"
    "zi4"
    "polyglossia"
    "lmodern"
    "fontenc"
    "inconsolata"
    "microtype"
    "amsmath"
    "amscd"
    "amssymb"
    "pdfpages"
    "titlesec"
    "titletoc"
    "array"
    "fancyvrb"
    "multicol"
    "enumitem"
    "hyperref"
    "tikz"
    "pgfplots"
    "extpfeil"
    "cancel")
   (TeX-add-symbols
    '("twoline" 2)
    '("card" 1)
    '("hexbox" 3)
    '("vl" 1)
    '("vr" 1)
    '("vb" 1)
    '("va" 1)
    '("vtx" 2)
    '("crulethick" 1)
    '("crulemedium" 1)
    '("crulethin" 1)
    '("pubtitle" 1)
    '("terminology" 1)
    '("mono" 1)
    "divisionfont"
    "blocktitlefont"
    "contentsfont"
    "pagefont"
    "tabularfont"
    "xreffont"
    "titlepagefont"
    "divisionnameptx"
    "titleptx"
    "subtitleptx"
    "shortitleptx"
    "authorsptx"
    "epigraphptx"
    "hrulethin"
    "hrulemedium"
    "hrulethick"
    "phantomsection"
    "qedhere"
    "fixspacing"
    "lt"
    "gt"
    "amp"
    "oldsetlength"
    "ds"
    "d"
    "N"
    "B"
    "Z"
    "Q"
    "R"
    "C"
    "F"
    "pow"
    "inv"
    "iff"
    "Iff"
    "land"
    "And"
    "AAnd"
    "Vee"
    "VVee"
    "imp"
    "Imp"
    "Fi"
    "var"
    "Th"
    "sat"
    "con"
    "iffmodels"
    "dbland"
    "dom"
    "rng"
    "isom"
    "st"
    "divides"
    "and"
    "lcm"
    "modulus"
    "circleA"
    "circleAlabel"
    "circleB"
    "circleBlabel"
    "circleC"
    "circleClabel"
    "twosetbox"
    "threesetbox"
    "ansfilename"
    "shadowprops"
    "x"
    "y"
    "entry"
    "r")
   (LaTeX-add-labels
    "#6"
    "g:fn:idp105545318371216"
    "g:fn:idp105545387157008"
    "g:fn:idp105545386884624"
    "g:fn:idp105545387852560"
    "g:fn:idp105545387707408"
    "g:fn:idp105545387677840"
    "g:fn:idp105545387686288")
   (LaTeX-add-index-entries
    "bow ties")
   (LaTeX-add-lengths
    "Oldarrayrulewidth"
    "dlititlewidth"
    "dlimaxnarrowtitle"
    "dlimaxmediumtitle")
   (LaTeX-add-xcolor-definecolors
    "identifiers"
    "comments"
    "strings"
    "keywords"
    "sageblue")
   (LaTeX-add-tcolorbox-newtcolorboxes
    '("divisionsolution" "3" "" "")
    '("divisionexercise" "4" "" "")
    '("tabularbox" "3" "" "")
    '("block" "" "" "")
    '("subdisplay" "" "" "")
    '("theorem" "3" "" "")
    '("proposition" "3" "" "")
    '("corollary" "3" "" "")
    '("proof" "2" "" "")
    '("definition" "2" "" "")
    '("note" "2" "" "")
    '("remark" "2" "" "")
    '("example" "2" "" "")
    '("aside" "2" "" "")
    '("listptx" "3" "" "")
    '("tableptx" "3" "" ""))
   (LaTeX-add-tcolorbox-tcbuselibraries
    "skins"
    "breakable"
    "raster"
    "xparse"
    "listings"
    "listingsutf8")
   (LaTeX-add-xparse-environments
    '("\\NewDocumentEnvironment{acknowledgement}{mmmmmm}" "acknowledgement" "mmmmmm" "New")
    '("\\NewDocumentEnvironment{preface}{mmmmmm}" "preface" "mmmmmm" "New")
    '("\\NewDocumentEnvironment{chapterptx}{mmmmmm}" "chapterptx" "mmmmmm" "New")
    '("\\NewDocumentEnvironment{sectionptx}{mmmmmm}" "sectionptx" "mmmmmm" "New")
    '("\\NewDocumentEnvironment{subsectionptx}{mmmmmm}" "subsectionptx" "mmmmmm" "New")
    '("\\NewDocumentEnvironment{subsubsectionptx}{mmmmmm}" "subsubsectionptx" "mmmmmm" "New")
    '("\\NewDocumentEnvironment{descriptionlist}{}" "descriptionlist" "" "New")
    '("\\NewDocumentEnvironment{dlinarrow}{mm}" "dlinarrow" "mm" "New")
    '("\\NewDocumentEnvironment{dlimedium}{mm}" "dlimedium" "mm" "New")
    '("\\NewDocumentEnvironment{solutionproof}{}" "solutionproof" "" "New")
    '("\\NewDocumentEnvironment{introduction}{m}" "introduction" "m" "New")
    '("\\NewDocumentEnvironment{conclusion}{m}" "conclusion" "m" "New")
    '("\\NewDocumentEnvironment{sidebyside}{mmmm}" "sidebyside" "mmmm" "New"))
   (LaTeX-add-polyglossia-langs
    '("english" "mainlanguage" "variant=usmax"))
   (LaTeX-add-array-newcolumntypes
    "A"
    "B"
    "C")
   (LaTeX-add-fancyvrb-environments
    '("codedisplay" "Verbatim")
    '("codedisplayleft" "Verbatim")))
 :latex)

