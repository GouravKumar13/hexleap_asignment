import React from 'react'
// background: linear - gradient(180deg, #18282A 0 %, #221A2C 100 %);
import { ticketMockup2, ticketMockup3 } from '../../../public'
import { Content } from 'next/font/google'
import CollectionCard from './collectionCard'
const collectionContents = [
    {
        imgUrl: ticketMockup2,
        title: "Las Vegas Aviators",
        date: "Oct 15|Sun|4: 30 PM",
        description: "Las Vegas Ballpark, Las Vegas, Nevada",
        buttonContent: "Take Flight Collection"

    },
    {
        imgUrl: ticketMockup3,
        title: "Sacramento River Cats",
        date: "Oct 15|Sun|4: 30 PM",
        description: "Sutter Health Park Sacramento, California",
        buttonContent: "Orange Collection"

    },
    {
        imgUrl: ticketMockup2,
        title: "Las Vegas Aviators",
        date: "Oct 15|Sun|4: 30 PM",
        description: "Las Vegas Ballpark, Las Vegas, Nevada",
        buttonContent: "Take Flight Collection"

    },
]
// background: linear - gradient(180deg, #F9F8FF 0 %, #F3F9FF 100 %);
// border: Mixed solid #A9ACB2

const CollectionSection = () => {
    return (
        <div className=' mx-auto bg-gradient-to-b  dark:from-[#18282A] from-[#F9F8FF] from-0%  dark:bg-[#221A2C] bg-[#F3F9FF] to-[100%] mt-10 flex flex-col gap-10 py-10   '>
            <div className=' w-full flex flex-col items-center '>
                <h1 className=' font-bold text-5xl leading-[52px]'>Collection Spotlight</h1>
                <p className=' text-[14px] leading-5 text-center '>
                    Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!
                </p>
            </div>
            <div className=' flex space-x-10 items-center justify-center'>
                <div className='border-[#2C9CF0] border py-2 px-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2C9CF0] w-6 h-6  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                {collectionContents.map((content, index) => {
                    return (
                        <CollectionCard key={index} imgUrl={content.imgUrl} title={content.title} data={content.date} description={content.description} buttonContent={content.buttonContent} />
                    )
                })}
                <div className='border-[#2C9CF0] border py-2 px-1 cursor-pointer' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#2C9CF0] w-6 h-6  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CollectionSection
