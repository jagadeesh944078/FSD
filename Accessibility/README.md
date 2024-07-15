### web accessibility

- Accessibility
- ARIA
- Screen Reader
- Focus Management
- Contrast Theme
- Tooling
- Examples

- **what?**
- web accessibility means that people with disabilities can use the web (perceive, understand,navigate (one page to another page),interact & contribute(filling the forms or register) to the web)

- **why?**
- The goal of web accessibility is to eliminate barriers that may prevent people with disabilities from interacting with or accessing information on the web

- webapps are by default vey much accessible.it is we as developer make them inaccessible.it means by default html syntax we have most of the time are accessible by default.but the way we implement things make them inaccesible

- the web page you created should be accessible to everyone. when we say everyone it means inclusivity.there is a inclusion of everyone. what does it mean. it means people who have disability like any disability it can be person can't see or can't speack or any kind of disbility,colour blindness,some may have weird kind of diseases like you may not aware what kind of disease but we as a software developer. we want develop application which anybody can access easily.

- example you have disability you can't hear sounds when watching any video there is a alternative for this.

### Disabilities

- Visual
- Hearing
- Motor(can't use hands properly)
- Neurological
- Speech (can't speak )
- Temporary(eye surgery, etc..)
- Situational(you may not hear in noise crowd)

- **AT(Assistive Technology)**

- Keyboard Only (we use tab button to fill up all diffrent type of fields in the form or many places you can see tab button we use)
- Screen Reader (yourlaptop started speaking)
- Mouse & Pointer Device (use the webpage)
- TouchScreen Gestures(in mobile we use double tap zoom in zoom out)
- Screen Magnifiers(setting options like increase zoom percentage because of eye disbility etc..)

- **Accessibility Standards**

- WCAG (Web Content Accessibility GuideLine)
- 1. Level A (basic)
- 2. Level AA (intermediate)
- 3. Level AAA (advance )

- **WebAIM (WCAG Principles)**
- Perceivable (anyone on the internet they can get infromation and they consume content which is there on the web)
- Operable (suppose i have disability i came here to Register the form maybe for examination or something i should able to naviagate thorugh the pages and fill the form etc..)
- Understandable (there should not be confusion when you doing or access web page)
- Robust (if you are using mac or windows or any tool for helping disablitiy people should follow same standard)
- **Accessibility we call it a11y because between A and Y we have 11 characters**

### Accessibilty Tools & Techniques

- **Automation**
- AXE(windows)
- Espresso(android)
- eslint-plugin-jsx-ally (linter)
- accessibility plugin

- **Manual**
- Lighthouse
- Deque's Axe Tools
- Element Tab in devtools

- **Out of box(by default provide accessibility)**
- Material (inside framework itself they work on accessbility)
- Fluent UI (inside framework itself they work on accessbility)

- **Techniques**
- use as much sematic HTMl as you want
- whenever you have form field try to use label,label description etc..
- try touse contrasting colors
- describe why you are using link exactly what it will do
- keep pinch and zoom alive (in meta tag use scalable="yes")
- provide text for no-text content(like use alt for img tag etc..)
- define what will happen on focus
- define understandable without color
- caption for video and audio
- use WAI-ARIA only if nessesssary

- **Test for accessibility**
- Zoom to 400%
- Check keyboard navogation (example tab tab and check whether working or not)
- Turn your monitor off and use a screen-reader
- run lighthouse accessibility audit
- Deactivate css (try once assignment)

- ### How to Fix accessbility
- **by default web apps are accessible we make them inaccesible**
- **everything can't be automated especially in terms of accessbility**

- **Examples**
-
