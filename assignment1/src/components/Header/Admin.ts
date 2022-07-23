const AdminHeader = {
	render: () => {
		return (
            /*html*/`
                <div class="flex bg-[#00B0D7] items-center justify-around h-20">
							 <div class="logo-header flex items-center w-[20%] ml-8">
							 		 <img src="/images/logo.png" alt="" class="w-[16%]" />
    								 <p class="text-white text-base pl-1 font-normal">Dashboard</p>
							 </div>			
							<form class="w-[40%]">   
								<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
								<div class="relative">
									<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
											<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
									</div>
									<input type="search" id="default-search" class="block p-4 pl-10 w-full h-12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
									<button type="submit" class="absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 "></button>
								</div>
							</form>
							<p class="w-[40%] text-right text-white font-semibold text-[20px] pr-20">Xin Chào Phạm Văn Mẫn</p>
                </div>
            `
		)
	}
}

export default AdminHeader