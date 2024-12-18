const HomeBlog = () => {
    return(
        <div className="w-[100vw] h-auto bg-purple-400">
            <div className="flex items-center  justify-centerw-full max-w-[1280px] mx-auto h-[720px] bg-[#F0F2F7] flex-col">
                <div className="flex w-full h-[120px] bg-transparent justify-between px-[40px]">
                    <div className="flex h-full w-auto justify-center">
                        <p className="flex items-center text-black text-3xl text-center bg-transparent font-medium">Places to Stay</p>
                    </div>
                    <div className="flex h-full w-auto items-center">
                        <p className="flex h-[40px] w-[120px] text-black text-lg text-center bg-transparent justify-center items-center rounded-full border-2 border-black font-medium">View All @</p>
                    </div>
                </div>
                <div className="flex items-center w-full h-auto px-[40px] justify-between">
                    <div className="w-full max-w-[270px] h-[420px] bg-[#181818] rounded-[15px]"></div>
                    <div className="w-full max-w-[270px] h-[420px] bg-[#181818] rounded-[15px]"></div>
                    <div className="w-full max-w-[270px] h-[420px] bg-[#181818] rounded-[15px]"></div>
                    <div className="w-full max-w-[270px] h-[420px] bg-[#181818] rounded-[15px]"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog