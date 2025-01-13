import { useState, useEffect,useRef } from "react";
import ApexCharts from "apexcharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Admin = () => {

   const containers = [1, 2, 3, 4];
   

  // Initialize state for theme (dark or light)
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference for the initial theme
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('color-theme') === 'dark') {
        return 'dark';
      } else if (localStorage.getItem('color-theme') === 'light') {
        return 'light';
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light'; // Default theme
  });

  // Effect to apply the theme on mount
  useEffect(() => {
    // Apply the theme to the HTML element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [theme]);

  // Toggle theme when button is clicked
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  
   useEffect(() => {
   const options = {
   // set the labels option to true to show the labels on the X and Y axis
      xaxis: {
         show: true,
         categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
         labels: {
         show: true,
            style: {
               fontFamily: "Inter, sans-serif",
               cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
         },
         axisBorder: {
            show: false,
         },
         axisTicks: {
            show: false,
         },
      },
      yaxis: {
         show: true,
         tickAmount: 2,
         labels: {
            show: true,
            style: {
               fontFamily: "Inter, sans-serif",
               cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
            
            formatter: function (value) {
               return '' + value;
            }
         }
      },
      series: [
         {
            name: "Developer Edition",
            data: [1, 3, 1, 4, 2, 4],
            color: "#1A56DB",
         },
         {
            name: "Designer Edition",
            data: [4, 2, 4, 1, 3, 1],
            color: "#7E3BF2",
         },
      ],
      chart: {
         sparkline: {
            enabled: false
         },
         height: 165,
         width: "100%",
         type: "area",
         fontFamily: "Inter, sans-serif",
         dropShadow: {
            enabled: false,
         },
         toolbar: {
            show: false,
         },
      },
      
      fill: {
         type: "gradient",
         gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
         },
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         width: 6,
      },
      legend: {
         show: false,
      },
      grid: {
         show: true,
      },
   }

   if (document.getElementById("labels-chart") && typeof ApexCharts !== 'undefined') {
   const chart = new ApexCharts(document.getElementById("labels-chart"), options);
   chart.render();

      // Cleanup the chart on component unmount
      return () => {
        chart.destroy();
      };

    }
   }, []);

   useEffect(() => {
      const options2 = {
      // set the labels option to true to show the labels on the X and Y axis
         series: [45, 55],
         colors: ["#526CC0", "#2A2C3D"],
         chart: {
         height: 100,
         width: 100,
         type: "donut",
         },
         stroke: {
         colors: ["transparent"],
         lineCap: "",
         },
         plotOptions: {
         pie: {
            donut: {
               labels: {
                  show: true,
                  name: {
                    show: true,
                    fontFamily: "Inter, sans-serif",
                    offsetY: 20,
                  },
                  total: {
                    showAlways: true,
                    show: true,
                    label: "",
                    fontFamily: "Inter, sans-serif",
                    style: {
                     color: "#373d3f", // Set the color using fill
                 },
                  //   fontSize: "30px",
                    formatter: function (w) {
                      const sum = w.globals.seriesTotals.reduce((a, b) => {
                        return  w.globals.seriesTotals[0]
                      }, 0)
                      console.log(w.globals.seriesTotals);
                      return sum
                    },
                  },
                  value: {
                     show: true,
                     fontFamily: "Inter, sans-serif",
                     offsetY: 5,
                     fontSize: "8px",
                     formatter: function (value) {
                        return value + "k"
                     },
                  },
               },
               size: "93%",
            },
         },
         },
         tooltip: {
            enabled: false,
         },
         grid: {
         padding: {
            top: -2,
         },
         },
         labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
         dataLabels: {
         enabled: false,
         },
         legend: {
            show: false,
         },
         yaxis: {
         labels: {
            formatter: function (value) {
               return value + "k"
            },
         },
         },
         xaxis: {
         labels: {
            formatter: function (value) {
               return value  + "k"
            },
         },
         axisTicks: {
            show: false,
         },
         axisBorder: {
            show: false,
         },
         },
      }

      if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {

         const chart = new ApexCharts(document.getElementById("donut-chart"), options2);
         chart.render();
   
         // Cleanup the chart on component unmount
         return () => {
           chart.destroy();
         };
   
       }
      }, []);

   const cardWrapperRef = useRef(null); // Reference to the card wrapper
   const [currentPosition, setCurrentPosition] = useState(0); // Track current position
   
   const slideLeft = () => {
      if (currentPosition < 0) {
         setCurrentPosition((prev) => {
         const newPosition = prev + 28 + cardWidth();
         cardWrapperRef.current.style.transform = `translateX(${newPosition}px)`;
         return newPosition;
         });
      }
   };
   
   const slideRight = () => {
      const maxScroll =
         -cardWidth() * (cardWrapperRef.current.children.length - 2); // Calculate max scroll position
      if (currentPosition > maxScroll) {
         setCurrentPosition((prev) => {
         const newPosition = prev - 28 - cardWidth();
         cardWrapperRef.current.style.transform = `translateX(${newPosition}px)`;
         return newPosition;
         });
      }
   };
      
   const cardWidth = () => cardWrapperRef.current.children[0].offsetWidth;

   return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
      {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      {/* <!-- Main modal --> */}
      <div id="navbar-search" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
         <div class="relative p-4  mt-0 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal body --> */}
                  <div class="p-4 md:p-5 space-y-4">
                     <div class="relative md:hidden">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                           <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                           </svg>
                        </div>   
                        <input type="text" id="search-navbar" class="block w-full pr-5 py-3 ps-12 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                     </div>
                  </div>
            </div>
         </div>
      </div>

      {/* Navbar */}
      <nav class="fixed top-0 z-40 w-full xl:pl-64 bg-white dark:bg-gray-800 dark:border-gray-700">
         <div class="px-5 py-5">
            <div class="flex items-center justify-between">
               <div class="flex items-center justify-start rtl:justify-end">
                  <div class="flex md:order-2 ">
                     <a href="https://flowbite.com/" class="flex items-center p-2 xl:hidden">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3 sm:h-10" alt="Flowbite Logo" />
                     </a>
                     <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                     </button>
                     <button type="button" data-modal-target="navbar-search" data-modal-toggle="navbar-search" class="mx-3 md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                     </button>
                     <div class="relative hidden mx-3 md:flex md:items-center">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                           <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                           </svg>
                           <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" class="block w-[300px] p-2 ps-11 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                     </div> 
                  </div>
               </div>
               <div class="flex items-center">
                  <div class="mx-0">
                     <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg class="h-6 w-6 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
                     </button>
                     <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                        <ul class="py-2 font-medium" role="none">
                           <li>
                              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                              <div class="inline-flex items-center">
                                 <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/></g></svg>              
                                 English (US)
                              </div>
                              </a>
                           </li>
                           <li>
                              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                              <div class="inline-flex items-center">
                                 <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"/><path d="M0 0h512v170.7H0z"/><path fill="#d00" d="M0 170.7h512v170.6H0z"/></svg>
                                 Deutsch
                              </div>
                              </a>
                           </li>
                           <li>
                              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                              <div class="inline-flex items-center">
                                 <svg class="h-3.5 w-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"/><path fill="#009246" d="M0 0h170.7v512H0z"/><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/></g></svg>              
                                 Italiano
                              </div>
                              </a>
                           </li>
                           <li>
                              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                              <div class="inline-flex items-center">
                                 
                                 中文 (繁體)
                              </div>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div class="mx-0">
                     <button
                        id="theme-toggle"
                        type="button"
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                        onClick={handleThemeToggle}
                     >
                        <svg
                           id="theme-toggle-dark-icon"
                           className={`w-6 h-6 ${theme === 'dark' ? 'hidden' : ''}`}
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg
                           id="theme-toggle-light-icon"
                           className={`w-6 h-6 ${theme === 'light' ? 'hidden' : ''}`}
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                           d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                           fillRule="evenodd"
                           clipRule="evenodd"
                           ></path>
                        </svg>
                     </button>
                  </div>
                  <div class="flex items-center mx-3">
                     <div>
                     <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-12 h-12 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                     </button>
                     </div>
                     <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                     <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                           Neil Sims
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                           neil.sims@flowbite.com
                        </p>
                     </div>
                     <ul class="py-1" role="none">
                        <li>
                           <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                        </li>
                        <li>
                           <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                        </li>
                        <li>
                           <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                        </li>
                        <li>
                           <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                        </li>
                     </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>

      {/* Side Bar */}
      <aside id="logo-sidebar" class="fixed top-0 left-0 z-50 w-64 h-screen pt-5 pb-20 transition-transform -translate-x-full bg-white border-r border-gray-200 xl:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
         <a href="https://flowbite.com/" class="flex items-center mb-5 px-5 h-12">
            <img src="assets/images/logo.png" class="h-8 me-3 sm:h-10" />
            <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Trinity</span>
         </a>
         <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                     </svg>
                     <span class="ms-3">Dashboard</span>
                  </a>
               </li>
               <li>
                  <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                           <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                        </svg>
                        <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                  </button>
                  <ul id="dropdown-example" class="hidden py-2 space-y-2">
                        <li>
                           <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                        </li>
                        <li>
                           <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                        </li>
                        <li>
                           <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                        </li>
                  </ul>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                     <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                     <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                     </svg>
                     <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                  </a>
               </li>
            </ul>
            <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                        <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
                     </svg>
                     <span class="ms-3">Upgrade to Pro</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
                     </svg>
                     <span class="ms-3">Documentation</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                        <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z"/>
                     </svg>
                     <span class="ms-3">Components</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                     <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                        <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z"/>
                     </svg>
                     <span class="ms-3">Help</span>
                  </a>
               </li>
            </ul>
            <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
               <div class="flex items-center mb-3">
                  <span class="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                  <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                     <span class="sr-only">Close</span>
                     <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                     </svg>
                  </button>
               </div>
               <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
                  Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
               </p>
               <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
            </div>
         </div>
      </aside>

      {/* Parent Konten */}
      <div class="flex flex-col min-[900px]:flex-row flex-wrap xl:ml-64">
         {/* Konten Kiri */}
         <div class="p-7 w-full min-[900px]:max-w-[calc(100%-455px)] bg-[#FCFCFC] mt-[88px]">
            {/* Container Grafik */}
            <div class="flex flex-col w-full 2xl:flex-row mb-4 gap-7">
               <div class="flex flex-row items-center w-full 2xl:w-[220px] h-[132px] 2xl:h-[264px] 2xl:flex-col bg-[#141522] shrink-0 rounded-lg shadow dark:bg-gray-800 justify-between">
                  <div class="flex flex-col h-full 2xl:h-1/2 w-1/2 2xl:w-full justify-between px-4 md:px-4 py-6 items-center 2xl:items-start">                       
                     <h5 class="leading-none text-xl font-bold text-white dark:text-white">Running Task</h5> 
                     <h5 class="leading-none text-3xl font-bold text-white dark:text-white">65</h5>  
                  </div>
                  {/* <div id="labels-chart" class="mx-4 pr-2 pl-1 rounded-lg bg-white"></div> */}
                  <div class="p-4 h-full 2xl:h-1/2 rounded-lg w-1/2 2xl:w-full flex gap-4">
                     <div class="h-full w-1/2"id="donut-chart"></div>
                     <div class="w-1/2 flex flex-col justify-center h-full">
                        <p class="text-white text-xl">Task</p>
                        <p class="text-[#8e92bc] text-lg">100</p>
                     </div>
                  </div>
               </div>
               
               <div class="flex flex-col w-full  bg-[#f5f5f7] rounded-lg shadow dark:bg-gray-800 justify-between">
                  <div class="flex justify-between px-4 md:px-4 pt-6 pb-0 md:pb-0">
                     <div>
                        <h5 class="leading-none text-xl font-bold text-gray-900 dark:text-white pb-2">Activity</h5>
                        {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p> */}
                        
                     </div>
                     <div>
                        <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="lastDaysdropdown"
                        data-dropdown-placement="bottom"
                        class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                        type="button">
                        Last 7 days
                        <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>

                        <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                           <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                              <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                              </li>
                              <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                              </li>
                              <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                              </li>
                              <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                              </li>
                              <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     {/* <div
                        class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        23%
                        <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                        </svg>
                     </div> */}
                  </div>
                  <div id="labels-chart" class="m-4 pr-2 pl-1 rounded-lg bg-white pb-[-15px]"></div>
               </div> 
            </div>

            {/* Container Slider Task */}
            <div class="flex items-center justify-center h-auto mb-7 rounded bg-[#FCFCFC] dark:bg-gray-800">
               <div className="relative w-full overflow-hidden gap-7">
                  <div class="flex mb-4">
                     <div class="w-1/2 h-auto flex items-center">
                        <p class="text-3xl font-bold">Montly Mentors</p>
                     </div>
                     <div class="w-1/2 h-auto flex justify-end">
                        <button className="transform h-16 w-12 p-2 rounded-full" onClick={slideLeft}>
                        ❮
                        </button>
                        <button className="transform h-16 w-12 p-2 rounded-full" onClick={slideRight}>
                        ❯
                        </button>
                     </div>
                  </div>
                  <div ref={cardWrapperRef} className="flex h-auto transition-transform gap-7 duration-300 ease-in-out">
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-none h-auto w-full min-[1500px]:w-[calc(100%/2-14px)] min-[1800px]:w-[calc((100%-56px)/3)] p-7 bg-white rounded-lg dark:bg-gray-800">
                        <a href="#">
                           <img class="rounded-xl" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="pt-3">
                           <a href="#">
                                 <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
                           </a>
                           <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">the biggest</p>
                           <div class="w-full mb-7">
                              <div class="flex justify-between">
                                 <p class="text-xl font-medium mb-3">Progress</p>
                                 <p class="text-lg text-[#546FFF] font-medium mb-3">43 %</p>
                              </div>
                              <div class="w-full bg-[#BEC8FF] rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                 <div class="bg-[#546FFF] w-[43%] h-2.5 rounded-full dark:bg-blue-500"></div>
                              </div>
                           </div>
                           <div class="flex items-center justify-between mb-2">
                              <div class="flex items-center ml-2">
                                 <svg class=" text-gray-00 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9">
                                       <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                                       <path d="M12 6v6l4 2"></path>
                                    </g>
                                 </svg>
                                 <p class="text-lg font-[500]">3 Days Left</p>
                              </div>
                              <div class="flex -space-x-4 rtl:space-x-reverse">
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                 <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  
                  </div>
               </div>
            </div>

            {/* Filter dan Search Bar */}
            <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-7">
               <p class="text-3xl font-bold">Task Overview2</p>
               <div class="flex gap-5">
                  <div class="flex items-center">
                     <button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio" class="inline-flex items-center text-gray-500 bg-white border border-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                           <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 me-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                 <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                              </svg>
                           Last 30 days
                           <svg class="w-4 h-4 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="m1 1 4 4 4-4"/>
                           </svg>
                     </button>
                     {/* <!-- Dropdown menu --> */}
                     <div id="dropdownDefaultRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                           <li>
                           <div class="flex items-center">
                                 <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                 <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                           </div>
                           </li>
                           <li>
                           <div class="flex items-center">
                                 <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                 <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                           </div>
                           </li>
                           <li>
                           <div class="flex items-center">
                                 <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                 <label for="default-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                           </div>
                           </li>
                        </ul>
                     </div>
                        
                  </div>
                  <label for="table-search" class="sr-only">Search</label>
                  <div class="relative">
                        <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                           <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg w-60  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                  </div>
               </div>
            </div>

            {/* Container Table */}
            <div class="flex items-center justify-center pb-4 pt-2 rounded-t-xl dark:bg-gray-800 shadow-xl">
               <div class="relative overflow-x-auto overlow-y-auto sm:rounded-lg pb-10">
                  {/* table */}
                  <table class="w-full bg-white shadow-sm text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                     <thead class="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400 border-b-2 border-[#F7F7F8]">
                           <tr>
                              <th scope="col" class="p-4">
                                 <div class="flex items-center">
                                       <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                       <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                 </div>
                              </th>
                              <th scope="col" class="px-6 py-3 text-base">
                                 Product name
                              </th>
                              <th scope="col" class="px-6 py-3 text-base text-center">
                                 Color
                              </th>
                              <th scope="col" class="px-6 py-3 text-base text-center">
                                 Category
                              </th>
                              <th scope="col" class="px-6 py-3 text-base text-center">
                                 Price
                              </th>
                              <th scope="col" class="px-6 py-3 text-base text-center">
                                 Price
                              </th>
                              <th scope="col" class="px-6 py-3 text-base text-center">
                                 Action
                              </th>
                           </tr>
                     </thead>
                     <tbody>
                        {containers.map((id) => (             
                           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td class="w-4 p-4">
                                 <div class="flex items-center">
                                       <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                       <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                 </div>
                              </td>
                              <th scope="row" class="min-w-[250px] text-base px-6 my-[auto] font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17" Apple MacBook Pro 17"
                              </th>
                              <td class="px-4 py-4 min-w-[130px]">
                                 <div class="flex -space-x-4 justify-center">
                                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="assets/images/splash-banner.jpg" alt=""/>
                                    <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                                 </div>
                              </td>
                              <td class="h-[64.5px] px-4 flex items-center justify-center">
                                 <div class="text-base font-medium dark:text-white mr-4">43%</div>
                                 <div class="w-[110px] bg-[#BEC8FF] rounded-full h-2 dark:bg-gray-700">
                                    <div class="bg-[#546FFF] h-2 rounded-full w-[43%]"></div>
                                 </div>
                              </td>
                              <td class="px-4 py-4">
                                 <div class="flex justify-center bg-[#BEC8FF] text-[#546FFF] text-center w-[110px] h-[27px] text-sm font-medium me-2 px-2.5 leading-[27px] rounded-full dark:bg-gray-700 dark:text-gray-300">
                                    In Progress
                                 </div>
                              </td>
                              <th scope="row" class="text-center min-w-[100px] px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 2 Days
                              </th>
                              <td class="px-4 py-4 min-w-[110px]">
                                 {/* <div href="#" class="w-[36px] rounded-full flex hover:bg-gray-200 mx-[auto] py-2 justify-center font-medium text-base text-blue-600 dark:text-blue-500 hover:underline">
                                    <FontAwesomeIcon className="h-[20px] text-[#141522]" icon="fa-solid fa-ellipsis"/>
                                    <div class="hidden w-[110px] mt-[28px] mr-[74px] h-auto z-100 bg-white absolute shadow-[5px_5px_20px_0px_rgba(170,170,170)] rounded-xl p-2">
                                       <div class="w-full h-5] px-2.5 py-1.5 flex items-center">
                                          <p class="text-md text-black font-normal">@ Sync</p>
                                       </div>
                                       <div class="w-full h-5] px-2.5 py-1.5 flex items-center">
                                          <p class="text-md text-black font-normal">@ Sync</p>
                                       </div>
                                    </div>
                                 </div> */}
                                 {/* <div class="w- bg-[#BEC8FF] rounded-full h-2 dark:bg-gray-700">
                                    <div class="bg-[#546FFF] h-2 rounded-full w-[43%]"></div>
                                 </div> */}
                                 <ContainerWithPopup key={id} id={id} />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  {/* <nav class="flexitems-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">  
                  </nav> */}
               </div>
            </div>

            {/* pagination */}
            <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 px-4 bg-white rounded-b-xl">
               <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
               <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                  <li>
                     <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li>
                     <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                  </li>
               </ul>
            </div>

            <div class="grid grid-cols-2 gap-4">
               <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                     <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                     <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                     <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
               <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                     <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                     </svg>
                  </p>
               </div>
            </div>
         </div>
         {/* Konten Kanan */}
         <div class="w-full min-[900px]:w-[455px] min-w-[455px] rounded-lg mt-[88px]">

               <aside class="min-[900px]:fixed min-[900px]:h-[calc(100vh-88px-68px)] transition-transform bg-[#F5F5F7] border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <div class="h-full p-7 overflow-y-auto bg-[#F5F5F7] dark:bg-gray-800">
                     <div class="p-6 max-w-sm bg-white rounded-lg dark:bg-gray-800 ">
                        <a href="#">
                           <img class="rounded-lg" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="py-5">
                           <a href="#">
                                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                           </a>
                           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                           <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                 </svg>
                           </a>
                        </div>
                     </div>
                     <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                           <img class="rounded-t-lg" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="p-5">
                           <a href="#">
                                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                           </a>
                           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                           <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                 </svg>
                           </a>
                        </div>
                     </div>
                     <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                           <img class="rounded-t-lg" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="p-5">
                           <a href="#">
                                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                           </a>
                           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                           <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                 </svg>
                           </a>
                        </div>
                     </div>
                     <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                           <img class="rounded-t-lg" src="assets/images/splash-banner.jpg" alt="" />
                        </a>
                        <div class="p-5">
                           <a href="#">
                                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                           </a>
                           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                           <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                 </svg>
                           </a>
                        </div>
                     </div>

                  </div>
               </aside>
            {/* <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
               <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div>
            <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
               <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>
               </p>
            </div> */}
         </div>
         



      <footer class="fixed bottom-0 left-0 z-20 w-full py-4 pr-4 pl-4 sm:pl-[272px] md:pl-[280px] bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:py-6 md:pr-6 dark:bg-gray-800 dark:border-gray-600">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
               <li>
                  <a href="#" class="hover:underline me-4 md:me-6">About</a>
               </li>
               <li>
                  <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
               </li>
               <li>
                  <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
               </li>
               <li>
                  <a href="#" class="hover:underline">Contact</a>
               </li>
            </ul>
      </footer>
      </div>
    </div>

  );
};


const ContainerWithPopup = ({ id }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div href="#" class="w-[36px] rounded-full flex hover:bg-gray-200 mx-[auto] py-2 justify-center font-medium text-base text-blue-600 dark:text-blue-500 hover:underline">
      <button onClick={togglePopup}>
         <FontAwesomeIcon className="h-[20px] text-[#141522]" icon="fa-solid fa-ellipsis"/>
      </button>
      {isPopupVisible && (
         <div class="w-[110px] mt-[28px] mr-[74px] h-auto z-100 bg-white absolute shadow-[5px_5px_20px_0px_rgba(170,170,170)] rounded-xl p-2">
            <div class="w-full h-5] px-2.5 py-1.5 flex items-center">
               <p class="text-md text-black font-normal">@ Sync</p>
            </div>
            <div class="w-full h-5] px-2.5 py-1.5 flex items-center">
               <p class="text-md text-black font-normal">@ Sync</p>
            </div>
         </div>
      )}
   </div>
  );
};
export default Admin