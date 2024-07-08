import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar2 = () => {

  return (
    <header className="flex w-full h-auto fixed flex-wrap flex-col">
      <div className="flex w-full h-20 bg-white justify-between z-10 md:justify-center" dir="ltr">
        <div className="flex flex-col justify-between w-[7vw] h-full p-5 md:w-96">
          <p className="text-sm font-medium invisible md:visible">We believe we helps people</p>
          <p className="text-sm font-medium invisible md:visible">for happier lives</p>
        </div>
        <div className="flex justify-center w-[70vw] h-full p-5 md:w-96">
          <img src="https://themewagon.github.io/gym/img/logo.png" alt="" />
        </div>
        <div className="flex w-[7vw] h-full justify-end items-center md:w-96">
          <p className="text-sm font-medium py-5 px-3 hidden md:inline">+880 123 12 658 439</p>
          <div className="w-[84px] h-20 bg-[#F6214A] hidden md:flex justify-center items-center">
           <FontAwesomeIcon className='h-5' icon="fa-solid fa-phone" style={{color: "#ffffff",}} />
          </div>
          <FontAwesomeIcon className='h-5 px-6 block md:hidden' icon="fa-solid fa-bars" style={{color: "#f6214a",}} />
        </div>
      </div>
      <div className="flex w-full h-14 bg-white justify-center border-t-2 border-gray-300 invisible z-10 md:visible">
        <p className="my-auto px-4 py-3 text-xs font-medium text-[#F6214A]">HOME</p>
        <p className="my-auto px-4 py-3 text-xs font-medium">WE OFFER</p>
        <p className="my-auto px-4 py-3 text-xs font-medium">TOP COURSE</p>
        <p className="my-auto px-4 py-3 text-xs font-medium">SCHEDULE</p>
        <p className="my-auto px-4 py-3 text-xs font-medium">TRAINER</p>
        <p className="my-auto px-4 py-3 text-xs font-medium">PLAN</p>
        <p className="my-auto px-4 py-3 text-xs font-medium">PAGES</p>
      </div>
    </header>
  )
}

export default Navbar2