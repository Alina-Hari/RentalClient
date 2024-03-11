import alinaPic from '../assets/alina.jfif'
import hariPic from '../assets/hari.jfif'

export default function AboutPage(){
    return(
        <div className='flex flex-col justify-evenly md:flex-row pt-20 md:py-40'>
            <div class="flex flex-col items-center border-gray-200 pb-10">
			<img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={alinaPic} alt="Alina image" />
			<h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Alina Havriushenko</h3>
			<span class="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
			<div class="flex mt-4 space-x-3 lg:mt-6">
            <a 
					class="inline-flex items-center py-2 px-4 text-sm 
                    font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800">LinkedIn</a>
							</div>
		</div>
        <div class="flex flex-col items-center border-gray-200 pb-10">
			<img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={hariPic} alt="Hari image" />
			<h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Haripriya Mohanasundaram</h3>
			<span class="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
			<div class="flex mt-4 space-x-3 lg:mt-6">
				<a 
					class="inline-flex items-center py-2 px-4 text-sm 
                    font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800">LinkedIn</a>
			</div>
		</div>
        </div>
    )
}