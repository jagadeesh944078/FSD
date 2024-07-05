## Performance module

### why performance?

- we know performance is all about optimization.can we make something faster and can we make something better that is what we want to do in terms of performence
- whenever performance comes it shouldn't come in terms of matrics it should come interms of impact that you are going to do when you are modifying or changing optimizing something

### performance Metric

- means i did somechange because it was told in some document and tutorial and iam statisfied because iam able to use called usememo or usecallback. i have done something using these things and iam happy because that was given by tutorial and i have used it internally it will be doing some optimization. is it really doing optimization how do you get it
- the changes you are doing it will create positive impact or negative impact.because there is no silver bullet in the case of permormance it could have worked for someone else not neccessary it will work you that is very important

### Measuring Performance

- here we are going to dive into what are diffrent tools and some of tools related to the your browser tool.you can use dev tool.you can go into performance tab and there are other tabs also get into the performance tab no doubt you can levarge into your dev tool also
- but how do you monitor the things which are already in the production.because already millons of users who already using the application they may not be in the same screen or same device or same configaration that you maybe not having
- the performance you have in the local machine maynot have in the user machine how do you monitor and how do you tackle and how will you get to know what is happening in diffrent user machine
- why performance and what are the permance metrics that are matter probably to you and what should you probably bother about.saying that web vital basically helps and basically that works for me.
- at highlevel it works but there are new things keeps comes in and replace it.so what is the matter is understaning fundamental is important
- and how do you measure your local system performence and user machine performence evrything user centric performance and browser centric performace so many things in the case of performance evrything matters
- once you know metrics how do you measure it now what are changes you are going to do inorder to optimize your application.that is what we are going to talk about

- once you know what are diffrent touch points you have to understand where could be the problem the problem could in the server(server is taking lot more time to process something) or in network layer(this network is slow are taking time to fetch) or in browser level (the way you are asking asset it has javascript,css,images.audio etc.. ) how you are accessing those assests in this network layer there can be the problem
- other problem is that kind of library or kind of bundle or order you are maintaing
- and you are using reactjs but not following best practises something can be problem the way we are utilizing the framework or library that we understood
- problem could be what is the rendering techinque you are using.you are using static rendering.some people say you need static rendering(SSR) and some say you need client side rendering(CSR) and some saying client and side component kind of thing

### Network Optimization

- we will learn about network optimization
- if network is the problem what are the techiniques we have what all we can do and how we can tweek it inorder to make it performance that is what we are going to learn

### Asset Optimization

- javascript,audio,video,css font file any of this culprit if yes what could be taken as action inorder to make better

### React Optimization

- because more application developed on react so will learn about this

### Build Optimization

- there are few things which can be optimized at the time of serving but what if there was a problem at the time baking itself suppose when you go to the restarent you can add some topins inbetween you can reduce the time but if production is impacted if there are manufacturing defect in the code that is going to be shifted or the application that going to be shiffed noone can do anything

- at the time of manufacturing level when we are deploying the application what are things and techinques we can use inorder to make it better that is what we are going to dive into

### Rendering Pattern

- will talk about CSR and SSR all rendering patterns

## Why Performence is Important?

- **User Experience**
- if you see some govt websites it will take lot of time to load and we use to say i will go to private website and purchase it even if they are charging me because at one place your sucks and other place your experience is better
- **Productivity**
- suppose lets take any application you are buying any stock or any season you are purchasing product in online but it was not responding so if your productivity hampered then your are going to think about application performence
- **Customer Satisfaction**
- if you are building something but customer not satisfied then no use of building so customer satifaction important in terms of performance
- **Revenue & Profitability**
- the video you are watching that video also streaming we have to pay money to platform which streams the video.
- suppose 20gb one sinle video which is getting streamed who are going to lose you are going to lose because your bandwidth is consumed that amount of data consumed in mobile or laptop from your broadband
- experience also impacted because you may see some log etc.. here you are paying more in revenue
- second because it has to be stremed and secured and that amount of data transfored from the server is high then the cost also high so if performance is not good we will see the lose
- **Operational Costs**
- suppose your are application is performent then opps team cost also reduced because no of tickets they are going to close every day will be reduced
- if its not optimized the cost increased time consuming increased
- **Competitive Advantage**
- your application loading faster than competitor app so users will be attracted to your application because they will get better experience
- **Google ranking based on perfomance**
- one of the parameter google follow application which is faster it will come in first line

### Business Metrics

- **Session Time**
- how much time user is spening in your website which is very important
- **Bounce Rate**
- someone came because it was taken so much time to load he didn't want to wait he went off.

