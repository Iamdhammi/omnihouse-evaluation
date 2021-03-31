import GradeApproveImg from '../images/grade/done.svg';
import GradeAImg from '../images/grade/a.svg';
import GradeBImg from '../images/grade/b.svg';
import GradeCImg from '../images/grade/c.svg';
import GradeFImg from '../images/grade/f.svg';
import GradeXImg from '../images/grade/x.svg';
import GradeQImg from '../images/grade/q.svg';

export const referenceData = [
    {
        title: "*Reference Name*",
        subtitle: "*Reference ID*",
        data: [
            {key: "DOB", value: "DD/MM/YYYY"}
        ],
        titleArray: []
    },
    {
        title: "Reference Information",
        data: [
            {key: "Initiated", value: "DD/MM/YYYY"},
            {key: "Completed", value: "DD/MM/YYYY"},
            {key: "Bank data up to", value: "DD/MM/YYYY"},
            {key: "Bank", value: "*Bank name*"},
        ],
        titleArray: []
    },
    {
        title: "Property Information",
        data: [
            {key: "", value: "*1st line Address*"},
            {key: "", value: "*Postcode*"},
            {key: "Monthly rental amount", value: "£*WXYZ*"},
            {key: "Security deposit", value: "£*WXYZ*"},
        ],
        titleArray: []
    }
];

export const incomeData = [
    {
        data: [],
        titleArray: [
            {
                title: "Average Monthly Income",
                value: "£*WXYZ.XY*",
            },
            {
                title: "Security deposit amount in bank",
                value: "Yes",
            },
        ],
    },
    {
        title: "Income Sources",
        data: [
            {key: "", value: "*Transaction descripition*"},
            {key: "", value: "*Transaction descripition*"},
            {key: "", value: "Other sources"},
        ],
        titleArray: []
    },
    {
        title: "Income Type",
        data: [
            {key: "", value: "Monthly since DD/MM/YYYY"},
            {key: "", value: "Monthly since DD/MM/YYYY"},
            {key: "", value: "Adhoc"},
        ],
        titleArray: []
    }
]

export const expensesData = [
    {
        title: "Reoccuring Expenses",
        data: [
            {key: "", value: "*Transaction descripition*"},
            {key: "", value: "*Transaction descripition*"},
            {key: "", value: "Other sources"},
        ],
        titleArray: []
    },
    {
        title: "Type",
        data: [
            {key: "", value: "Monthly since DD/MM/YYYY (SO)"},
            {key: "", value: "Monthly since DD/MM/YYYY"},
            {key: "", value: "Adhoc"},
        ],
        titleArray: []
    },
    {
        title: "Gambling Activity",
        data: [
            {key: "", value: "No detected activity"},
        ],
        titleArray: []
    }
]

export const GradeData = [
    {
        title: "Our Recommendation",
        image: GradeApproveImg,
        grade: "Pass"
    },
    {
        title: "Affordability Rating",
        image: GradeAImg,
        grade: "Excellent"
    },
    {
        title: "Spender Category",
        image: GradeBImg,
        grade: "Average Spender"
    },
    {
        title: "Projected Affordability",
        image: GradeBImg,
        grade: "Strong"
    },
];

export const reportData = [
    {
        title: "Our Recommendation",
        gradeTexts: [],
        gradeText: "Our Recommendation is our overall opinion based off the data provided.",
        grades: [
            {
                image: GradeApproveImg,
                grade: "Pass"
            },
            {
                image: GradeFImg,
                grade: "Fail"
            },
            {
                image: GradeQImg,
                grade: "Inconclusive"
            },
        ],
        report: [
            {
                key: "Pass",
                value: "all the major criteria pass the minimum threshold required."
            },
            {
                key: "Fail",
                value: "more than two of the major criteria pass the minimum threshold required."
            },
            {
                key: "Inconclusive",
                value: "there is missing or unidentifiable data, it is also given if the results are too close to all of the thresholds."
            }
        ]
    },
    {
        title: "Affordability Rating",
        gradeTexts: [],
        gradeText: "The Affordability Rating is based off the renters Monthly Income to Rental Amount Ratio.",
        grades: [
            {
                image: GradeApproveImg,
                grade: "Excellent"
            },
            {
                image: GradeAImg,
                grade: "Strong"
            },
            {
                image: GradeBImg,
                grade: "Weak"
            },
            {
                image: GradeFImg,
                grade: "Fail"
            }
        ],
        report: [
            {
                key: "Strong pass",
                value: "Monthly Income is more than 2.5X the Rental Amount."
            },
            {
                key: "Pass",
                value: "Monthly Income is between 1.8X to 2.49X the Rental Amount."
            },
            {
                key: "Weak Fail",
                value: "Monthly Income is between 1X to 1.79X the Rental Amount."
            },
            {
                key: "Strong Fail",
                value: "Monthly Income is below 1X the Rental Amount."
            }
        ]
    },
    {
        title: "Spender Category",
        gradeTexts: [],
        gradeText: "The Spender Category is based off the renters Monthly Income and Expenses. Note: Any outgoing amount from the bank account is classed as an expense.",
        grades: [
            {
                image: GradeApproveImg,
                grade: "Low Spender"
            },
            {
                image: GradeAImg,
                grade: "Average Spender"
            },
            {
                image: GradeBImg,
                grade: "High Spender"
            },
            {
                image: GradeFImg,
                grade: "Spending>Income"
            }
        ],
        report: [
            {
                key: "Low Spender",
                value: "Monthly Income is more than 3X Monthly Expenses."
            },
            {
                key: "Average Spender",
                value: "Monthly Income is between 2.5X to 2.99X Monthly Expenses."
            },
            {
                key: "High Spender",
                value: "Monthly Income is between 1X to 2.49X Monthly Expenses."
            },
            {
                key: "Spending>Income",
                value: "Monthly Income is below Monthly Expenses."
            }
        ]
    },
    {
        title: "Projected Affordability",
        gradeTexts: [],
        gradeText: "Projected Affordability is based off the renters previous income data trend.",
        grades: [
            {
                image: GradeApproveImg,
                grade: "Excellent"
            },
            {
                image: GradeAImg,
                grade: "Strong"
            },
            {
                image: GradeBImg,
                grade: "Weak"
            },
            {
                image: GradeFImg,
                grade: " Fail"
            }
        ],
        report: [
            {
                key: "Strong pass",
                value: "Monthly Income is increasing substantially"
            },
            {
                key: "Pass",
                value: "Monthly Income is consistent."
            },
            {
                key: "Weak Fail",
                value: "Monthly Income is slightly decreasing."
            },
            {
                key: "Strong Fail",
                value: "Monthly Income is decreasing rapidly."
            }
        ]
    },
    {
        title: "Income, Expenses and Affordability Overview",
        gradeTexts: [
            "Monlthy income is the average income the renter recieves into their bank each month. We show the main sources of this income and also the frequency of the source and when the payments began.",
            "Security deposit amount in the bank is whether the renter currently has the balance to pay the security deposit for the property.",
            "Reoccuring expenses shows any frequent expenses, direct debits or standing orders that regularly leave the renters account.",
            "Gambling Activity will show either ‘No detected activity’, ‘Low activity detected’ or ‘High activity detected’.",
            "Affordability Overview is a graphical representation of the Renters affordability showing the monthly income, the monthly income minus reoccuring expenses and compares it to the monthly rental amount."
        ],
        grades: [],
        report: [],
    }
]