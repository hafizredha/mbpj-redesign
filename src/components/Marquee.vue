<script setup lang="ts">

</script>

<template>
    <div class="w-full h-[4dvh] flex">
        <p class="w-auto h-full bg-red-500 text-[10px] text-white p-2 sm:text-sm flex items-center justify-center font-bold">Announcements</p>
        <div class="w-auto h-full overflow-hidden whitespace-nowrap justify-items-center content-center flex-1">
            <div class="relative w-full h-full overflow-hidden text-[10px] sm:text-sm py-2 border-b-1 border-[#E6E6E6]">
                <div class="flex w-full h-full animate-slideText text-left font-bold items-center">
                    <a href="#" class="min-w-full px-2 truncate hover:underline">Mobile Counter Schedule for Year 2025 License Renewal</a>
                    <a href="#" class="min-w-full px-2 truncate hover:underline">Spring cleaning schedule for Hari Raya Aidil Fitri 2025</a>
                    <a href="#" class="min-w-full px-2 truncate hover:underline">List Of Vacant Morning Markets, Weekend Markets, Night Markets, Stalls and Smart Trak</a>
                    <a href="#" class="min-w-full px-2 truncate hover:underline">Pay Your Assessment Tax Easily Using Our eCUKAI@MBPJ Mobile Apps</a>
                </div>
            </div>
        </div>
        <span class="w-[10%] bg-red-500 h-full flex items-center justify-center">
            <a class="flex items-center justify-center w-full h-full text-center" href="#"><img class="max-h-[15px] sm:max-h-[20px]" src="/src/assets/list.svg"/><span class="sr-only">Open List</span></a>
        </span>
    </div>
</template>