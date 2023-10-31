# cpnt262-a1

## CPNT 262 | Assignment 1 | Bring a Webpage to life

### Important Note(s)

- I used previous html code from my cpnt260-final-project. It's from gallery.html, which was used for the knife gallery a.k.a knives page.

### Attributions

- [FontAwesome](https://fontawesome.com/)

Dark/Light mode toggle
- [Dark/Light mode Youtube tutorial](https://www.youtube.com/watch?v=t-AQf8yzEeA)
  - This tutorial helped me make the actual day/night toggle
- [Day & Night mode toggle](https://foolishdeveloper.com/day-and-night-mode-toggle-using-javascript/)
  - This site helped me with the javascript code portion

Contact Us section
- [HTML Contact Form](https://www.majesticform.com/form-guides/html-email-form)

Gallery CSS Images for cards
- [Gyuto knife image](https://www.chefslocker.co.uk/store/p87/WASakai.html)
- [Santoku knife image](https://www.justonecookbook.com/your-guide-to-japanese-knives/)
- [Nakiri knife image](https://www.koiknives.com/blogs/japanese-knives/santoku-vs-nakiri-knives-which-one-is-right-for-you)
- [Bunka knife image](https://knifewear.com/products/yoshikane-shirogami-stainless-nashiji-bunka-165mm)
- [Petty knife image](https://staysharpmtl.com/en/collections/petty/products/hitohira-imojiya-th-aogami-super-petty-120mm)
- [Usaba knife image](https://en.wikipedia.org/wiki/Usuba_b%C5%8Dch%C5%8D)
- [Deba knife image](https://www.chefslocker.co.uk/deba--butchery.html)
- [Yanagiba knife image](https://en.wikipedia.org/wiki/Yanagi_ba)
- [Garasuki knife image](https://takahashikusu.co.jp/en/product/468/)
- [Sujihiki knife image](https://staysharpmtl.com/en/products/hado-ginsan-sujihiki-270-mm-kijiro-laque)
- [Kiritsuke knife image](https://staysharpmtl.com/en/products/yoshikane-skd-nashiji-kiritsuke-gyuto-240mm-tagayasan)
- [Burja knife image](https://osterrob.si/products/burja-noz-za-prsut-300-mm)

Classmates & Teachers
- Ashkie 
- Brendan
- Sterling
- Ashlyn (instructor)
- Tony (instructor)

### Features

- Mobile Hamburger Menu Toggle
  - Client.js: see the process in lines 1-26 
  - Index.html: see lines 35-40
- Day/Night Mode Toggle
  - Client.js: see the process in lines 151-174 
  - Index.html: see lines 19-25

### Code Journal 

Mobile Hamburger Menu Toggle

- When I was making this, I was able to create the actual toggle smoothly with no problems. When I was making the javascript code for it, everything looked right, but when I tested it, the primary navigation links couldn't dropdown when I clicked the toggle. I was able to figure out what was wrong because I noticed the same error that kept popping up in the console for a certain const. After that, I decided to delete it and as a result, the toggle worked.

3-Card Gallery

- When I was doing this, I was able to set up the steps properly, but some odd reason, the objects just didn't want to render. Since I was having trouble with it, I asked Ashlyn's help on what went wrong. She pointed out my mistake with regard to how the image portion within the object array was typed out (I wrote image instead of img). Once I double checked my js code and fixed that problem, the objects were able to render to the html page. 

9-Image Gallery (12 images in my case)

- I was able to get the images rendered to html, with some help from Sterling on how to structure the object array. There was a small problem I had to deal with, and that was trying to figure out how to get rid of the commas in between the images. Tony suggested to use the join(" ") at the end of the querySelector in order to get rid of them. 

Day/Night Mode Toggle

- With the help and guidance of the Youtube tutorial that I watched (referenced in the Attributions section), I was able make the actual day/night mode toggle. As always, there was something wrong with the javascript code I made. So I decided to look at another site to find out what went wrong. From the site, it seemed that I didn't make any css classes for the dark theme, and that the js code from this site looked so much simpler than what I did from following the Youtube tutorial. The toggle worked, but I ran into another problem. When I refreshed the page, the toggle still worked, but the night toggle turned to day instead and vice-versa. So I went to Tony for help, and he told me that I needed to put the localStorage.getItem outside of the function, and that I needed to make a true/false, if-else statement. From there, I had to add some more js code by making a const for the toggle and the page itself. Once I was able to add some more js code, it finally worked.