import React from 'react';
import styled from 'styled-components';
import { lightColor } from '../utilis/constants';

const ReportTextContainer = styled.div`
    display: flex;
    border-radius: 10px;
    border: 1px solid #444;
    justify-content: space-between;
    margin: 10px 0 30px;
    flex-direction: row;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;
const Col = styled.div`
    flex: 1;
    padding: 10px 20px;
`;
const ColTitle = styled.h4`
    font-size: 16px;
    color: ${lightColor};
    padding: 5px 0;
`;
const SecTitle = styled(ColTitle)`
    font-size: 18px;
`;

const ColDescription = styled.p`
    color: #C7BCC5;
    font-size: 16px;
    padding-bottom: 5px;
`;

interface Props {
    data: Array<ItemProps>;
    type: string;
}

interface ItemProps {
    title?: string;
    subtitle?:string;
    titleArray: Array<titleArrayProps>;
    data: Array<ItemDataProps>
}

interface ItemDataProps {
    key: string;
    value: string;
}

interface titleArrayProps {
    title: string;
    value: string;
}

const ReportTextBlock: React.FC<Props> = ({ data, type}) => {
    return (
        <ReportTextContainer>
            {
                data.map((item, i) => {
                    switch (type) {
                        case "reference":
                            if(i === 0) {
                                return (
                                    <Col key={i}>
                                        <SecTitle>{item.title}</SecTitle>
                                        <ColDescription>{item.subtitle}</ColDescription>
                                        {
                                            item.data.map((itemData, i) => (
                                                <ColDescription key={i}>
                                                    {itemData.key ? `${itemData.key}: ${itemData.value}` : `${itemData.value}`}
                                                </ColDescription>
                                            ))
                                        }
                                    </Col>
                                )
                            } 
                            return (
                                <Col key={i}>
                                    <ColTitle>{item.title}</ColTitle>
                                    {
                                        item.data.map((itemData, i) => (
                                            <ColDescription key={i}>
                                                {itemData.key ? `${itemData.key}: ${itemData.value}` : `${itemData.value}`}
                                            </ColDescription>
                                        ))
                                    }
                                </Col>
                            )
                        case "income":
                            if(i === 0) {
                                return (
                                    <Col key={i}>
                                       {
                                            item.titleArray.map((itemData, i) => (
                                                <React.Fragment key={i}>
                                                    <ColTitle>{itemData.title}</ColTitle>
                                                    <ColDescription>{itemData.value}</ColDescription>
                                                </React.Fragment>
                                            ))
                                        }
                                    </Col>
                                )
                            } 
                            return (
                                <Col key={i}>
                                    <ColTitle>{item.title}</ColTitle>
                                    {
                                        item.data.map((itemData, i) => (
                                            <ColDescription key={i}>
                                                {itemData.key ? `${itemData.key}: ${itemData.value}` : `${itemData.value}`}
                                            </ColDescription>
                                        ))
                                    }
                                </Col>
                            )
                        case "expenses":
                            return (
                                <Col key={i}>
                                    <ColTitle>{item.title}</ColTitle>
                                    {
                                        item.data.map((itemData, i) => (
                                            <ColDescription key={i}>
                                                {itemData.key ? `${itemData.key}: ${itemData.value}` : `${itemData.value}`}
                                            </ColDescription>
                                        ))
                                    }
                                </Col>
                            )
                        default:
                            break;
                    }
                })
            }
        </ReportTextContainer>
    )
}

export default ReportTextBlock;