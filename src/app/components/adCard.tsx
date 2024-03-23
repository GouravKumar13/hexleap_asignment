import React from 'react'
const AdCard = ({ imgUrl, title }: { imgUrl: string | any, title: string }) => {

    return (

        <div className='  flex w-[237px] max-h-[511px]  dark:bg-[#3B3E47] bg-white flex-col  drop-shadow-lg  items-center justify-evenly  '>
            <div className='w-[217px] py-2 space-y-2 flex flex-col gap-14 '>
                <div className=' w-full relative '>
                    <img src={imgUrl.src} alt={title} className=' object-contain ' />
                    <span className='bg-black text-xs text-white px-2 absolute top-0 right-0'>AD</span>
                </div>
                <div className=' w-full  ' >
                    <h1 className='text-[20px] leading-6 font-semibold '>{title}</h1>
                    <p className='text-xs dark:text-[#DFDFDF] font-normal leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque amet illum temporibus, aut iusto eius incidunt odit atque autem eum ratione dolore magni nihil Lorem ipsum dolor sit amet.</p>
                </div>


            </div>
        </div >


    )
}

export default AdCard

