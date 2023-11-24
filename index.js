// ? IMPORTS


// ? SYSTEM IMPORTS

const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express();   
dotenv.config()

// ? FILE IMPORTS

// FRONT PAGE IMPORTS

const TeachersRoute = require("./routes/teachers")
const ReviewsRoute = require("./routes/reviews")
const EventsRoute = require("./routes/events")
const MessagesRoute = require("./routes/messages")
const AdmissionFormRoute = require("./routes/admissionforms")

// BACK PANEL IMPORTS

const InquiriesRoute = require("./routes/backpanel/inquiries")
const PanelClassesRoute = require("./routes/backpanel/classes")
const StudentsRoute = require("./routes/backpanel/students")
const FeesRoute = require("./routes/backpanel/collectfees")
const EmployeesRoute = require ("./routes/backpanel/employee")
const SalariesRoute = require ("./routes/backpanel/salaries")
const ExpensesRoute = require ("./routes/backpanel/expenses")
const UsersRoute = require ("./routes/backpanel/users")
const featuredRoute = require ("./routes/backpanel/featuredinfo")
const chartsRoute = require("./routes/backpanel/charts")

// ? CONNECTION

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL).then(() => console.log("SUCCESSFULLY CONNTECTED TO DATABASE")).catch((err) => console.log("Filed to connect to db: " + err))

// ? ENDPOINTS

app.use(cors());
app.use(express.json());

// WEBSITE ENDPOINTS

app.use("/api/web/teachers", TeachersRoute)
app.use("/api/web/reviews", ReviewsRoute)
app.use("/api/web/events", EventsRoute)
app.use("/api/web/messages", MessagesRoute)

// BACK PANEL ENDPOINTS

app.use("/api/panel/forms", AdmissionFormRoute)
app.use("/api/panel/inquiries", InquiriesRoute)
app.use("/api/panel/classes", PanelClassesRoute)
app.use("/api/panel/students", StudentsRoute)
app.use("/api/panel/fees", FeesRoute)
app.use("/api/panel/employees", EmployeesRoute)
app.use("/api/panel/salaries", SalariesRoute)
app.use("/api/panel/expenses", ExpensesRoute)
app.use("/api/panel/users", UsersRoute)
app.use("/api/panel/featured", featuredRoute)
app.use("/api/panel/charts", chartsRoute)

// ? LISTEN TO APP

app.listen(5000, () => {
  console.log("Backend server is running!");
});