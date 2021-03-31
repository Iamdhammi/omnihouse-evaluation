import React from 'react';
import styled from 'styled-components';
import { lightColor } from '../utilis/constants';


const BlockContainer = styled.div`
    display: flex;
    border-radius: 10px;
    border: 1px solid #444;
    justify-content: space-between;
    margin: 10px 0 30px;
    padding: 10px 20px;
    position: relative;
    flex-direction: row;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;

interface GradeContainerProps {
    grades: number;
    title: string;
}
const GradeContainer = styled.div<GradeContainerProps>`
    display: flex;
    flex: ${ props => props.grades === 4 ? ( props.title === "Spender Category" ? 1.2 : 0.7) : 0.5};
    justify-content: space-between;
    flex-direction: row;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const GradeCard = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px){
        padding: 10px 0;
    }
`;

interface GradeImageProps {
    grade: string;
}
const GradeImage = styled.img<GradeImageProps>`
    width: ${ props => props.grade === "Inconclusive" ? '65px' : '50px'};
    height: auto;
    margin-top: ${ props => props.grade === "Inconclusive" ? '-5px' : '0px'};

    @media only screen and (max-width: 768px){
        width: ${ props => props.grade === "Inconclusive" ? '55px' : '40px'};
    }
`;

interface GradeTitleProps {
    grade: string;
}
const GradeTitle = styled.p<GradeTitleProps>`
    color: ${lightColor};
    text-align: center;
    margin-top: ${ props => props.grade === "Inconclusive" ? '5px' : '15px'};
`;

const ReportTextContainer = styled.div`
    flex: 1;
    padding: 5px 0 0 10px;
    @media only screen and (max-width: 768px){
        padding: 20px 0 0 10px;
    }
`;

const ReportText = styled.p`
    color: ${lightColor};
    font-size: 14px;
    padding-bottom: 10px;
`;

const BlockText = styled.p`
    position: absolute;
    color: #C7BCC5;
    top: -10px;
    background-color: #000;
    padding: 0 10px;
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`;

interface Props {
    data: dataProps;
    i: number;
    key: any;
}

interface dataProps {
    title: string;
    gradeTexts: Array<string>;
    gradeText?: string;
    grades: Array<gradeDataProps>;
    report: Array<reportDataProps>;
}

interface gradeDataProps {
    image: any;
    grade: string;
}

interface reportDataProps {
    key: string;
    value: string;
}

const ReportGradeBlock: React.FC<Props> = ({ data, i }) => {
    if(i === 4 ) {
        return (
            <BlockContainer>
                <BlockText>{data.title}</BlockText>
                <ReportTextContainer>
                    {
                        data.gradeTexts.map((item, i) => (
                            <ReportText key={i}>{item}</ReportText>
                        ))
                    }
                </ReportTextContainer>
            </BlockContainer>
        )
    }
    return (
        <BlockContainer>
            <BlockText>{data.title}</BlockText>
            <GradeContainer grades={data.grades.length} title={data.title}>
                {
                    data.grades.map((grade, i) => (
                        <GradeCard key={i}>
                            <GradeImage src={grade.image} alt={grade.grade} grade={grade.grade} />
                            <GradeTitle grade={grade.grade}>{grade.grade}</GradeTitle>
                        </GradeCard>
                    ))
                }
            </GradeContainer>
            <ReportTextContainer>
                <ReportText key={i}>{data.gradeText}</ReportText>
                {
                    data.report.map((item, i) => (
                        <ReportText key={i}>{`${item.key}: ${item.value}`}</ReportText>
                    ))
                }
            </ReportTextContainer>
        </BlockContainer>
    );
}

export default ReportGradeBlock;