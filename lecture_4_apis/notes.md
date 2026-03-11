# Understand what are APIs.
-> An API (Application Programming Interface) is a set of rules and protocols that enables two different software components to communicate with each other. It acts as an intermediary or messenger, allowing one application to request data or functionality from another without needing to know the complex underlying implementation details.

for example:
-> Kon 2 alag alag application-
1. insta app on your system
2. insta server , facebook server

# What is REST API.
-> PDF notes provided.

-> Sirf 2 main rules hain
- HTTP/HTTPS protocol
- Communication ke hisaab se method decide hogi GET, POST, PUT, PATCH, DELETE

# Creating mini Project with REST API.

Notes Task:
-> Create notes
-> See Created Notes
-> Update Notes
-> Delete Notes

-> Postman as user / 
-> Thunder Client vs code extension but not powerful as Postman
-> JSON format for communication
-> post method me data req.body me aata hai
-> req.body ka data express server by default padhne ke liye capable nhi hota hai
-> req.body ka data padhne ke liye ham ek middleware use karenge app.use(express.json());
-> api name same but method different
-> I am loving backend