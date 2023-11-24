const router = require("express").Router();
const CollectedFees = require("../../models/backpanel/CollectFee");
const Students = require("../../models/backpanel/Student");
const Inquiries = require("../../models/backpanel/Inquiry")
const Expenses = require("../../models/backpanel/Expense");

// GENERATE TOTAL EXPENSDITURE

router.get("/totalexpenditure", async (req, res) => {
  try {
    const allExpenses = await Expenses.find();
    let totalExpenses = 0;
    allExpenses.map((f) => {
      totalExpenses = totalExpenses + parseInt(f.expenseAmount)
    });
    res.status(200).json(totalExpenses);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING FEE COLLECTED: " + error);
  }
});

// GENERATE TOTAL EXPENSDITURE IN THIS SESSION

router.get("/currentyearexpenditure", async (req, res) => {
  let session = "";

  if (new Date().getMonth() > 2) {
    session = `${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`;
  } else {
    session = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
  }

  try {
    const allExpenses = await Expenses.find();
    let totalExpenses = 0;
    allExpenses.map((i) => {
      let expenseSession = ""; 
      if (new Date(i.payDate).getMonth() > 2) {
        expenseSession = `${new Date(i.payDate).getFullYear()}-${
          new Date(i.payDate).getFullYear() + 1
        }`;
      } else {
        expenseSession = `${new Date(i.payDate).getFullYear() - 1}-${new Date(i.payDate).getFullYear()}`;
      }
      if (expenseSession === session) {
        totalExpenses = totalExpenses + parseInt(i.expenseAmount)
      }
    });
    res.status(200).json(totalExpenses);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING FEE COLLECTED: " + error);
  }
});

// GENERATE TOTAL FEE COLLECTED

router.get("/totalcollectedfees", async (req, res) => {
  try {
    const allCollectedFees = await CollectedFees.find();
    let totalCollectedFees = 0;
    allCollectedFees.map((f) => {
      totalCollectedFees =
        totalCollectedFees +
        (parseInt(f.formFees) +
          parseInt(f.termFees) +
          parseInt(f.kitFees) +
          parseInt(f.admissionFees) +
          parseInt(f.quater1Fees) +
          parseInt(f.quater2Fees) +
          parseInt(f.quater3Fees) +
          parseInt(f.quater4Fees) +
          parseInt(f.winterUniformFees) +
          parseInt(f.otherFees) +
          parseInt(f.previousYearFees) -
          parseInt(f.dicountAmount));
    });
    res.status(200).json(totalCollectedFees);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING FEE COLLECTED: " + error);
  }
});

// GENERATE TOTAL FEE COLLECTED IN THIS SESSION

router.get("/currentyearcollectedfee", async (req, res) => {
  let session = "";

  if (new Date().getMonth() > 2) {
    session = `${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`;
  } else {
    session = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
  }
  try {
    const allCollectedFees = await CollectedFees.find();
    let totalCollectedFees = 0;
    allCollectedFees.map((f) => {
      if (f.session === session) {
        totalCollectedFees =
          totalCollectedFees +
          (parseInt(f.formFees) +
            parseInt(f.termFees) +
            parseInt(f.kitFees) +
            parseInt(f.admissionFees) +
            parseInt(f.quater1Fees) +
            parseInt(f.quater2Fees) +
            parseInt(f.quater3Fees) +
            parseInt(f.quater4Fees) +
            parseInt(f.winterUniformFees) +
            parseInt(f.otherFees) +
            parseInt(f.previousYearFees) -
            parseInt(f.dicountAmount));
      }
    });
    res.status(200).json(totalCollectedFees);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING FEE COLLECTED: " + error);
  }
});

// GET TOTAL BY MONTH

router.get("/currentmonthcollectedfee", async (req, res) => {
  let session = "";

  if (new Date().getMonth() > 2) {
    session = `${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`;
  } else {
    session = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
  }
  try {
    const allCollectedFees = await CollectedFees.find();
    let totalCollectedFees = 0;
    allCollectedFees.map((f) => {
      if (f.session === session && new Date(f.date).getMonth() === new Date().getMonth()) {
        totalCollectedFees =
          totalCollectedFees +
          (parseInt(f.formFees) +
            parseInt(f.termFees) +
            parseInt(f.kitFees) +
            parseInt(f.admissionFees) +
            parseInt(f.quater1Fees) +
            parseInt(f.quater2Fees) +
            parseInt(f.quater3Fees) +
            parseInt(f.quater4Fees) +
            parseInt(f.winterUniformFees) +
            parseInt(f.otherFees) +
            parseInt(f.previousYearFees) -
            parseInt(f.dicountAmount));
      }
    });
    res.status(200).json(totalCollectedFees);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING FEE COLLECTED: " + error);
  }
});

