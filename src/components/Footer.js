import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (  
        <footer>
            <div className='flex flex-col items-center h-auto w-full pt-[120px]'>
                <div className='flex flex-wrap h-auto w-auto justify-center pb-[40px]'>
                    <div className='flex h-auto w-full sm:w-1/2 md:w-1/4 px-[15px]'>
                        <div className='mb-[20px]'>
                            <p className='font-bold text-lg mb-[20px]'>About Us</p>
                            <p className='font-thin text-base text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='h-auto w-full sm:w-1/2 md:w-[30%] px-[15px]'>
                        <div className='mb-[20px]'>
                            <p className='font-bold text-lg mb-[20px]'>Contact Us</p>
                            <p className='font-thin text-base text-[#777777] mb-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

                            <p className='text-[#EF2147] font-bold text-2xl'>012-6532-568-9746</p>
                            <p className='text-[#EF2147] font-bold text-2xl'>012-6532-569-9748</p>
                        </div>
                    </div>
                    <div className='h-auto w-full sm:w-full md:w-[45%] px-[15px]'>
                        <div className='h-auto w-full'>
                            <p className='font-bold text-lg mb-[20px]'>Contact Us</p>
                            <p className='font-thin text-base text-[#777777]'>You can trust us. we only send offers, not a single spam.</p>
                            <div className='flex flex-wrap justify-end h-auto w-full mt-[20px]'>
                                <input className='h-[40px] w-full rounded-full placeholder-[#777777] text-sm px-[20px] bg-[#f9f9ff]' type="text" placeholder='Email address' />
                                <button className='flex justify-center items-center h-[40px] w-[100px] rounded-full bg-[#EF2147] mt-[-40px]'>
                                    <FontAwesomeIcon className="h-[20px text-white" icon="arrow-right"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center h-[80px] w-full mb-[120px]'>
                    <div className='flex flex-col justify-between h-auto w-[1100px] sm:flex-row'>
                        <div className='flex flex-col h-auto w-auto justify-center mx-[15px] mb-[20px]'>
                            <p className='text-sm font-normal text-[#777777]'>Copyright ©2024 All rights reserved | Made with by Colorlib & distributed by</p>
                            <p className='text-sm font-normal text-[#EF2147]'>ThemeWagon</p>
                        </div>
                        <div className='flex h-auto w-auto items-center ml-[10px]'>
                            <div className='flex h-[43px] w-[48px] bg-[#111111] mx-[5px] justify-center items-center'>
                                <FontAwesomeIcon className='mx-[10px] h-[20px] opacity-70' icon="fa-brands fa-facebook" style={{color: "#ffffff"}} />
                            </div>
                            <div className='flex h-[43px] w-[48px] bg-[#111111] mx-[5px] justify-center items-center'>
                                <FontAwesomeIcon className='mx-[10px] h-[20px] opacity-70' icon="fa-brands fa-twitter" style={{color: "#ffffff"}} />
                            </div>
                            <div className='flex h-[43px] w-[48px] bg-[#111111] mx-[5px] justify-center items-center'>
                                <FontAwesomeIcon className='mx-[10px] h-[20px] opacity-70 text-white' icon="fa-brands fa-dribbble" />
                            </div>
                            <div className='flex h-[43px] w-[48px] bg-[#111111] mx-[5px] justify-center items-center'>
                                <FontAwesomeIcon className='mx-[10px] h-[20px] opacity-70 text-white' icon="fa-brands fa-behance" />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;