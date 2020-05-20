# Math 321 Workbook
This is the source for the class notes / workbook for Math 321 - Discrete Mathematics at Wichita State University.

The interactive version of the text is [available here](http://wichita.edu/discreteBook).

The original objective of the project is to have a set of notes ready for my students to have with them during class. Definitions will be immediately in front of them, and examples and propositions will be already written out. My plan is that during the lecture I can address "Example 2.1.1," and we can work out the solution at that time, in their own note-taking devices. 

My goal now (Spring 2020) is to continue to extend the text further with complete worked solutions, embedded class videos, forums, and more. This enables me to have a hybrid/flipped class environment.

To that end, I have a number of branches that I'm going to try to maintain (documenting here so I don't forget): 
  - `master` will be the branch for bleeding-edge changes. This may break content flow by introducing new exercises, examples; any printed PDF will be out of sync.
  - `onlineCourse` is the branch I use that includes forums and videos for my flipped and online course
  - `videosOnly` contains the core materials and has embedded youtube videos
  - `forumsOnly` contains the core materials and has embedded discourse forums
  
  When I 'release' a new semester, I will combine the pieces from the various branches, merging into a course release branch. From that branch I'll build and deploy to our web server.


If you catch an error, let me know and I'll make the fix. Thanks!

Build Directions (in case someone is just getting started with PreText)
- Clone the PreText/Mathbook repository https://github.com/rbeezer/mathbook.git
- Install `xsltproc`
- Run commands like the ones you see in my Makefile. It's as easy as: 
  `xsltproc $(location of mathbook-html.xsl) $(location of your xml file)`
  
Image building dependencies
- In addition to a basic latex distribution, the `mbx` script from pretext requires xetex
- the images require the texlive-games package for the skak.sty style file.
- To build the svg images from the latex code, run: 
```bash
~/src/mathbook/script/mbx -vv -c latex-image -f svg -d ~/src/class-notes/images ~/src/class-notes/class-notes.xml
```
(where the location of the pretext /mathbook/ folder and this set of class notes would depend on your own machine)

  
Acknowledgements: 
- I was inspired to write my notes when I encounted [Alan Doerr & Kenneth Levasseur`s Applied Discrete Structures](https://github.com/klevasseur/ads) which I used as a supplemental text for my computer science based mathematical structures course (Math 322).
- I borrow heavily from the exercises of Oscar Levin's [Discrete Mathematics: An Open Introduction](https://github.com/oscarlevin/discrete-book).
- The text is written in the [PreText](https://github.com/rbeezer/mathbook.git) markup language.
- Special thanks also goes to the Wichita State Open/Alternative Textbook Initiative for their generous grant to help expand the text.

![Creative Commons - Share Alike License Logo](https://i.creativecommons.org/l/by-sa/4.0/88x31.png) These notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
