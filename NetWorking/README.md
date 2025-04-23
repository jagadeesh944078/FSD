### NetWorking

- when data is coming from server to client or web browser what happens in between is all about **NetWorking**
- will see when data going from server to client what are protocals required.also what are the diffrent ways we can do that.
- here we can't say restapi good or bad or graphql good or bad.its completly depends on what kind of system you are building.
- sometimes using graphQl in a small project can be overkilled.
- suppose you have understanding of any concept. but not deep level then **convey to the interviewer** i have this understanding.something which i want to go deeper, actually exploring right fashion, whenever i get the right opprotunity.

### How the web works ?

- when you search for anything in browser how things are going to work will see.
- example when we search for google.com then we got google page. also when search for linkedin/some profile i will get direcly that page
- will see here from where this thing is coming what is happening behind the scene
- in browser **network tab** talks about any interaction that happens between your browser.and any request goes behind your browser.
- example when search for flipkart.com then go to network tab.you can see first request goes to **www.flipkart.com**.then when this request went,there are some information which is sent from client.there are some information which we got from response.
- you have to go **response tab inside Network only** you can see some html code.we can say html is mother tongue for browser.where browser understands ohh this skelton this is structure of page,how i need to structure the page get to know.using this code browser able to render this particular structure.here you have grocery mobile section all those things listed based on skleton you got from response.
- in response you have to observe **2 things** one is css file and another is js file loaded.here css file which helps to desing the things to look and feel more interactive.
- js file like performing any interactivy or making dynamic
- this all of css,js,images coming from some machine that machine we call it server,there is some machine already there in internet where we can access using flipkart.com.it say you need this html,css,js & images happy to provide all information you need,that is how high level things works

- **client to server image**

- from the client we made **request**, it went to server.finally server is able to respond you with the response over here. here response is your html,css,js files and images.
- what is server in general anybody laptop can be server.server is nothing but a computer which can process some request after processing respond you with the data.
- our machines can't be that reliable on server,our machines has limited cpu,limited ram.that is why we take high end server in order to ensure that multiple people can request multiple requests can be processed.eventually.
- the request can be processed in better and faster way.eventually if we talk about it should be avaiable 24 into seven also.
- hence we ended up saying that there should be a dedicated machine or the server which is connected on the internet, using which you can basically do that.
- for example from your mobile or laptop now in order to you connect with other device which are available in the internet you need something which is very very important.example you delivery anything to your address first you should provide pincode based on pincode it will be delivered or not will check.same hre if we 2 devices has to connect on the internet. it needs somethign which is called **ip address**
- for example you have some IOT devices which can operate from your office.like who are coming to your home face door locking or fingerprint sensor,these things basically work based on the ip address.using this ip address things can connect very effectively.
- **in short anything on the internet you want to connect you need a dedicated ip address for those things**
- basically will not remember the ip address so here we type something called google.com or flipkart.com or amazon.com this one we called as domain

- **add some image**

- basically here with domain name you can't anything do anything because suppose you go to postoffice with your name they can't deliver they need exact address here also same you need ip address
- so when you search anything in the browser from tab or mobile or computer first you need internet that is basically if you use mobile data you will get from cell towers.so as soon as you hit google.com the request go to cell tower then it will go to another server which **DNS(Domain Name Server)**. its like we can say phone book or dictinory where your name associaated with ip address.
- based on name you will get ip address from DNS server.then again from mobile -> cell tower -> you will hit respective server or data center or machine then you will some data.
- that data can be any format it can be html,css,js that we talked about which is building block of any web application.finally you will get all things which are required finally it gets rendered into your application.

- mobile -> router -> ISP(Internet service provder) -> DNS (here you sent back ip address)
- DNS -> ISP -> router -> mobile(received ip address) -> router -> ISP -> Server -> webpage

- **how one laptop can connect with another laptop?**
- one laptop with another thorught wire alot wire mess will be there.so we want to connect with wire and wireless

- whenever we search anything using domain. in DNS domain consist of multiple parts of it.using this parts it helps to dig deeper into the domain and it helps you to get the right ip address from digging dipper into from your root, top,second,third level and it helps to finally reach to the server which contained the ip address of the domain which you looking for.

