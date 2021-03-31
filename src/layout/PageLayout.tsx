import React from 'react';
import styled from 'styled-components';
import LogoImg from '../images/logo.svg';
import BgImg from '../images/bg-logo.svg';
import { lightColor } from '../utilis/constants';
import { Link } from 'react-router-dom'

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: #000;
	position: relative;
	display: flex;
	justify-content: center;
`;
const Bg = styled.img`
	position: absolute;
	width: 700px;
	height: auto;
	top: calc(50% - 350px);
	left: calc(50% - 350px);

	@media only screen and (max-width: 768px){
		width: 80%;
		top: 40%;
		left: 10%;
	}
`;
const Nav = styled.nav`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	position: relative;
	z-index: 3;

	a {
		text-decoration: none;
	}
`;

const Content = styled.div`
	width: 1000px;
	margin: 0 50px;
	@media only screen and (max-width: 1000px){
		width: 100%;
	}
`;

const Main = styled.div`
	position: relative;
	z-index: 2;
`;

const Title = styled.h1`
	color: ${lightColor};
	font-size: 40px;

	@media only screen and (max-width: 768px){
		font-size: 20px;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Logo = styled.img`
	width: 70px;
	height: auto;
	@media only screen and (max-width: 768px){
		width: 40px;
	}
`;
const LogoText = styled.p`
	font-size: 28px;
	font-weight: 400;
	color: ${lightColor};
	padding-left: 10px;

	@media only screen and (max-width: 768px){
		display: none;
	}
`;


interface Props {
    children: any
}

const PageLayout: React.FC<Props> = ({ children }) => {
    return (
		<Container>
			<Bg src={BgImg} />
			<Content>
				<Nav>
					<Link to={'/interpretation'}>
						<Title>Reference Report</Title>
					</Link>
					<Link to={'/'}>
						<LogoContainer>
							<Logo src={LogoImg} alt="Omnihouse"/>
							<LogoText>Omnihouse</LogoText>
						</LogoContainer>
					</Link>
				</Nav>
				<Main>
					{children}
				</Main>
			</Content>
		</Container>
	);
}

export default PageLayout