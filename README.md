# Math 321 Workbook
Here I'm working on a workbook / notebook for Math 321 - Discrete Mathematics at Wichita State University.

I'm mostly doing the work on my university git repository, but I also wanted to setup github as an occassional mirror. I'll move the whole thing over when I get closer to the semester.

If you catch at error, let me know and I'll make the fix. Thanks!

Build Directions (in case someone is just getting started with PreText)
- Clone the PreText/Mathbook repository https://github.com/rbeezer/mathbook.git
- Install xsltproc
- Run commands like the ones you see in my Makefile. It's as easy as: 
  `xsltproc $(location of mathbook-html.xsl) $(location of your xml file)`
