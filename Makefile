STYLESHEETS_DIR = ~/src/mathbook/xsl

html:
	xsltproc --xinclude --stringparam html.knowl.example no --stringparam html.knowl.proof no -stringparam publisher pub.xml $(STYLESHEETS_DIR)/pretext-html.xsl class-notes.xml

#
# Still working on this; custom css in the future.
#
# xsltproc --xinclude --stringparam html.knowl.example no --stringparam html.knowl.proof no -stringparam publisher pub.xml -stringparam html.css.server http://hammond.math.wichita.edu/  $(STYLESHEETS_DIR)/pretext-html.xsl class-notes.xml

all: html pdf

colorscheme:
	xsltproc --xinclude --stringparam html.knowl.example no --stringparam html.css.file "pretext-manitoba.css" $(STYLESHEETS_DIR)/pretext-html.xsl class-notes.xml


tex:
	xsltproc --xinclude --stringparam exercise.divisional.solution yes --stringparam exercise.divisional.answer no ./xsl/latex.xsl class-notes.xml > discrete-class-notes.tex

pdf: tex
	pdflatex discrete-class-notes.tex && pdflatex discrete-class-notes.tex

clean:
	rm -f *.out *.toc *.html *.aux *.log discrete-class-notes.pdf discrete-class-notes.tex

publish-to-web: html
	rsync -zartv --include "*/" --include="*.html" --exclude="*" ./  ~/public_html/class-notes

staging: html
	rsync -zartv --include "*/" --include="*.html" --exclude="*" ./  ~/public_html/notes-staging

publish:
	ssh hammond@alonzo.math.wichita.edu 'cd src/class-notes && git pull && make publish-to-web'

images:
	~/src/mathbook/pretext/pretext -vv -c latex-image -f svg -d ~/src/class-notes/images ~/src/class-notes/class-notes.xml

# Here's the rsync command that probably works for me.
# rsync -zartv --include "*/" --include="*.html" --exclude="*" ./  ~/public_html/notes-staging

update-the-webs:
	echo "Updating wichita.edu/discretebook"
	git checkout master
	make publish-to-web
	echo "Updating wichita.edu/discreteOnline"
	git checkout onlineCourse
	make online
