STYLESHEETS_DIR = ~/src/mathbook/xsl

all: html pdf

html:
	xsltproc --xinclude --stringparam html.knowl.example no  $(STYLESHEETS_DIR)/mathbook-html.xsl class-notes.mbx

tex:
	xsltproc --xinclude $(STYLESHEETS_DIR)/mathbook-latex.xsl class-notes.mbx

pdf: tex
	pdflatex discrete-class-notes.tex && pdflatex discrete-class-notes.tex

clean:
	rm -f *.html *.aux *.log discrete-class-notes.pdf discrete-class-notes.tex

