import React, { useState } from 'react'
import styled from 'styled-components'
import Star from '../images/star.svg'
import Ty from '../images/thank.svg'

const Modal = () => {

  const [clicked,setClicked] = useState();
  const [isSubmited, setIsSubmited] = useState(false);

    function handleClicked (number){
    setClicked(number);
    console.log(clicked);
  } 
function handleFormSubmitted(e){
  e.preventDefault();
  setIsSubmited(true)
}

const text1 = "we appreciate you taking the time to give a rating,\nif you ever need more support don't hesitate to \nget in touch!"

  return isSubmited ? (
  <Box>
     <ImgTy src={Ty} alt="ra" />
     
     <TitleTy>You selected {clicked} out of 5</TitleTy>

     <TitleTyH1>Thank You! </TitleTyH1>     
     <TiTleTyP>"we appreciate you taking the time to give a rating,<br/> if you ever need more support don't hesitate to <br/> get in touch!"</TiTleTyP>
     
     
     </Box> )
  
  
  
  
  :
  
  (
    <Box onSubmit={handleFormSubmitted} >

        <TitlesBox>
     <StarImg src={Star} alt="" />

<H2>How did we do?</H2>
    <Tittle>"Prease let us know how we did with your support <br/> request. All feedback is appreciated to help us<br/> imporve our offering!"</Tittle>
        </TitlesBox>
        <p>{isSubmited}</p>

        <BtnCont>
        {  [1,2,3,4,5,].map((rating)=>(

            <Buttons type='button' onClick={() => handleClicked(rating)} >{rating}
            
            </Buttons>
        ))
}

</BtnCont>

<Button  disabled={clicked ===undefined }>Submit</Button>

    </Box>
  )
}
const TitleTy = styled.h4`

background-color: #262e38;
border-radius: 50px;
padding: 6px;
color: #c57a40;
font-size: 15px;
`
const TitleTyH1 = styled.h2`  margin-top: 15px;
color: #eeeff1;
font-family: 'Overpass', sans-serif;
font-weight: 700;
                                                                                      `
const TiTleTyP = styled.p`align-items: center;
margin-top: 20px;
font-family: 'Overpass', sans-serif;
font-weight: 400;
color: #7c828e;
text-align: center;
font-size: 12px;
`
const ImgTy = styled.img`
height: 100px;
width: 130px;
margin-bottom: 20px;
`
const Tittle = styled.div`
align-items: center;
margin-top: 20px;
margin-left: 20px;
font-family: 'Overpass', sans-serif;
font-weight: 400;
color: #7c828e;
font-size: 12px;


`
const BtnCont  = styled.div`
margin-top: 10px;
margin-left: 20px;

`
const Button = styled.button`
margin-top: 15px;
width: 250px;
height: 40px;
border-radius: 25px;
background: #fc793c;
color: #ffffff;
font-size: 18px;
font-weight: 700;
border: none;
&:hover{
    background-color:#ffffff;
    color: #fc793c;
}

`
const Buttons = styled.button`
padding: 13px;
margin-right: 15px;
border-radius: 100%;
color: #e4e4e4;
margin-top: 5px;
border: none;
background-color: #262e38 ;

&:hover{
    background-color: #7c8897;
}
&:active{
    background-color: #fc793c;
    
} 
&:focus{
  background-color: #fc793c;

}

`

const TitlesBox = styled.div`
align-items: center;

`

const StarImg = styled.img`
 margin-top: 5px;
margin-left: 20px;
background-color: #262e38;
border-radius: 100%;
padding: 10px;

`
const H2 = styled.h2`
  margin-top: 15px;
  color: #eeeff1;
  margin-left: 20px;
  font-family: 'Overpass', sans-serif;
  font-weight: 700;
                                                                                                                                                                     
`

const Box = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    background-color: #202731;
height: 340px;
width: 300px;
border: 0;
border-radius: 15px;
padding: 5px;

`
export default Modal