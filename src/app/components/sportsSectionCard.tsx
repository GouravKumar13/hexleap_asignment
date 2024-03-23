import React from 'react'

const SportsCard = ({ imgUrl, title, totalEvents, sport }: { imgUrl: string | any, title: string, totalEvents: number, sport: string }) => {

    return (

        <div className='  flex w-[237px] max-h-[511px]  dark:bg-[#3B3E47] bg-white flex-col items-center justify-center shadow-black drop-shadow-xl  '>
            <div className='w-[217px] py-2 space-y-1'>
                <div className=' w-full h-[358.31px] '>
                    <img src={imgUrl.src} alt={title} className=' w-full h-full' />
                </div>
                <div>
                    <h1 className='text-[17px] leading-5 '>{title}</h1>
                </div>

                <div className='dark:bg-[#292B32] bg-[#F7F7F8] rounded-sm flex w-full py-2 pl-2  gap-10 '>
                    <div className='font-normal dark:text-[#DFDFDF] text-[12px] '>
                        Total Events
                        <p className='text-sm dark:text-white' >{totalEvents} Events</p>
                    </div>
                    <div className='font-normal dark:text-[#DFDFDF] text-[12px]'>
                        Sports <p
                            className='text-sm dark:text-white'> {sport}</p></div>
                </div>
            </div>
        </div >


    )
}

export default SportsCard

