# Math 321 Workbook
Here I'm working on a workbook / notebook for Math 321 - Discrete Mathematics at Wichita State University.

The interactive version of the text is [available here](http://www.math.wichita.edu/discrete-book).

The objective of the project is to have a set of notes ready for my students to have with them during class. Definitions will be immediately in front of them, and examples and propositions will be already written out. My plan is that during the lecture I can address "Example 2.1.1," and we can work out the solution at that time, in their own note-taking devices. 

The notes will be self-contained in the sense that it will include all of the assigned and supplemental exercises for the course, but it is also a 'workbook' in that it will not have worked-out examples and proofs.

In the interest putting everything on the table, I've discussed this with my Math 322 students in Fall 2018, and they all indicated that they wished that I had done it for their 321 course the semester before. I just hope that my new 321 students feel the same way... :-) 

If you catch at error, let me know and I'll make the fix. Thanks!

Build Directions (in case someone is just getting started with PreText)
- Clone the PreText/Mathbook repository https://github.com/rbeezer/mathbook.git
- Install xsltproc
- Run commands like the ones you see in my Makefile. It's as easy as: 
  `xsltproc $(location of mathbook-html.xsl) $(location of your xml file)`
  
Image building dependencies
- In addition to a basic latex distribution, the *mbx* script from pretext requires xetex
- the images require the texlive-games package for the skak.sty style file.
- To build the svg images from the latex code, run: 
```bash
~/src/mathbook/script/mbx -vv -c latex-image -f svg -d ~/src/class-notes/images ~/src/class-notes/class-notes.xml
```
(where the location of the pretext /mathbook/ folder and this set of class notes would depend on your own machine)

  
Acknowledgements: 
- I was inspired to write my notes when I encounted [Alan Doerr & Kenneth Levasseur's Applied Discrete Structures](https://github.com/klevasseur/ads) which I used as a supplemental text for my computer science based mathematical structures course (Math 322).
- I borrow heavily from the exercises of Oscar Levin's [Discrete Mathematics: An Open Introduction](https://github.com/oscarlevin/discrete-book).
- The text is written in the [PreText](https://github.com/rbeezer/mathbook.git) markup language.

![Creative Commons - Share Alike License Logo](https://i.creativecommons.org/l/by-sa/4.0/88x31.png) These notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
