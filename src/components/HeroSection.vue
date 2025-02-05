<script setup lang="ts">
import NavBar from "./NavBar.vue"
</script>

<template>
    <div class="w-full h-[90dvh] bg-[url(assets/hero-image.webp)] bg-top bg-cover bg-no-repeat">
        <div class="h-full p-4 bg-black/35 text-center content-center justify-items-center">
            <NavBar/>
            <div class="md:w-2xl flex flex-col gap-6 m-auto">
                <h1 class="text-white text-[32px] sm:text-[52px]/15 font-bold">This is <em>Petaling Jaya</em>:<br/>The Heart of Selangor</h1>
                <p class="text-white text-sm sm:text-base font-semibold">Discover local news, city services, and initiatives that bring our community together.<br/>Let's build a better PJ, one step at a time.</p>
                <div class="flex items-center bg-white p-[14px] w-9/10 m-auto rounded-lg">
                    <i class="fa-solid fa-magnifying-glass text-black/50 px-1"></i>
                    <input class="w-full bg-white pl-2 border-none outline-none text-xs" type="text" placeholder="Search Services, News, Information..."/>
                </div>
                
            </div>
        </div>
    </div>
</template>