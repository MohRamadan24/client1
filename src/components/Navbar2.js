const Navbar2 = () => {

  return (
    <header className="flex w-full h-auto fixed flex-wrap flex-col">
      <div className="flex w-full h-20 bg-white justify-center z-10" dir="ltr">
        <div className="flex flex-col justify-between w-96 h-full p-5">
          <p className="text-sm font-medium">We believe we helps people</p>
          <p className="text-sm font-medium">for happier lives</p>
        </div>
        <div className="flex justify-center w-96 h-full p-5">
          <img src="https://themewagon.github.io/gym/img/logo.png" alt="" />
        </div>
        <div className="flex w-96 h-full justify-end">
          <p className="text-sm font-medium leading-10 py-5 px-3">+880 123 12 658 439</p>
          <div className="flex w-24 h-20 bg-red-500"></div>
        </div>
      </div>
      <div className="flex w-full h-14 bg-white justify-center border-t-2 border-gray-300 z-10">
        <p className="my-auto px-4 py-3 text-xs font-medium text-red-500">HOME</p>
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