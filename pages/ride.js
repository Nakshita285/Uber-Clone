import tw from "tailwind-styled-components"
import Link from 'next/link'

const ride = () => {
    return (
        <Wrapper>
            {/* Button container */}
            <ButtonContainer>
            <Link href="/">
                <BackIcon src="https://cdn-icons-png.flaticon.com/512/61/61449.png" />
            </Link>
            </ButtonContainer>
            
            {/* Input container  */}
            <InputContainer>
                <Icons>
                    <Circle_1 src='https://cdn-icons-png.flaticon.com/128/565/565665.png'/>
                    <Line src='https://cdn-icons.flaticon.com/png/512/649/premium/649686.png?token=exp=1637410366~hmac=86b395498bfb51c2deea192b3a326f82'/>
                    <Circle_2 src='https://cdn-icons.flaticon.com/png/128/3031/premium/3031130.png?token=exp=1637410308~hmac=07c3dc8445cc7f6a79e9e30d07bdda14'/>
                </Icons>
                <InputBoxes >
                    <Input placeholder="Enter pickup location"/>
                    <Input placeholder="Where to?" />
                </InputBoxes>
                <AddButton src='https://cdn-icons-png.flaticon.com/512/2891/2891421.png'/>
            </InputContainer>
            {/* Saved Places */}
            <ContainerSavedPlaces>
                <SavedPlacesContainer>
                    <StarIcon src='https://cdn-icons.flaticon.com/png/512/2955/premium/2955010.png?token=exp=1637434904~hmac=ab7021f0ed84c6072f7b47df8874f9cf'/>
                    <SavedPlaces>Saved Places</SavedPlaces>
                </SavedPlacesContainer>
            </ContainerSavedPlaces>
            
            {/* confirm location button */}
            <ContainerConfirmLocation>
                Confirm Location
            </ContainerConfirmLocation>
        </Wrapper>
    )
}

export default ride

const Wrapper = tw.div`
bg-gray-300 h-screen font-serif border-box 
`
const ButtonContainer = tw.div`
bg-gray-100 
`
const BackIcon = tw.img`
h-10 w-10 p-2 cursor-pointer
`
const InputContainer = tw.div`
mt-3 flex justify-center align-center px-20
`
// icons 
const Icons= tw.div`
h-20 flex flex-col items-center w-8 mr-5 p-1 rounded-full 
`
const Circle_1 = tw.img`
h-5
`
const Line = tw.img`
h-7 p-1 `
const Circle_2 = tw.img`
h-5`
// 
const InputBoxes = tw.div`
min-w-1/4 max-w-1/2 flex flex-col italic `

 const Input = tw.input`
  flex flex-1 px-2 m-1 outline-none border-none bg-gray-50
 `
 const AddButton = tw.img`
 h-10 float-right mt-6 mx-10 border-black cursor-pointer
 border-2 rounded-lg p-1 bg-gray-100
 `
// Saved Location Container 
 const ContainerSavedPlaces = tw.div`
flex justify-center align-center`

 const SavedPlacesContainer = tw.div`
 h-10 min-w-max mt-5 bg-gray-100 flex  items-center justify-center rounded-xl bg-gray-100
 `
 const StarIcon = tw.img`
  h-8 ml-4`
 const SavedPlaces = tw.div`
 text-xl mx-4 `

//  Confirm Location Button
const ContainerConfirmLocation = tw.div`
bg-black text-white text-xl text-center
 mt-3 mx-5 px-3 py-3 rounded-xl cursor-pointer 
`
// flex justify-center align-center 
//  const ConfirmLocationButton = tw.div 
//  h-10 min-w-max bg-black text-gray-100 mt-8 rounded-xl 
//  flex items-center justify-center text-lg p-4 cursor-pointer
//  
 