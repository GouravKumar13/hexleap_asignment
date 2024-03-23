"use client"
import React from 'react'
import SportsCard from './sportsSectionCard'
import { SacramentoRiverCats, LasVegasAviators, newjerseydevils, adImage } from '../../../public'
import AdCard from './adCard'

const sportsContents = [
    {
        imgUrl: SacramentoRiverCats,
        title: "Sacramento River Cats",
        totalEvents: 48,
        sports: "Baseball"
    },
    {
        imgUrl: LasVegasAviators,
        title: "Sacramento River Cats",
        totalEvents: 48,
        sports: "Baseball"
    },
    {
        imgUrl: newjerseydevils,
        title: "Sacramento River Cats",
        totalEvents: 48,
        sports: "Baseball"
    },
    {
        imgUrl: LasVegasAviators,
        title: "Sacramento River Cats",
        totalEvents: 48,
        sports: "Baseball"
    },


]


const SportsSection = () => {
    return (
        <div className='flex  items-center mx-auto  '>

            <div className='flex flex-col  gap-2  '>
                <h1 className=' text-start underline-offset-8 underline font-bold text-[24px]   '>Sports</h1>
                <div className='flex flex-col items-center justify-center gap-10 flex-wrap' >
                    <div className='flex gap-2 items-center justify-center flex-wrap w-fit '>
                        {sportsContents.map((content) => {
                            return (
                                <SportsCard key={content.title} imgUrl={content.imgUrl} title={content.title} totalEvents={content.totalEvents} sport={content.sports} />
                            )
                        })}

                        <AdCard imgUrl={adImage} title='Advertisement title' />
                    </div>
                    <button className='font-semibold px-[30px] py-[10px] rounded-[3px] text-white text-sm bg-[#2C9CF0]' >See more</button>
                </div>

            </div>
        </div>
    )
}

export default SportsSection

