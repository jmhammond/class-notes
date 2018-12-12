STYLESHEETS_DIR = ~/src/mathbook/xsl

all: html pdf

colorscheme:
	xsltproc --xinclude --stringparam html.knowl.example no --stringparam html.css.file "mathbook-manitoba.css" $(STYLESHEETS_DIR)/mathbook-html.xsl class-notes.xml


html:
	xsltproc --xinclude --stringparam html.knowl.example no  $(STYLESHEETS_DIR)/mathbook-html.xsl class-notes.xml

tex:
	xsltproc --xinclude $(STYLESHEETS_DIR)/mathbook-latex.xsl class-notes.xml

pdf: tex
	pdflatex discrete-class-notes.tex && pdflatex discrete-class-notes.tex

clean:
	rm -f *.out *.toc *.html *.aux *.log discrete-class-notes.pdf discrete-class-notes.tex

