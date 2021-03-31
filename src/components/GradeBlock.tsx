import React from 'react';
import styled from 'styled-components';
import { lightColor } from '../utilis/constants';

const GradeBlockContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 30px;
    flex-direction: row;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;
const Card = styled.div`
    flex: 1;
    border-radius: 10px;
    border: 1px solid #444;
    padding: 20px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    position: relative;
    &:last-child {
        margin-right: 0;
    }

    @media only screen and (max-width: 768px){
        margin-right: 0px;
    }
`;

const CardImage = styled.img`
    width: 50px;
    height: auto;
    @media only screen and (max-width: 768px){
        width: 30px;
    }
`;
const GradeTitle = styled.p`
    color: ${lightColor};
    font-size: 14px;
    margin-top: 10px;

    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`;
const CardText = styled.p`
    color: #C7BCC5;
    position: absolute;
    top: -10px;
    background-color: #000;
    padding: 0 20px;
    text-align: center;
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
`;

interface Props {
    data: Array<dataProps>
}

interface dataProps {
    title: string;
    image: any;
    grade: string;
}

const GradeBlock: React.FC<Props> = ({ data }) => {
    return (
        <GradeBlockContainer>
            {
                data.map((item, i) => (
                    <Card key={i}>
                        <CardText>{item.title}</CardText>
                        <CardImage src={item.image} alt={item.title}/>
                        <GradeTitle>{item.grade}</GradeTitle>
                    </Card>
                ))
            }
        </GradeBlockContainer>
    )
}

export default GradeBlock;