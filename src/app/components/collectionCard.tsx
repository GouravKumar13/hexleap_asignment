import React from 'react'

const CollectionCard = ({ imgUrl, title, data, description, buttonContent }: { imgUrl: string | any, title: string, data: string, description: string, buttonContent: string }) => {
    return (
        <div className='relative flex flex-col drop-shadow-lg  gap-2  py-3 items-center  dark:bg-[#3B3E47] bg-white '>
            <div className='w-[250px]  '>
                <img src={imgUrl.src} alt="" className=' object-cover ' />
            </div>

            <div className=' text-wrap border-[#818A97] border-t pt-8 border-dashed  max-w-[226.1px] text-center flex flex-col items-center justify-center gap-3'>
                <h1 className='text-base font-medium  leading-6 '>{title}</h1>
                <p className='text-[14px] leading-5  '>{data}</p>
                <p className='text-[#DFDFDF] text-sm text-center '>{description}</p>
            </div>
            <button className=' px-5 py-3 bg-black text-white text-[15.41px] font-medium w-[200px]'>{buttonContent}</button>
            <span className=' absolute -translate-x-1/2 top-[66%] left-0 bg-gradient-to-t dark:from-[#221a2c] from-[#f9f9fce3]   from-0%  dark:bg-[#221a2c] bg-[#efe8e8ec] to-[100%] rounded-full w-4 h-4 text-transparent ' >.</span>
            <span className='absolute translate-x-1/2 top-[66%] right-0 bg-gradient-to-t dark:from-[#221a2c] from-[#f9f9fce3]   from-0%  dark:bg-[#221a2c] bg-[#efe8e8ec] to-[100%] rounded-full w-4 h-4 text-transparent  ' >.</span>

        </div>
    )
}

export default CollectionCard
