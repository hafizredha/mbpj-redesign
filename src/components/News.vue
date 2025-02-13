<script setup lang="ts">
import { ref } from 'vue';

const newsObj = ref([
    {src: '/assets/news1.png', title:'LIVE STREAMING OF MBPJ FULL BOARD MEETING (NO.1/2025)', desc: 'Watch live streaming of MBPJ Full Board Meeting (No.1/2025) on 24.01.2025 starting at 9.45 am.'},
    {src: '/assets/news2.png', title:'Info on vacant commercial properties in Petaling Jaya.', desc: 'Info on vacant commercial properties in Petaling Jaya.'},
    {src: '/assets/news3.png', title:'Watch Video Of MBPJ Strategic Plan 2021-2025', desc: 'Watch video of MBPJ strategic plan from the year 2021 until 2025.'},
    {src: '/assets/news1.png', title:'LIVE STREAMING OF MBPJ FULL BOARD MEETING (NO.1/2025)', desc: 'Watch live streaming of MBPJ Full Board Meeting (No.1/2025) on 24.01.2025 starting at 9.45 am.'},
    {src: '/assets/news2.png', title:'Info on vacant commercial properties in Petaling Jaya.', desc: 'Info on vacant commercial properties in Petaling Jaya.'},
    {src: '/assets/news3.png', title:'Watch Video Of MBPJ Strategic Plan 2021-2025', desc: 'Watch video of MBPJ strategic plan from the year 2021 until 2025.'},
]);
</script>

<template>
    <div class="bg-[#FFF8DA] py-10 md:py-15 p-4">
        <div class="max-w-6xl m-auto p-4 flex flex-col gap-8 justify-items-center text-center">
            <header class="flex flex-col gap-8">
                <h1 class="text-3xl sm:text-5xl font-bold">News and Events</h1>
                <p class="text-black/60">Stay updated with the latest happenings in Petaling Jaya.</p>
            </header>
            <swiper-container class="" :slides-per-view="1" :pagination="{clickable:true, dynamicBullets:true}" :space-between="10"
            :breakpoints="{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 }
            }"
            >
                <swiper-slide class="h-[362px] max-h-[362px]" v-for="(slide, index) in newsObj" :key="index">
                <div class="h-full flex flex-col gap-2 bg-white text-left rounded-xl overflow-hidden">
                    <div class="h-[218px]">
                        <img class="w-full h-full object-cover block" :src="slide.src" loading="lazy"/>
                    </div>
                    <div class="h-full flex flex-col justify-between p-3">
                        <div class="flex flex-col gap-2">
                            <h2 class="uppercase font-medium text-sm sm:text-base leading-none">{{ slide.title }}</h2>
                            <p class="text-xs text-black/50 ">{{ slide.desc }}</p>
                        </div>
                        <a href="#" class="w-full">
                            <span class="flex justify-between items-center text-xs text-[#D10C18] font-medium">
                                <p class="text-[10px] sm:text-xs underline">View More</p>
                                <svg class="stroke-current" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.22353 1.5L8.90588 1.59412M8.90588 1.59412L9 8.27647M8.90588 1.59412L1 9.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<style scoped>
swiper-container::part(container){
    padding-bottom: 2rem;
}
</style>