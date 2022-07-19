# Discrete Math for Shockers
This is the source for the textbook I use for my sections of Math 321 - Discrete Structures at Wichita State University.

An interactive version of the text is [available here](http://wichita.edu/discreteBook).

The original objective of the project was to have a set of notes ready for my students to have with them during class. The book has since morphed to be a complete textbook for my sections of class with examples fully worked out in print or in video; exercises similarly worked out. I use the text to enables me to have fully hybrid/flipped class environment. The online version include solutions to exercises, videos with every example, and Discourse forums at the bottom of every page of the textbook in order to facilitate discussion within the textbook.

I use the text so that my students don't have to pay for class materials. Other instructors at WSU  use this book as a supplemental text to Rosen's Discrete Mathematics.  For them, I build custom versions by removing forums/videos as they choose. 

For that reason, I have a number of branches that I'm going to try to maintain (documenting here so I don't forget): 
  - `main` will be the branch for bleeding-edge changes. This may break content number flow by introducing new exercises, examples; any printed PDF will be out of sync.
  - `onlineCourse` is the branch I use that includes forums and videos for my flipped and online course. 
    No new development occurs on this branch. All that happens is that I `git merge` the videos and forums into this branch. It exists so that on my webserver I can run `git pull` and `make publish-to-webs` to update the html5 version. 
  - `videosOnly` contains the core materials and has embedded youtube videos
  - `forumsOnly` contains the core materials and has embedded discourse forums
    If you choose to host your own Discourse forum, to [embed comments](https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963), after configuring your server, you'll need to update each XML file in the class-notes project with your `discourseUrl` and `topicId`.

If you catch an error, let me know and I'll make the fix. Thanks!

### Build Directions
- [install the `pretext` command](https://pretextbook.org/doc/guide/html/quickstart-getting-pretext.html).
- run `pretext build html` or pdf
- run `pretext view html` to preview via local web server

Building images from latex code: 
- run `pretext build html -d`.  The `-d` means **d**iagrams

### OLD Build Directions 

**These don't work anymore!**  I migrated my code to use the `pretext` command line tool instead of `xsltproc` directly. I'm leaving this here in case I want to go back to my Makefiles...


- Clone the PreText/Mathbook repository https://github.com/rbeezer/mathbook.git
- Install `xsltproc`
- Run commands like the ones you see in my Makefile. It's as easy as: 
  `xsltproc $(location of mathbook-html.xsl) $(location of your xml file)`
  
Image building dependencies
- In addition to a basic latex distribution, the `mbx` script from pretext requires xetex
- To build the svg images from the latex code, run: 
```bash
~/src/mathbook/script/pretext -vv -c latex-image -f svg -d ~/src/class-notes/assets ~/src/class-notes/source/class-notes.ptx
```
(where the location of the pretext /mathbook/ folder and this set of class notes would depend on your own machine)

  
### Acknowledgements: 
- Special thanks also goes to the Wichita State Open/Alternative Textbook Initiative for their generous grant to help expand the text.
- I was inspired to write my notes when I encounted [Alan Doerr & Kenneth Levasseur`s Applied Discrete Structures](https://github.com/klevasseur/ads) which I used as a supplemental text for my computer science based mathematical structures course (Math 322).
- I borrow heavily from the exercises of Oscar Levin's [Discrete Mathematics: An Open Introduction](https://github.com/oscarlevin/discrete-book).
- The text is written in the [PreText](https://github.com/rbeezer/mathbook.git) markup language.

![Creative Commons - Share Alike License Logo](https://i.creativecommons.org/l/by-sa/4.0/88x31.png) These notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
