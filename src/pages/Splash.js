    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <div className="flex h-auto w-full pt-[120px] pb-[40px] flex-col justify-between">
                    <div className="flex justify-center flex-col items-center">
                        <p className="font-bold text-4xl tracking-wide leading-relaxed mx-[30px] text-center">We care about what we offer</p>
                        <p className="text-sm font-light mb-16 text-center">Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="flex flex-wrap h-auto w-full flex-row justify-center">
                        <div className="flex flex-col items-center h-[300px] w-[350px] mx-[15px] rounded-[10px] shadow-shadowCard py-[40px] px-[30px] mb-[80px]">
                            <div className="flex h-[50px] w-full bg-icon1 bg-no-repeat bg-center">
                            </div>
                            <p className="flex justify-center h-auto w-full pt-[30px] pb-[20px] text-xl font-bold">Regular Exercise</p>
                            <p className="h-auto w-full mb-[16px] font-extralight text-base text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>
                        <div className="flex flex-col items-center h-[300px] w-[350px] mx-[15px] rounded-[10px] shadow-shadowCard py-[40px] px-[30px] mb-[80px]">
                            <div className="flex h-[50px] w-full bg-icon2 bg-no-repeat bg-center">
                            </div>
                            <p className="flex justify-center h-auto w-full pt-[30px] pb-[20px] text-xl font-bold">Regular Exercise</p>
                            <p className="h-auto w-full mb-[16px] font-extralight text-base text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>
                        <div className="flex flex-col items-center h-[300px] w-[350px] mx-[15px] rounded-[10px] shadow-shadowCard py-[40px] px-[30px] mb-[80px]">
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
                            <p className="font-bold text-4xl text-white pb-[15px] text-center">Calculate Your Body Mass Index</p>
                            <p className="font-light text-sm text-white text-center">Who are in extremely love with eco friendly system.</p>
                        </div>
                        <div className="flex flex-row flex-wrap h-auto w-full justify-center">
                            <div className="flex h-[64px] w-[285px] px-[15px]">
                                <input className="h-[44px] w-full p-[12px] mb-[20px] border border-[#f96481] bg-transparent placeholder-white text-xs text-white" type="text" placeholder="Your Height (Inches)" />
                            </div>
                            <div className="flex h-[64px] w-[285px] px-[15px]">
                                <input className="h-[44px] w-full p-[12px] mb-[20px] border border-[#f96481] bg-transparent placeholder-white text-xs text-white" type="text" placeholder="Your Weight (lbs)" />
                            </div>
                            <div className="flex h-[64px] w-[285px] px-[15px]">
                                <button className="flex justify-center items-center h-auto w-full mb-[20px] px-[30px] rounded-full bg-white text-sm font-medium">CALCULATE YOUR BMI</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-[120px] h-auto w-full">
                    <div className="flex flex-col items-center h-auto w-[1140px] px-[15px]">
                        <div className="flex h-auto w-auto md:w-[855px]">
                            <div className="flex h-auto w-full px-[15px] pb-[70px]">
                                <div className="flex flex-col justify-center h-auto w-full">
                                    <p className="font-bold text-4xl tracking-wide leading-relaxed text-center">Top Courses That are open for Students</p>
                                    <p className="text-sm font-light text-center">Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center h-auto w-full flex-wrap">
                            <div className="h-auto w-[370px]">
                                <div className="relative h-auto w-full pb-[50px] px-[15px]">
                                    <div className="h-auto w-auto overflow-hidden">
                                        <img className="block w-full hover:scale-110 ease-in-out duration-300" src="https://themewagon.github.io/gym/img/c1.jpg" alt="" />
                                    </div>
                                    <div className="h-auto w-max py-[10px] px-[40px] ml-[20px] mt-[-60px] bg-[#f6214b] z-10 text-white relative">Course Available</div>
                                    <a className="flex justify-between items-center " href="/#">
                                        <p className="py-[20px] text-lg font-semibold">Running Classes</p>
                                        <p className="text-lg font-semibold text-[#f6214b]">$275</p>
                                    </a>
                                </div>
                            </div>
                            <div className="h-auto w-[370px]">
                                <div className="relative h-auto w-full pb-[50px] px-[15px]">
                                    <div className="h-auto w-auto overflow-hidden">
                                        <img className="block w-full hover:scale-110 ease-in-out duration-300" src="https://themewagon.github.io/gym/img/c1.jpg" alt="" />
                                    </div>
                                    <div className="h-auto w-max py-[10px] px-[40px] ml-[20px] mt-[-60px] bg-[#f6214b] z-10 text-white relative">Course Available</div>
                                    <a className="flex justify-between items-center " href="/#">
                                        <p className="py-[20px] text-lg font-semibold">Running Classes</p>
                                        <p className="text-lg font-semibold text-[#f6214b]">$275</p>
                                    </a>
                                </div>
                            </div>
                            <div className="h-auto w-[370px]">
                                <div className="relative h-auto w-full pb-[50px] px-[15px]">
                                    <div className="h-auto w-auto overflow-hidden">
                                        <img className="block w-full hover:scale-110 ease-in-out duration-300" src="https://themewagon.github.io/gym/img/c1.jpg" alt="" />
                                    </div>
                                    <div className="h-auto w-max py-[10px] px-[40px] ml-[20px] mt-[-60px] bg-[#f6214b] z-10 text-white relative">Course Available</div>
                                    <a className="flex justify-between items-center " href="/#">
                                        <p className="py-[20px] text-lg font-semibold">Running Classes</p>
                                        <p className="text-lg font-semibold text-[#f6214b]">$275</p>
                                    </a>
                                </div>
                            </div>
                            <div className="h-auto w-[370px]">
                                <div className="relative h-auto w-full pb-[50px] px-[15px]">
                                    <div className="h-auto w-auto overflow-hidden">
                                        <img className="block w-full hover:scale-110 ease-in-out duration-300" src="https://themewagon.github.io/gym/img/c1.jpg" alt="" />
                                    </div>
                                    <div className="h-auto w-max py-[10px] px-[40px] ml-[20px] mt-[-60px] bg-[#f6214b] z-10 text-white relative">Course Available</div>
                                    <a className="flex justify-between items-center " href="/#">
                                        <p className="py-[20px] text-lg font-semibold">Running Classes</p>
                                        <p className="text-lg font-semibold text-[#f6214b]">$275</p>
                                    </a>
                                </div>
                            </div>
                            <div className="h-auto w-[370px]">
                                <div className="relative h-auto w-full pb-[50px] px-[15px]">
                                    <div className="h-auto w-auto overflow-hidden">
                                        <img className="block w-full hover:scale-110 ease-in-out duration-300" src="https://themewagon.github.io/gym/img/c1.jpg" alt="" />
                                    </div>
                                    <div className="h-auto w-max py-[10px] px-[40px] ml-[20px] mt-[-60px] bg-[#f6214b] z-10 text-white relative">Course Available</div>
                                    <a className="flex justify-between items-center " href="/#">
                                        <p className="py-[20px] text-lg font-semibold">Running Classes</p>
                                        <p className="text-lg font-semibold text-[#f6214b]">$275</p>
                                    </a>
                                </div>
                            </div>
                            <div className="h-auto w-[370px]">
                                <div className="relative h-auto w-full pb-[50px] px-[15px]">
                                    <div className="h-auto w-auto overflow-hidden">
                                        <img className="block w-full hover:scale-110 ease-in-out duration-300" src="https://themewagon.github.io/gym/img/c1.jpg" alt="" />
                                    </div>
                                    <div className="h-auto w-max py-[10px] px-[40px] ml-[20px] mt-[-60px] bg-[#f6214b] z-10 text-white relative">Course Available</div>
                                    <a className="flex justify-between items-center " href="/#">
                                        <p className="py-[20px] text-lg font-semibold">Running Classes</p>
                                        <p className="text-lg font-semibold text-[#f6214b]">$275</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-auto w-full xl:flex-row">
                    <div className="flex flex-col items-center h-auto w-full md:flex-row xl:w-1/2 bg-[#222222]">
                        <div className="flex flex-col h-auto w-full md:flex-row xl:w-1/2 bg-[#444444]">
                            <img className="h-max w-full" src="https://themewagon.github.io/gym/img/f1.jpg" alt="" />
                        </div>
                        <div className="flex flex-col h-auto w-full xl:w-1/2 bg-[#222222] p-16">
                            <p className="text-white font-thin text-base mb-[15px]">BASIC & COMMON REPAIRS</p>
                            <p className="text-[#f6214b] font-bold text-4xl mb-[15px]">Basic Revolutions</p>
                            <p className="text-[#777777] font-extralight text-base">Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center h-auto w-full md:flex-row xl:w-1/2 bg-[#222222]">
                        <div className="flex flex-col h-auto w-full md:flex-row xl:w-1/2 bg-[#222222]">
                            <img className="h-max w-full" src="https://themewagon.github.io/gym/img/f2.jpg" alt="" />
                        </div>
                        <div className="flex flex-col h-auto w-full xl:w-1/2 bg-[#222222] p-16">
                            <p className="text-white font-thin text-base mb-[15px]">BASIC & COMMON REPAIRS</p>
                            <p className="text-[#f6214b] font-bold text-4xl mb-[15px]">Basic Revolutions</p>
                            <p className="text-[#777777] font-extralight text-base">Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-[120px] h-auto w-full">
                    <div className="flex flex-col items-center h-auto w-[1140px] px-[15px]">
                        <div className="flex h-auto w-auto md:w-[855px]">
                            <div className="flex h-auto w-full px-[15px] pb-[70px]">
                                <div className="flex flex-col justify-center h-auto w-full">
                                    <p className="font-bold text-4xl tracking-wide leading-relaxed text-center">Schedule your Fitness Process</p>
                                    <p className="text-sm font-light text-center">Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center h-auto w-full flex-wrap">
                            <table class="h-auto w-auto table-auto">
                                <thead className="">
                                    <tr className="bg-[#e9ecef]">
                                        <th className="h-[50px] w-[140px] md:w-[230px] xl:w-[290px] text-sm font-black border">COURSE NAME</th>
                                        <th className="h-[50px] w-[60px] md:w-[90px] xl:w-[160px] text-sm font-black border">MON</th>
                                        <th className="h-[50px] w-[60px] md:w-[90px] xl:w-[160px] text-sm font-black border">TUE</th>
                                        <th className="h-[50px] w-[60px] md:w-[90px] xl:w-[160px] text-sm font-black border">WED</th>
                                        <th className="h-[50px] w-[60px] md:w-[90px] xl:w-[160px] text-sm font-black border">THU</th>
                                        <th className="h-[50px] w-[60px] md:w-[90px] xl:w-[160px] text-sm font-black border">FRI</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="hover:bg-[#f6214b] hover:text-white">
                                        <td className="justify-center text-center font-thin text-sm border">Fitness Aero</td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center mb-[5px]">10.00</p>
                                            <p className="font-thin text-sm text-center mb-[5px]">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#f6214b] hover:text-white">
                                        <td className="justify-center text-center font-thin text-sm border">Senior Fitness</td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#f6214b] hover:text-white">
                                        <td className="justify-center text-center font-thin text-sm border">Fitness Aero</td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#f6214b] hover:text-white">
                                        <td className="justify-center text-center font-thin text-sm border">Senior Fitness</td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#f6214b] hover:text-white">
                                        <td className="justify-center text-center font-thin text-sm border">Senior Fitness</td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#f6214b] hover:text-white">
                                        <td className="justify-center text-center font-thin text-sm border">Senior Fitness</td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                        <td className="py-[10px] border">
                                            <p className="font-thin text-sm text-center">10.00</p>
                                            <p className="font-thin text-sm text-center">02.00</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-[120px] h-auto w-full bg-[#f9f9ff]">
                    <div className="flex flex-col items-center h-auto w-[1140px] px-[15px]">
                        <div className="flex h-auto w-auto md:w-[855px]">
                            <div className="flex h-auto w-full px-[15px] pb-[70px]">
                                <div className="flex flex-col justify-center h-auto w-full">
                                    <p className="font-bold text-4xl tracking-wide leading-relaxed text-center">Our Experienced Trainers</p>
                                    <p className="text-sm font-light text-center">Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center h-auto w-full flex-wrap">
                            <div className="flex flex-wrap justify-center h-auto w-full">
                                <div className="h-auto w-[235px] px-[15px] pb-[50px]">
                                    <div className="h-[230px] w-full group overflow-hidden">
                                        <img className="block" src="https://themewagon.github.io/gym/img/t2.jpg " alt="" />
                                        <div className="h-[231px] w-full bg-[#f6214b] mt-[-235px] relative opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                                            <div className="flex h-full w-auto justify-center items-center">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-facebook" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-twitter" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-linkedin" style={{color: "#ffffff"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg text-center font-semibold mt-[20px]">Rodney Cooper</p>
                                    <p className="text-sm text-[#777776] text-center mb-[20px]">Creative Art Director (Project)</p>
                                </div>
                                <div className="h-auto w-[235px] px-[15px] pb-[50px]">
                                    <div className="h-[230px] w-full group overflow-hidden">
                                        <img className="block" src="https://themewagon.github.io/gym/img/t2.jpg " alt="" />
                                        <div className="h-[231px] w-full bg-[#f6214b] mt-[-235px] relative opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                                            <div className="flex h-full w-auto justify-center items-center">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-facebook" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-twitter" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-linkedin" style={{color: "#ffffff"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg text-center font-semibold mt-[20px]">Rodney Cooper</p>
                                    <p className="text-sm text-[#777776] text-center mb-[20px]">Creative Art Director (Project)</p>
                                </div>
                                <div className="h-auto w-[235px] px-[15px] pb-[50px]">
                                    <div className="h-[230px] w-full group overflow-hidden">
                                        <img className="block" src="https://themewagon.github.io/gym/img/t2.jpg " alt="" />
                                        <div className="h-[231px] w-full bg-[#f6214b] mt-[-235px] relative opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                                            <div className="flex h-full w-auto justify-center items-center">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-facebook" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-twitter" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-linkedin" style={{color: "#ffffff"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg text-center font-semibold mt-[20px]">Rodney Cooper</p>
                                    <p className="text-sm text-[#777776] text-center mb-[20px]">Creative Art Director (Project)</p>
                                </div>
                                <div className="h-auto w-[235px] px-[15px] pb-[50px]">
                                    <div className="h-[230px] w-full group overflow-hidden">
                                        <img className="block" src="https://themewagon.github.io/gym/img/t2.jpg " alt="" />
                                        <div className="h-[231px] w-full bg-[#f6214b] mt-[-235px] relative opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                                            <div className="flex h-full w-auto justify-center items-center">
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-facebook" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-twitter" style={{color: "#ffffff"}} />
                                                <FontAwesomeIcon className='mx-[10px] h-[22px]' icon="fa-brands fa-linkedin" style={{color: "#ffffff"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg text-center font-semibold mt-[20px]">Rodney Cooper</p>
                                    <p className="text-sm text-[#777776] text-center mb-[20px]">Creative Art Director (Project)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-[120px] h-auto w-full">
                    <div className="flex flex-col items-center h-auto w-[1140px] px-[15px]">
                        <div className="flex h-auto w-auto md:w-[855px]">
                            <div className="flex h-auto w-full px-[15px] pb-[70px]">
                                <div className="flex flex-col justify-center h-auto w-full">
                                    <p className="font-bold text-4xl tracking-wide leading-relaxed text-center">Choose the Perfect Plan for you</p>
                                    <p className="text-sm font-light text-center">Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center h-auto w-full flex-wrap">
                            <div className='flex flex-col h-auto w-5/6 md:w-[350px] mx-[10px] mb-[40px] group'>
                                <div className='flex h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee]'>
                                    <div className=' flex flex-col h-auto w-1/2'>
                                        <p className='font-bold text-lg leading-6'>Standard</p>
                                        <p className='font-light text-base text-gray-500'>For the individuals</p>
                                    </div>
                                    <div className='flex justify-end items-center h-auto w-1/2'>
                                        <p className='font-extrabold text-4xl'>$199</p>
                                    </div>
                                </div>
                                <div className='flex h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee] group-hover:bg-[#F4214B] group-hover:border-[#fff] duration-300'>
                                    <div className=' flex flex-col h-auto w-full'>
                                        <p className='font-light text-base text-gray-500 leading-6 group-hover:text-white duration-300'>“Few would argue that, despite the advancements</p>
                                    </div>
                                </div>
                                <div className='flex flex-col h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee] group-hover:bg-[#F4214B] duration-300'>
                                    <div className=' flex flex-col h-auto w-full'>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>2.5 GB Free Photos</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Secure Online Transfer Indeed</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Unlimited Styles for interface</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Reliable Customer Service</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Manual Backup Provided</p>
                                    </div>
                                    <div className='h-auto w-[220px] bg-[#222] mt-6 group-hover:bg-white duration-300 button_hover'>
                                        <button className='flex justify-start text-white items-center h-auto w-full border-0 pl-[30px] py-[10px] text-base group-hover:text-black duration-300'>
                                            PURCHASE PLAN
                                            <FontAwesomeIcon className="ml-3 hover_icon duration-[0ms]" icon="arrow-right"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col h-auto w-5/6 md:w-[350px] mx-[10px] mb-[40px] group'>
                                <div className='flex h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee]'>
                                    <div className=' flex flex-col h-auto w-1/2'>
                                        <p className='font-bold text-lg leading-6'>Standard</p>
                                        <p className='font-light text-base text-gray-500'>For the individuals</p>
                                    </div>
                                    <div className='flex justify-end items-center h-auto w-1/2'>
                                        <p className='font-extrabold text-4xl'>$199</p>
                                    </div>
                                </div>
                                <div className='flex h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee] group-hover:bg-[#F4214B] group-hover:border-[#fff] duration-300'>
                                    <div className=' flex flex-col h-auto w-full'>
                                        <p className='font-light text-base text-gray-500 leading-6 group-hover:text-white duration-300'>“Few would argue that, despite the advancements</p>
                                    </div>
                                </div>
                                <div className='flex flex-col h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee] group-hover:bg-[#F4214B] duration-300'>
                                    <div className=' flex flex-col h-auto w-full'>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>2.5 GB Free Photos</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Secure Online Transfer Indeed</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Unlimited Styles for interface</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Reliable Customer Service</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Manual Backup Provided</p>
                                    </div>
                                    <div className='h-auto w-[220px] bg-[#222] mt-6 group-hover:bg-white duration-300 button_hover'>
                                        <button className='flex justify-start text-white items-center h-auto w-full border-0 pl-[30px] py-[10px] text-base group-hover:text-black duration-300'>
                                            PURCHASE PLAN
                                            <FontAwesomeIcon className="ml-3 hover_icon duration-[0ms]" icon="arrow-right"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col h-auto w-5/6 md:w-[350px] mx-[10px] mb-[40px] group'>
                                <div className='flex h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee]'>
                                    <div className=' flex flex-col h-auto w-1/2'>
                                        <p className='font-bold text-lg leading-6'>Standard</p>
                                        <p className='font-light text-base text-gray-500'>For the individuals</p>
                                    </div>
                                    <div className='flex justify-end items-center h-auto w-1/2'>
                                        <p className='font-extrabold text-4xl'>$199</p>
                                    </div>
                                </div>
                                <div className='flex h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee] group-hover:bg-[#F4214B] group-hover:border-[#fff] duration-300'>
                                    <div className=' flex flex-col h-auto w-full'>
                                        <p className='font-light text-base text-gray-500 leading-6 group-hover:text-white duration-300'>“Few would argue that, despite the advancements</p>
                                    </div>
                                </div>
                                <div className='flex flex-col h-auto w-ful p-[40px] bg-[#f9f9ff] border-b border-[#eeeeee] group-hover:bg-[#F4214B] duration-300'>
                                    <div className=' flex flex-col h-auto w-full'>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>2.5 GB Free Photos</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Secure Online Transfer Indeed</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Unlimited Styles for interface</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Reliable Customer Service</p>
                                        <p className='font-light text-base text-gray-500 mb-5 group-hover:text-white duration-300'>Manual Backup Provided</p>
                                    </div>
                                    <div className='h-auto w-[220px] bg-[#222] mt-6 group-hover:bg-white duration-300 button_hover'>
                                        <button className='flex justify-start text-white items-center h-auto w-full border-0 pl-[30px] py-[10px] text-base group-hover:text-black duration-300'>
                                            PURCHASE PLAN
                                            <FontAwesomeIcon className="ml-3 hover_icon duration-[0ms]" icon="arrow-right"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className='flex flex-wrap justify-center h-auto w-auto mx-auto mb-[100px]'>
                    <img className='h-[100px] w-auto mx-[50px] my-[20px] grayscale hover:grayscale-0' src="https://themewagon.github.io/gym/img/l1.png" alt="" />
                    <img className='h-[100px] w-auto mx-[50px] my-[20px] grayscale hover:grayscale-0' src="https://themewagon.github.io/gym/img/l2.png" alt="" />
                    <img className='h-[100px] w-auto mx-[50px] my-[20px] grayscale hover:grayscale-0' src="https://themewagon.github.io/gym/img/l3.png" alt="" />
                    <img className='h-[100px] w-auto mx-[50px] my-[20px] grayscale hover:grayscale-0' src="https://themewagon.github.io/gym/img/l4.png" alt="" />
                    <img className='h-[100px] w-auto mx-[50px] my-[20px] grayscale hover:grayscale-0' src="https://themewagon.github.io/gym/img/l5.png" alt="" />
                </div>
                <div className='flex h-[400px] w-full bg-banner-2 bg-cover bg-center justify-center items-center'>
                    <div className='flex flex-col h-auto w-[800px] items-center'>
                        <p className='text-white text-center text-4xl font-bold mb-5'>Huge Transaction in last Week</p>
                        <p className='text-white text-center text-base font-thin mb-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className='h-auto w-auto py-[10px] px-[40px] text-white text-base font-medium bg-[#F4214B] rounded-full'>BECOME A MEMBER</button>
                    </div>
                </div>
            </div>
        );
    }
    
    export default Splash;