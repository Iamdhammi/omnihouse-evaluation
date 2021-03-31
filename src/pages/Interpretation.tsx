import React from 'react';
import styled from 'styled-components';
import { lightColor } from '../utilis/constants';
import ReportGradeBlock from '../components/ReportGradeBlock';
import { reportData } from '../data';

const Header = styled.div`
    margin: 10px 0 40px;
`;
const HeaderTitle = styled.h2`
    color: ${lightColor};
    @media only screen and (max-width: 768px){
        font-size: 16px;
        padding-bottom: 10px;
    }
`;
const HeaderText = styled.p`
    color: ${lightColor};
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`;


const Interpretation: React.FC = () => {
    return (
        <React.Fragment>
            <Header>
                <HeaderTitle>Interpreting the report</HeaderTitle>
                <HeaderText>This report is based off the financial data that the renter has shared with Omnihouse. The report should not be a be-all-end-all solution, if the renter has failed an aspect you should ask them for further details before you make your final judgement.   </HeaderText>
            </Header>
            {
                reportData.map((item, i) => (
                    <ReportGradeBlock data={item} i={i} key={i} />
                ))
            }
        </React.Fragment>
    )
}

export default Interpretation;