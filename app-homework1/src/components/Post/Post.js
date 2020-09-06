import React from 'react';
import styled from "styled-components";


import Vector from '/Users/mac/Desktop/react-cursor-1/app-homework1/src/img/Vector.svg'
import sea_1 from '../../img/sea_1.png';
import comments from '../../img/comments.svg'
import repost from '../../img/repost.svg'
import likes from '../../img/likes.svg'
import download from '../../img/download.svg'




const Title = styled.h1`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 23px;
line-height: 106.8%;
/* or 25px */

text-align: center;

color: #FFFFFF;
padding: 12px 9px 0;
`;

const Wrapper = styled.section`
width: 100%;
height: 526px;
background: #1E213A;
border: 1px solid #000000;
box-sizing: border-box;
display: block;
max-width: 1100px;
margin: 113px 180px;
`;

const Img = styled.img`
width: 100%;
max-width: 75px;
height: 72px;
margin: 10px 21px;
`
const Header = styled.header `
width: 100%;
min-height: 81px;
display: flex;
padding: 8px 11px;`

const ImgVector = styled.img`
padding: 28px 5px;
height: 32px;`

const SpanNick = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 23px;
line-height: 84px;
text-align: center;
color: #585D8B;
padding: 0px 18px;
`
const SpanDate = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 23px;
line-height: 84px;
text-align: center;
color: #585D8B;
padding: 0px 18px;
`

const Section = styled.section `
width: 100%;
position: relative;
height: 100%;
`
const Paragraph = styled.p `
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 106.8%;
/* or 25px */

text-align: left;

color: #FFFFFF;
margin: 0;
position: absolute;
left: 136px;
top: -25px;
width:100%;
`
const BigImg = styled.img`
width: 100%;
max-width: 800px;
display: inline-block;
margin: 0 auto;
position: relative;
left: 135px;
top: 18px;`

const Footer = styled.footer`
position: relative;
bottom: 191px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
left: -50px;
-webkit-box-pack: space-evenly;
-webkit-justify-content: space-evenly;
-ms-flex-pack: space-evenly;
justify-content: space-evenly;
left: -9px;
align-items: center;
`

const Icons = styled.div `
  display:flex;
  padding: 4px;
`

const SpanText = styled.span `
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 29px;
line-height: 106.8%;
/* or 31px */

text-align: center;
padding:10px;
color: #585D8B;
`

const SpanImg = styled.img `
  padding:10px;
`

const  Post = props => {

  console.log(props)
  return (

    <Wrapper>
    <Header>
    <Img src={props.author.photo}></Img>
    <Title>{props.author.name}</Title>
    <ImgVector src={Vector}></ImgVector>
    <SpanNick>{props.author.nickname}</SpanNick>
    <SpanDate>{props.date}</SpanDate>
    </Header>
    <Section>
    <Paragraph>{props.content}</Paragraph>
    <BigImg src={sea_1}></BigImg>
    </Section>
    <Footer>
    <Icons>
    <SpanImg src={comments}></SpanImg>
    <SpanText>{props.author.comments}</SpanText>
    </Icons>
    <Icons>
    <SpanImg src={repost}></SpanImg>
    <SpanText>{props.author.repost}</SpanText>
    </Icons>
    <Icons>
    <SpanImg src={likes}></SpanImg>
    <SpanText>{props.author.likes}</SpanText>
    </Icons>
    <Icons>
    <SpanImg src={download}></SpanImg>
    </Icons>
    </Footer>
    </Wrapper>

    
  );
}

export default Post;
