<script setup lang="ts">
import { ref } from 'vue';
const peopleServices= ref([
    {src: '/assets/epay.png', title:'Easy Payment (ePay)', desc: 'Pay various bills online (tax, rent, licenses, fines, and more).'},
    {src: '/assets/aduan.png', title:'Online Complaints (SISPAA)', desc: 'Online complaint management via Sistem Pengurusan Aduan Awam (SISPAA).'},
    {src: '/assets/elesen.png', title:'Online License (eLesen)', desc: 'Permits and licenses for festivals, businesses, advertising, markets, vendors, entertainment, and more.'},
    {src: '/assets/hawker.png', title:'Hawker`s License Renewal', desc: 'Make appointment for Hawker`s License Renewal.'},
    {src: '/assets/embpj.png', title:'eMBPJ', desc: 'Access online systems for permits, payments, collateral, tax, compounds, and rents.'},
    {src: '/assets/ebuilding.png', title:'eBuilding', desc: 'Access to Building Management System (eBuilding).'},
    {src: '/assets/park.png', title:'PJKitaParking', desc: 'Management of seasonal car park rentals and petak merah (red box) rentals. '},
    {src: '/assets/etender.png', title:'eTender', desc: 'Access to MBPJ eTender System.'}
]);

const businessServices= ref([
    {src: '/assets/license.png', title:'Licensing', desc: 'Petaling Jaya City Council licensing information and guidelines.'},
    {src: '/assets/rental.png', title:'Rental', desc: 'Information on rental.'},
    {src: '/assets/announcement.png', title:'Public Integrity Announcement', desc: 'Information on public integrity announcement.'}
]);
</script>

<template>
    <div class="max-w-6xl m-auto my-10 md:my-15 p-4 flex flex-col gap-8 justify-items-center text-center">
        <header class="flex flex-col gap-8">
            <h1 class="text-3xl sm:text-5xl font-bold">Online Services</h1>
            <p class="text-black/60">Explore a wide range of services designed to meet the needs of our community.</p>
        </header>
        <div class="flex justify-center" role="group">
            <ul class="w-fit flex bg-[#D9D9D9] shadow-xs p-[4px] rounded-2xl" id="myTab" data-tabs-toggle="#myTabContent" role="tablist" data-tabs-active-classes="text-white bg-[#092781] hover:text-gray-300" data-tabs-inactive-classes="text-gray-500 hover:text-gray-700">
                <li class="mr-2" role="presentation">
                    <button class="w-[120px] sm:w-[180px] h-full text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2 p-3 md:py-4 md:px-4 text-white active rounded-2xl font-semibold text-center cursor-pointer" id="person-tab" data-tabs-target="#person" type="button" role="tab" aria-controls="person" aria-selected="true">
                        <svg class="w-[15px] sm:w-[21px] stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        People
                    </button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="w-[120px] sm:w-[180px] h-full text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2 p-3 md:py-4 md:px-4 text-white rounded-2xl font-semibold text-center cursor-pointer" id="business-tab" data-tabs-target="#business" type="button" role="tab" aria-controls="business" aria-selected="false">
                        <svg class="w-[15px] sm:w-[21px] block fill-current" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <clipPath id="clip-path"> <rect class="cls-1" width="24" height="24"></rect> </clipPath> </defs> <title>user-tie</title> <g class="cls-2"> <path d="M12,14a6,6,0,1,1,6-6A6,6,0,0,1,12,14ZM12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Z"></path> <path d="M21,22a1,1,0,0,1-1-1,7,7,0,0,0-7-7H11a7,7,0,0,0-7,7,1,1,0,0,1-2,0,9,9,0,0,1,9-9h2a9,9,0,0,1,9,9A1,1,0,0,1,21,22Z"></path> <path d="M12,22a1,1,0,0,1-.71-.29l-1-1a1,1,0,0,1-.28-.85l1-7a1,1,0,0,1,2,0l1,7a1,1,0,0,1-.28.85l-1,1A1,1,0,0,1,12,22Z"></path> </g> </g></svg>
                        Business
                    </button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 hidden" id="person" role="tabpanel" aria-labelledby="person-tab">
                <div v-for="item in peopleServices" class="min:h-[253px] p-4 bg-[#F9FAFC] rounded-lg flex flex-col gap-3 justify-between content-center items-center border-1 border-[#E6E6E6] text-left">
                    <img class="w-[50px] md:w-[81px]" :src="item.src" :alt="item.title + ' logo'">
                    <p class="text-xs sm:text-base font-semibold">{{ item.title }}</p>
                    <p class="text-[10px] sm:text-xs text-black/50 font-medium w-full">{{ item.desc }}</p>
                    <a href="#" class="w-full mt-2">
                        <span class="flex justify-between items-center text-xs text-[#D10C18] font-medium">
                            <p class="text-[10px] sm:text-xs underline">View More</p>
                            <svg class="w-[8px] sm:w-[14px] stroke-current" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.22353 1.5L8.90588 1.59412M8.90588 1.59412L9 8.27647M8.90588 1.59412L1 9.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 hidden" id="business" role="tabpanel" aria-labelledby="business-tab">
                <div v-for="item in businessServices" class="min:h-[253px] p-4 bg-[#F9FAFC] rounded-lg flex flex-col gap-3 justify-between content-center items-center border-1 border-[#E6E6E6] text-left">
                    <img class="w-[50px] w-[81px]" :src="item.src" :alt="item.title + ' logo'">
                    <p class="text-xs sm:text-base font-semibold">{{ item.title }}</p>
                    <p class="text-[10px] sm:text-xs text-black/50 font-medium w-full">{{ item.desc }}</p>
                    <a href="#" class="w-full mt-2">
                        <span class="flex justify-between items-center text-xs text-[#D10C18] font-medium">
                            <p class="text-[10px] sm:text-xs underline">View More</p>
                            <svg class="stroke-current" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.22353 1.5L8.90588 1.59412M8.90588 1.59412L9 8.27647M8.90588 1.59412L1 9.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <a href="#" class="bg-[#092781] hover:bg-white w-fit m-auto text-white text-xs sm:text-base hover:text-black hover:border-1 px-4 sm:px-8 py-3 rounded-lg font-medium transition">See all services</a>
    </div>
</template>