- suppose facebook youtube there are billions of people using it.one single machine can't do justice we can have multiple machince with high configuration inorder to serve such load.
- we need data centers which means it container large set cpus, computers where you dont need screens.you need cpus assembled over there and need powerbackup you have memory,processers all those things associated with that
- in data centers multiple machines which are responsible for map to particular ip address which you serched
- after getting domain name any pathname like /chirag or /jagadeesh to go to specfic page which completly controlled by you.
- these data centers connected thorught **optical fiber** because thorugh satilite to data center we may face weather problems sometimes.
- **browser can make 6 or 8 paralle request depends on the browser to browser.any request that beyond browser are queued**
- **ISP** we have local ISP -> Regional ISP -> Global ISP sometimes google can diretly connect to local ISP then you can get the data directly to your computer
- **ICANN** company which manages the all ip address domain mapping for us.
- **WHOIS** also provide you privacy protection.example you dont want make your email or address this autharity helps you to govern all of these.
- this is link [text](https://www.whois.com/whois/) where you can serach domain like google.com or flipkart.com then you can see expired data and other details etc..
- here some details are hidden those taken care by **WHOIS**
- most of the times you send **TCP** request and get acknowledgement iam going to send request are you avaible its says iam availble. now you can send me any of the request iam happy to serve any kind of data you want.kind of protocol we used that is **TCP**

- before http request it will do **SSL** handshake when you make https request it will make extra handshake that **SSL** which is for security purpose.
- i will exchange some **certificate** and so that next time when i send the data whenever we communicate we use that certificate as an encryption way.using that encryption will talk,so that no one will understand what we are talking in between.so that kind of password we are exchanging which will use in order to encrypt all further communication.

- now your http request will go then you will get that data in chunks.its like 14kb in first response and 24kb in second response and 56kb in third response.so that in first reposne only if you get html css data then you can show something to the user.then overall performence will be increased rendering time also reduced.

- **Loading**
- **Scripting**
- **Rendering**
- **Painting**
- Loading Neccessary Data (html,css js files), executing scripts that is your javascript and trying to Render the data you get and finally Painting finally output which will be visible on the screen.

- you send request you get response in response you get CSS,JS. css is **render block** which means until and unless it loads not going to show anything in UI.JS is **Parser Blocking** whenever Js is executing it blocks the parser,which means it will halt it and it will ensure that once its downloading parsing everything is completed then it will go to the new line.

- with html response you will **Build DOM tree** its like tree every tree has branches and branched have fruites like that.similarly we have **Build CSSOM** after both are done it will **Excute JS** then it will Merge DOM and CSSOM into the **render tree** its like finall set of css applied you can see in browser by inspect and **computed** section

- then **build layout** tree and **build paint** tree and **trun layers information into the pixel on the screen**

- first step **raw html** which convert into **DOM nodes** then second step external resources fetch it outside here css is render block and js is parser block

## Communication Protocols

### HTTP

- HTTP means inorder to communicate between 2 systems we use mother tonugue. one of mother tonuge is HTTP.the way its communicated like what needs to be done,how needs to be done,how data will be transformed from one place to another.understanding that structure of the data, request & response that is defined by **HTTP**

- how HTTP works is first it will make TCP connection(its like confirming iam going to send response kind of) once connection is established the you can request and get the response

- HTTP is used for **web browsing** browsing kind of activities loading images etc.. all of these communication with server happens on the protocol which is called **HTTP**
- HTTP request none of the data pocket going to lost because we make TCP Connection
- **example : web brosing**

### TCP

- in TCP Connection its a 3 way request,first one which sends as synchronization request to confirm whether server is avilable,then its send an acknowledgement yes iam availble iam give you sequence number,you have to use that number inorder to do next communication request.
- here this number is important because TCP says if iam sending data in large pockets,and if one of the pocket is missing,i will ensure i will resend that packet
- TCP Guarantess that not going to loss any of the pocket while transferring from one server to another server
- **example : web browsing email protocol**

### HTTP3 or QUIC

- now a days lot of companies are using it. google uses it is heavily used inside the youtube.
- it established the **UDP Connection**
- its super fast but not going to make any TCP connection its make UDP connection, where in single request i send the data and basically start accepting the data.

### how UDP connection is Faster?

- it does the header compression.Faster,Improve performence, better network congestion

### UDP

- UDP is like my intent is to make fastest thing.example in highway vechicles goes at high speed,there is no gurantee that whether you will reach destination or met with some accident.Exactly UDP also works like that.in between you may lost some data.

- here there is no handshake kind of thing directly i will send request then you will receive response in between even some of the pockets lost iam not responsible.

- **Example : video conferencing,whatsapp video calls we use this concept alot**

- Example of courier boy suppose the courier boy will knock the door and give you the parcel then he will ask OTP for delivery confirmation this is like **TCP** another way the courier boy just keep the parcel in front of the door but he will not knock the door or any confirmation whether you receive data or not its like **UDP** but iam going make delivery as much as possible.

### HTTPS

- its same as HTTP but more secure.highlevel you have to understand, along with TCP it actually made one more call which **SSL & TLS(Transport Layer Security)**,what it says iam going to make TCP connection but iam not sure whether someone can steal this pocket and read the packet in between,so its says there is a better way we can do one thing,so i will share you public key,you use that public key on the client encrypt that data and send that data back.

- here encrypting happening both the ways, when server is sending data it encrypt the dat and send it back.and decrypt that and try to understand similarly when client sends the data the server received that decrypt and understand

- **Example: Web browsing**

### Web Socket

- its used for live streaming, live chat, alot analytics dashboard,that likes you see in the youtube,all of these are using the websocket

- web socket used **HTTP upgrade** it means first it will http request then i will upgrade request to websocket.it says now we are in websocket connection.

- once you are in web socket connection,you are saying Iam a **full duplex**.mit means whenever you want single live connection whenever client want to send data can send,whenever server want to send data can send,there is **no such new connection** basically happening,in case of http,http3,https you connection made for every request.

- Web Socket is single long lasting in order to do this duplex communication

### SMTP

- the mails you get gmail outlook any kind of email basically that you are getting those are actually delivered using some smtp protocol via smtp sever, so first request goes to some smtp server.it knows what is the destination or address how do i need to deliver it to requeting server you can say receiver

- here its not like you are sending request and getting response,you are saying iam want to send an email to someone it can single or multiple,so **SMTP server** ready to send the email to the people because i knoe how to target using SMTP

- **Example : Sending/Receving emails**

### FTP (File Transfer Protocol)

- there are big files which needs to be send from one system to another system can make multiple strategies can use http stream the data convert into binary data,but in order to transfer this large files or heavy files there is a special protocol which **FTP**,
- which says transforming files are very easy and huge files can be transfered very easily.
- **used for download/upload file**
