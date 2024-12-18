import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar3 = () => {

  return (
    // <header className="flex w-full h-auto fixed flex-wrap flex-col z-40">
    //   <div className="flex w-full h-20 bg-white justify-between z-10 md:justify-center" dir="ltr">
    //     <div className="flex flex-col justify-between w-[7vw] h-full p-5 md:w-96">
    //       <p className="text-sm font-medium invisible md:visible">We believe we helps people</p>
    //       <p className="text-sm font-medium invisible md:visible">for happier lives</p>
    //     </div>
    //     <div className="flex justify-center w-[70vw] h-full p-5 md:w-96">
    //       <img src="https://themewagon.github.io/gym/img/logo.png" alt="" />
    //     </div>
    //     <div className="flex w-[7vw] h-full justify-end items-center md:w-96">
    //       <p className="text-sm font-medium py-5 px-3 hidden md:inline">+880 123 12 658 439</p>
    //       <div className="w-[84px] h-20 bg-[#F6214A] hidden md:flex justify-center items-center">
    //        <FontAwesomeIcon className='h-5' icon="fa-solid fa-phone" style={{color: "#ffffff",}} />
    //       </div>
    //       <FontAwesomeIcon className='h-5 px-6 block md:hidden' icon="fa-solid fa-bars" style={{color: "#f6214a",}} />
    //     </div>
    //   </div>
    //   <div className="flex w-full h-14 bg-white justify-center border-t-2 border-gray-300 invisible z-10 md:visible">
    //     <p className="my-auto px-4 py-3 text-xs font-medium text-[#F6214A]">HOME</p>
    //     <p className="my-auto px-4 py-3 text-xs font-medium">WE OFFER</p>
    //     <p className="my-auto px-4 py-3 text-xs font-medium">TOP COURSE</p>
    //     <p className="my-auto px-4 py-3 text-xs font-medium">SCHEDULE</p>
    //     <p className="my-auto px-4 py-3 text-xs font-medium">TRAINER</p>
    //     <p className="my-auto px-4 py-3 text-xs font-medium">PLAN</p>
    //     <p className="my-auto px-4 py-3 text-xs font-medium">PAGES</p>
    //   </div>
    // </header>
    <header>
      <div className='flex w-full h-[60px] shadow-sm border border-b-slate-100'>
        <div className='flex items-center w-1/2 h-full bg-transparent px-9'>
          <div className='flex justify-center items-center w-[100px] h-[40px] bg-slate-600'>
            <p className='text-white font-bold text-2xl'>LOGO</p>
          </div>
        </div>
        <div className='flex flex-row-reverse items-center w-1/2 h-full bg-transparent px-9'>
          <div className='flex justify-center items-center w-auto h-[35px] px-[20px] py-[0px] bg-slate-200 mx-[10px] rounded'>
            <p className='font-medium text-sm text-slate-500 mr-3'>Unduh</p>
            <div className='w-[15px] h-[15px] bg-slate-400'></div>
          </div>
          <div className='flex justify-center items-center w-auto h-[35px] px-[20px] py-[0px] bg-slate-200 mx-[10px] rounded'>
            <p className='font-medium text-sm text-slate-500 mr-3'>Bagikan</p>
            <div className='w-[15px] h-[15px] bg-slate-400'></div>
          </div>
          <div className='flex justify-center items-center w-auto h-[35px] px-[20px] py-[0px] bg-slate-200 mx-[10px] rounded'>
            <p className='font-medium text-sm text-slate-500 mr-3'>Mode Kertas</p>
            <div className='w-[15px] h-[15px] bg-slate-400'></div>
          </div>
          <div className='h-[35px] w-[35px] bg-transparent group'>
            <div className='block h-[35px] w-[35px] rounded-full bg-slate-200'></div>
            {/* <div className='h-[10px] w-[10px] bg-violet-500 rotate-45 mt-[-10px] left-7'></div> */}
            <div className='w-[60px] h-[20px] bg-slate-500 rounded relative mt-[-7px] ml-[10px] z-40 opacity-0 group-hover:opacity-100'>
              <p className='text-white font-light text-xs text-center leading-5'>Public</p>
            </div>
            <div className='w-[10px] h-[10px] bg-slate-500 rotate-45 relative mt-[-22px] ml-[15px] opacity-0 group-hover:opacity-100'>
            </div>
          </div>
        </div>
      </div>
      
      
    </header>
  )
}

export default Navbar3