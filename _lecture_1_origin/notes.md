# Welcome to the hell...

---
- How to run script outside the browser
--> Install Node.js on your system
--> Create index.js file
--> terminal cmd node index.js

---
- What are packages
--> We can create our own packages easily
--> Code which is written by any other developer and made available publically for everyone so developers can use it.
--> All packages are stored on npmjs.com website which we can explore.

--> What are these files?
>>> node_modules
> packages code avaibale on npm website
> bring that code to my system
> package's code come to node_modules folder on your local system

>>> package-lock.json
> packages ek dusre pe dependent hote hai kuch kuch independent bhi hote hain
> this is managed by this file

>>> package.json
> aapka js ka code kon kon se package pe depend karta hai unka list

    - How to install packages
    --> Let's install acute package known as cat-me
    --> Install package - Bring code from npm website to your system
    --> npm i cat-me

    - How to use packages
    --> Create a js file >> app.js
    --> require cat-me to a variable catMe
    --> console.log(catMe()); >> explore Readme of cat-me
    --> node app.js

---
- What is a server
- Create server with Express
- Program server to response to users
- Deploy server