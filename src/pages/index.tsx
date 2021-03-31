import React from 'react';
import ReportTextBlock from '../components/ReportTextBlock';
import GradeBlock from '../components/GradeBlock';
import ChartBlock from '../components/ChartBlock';
import { referenceData, incomeData, expensesData, GradeData } from '../data';

const Index: React.FC = () => {
    return (
        <React.Fragment>
            <ReportTextBlock data={referenceData} type="reference" />
            <GradeBlock data={GradeData} />
            <ReportTextBlock data={incomeData} type="income" />
            <ReportTextBlock data={expensesData} type="expenses" />
            <ChartBlock />
        </React.Fragment>
    )
}

export default Index