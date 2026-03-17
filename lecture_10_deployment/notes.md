Frontend | Vercel 10$ & Backend | Render 25$ = High Cost
Integrate Frontend (dist) + Backend = Deploy Render only 25$ = Low Cost

Frontend -> npm run build -> dist
dist -> backend
backend -> public -> dist all files and folders
app.js -> middleware -- app.use(express.static("./public")); - make publically available
frontend api localhost wala hatakar live wala redeploy krna pdta hai