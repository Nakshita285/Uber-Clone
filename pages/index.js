import Head from 'next/head'
import Image from 'next/image'
import Map from './components/Map'
import tw from "tailwind-styled-components"
import Link from'next/link'
// import styles from '../styles/Home.module.css'


export default function Home() {


  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberIcon src='https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg' />
          <Profile>
            <Name>Steve</Name>
            <UserImg src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" />
          </Profile>
        </Header>

        {/* Action Buttons */}
        <ActionButtons>
        <Link href="/ride">
          <ActionButton>
              <ActionButtonImage src='https://cdn-icons-png.flaticon.com/512/55/55308.png' />
              Ride
            </ActionButton>
          </Link>
          <Link href="/wheels">
            <ActionButton>
                <ActionButtonImage src='https://cdn-icons-png.flaticon.com/512/1168/1168082.png' />
                Wheels
            </ActionButton>
          </Link>
          <Link href="/reserve">
            <ActionButton>
                <ActionButtonImage src='https://cdn-icons-png.flaticon.com/512/3652/3652267.png' />
                Reserve
            </ActionButton>
          </Link>
          </ActionButtons>

        {/* Destination input box */}
        <InputBox>
          Where to?
        </InputBox>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen `

const ActionItems = tw.div`
 flex-1 p-4`

const Header = tw.div`
  flex justify-between items-center
`
const UberIcon = tw.img`
h-10   space-x-2 m-2 rounded-full
`
const Profile = tw.div`
h-10  flex items-center 
`
const Name = tw.div`
m-10 w-20 text-xl font-mono
`
const UserImg = tw.img`
h-12 w-12 m-10 rounded-full border border-grey-100 p-px
`
const ActionButtons = tw.div`
 flex  
`
const ActionButton = tw.div`
flex items-center bg-gray-100 flex-1 rounded-xl h-20 m-2 flex-col justify-center transform hover:scale-105 transition
text-l font-serif

`
const ActionButtonImage = tw.img`
h-3/5 `
const InputBox = tw.div`
bg-gray-200 h-20 p-7 mt-4 text-xl rounded-xl font-serif 
`