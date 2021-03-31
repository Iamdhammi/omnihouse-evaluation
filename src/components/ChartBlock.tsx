import React from 'react';
import styled from 'styled-components';
import { lightColor } from '../utilis/constants';
import ChartImage from '../images/chart.svg';

const ChartContainer = styled.div`
    border-radius: 10px;
    border: 1px solid #444;
    justify-content: space-between;
    margin: 10px 0 30px;
    padding: 10px 20px;
`;

const ChartHeader = styled.h2`
    color: ${lightColor};
    font-size: 16px;
    margin-bottom: 20px;
`;
const Chart = styled.img`
    width: 1000px;
    height: auto;
    margin-bottom: 10px;
    @media only screen and (max-width: 1000px){
		width: calc(100% - 20px);
	}
`;

const ChartBlock: React.FC = () => {
    return (
        <ChartContainer>
            <ChartHeader>Affordability Overview - Based on renters financial history from the last 12 months </ChartHeader>
            <Chart src={ChartImage} />
        </ChartContainer>
    )
}

export default ChartBlock;