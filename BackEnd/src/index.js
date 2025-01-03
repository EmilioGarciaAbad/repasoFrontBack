import app from "./App.js"
import connectdb from "./db.js"

connectdb()
app.listen(3000)
console.log("Server on port 3000")