<script setup lang="ts">

</script>

<template>
    <header class="fixed top-0 left-0 right-0 p-[inherit] flex justify-between items-center">
        <div class="flex gap-3">
            <img class="h-[50px] sm:h-[70px] w-auto" src="/assets/logo-mbpj.png"/>
            <img class="h-[50px] w-auto sm:hidden" src="/assets/logo_selangor.png"/>
        </div>
        <div class="flex items-center gap-5">
            <nav class="hidden md:inline">
                <ul class="inline-flex gap-5 text-white">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">MBPJ</a>
                    </li>
                    <li>
                        <a href="#">People</a>
                    </li>
                    <li>
                        <a href="#">Business</a>
                    </li>
                    <li>
                        <a href="#">Visitor</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div class="inline-flex gap-3 items-center">
                <img class="w-auto hidden sm:block" src="/assets/logo_selangor.png"/>
                <svg class="md:hidden h-[40px] sm:h-[50px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
        </div>
        
    </header>
</template>