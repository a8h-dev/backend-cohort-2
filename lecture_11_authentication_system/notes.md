# Authentication System

> Authentication
> Identify karna ki request kis user ke pass se aayi hai
-- user register to server with his data
-- user ka data save krna DB me
-- Token (id card ki trh) create user ke liye, user data ke sath
-- Token server create krta hai
-- Token user ko de diya jata hai
-- Ab user ke kuch bhi request ke andar ye token ki copy jani chahiye
-- ab server identify kar sakta hai request kis user se ayi hai
-- Server token pe sign krta hai
-- Signature with a secret name JWT_SECRET jo server pe sirf save hota hai
-- JWT_SECRET -> 93052c11ef1556440409ffc9837fcd6e6f7d1620 kuch aisa rehta

> Authorization
> user kya kya kar sakta hai
> student | teacher | director
> classroom | faculty room | director room

> Validation
> data ka format check karna

> Verification
> data sahi hai ya nhi