1. Server create and start
2. Database connect
3. userSchema & userModel create
4. routes & controllers files

1. user ka data save karna DB me DONE
2. token create user ke liye, user data ke sath DOING
signature with a secret name JWT_SECRET
jwtsecrets.com
jwt.io encode decode

npm i jsonwebtoken

ab user register ke baad token create hokr user ke pass ja rha hai
rule: ki ab user jitna bhi request krega server pe har request ke sath token jayega

Cookies storage:
-> client side pe rehti hai 
-> server cookies storage ke andar data write and read kr sakta hai
-> user register -> token create -> client side pe cookie me token save
-> npm i cookie-parser
-> cookie pe data rakh kyu rhe?
-> kyuki cookie ka data ko server user ke har request ke sath khud hi padh lega hame manually code nhi karna prega ki token server pe bhejo