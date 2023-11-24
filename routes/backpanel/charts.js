
const router = require("express").Router();
const CollectedFees = require("../../models/backpanel/CollectFee");
const Students = require("../../models/backpanel/Student");
const Inquiries = require("../../models/backpanel/Inquiry");
const Expenses = require("../../models/backpanel/Expense");

// INQUIRIES BAR GRAPH   

router.get("/fees/:session", async (req, res) => {
    try {
        const allCollectedFees = await CollectedFees.find()
        const thisSessionCollectedFees =  []
        allCollectedFees.map((s) => {
            if (req.params.session === s.session) {
                thisSessionCollectedFees.push(s) 
            }
        })
        let jan = {
            month: "January",
            collectedFees: 0
        }
        let feb = {
            month: "February",
            collectedFees: 0
        }   
        let mar = {
            month: "March",
            collectedFees: 0
        }   
        let apr = {
            month: "April",
            collectedFees: 0
        }
        let may = {
            month: "May",
            collectedFees: 0
        }
        let jun = {
            month: "June",
            collectedFees: 0
        }
        let jul = {
            month: "July",
            collectedFees: 0
        }
        let aug = {
            month: "August",
            collectedFees: 0
        }
        let sep = {
            month: "September",
            collectedFees: 0
        }
        let oct = {
            month: "October",
            collectedFees: 0
        }
        let nov = {
            month: "November",
            collectedFees: 0
        }
        let dec = {
            month: "December",
            collectedFees: 0
        }

        thisSessionCollectedFees.map((val) => {
            if (new Date(val.date).getMonth() === 0) {
                jan = {
                    month: jan.month,
                    collectedFees: jan.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 1) {
                feb = {
                    month: feb.month,
                    collectedFees: feb.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 2) {
                mar = {
                    month: mar.month,
                    collectedFees: mar.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 3) {
                apr = {
                    month: apr.month,
                    collectedFees: apr.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 4) {
                may = {
                    month: may.month,
                    collectedFees: may.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 5) {
                jun = {
                    month: jun.month,
                    collectedFees: jun.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 6) {
                jul = {
                    month: jul.month,
                    collectedFees: jul.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 7) {
                aug = {
                    month: aug.month,
                    collectedFees: aug.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 8) {
                sep = {
                    month: sep.month,
                    collectedFees: sep.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 9) {
                oct = {
                    month: oct.month,
                    collectedFees: oct.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else if (new Date(val.date).getMonth() === 10) {
                nov = {
                    month: nov.month,
                    collectedFees: nov.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            } else {
                dec = {
                    month: dec.month,
                    collectedFees: dec.collectedFees + ((parseInt(val.formFees) + parseInt(val.termFees) + parseInt(val.kitFees) + parseInt(val.admissionFees) + parseInt(val.quater1Fees) + parseInt(val.quater2Fees) + parseInt(val.quater3Fees) + parseInt(val.quater4Fees) + parseInt(val.winterUniformFees) + parseInt(val.otherFees) + parseInt(val.previousYearFees)) - parseInt(val.dicountAmount))
                }
            }
        })

        const data = [apr, may, jun, jul, aug, sep, oct, nov, dec, jan, feb, mar]
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json("GOT AN ERROR WHILE MAKING STUDENT GRAPH: " + error); 
    }
})

// INQUIRIES BAR GRAPH   

router.get("/inquiries/:session", async (req, res) => {
    try {
        const allInquiries = await Inquiries.find()
        const thisSessionInquiries =  []
        allInquiries.map((s) => {
            let inquirySession = ""; 
            if (new Date(s.inquiryDate).getMonth() > 2) {
              inquirySession = `${new Date(s.inquiryDate).getFullYear()}-${
                new Date(s.inquiryDate).getFullYear() + 1
              }`;
            } else {
              inquirySession = `${new Date(s.inquiryDate).getFullYear() - 1}-${new Date(s.inquiryDate).getFullYear()}`;
            }
            if (req.params.session === inquirySession) {
                thisSessionInquiries.push(s) 
            }
        })
        let jan = {
            month: "January",
            no_of_inquiries: 0
        }
        let feb = {
            month: "February",
            no_of_inquiries: 0
        }   
        let mar = {
            month: "March",
            no_of_inquiries: 0
        }   
        let apr = {
            month: "April",
            no_of_inquiries: 0
        }
        let may = {
            month: "May",
            no_of_inquiries: 0
        }
        let jun = {
            month: "June",
            no_of_inquiries: 0
        }
        let jul = {
            month: "July",
            no_of_inquiries: 0
        }
        let aug = {
            month: "August",
            no_of_inquiries: 0
        }
        let sep = {
            month: "September",
            no_of_inquiries: 0
        }
        let oct = {
            month: "October",
            no_of_inquiries: 0
        }
        let nov = {
            month: "November",
            no_of_inquiries: 0
        }
        let dec = {
            month: "December",
            no_of_inquiries: 0
        }

        thisSessionInquiries.map((std) => {
            if (new Date(std.inquiryDate).getMonth() === 0) {
                jan = {
                    month: jan.month,
                    no_of_inquiries: jan.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 1) {
                feb = {
                    month: feb.month,
                    no_of_inquiries: feb.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 2) {
                mar = {
                    month: mar.month,
                    no_of_inquiries: mar.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 3) {
                apr = {
                    month: apr.month,
                    no_of_inquiries: apr.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 4) {
                may = {
                    month: may.month,
                    no_of_inquiries: may.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 5) {
                jun = {
                    month: jun.month,
                    no_of_inquiries: jun.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 6) {
                jul = {
                    month: jul.month,
                    no_of_inquiries: jul.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 7) {
                aug = {
                    month: aug.month,
                    no_of_inquiries: aug.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 8) {
                sep = {
                    month: sep.month,
                    no_of_inquiries: sep.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 9) {
                oct = {
                    month: oct.month,
                    no_of_inquiries: oct.no_of_inquiries + 1
                }
            } else if (new Date(std.inquiryDate).getMonth() === 10) {
                nov = {
                    month: nov.month,
                    no_of_inquiries: nov.no_of_inquiries + 1
                }
            } else {
                dec = {
                    month: dec.month,
                    no_of_inquiries: dec.no_of_inquiries + 1
                }
            }
        })

        const data = [apr, may, jun, jul, aug, sep, oct, nov, dec, jan, feb, mar]
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json("GOT AN ERROR WHILE MAKING STUDENT GRAPH: " + error); 
    }
})

// EXPENSE BAR GRAPH   

router.get("/expenses/:session", async (req, res) => {
    try {
        const allExpenses = await Expenses.find()
        const thisSessionExpenses =  []
        allExpenses.map((s) => {
            let expenseSession = ""; 
            if (new Date(s.payDate).getMonth() > 2) {
              expenseSession = `${new Date(s.payDate).getFullYear()}-${
                new Date(s.payDate).getFullYear() + 1
              }`;
            } else {
              expenseSession = `${new Date(s.payDate).getFullYear() - 1}-${new Date(s.payDate).getFullYear()}`;
            }
            if (req.params.session === expenseSession) {
                thisSessionExpenses.push(s) 
            }
        })
        let jan = {
            month: "January",
            Expenses: 0
        }
        let feb = {
            month: "February",
            Expenses: 0
        }   
        let mar = {
            month: "March",
            Expenses: 0
        }   
        let apr = {
            month: "April",
            Expenses: 0
        }
        let may = {
            month: "May",
            Expenses: 0
        }
        let jun = {
            month: "June",
            Expenses: 0
        }
        let jul = {
            month: "July",
            Expenses: 0
        }
        let aug = {
            month: "August",
            Expenses: 0
        }
        let sep = {
            month: "September",
            Expenses: 0
        }
        let oct = {
            month: "October",
            Expenses: 0
        }
        let nov = {
            month: "November",
            Expenses: 0
        }
        let dec = {
            month: "December",
            Expenses: 0
        }

        thisSessionExpenses.map((val) => {
            if (new Date(val.date).getMonth() === 0) {
                jan = {
                    month: jan.month,
                    Expenses: jan.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 1) {
                feb = {
                    month: feb.month,
                    Expenses: feb.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 2) {
                mar = {
                    month: mar.month,
                    Expenses: mar.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 3) {
                apr = {
                    month: apr.month,
                    Expenses: apr.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 4) {
                may = {
                    month: may.month,
                    Expenses: may.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 5) {
                jun = {
                    month: jun.month,
                    Expenses: jun.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 6) {
                jul = {
                    month: jul.month,
                    Expenses: jul.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 7) {
                aug = {
                    month: aug.month,
                    Expenses: aug.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 8) {
                sep = {
                    month: sep.month,
                    Expenses: sep.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 9) {
                oct = {
                    month: oct.month,
                    Expenses: oct.Expenses + val.expenseAmount
                }
            } else if (new Date(val.date).getMonth() === 10) {
                nov = {
                    month: nov.month,
                    Expenses: nov.Expenses + val.expenseAmount
                }
            } else {
                dec = {
                    month: dec.month,
                    Expenses: dec.Expenses + val.expenseAmount
                }
            }
        })

        const data = [apr, may, jun, jul, aug, sep, oct, nov, dec, jan, feb, mar]
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json("GOT AN ERROR WHILE MAKING STUDENT GRAPH: " + error); 
    }
})


// STUDENTS BAR GRAPH   

router.get("/students/:session", async (req, res) => {
    try {
        const allStudents = await Students.find()
        const thisSessionStudents =  []
        allStudents.map((s) => {
            if (req.params.session === s.session) {
                thisSessionStudents.push(s) 
            }
        })
        let jan = {
            month: "January",
            no_of_students: 0
        }
        let feb = {
            month: "February",
            no_of_students: 0
        }   
        let mar = {
            month: "March",
            no_of_students: 0
        }   
        let apr = {
            month: "April",
            no_of_students: 0
        }
        let may = {
            month: "May",
            no_of_students: 0
        }
        let jun = {
            month: "June",
            no_of_students: 0
        }
        let jul = {
            month: "July",
            no_of_students: 0
        }
        let aug = {
            month: "August",
            no_of_students: 0
        }
        let sep = {
            month: "September",
            no_of_students: 0
        }
        let oct = {
            month: "October",
            no_of_students: 0
        }
        let nov = {
            month: "November",
            no_of_students: 0
        }
        let dec = {
            month: "December",
            no_of_students: 0
        }

        thisSessionStudents.map((std) => {
            if (new Date(std.dateOfAdmission).getMonth() === 0) {
                jan = {
                    month: jan.month,
                    no_of_students: jan.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 1) {
                feb = {
                    month: feb.month,
                    no_of_students: feb.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 2) {
                mar = {
                    month: mar.month,
                    no_of_students: mar.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 3) {
                apr = {
                    month: apr.month,
                    no_of_students: apr.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 4) {
                may = {
                    month: may.month,
                    no_of_students: may.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 5) {
                jun = {
                    month: jun.month,
                    no_of_students: jun.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 6) {
                jul = {
                    month: jul.month,
                    no_of_students: jul.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 7) {
                aug = {
                    month: aug.month,
                    no_of_students: aug.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 8) {
                sep = {
                    month: sep.month,
                    no_of_students: sep.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 9) {
                oct = {
                    month: oct.month,
                    no_of_students: oct.no_of_students + 1
                }
            } else if (new Date(std.dateOfAdmission).getMonth() === 10) {
                nov = {
                    month: nov.month,
                    no_of_students: nov.no_of_students + 1
                }
            } else {
                dec = {
                    month: dec.month,
                    no_of_students: dec.no_of_students + 1
                }
            }
        })

        const data = [apr, may, jun, jul, aug, sep, oct, nov, dec, jan, feb, mar]
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json("GOT AN ERROR WHILE MAKING STUDENT GRAPH: " + error); 
    }
})

module.exports = router;