// GET TOTAL BY LAST MONTH

router.get("/previousmonthcollectedfee", async (req, res) => {
  let session = "";

  if (new Date().getMonth() > 2) {
    session = `${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`;
  } else {
    session = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
  }
  try {
    const allCollectedFees = await CollectedFees.find();
    let totalCollectedFees = 0;
    allCollectedFees.map((f) => {
      if (f.session === session && new Date(f.date).getMonth() === new Date().getMonth() - 1) {
        totalCollectedFees =
          totalCollectedFees +
          (parseInt(f.formFees) +
            parseInt(f.termFees) +
            parseInt(f.kitFees) +
            parseInt(f.admissionFees) +
            parseInt(f.quater1Fees) +
            parseInt(f.quater2Fees) +
            parseInt(f.quater3Fees) +
            parseInt(f.quater4Fees) +
            parseInt(f.winterUniformFees) +
            parseInt(f.otherFees) +
            parseInt(f.previousYearFees) -
            parseInt(f.dicountAmount));
      }
    });
    res.status(200).json(totalCollectedFees);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING FEE COLLECTED: " + error);
  }
});

// ALL STUDENTS EVER IN THIS SCHOOL

router.get("/totalstudents", async (req, res) => {
  try {
    const AllStudents = await Students.find()
    res.status(200).json(AllStudents)
  } catch (error) {
    res.status(500).json("Got an error while getting all the students: " + error)
  }
})

// THIS SESSION STUDENTS 

router.get("/thissessionstudents", async (req, res) => {
  let session = "";

  if (new Date().getMonth() > 2) {
    session = `${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`;
  } else {
    session = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
  }
  try {
    const AllStudents = await Students.find()
    const thisSessionStudents =  []
    AllStudents.map((s) => {
      if (session === s.session) {
        thisSessionStudents.push(s) 
      }
    })
    res.status(200).json(thisSessionStudents);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING FEE COLLECTED: " + error);
  }
});

// THIS session ENQURIES

router.get("/thissessioninquries", async (req, res) => {
  let session = "";

  if (new Date().getMonth() > 2) {
    session = `${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`;
  } else {
    session = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
  }
  try {
    const AllInquiries = await Inquiries.find()
    const thisSessionInquiries =  []
    AllInquiries.map((i) => {
      let inquirySession = ""; 
      if (new Date(i.inquiryDate).getMonth() > 2) {
        inquirySession = `${new Date(i.inquiryDate).getFullYear()}-${
          new Date(i.inquiryDate).getFullYear() + 1
        }`;
      } else {
        inquirySession = `${new Date(i.inquiryDate).getFullYear() - 1}-${new Date(i.inquiryDate).getFullYear()}`;
      }
      if (session === inquirySession) {
        thisSessionInquiries.push(i)
      }
    })
    res.status(200).json(thisSessionInquiries);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING INQUIRY COLLECTED: " + error);
  }
});

// THIS MONTH ENQURIES

router.get("/thismonthinquries", async (req, res) => {
  let session = "";

  if (new Date().getMonth() > 2) {
    session = `${new Date().getFullYear()}-${
      new Date().getFullYear() + 1
    }`;
  } else {
    session = `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`;
  }
  try {
    const AllInquiries = await Inquiries.find()
    const thisSessionInquiries =  []
    AllInquiries.map((i) => {
      let inquirySession = ""; 
      if (new Date(i.inquiryDate).getMonth() > 2) {
        inquirySession = `${new Date(i.inquiryDate).getFullYear()}-${
          new Date(i.inquiryDate).getFullYear() + 1
        }`;
      } else {
        inquirySession = `${new Date(i.inquiryDate).getFullYear() - 1}-${new Date(i.inquiryDate).getFullYear()}`;
      }
      if (session === inquirySession && new Date(i.inquiryDate).getMonth() === new Date().getMonth()) {
        thisSessionInquiries.push(i)
      }
    })
    res.status(200).json(thisSessionInquiries);
  } catch (error) {
    res.status(500).json("GOT AN ERROR WHILE TOTALING INQUIRY COLLECTED: " + error);
  }
});


module.exports = router;