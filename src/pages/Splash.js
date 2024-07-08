const Splash = () => {
    return (  
        <div>
            <div className="flex flex-col bg-splash-banner bg-cover bg-center w-full h-[49rem] md:h-[100vh] justify-center items-center">
                <p className="text-5xl xl:text-6xl text-white text-center font-extrabold leading-tight hidden md:block">REAL FITNESS<br></br>
                DEPENDS ON EXERCISE</p>
                <p className="text-4xl md:text-6xl text-white text-center font-extrabold leading-tight block md:hidden">REAL FITNESS DEPENDS<br></br>ON EXERCISE</p>
                <br />
                <p className="text-sm text-white text-center font-light">SHAPE YOUR BODY WELL.</p>
            </div>
            <div className="flex h-[690px] w-full py-[120px] flex-col justify-between">
                <div className="flex justify-center flex-col items-center">
                    <p className="font-bold text-4xl tracking-wide leading-relaxed">We care about what we offer</p>
                    <p className="text-sm font-light">Who are in extremely love with eco friendly system.</p>
                </div>
                <div className="flex h-auto w-full flex-row justify-center">
                    <div className="flex flex-col items-center h-[300px] w-[350px] mx-[15px] rounded-[10px] shadow-shadowCard py-[40px] px-[30px]">
                        <div className="flex h-[50px] w-full bg-icon1 bg-no-repeat bg-center">
                        </div>
                        <p className="flex justify-center h-auto w-full pt-[30px] pb-[20px] text-xl font-bold">Regular Exercise</p>
                        <p className="h-auto w-full mb-[16px] font-extralight text-base text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                    <div className="flex flex-col items-center h-[300px] w-[350px] mx-[15px] rounded-[10px] shadow-shadowCard py-[40px] px-[30px]">
                        <div className="flex h-[50px] w-full bg-icon2 bg-no-repeat bg-center">
                        </div>
                        <p className="flex justify-center h-auto w-full pt-[30px] pb-[20px] text-xl font-bold">Regular Exercise</p>
                        <p className="h-auto w-full mb-[16px] font-extralight text-base text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                    <div className="flex flex-col items-center h-[300px] w-[350px] mx-[15px] rounded-[10px] shadow-shadowCard py-[40px] px-[30px]">
                        <div className="flex h-[50px] w-full bg-icon3 bg-no-repeat bg-center">
                        </div>
                        <p className="flex justify-center h-auto w-full pt-[30px] pb-[20px] text-xl font-bold">Regular Exercise</p>
                        <p className="h-auto w-full mb-[16px] font-extralight text-base text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-auto w-full bg-[#F6214A]">
                <div className="flex items-center flex-col py-[100px] w-[1110px]">
                    <div className="flex flex-col items-center px-[15px] pb-[70px]">
                        <p className="font-bold text-4xl text-white pb-[15px]">Calculate Your Body Mass Index</p>
                        <p className="font-light text-sm text-white">Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="h-auto w-full">
                        <div className="flex h-[48px] w-1/3"></div>
                        <div className="flex h-[48px] w-1/3"></div>
                        <div className="flex h-[48px] w-1/3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Splash;