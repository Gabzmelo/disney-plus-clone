import React from 'react';
import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <LoginPage>
          <LoginPageLogoOne src="/images/disney-logo.svg" alt="" />
          <Title>The best stories in one place.</Title>
          <Box>
            <PriceBox>
              <Logo src="/images/disney-logo.svg" />
              <Price>$6.99<Span>/month</Span></Price>
              <Details>Start streaming Disney+ with your 7-day free trial. No tiers, no up-changes.</Details>
              <SubNow>Start Your Free Trial</SubNow>
            </PriceBox>
            <PriceBox>
              <Logo src="/images/box-logo.png" />
              <Price>$12.99<Span>/month</Span></Price>
              <Details>Get Disney+ along with Hulu and ESPN+ for the best movies, shows, and sports.</Details>
              <SubNow>Buy Now</SubNow>
            </PriceBox>
          </Box>
          <LoginPageLogoTwo src="" alt="" />
        </LoginPage>
        <Background />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  text-align: left;
  height: 100vh;
`

const Content = styled.div`
  margin-bottom: 5vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
  color: #f9f9f9;
`

const Background = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background-large.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`

const LoginPage = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const LoginPageLogoOne = styled.img`
  max-width: 600px;
  min-height: 50px;
  display: block;
  width: 250px;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 30px;
  text-align: left;
`

const Box = styled.div`
  width: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const PriceBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
`

const Logo = styled.img`
  width: 100px;
  margin-bottom: 25px;
`

const Price = styled.div`
  font-size: 45px
`

const Span = styled.span`
  font-size: 20px;
  color: grey;
`

const Details = styled.p`
color: grey;
font-size: 11px;
line-height: 1.5;
letter-spacing: 1.5px;
`

const SubNow = styled.a`
  font-weight: bold;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 200px;
  letter-spacing: 1.5px;
  font-size: 15px;
  padding: 16px 0;
  border-radius: 4px;
  text-align: center;
  justify-content: center;

  &:hover {
    background-color: #0483ee;
  }
`

const LoginPageLogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`

export default Login;