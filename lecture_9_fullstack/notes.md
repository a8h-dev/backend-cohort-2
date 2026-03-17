Extension = env masker -- karan kadam

---

-> Server started and connected to DB
-> Database me kuch bhi store karana hai toh uska pehle format batana hoga
-> Note ka format {title, description} with type isi process ko ham Schema create krna aur format ko Schema kehte hain


---

Frontend
-> axios
-> CORS policy - npm i cros in backend
-> Patch Task - Update notes title and description (Completed)

---
npm run build -- on frontend
dist -- html, css, js of whole react project
public folder -- on backend
move dist files to public folder
Wild card api handling


// most complex topics -- let's conquerorit
const path = require("path");
app.use(express.static("./public"));

// console.log(__dirname);
app.use("*name", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "/public/index.html"));
})