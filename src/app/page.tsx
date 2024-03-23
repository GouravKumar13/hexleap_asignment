import CollectionSection from './components/collectionSection'
import SportsSection from './components/sportsSection'

const page = () => {
  return (
    <div className=' w-full flex flex-col items-center my-10    '>
      <SportsSection />
      <CollectionSection />
    </div>
  )
}

export default page