- **Understaning Your Users**
- **Device**
- you should not say its working in my system but i dont know in your system
- one of thing is what kind of machine user is using user will use sometime mac with high configuration or windows with low configuration or desktop or mobile version of application there are n number of device related problem
- you have to understand your user interms of Device and resolution you are setting etc..
- **Network Quality**
- what kind of network user is using and what kind of application application you build http or http1 or http2 you have to understand mutual understanding is important
- **CPU & GPU**
- there are some complex complications that consumes memory some computation of user system or your system then this is important
- example you are having heavy analytics dashboard or editing dashboard like photoshop online website lot of stuff haaping in your website then CPU & GPU matters
- javascript comes with stuff because in median desktop it takes 0.4 seconds but mobile median it takes 3.4 seconds to boot up

## Performance Monitoring or Metrics

- **web vitals**
- it is kind of our pulses whether person healthy or unhealthy so same like that vitals are something which helpful for identifying
- similarly these are kind of pulse to metrics which give key metrics which are going to tell you your website is healthy or unhealthy in terms of performence
- there are many web vitals in that we talk about core web vitals here
- **Core Web Vitals**
- **Largest Contentful Paint (LCP)**
- when we are loading that one metric we see that LCP(Largest Contentful Paint)
- it simply means how much time it took to render maxportion of your page so that your website is loaded that LCP
- when i clicked on something it took sometime to react because behind the seen some javascript loaded or react loaded
- there are parameters suppose website loaded withing 2.5 secs its good or between 2.5sec to 4.0sec then there are chances to improve it if it take more than 4sec that its poor performence you have to improve performence

- **FID(First Input Delay)**
- there is sometime for time when you click and finally you get response interm of you feel like you clicked one something you get some response that input delay which is called First Input Delay(FID)
- there are parameters here also but not network calls because of script loading backgroung job was happening and main task is not free inorder to respond that is what talking about
- withing 100ms you should get and between 100ms to 300ms you should improve little bit if it take more than 300ms then we should improve performence

- **CLS(Cumulative Layout Shift)**
- when you are consuming website multiple shifts can happen like image got loaded or you got the banner your website got shifted because you perform some activity all kind of unstable comes under CLS
- there are parameters how much portion based on that it calculate it number good or poor
- here 0.1 sec good between 0.25 medium more than 0.25 its poor

- there are still some problems because sometimes few half the metrics we feel as best metric may not be best metric
- we are doing FID only on loading it may be happen on after loading click events not good hence there is another core web vital comes into picture that metric is INP(interaction to Next Paint)

- **Interaction to Next Paint(INP)**
- it means you may do keyup or keydown or tapping on mobile devices you may have junky behaviour the moment you interacted and finally get painted get alot of delay which is happend because you have written logic
- the worst number will be yout INP
- if we can't measure something we will not able to improve something so if you want to improve something you should first measure it

- There are 2 types of metrics
- **Browser Centric Metric**
- means something measuring performence at browser level means loading of the page and rendering of the page
- how much it took blocked and response from server and domcontent load etc...

- **Time to first byte(TTFB)**
- how much time it took to get first bite depends on server
- you made the request but server took sometime to respond so issue maynot be at client issue at the server so your first bite depending on the response that you get from server how much time it took for first bite is important
- **Network Requests**
- how many paralley network request you made etc..
- **DNS resolution**
- **Connection Time**
- tcp connection etc..
- **DOM Content Loaded**
- **Page Load**

- **User Centric Metric**
- its directly going to impact how the user experience is and what is perceived performence of the user it means numbers of saying something but perceived feeling like it just got loaded fast but if you see browser metric it takes lot of time to load so its user percepctive

- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **First Input Delay (FID)**
- **Interaction to Next Paint (INP)**
- **Total Blocking Time(TBT)**
- time between FCP and LCP is loaded
- **Cumulative Layout Shit (CLS)**

- important thing you should set the budget for the performance means there is no end to best state of the performence. so should have budget it means how much time how many resources for how many duraction basically we are going to spend time and what is our goal inorder to get achieve and what you will get come from that goal either your using is going to benefit or you are investing more on performence then getting return that is something which you have to do
- use tools like light house webpagetest there are many tools inorder to identify how things are performing over here

### Performance Tools

- **Developer Mode**
- Lighthouse
- Network Tab
- Performance Tab

- **Simulated Data**
- webpagetest.org

- **Real User Data**
- CRUX
- CRUX using this CRUX it has info about huge set of websites that we are using or freequently used app goes into CRUX database
- PageSpeed.web.dev
- requestMetrics.com
- **clarity.microsoft.com**
- **NewRelic**
- **Sentry**
- **Google Analytics**
- whenever you test in any website test it in incognito mode because there are lot of extension which may effect the performence

### Network Optimization

- Critical Rendering path
- Minimize the http request
- avoid redirection
- Resource Hinting
- Fetch priority
- early hints
- http upgrade methods (http1.1 vs http2 vs http3)
- compression: brotli/gzip
- http caching: cache control
- caching using service worker
