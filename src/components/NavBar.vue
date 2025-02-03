<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
    <header class="fixed top-0 left-0 right-0 p-[inherit] border-b-1 border-gray-200/20 md:border-none md:bg-transparent transition-all" :class="isOpen ? 'bg-white duration-100 ease-in' : 'bg-transparent duration-600 delay-300 ease-out'">
        <div class="max-w-6xl m-auto flex justify-between items-center">
            <div class="flex gap-3">
                <img class="h-[40px] sm:h-[70px] w-auto" src="/assets/logo-mbpj.png"/>
                <img class="h-[40px] sm:h-[70px] w-auto md:hidden" src="/assets/logo_selangor.png"/>
            </div>
            <div class="flex items-center gap-5">
                <nav class="top-[72px] sm:top-[102px] md:top-0 md:relative md:max-h-full! fixed inset-x-0 bg-white md:bg-transparent rounded-b-xl overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out"
                :class="isOpen ? 'max-h-screen' : 'max-h-0'">
                    <ul class="flex flex-col md:flex-row p-3 md:p-0 gap-2 text-left text-base text-black/80 md:text-white font-medium border-t-1 border-black-500 md:border-none">
                        <li>
                            <a class="block p-2" href="#">Home</a>
                        </li>
                        <li>
                            <a class="block p-2" href="#">MBPJ</a>
                        </li>
                        <li>
                            <a class="block p-2" href="#">People</a>
                        </li>
                        <li>
                            <a class="block p-2" href="#">Business</a>
                        </li>
                        <li>
                            <a class="block p-2" href="#">Visitor</a>
                        </li>
                        <li>
                            <a class="block p-2" href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div class="inline-flex gap-3 items-center">
                    <button class="mobile-nav-toggle md:hidden w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] bg-center bg-contain" @click="isOpen = !isOpen" :class="isOpen ? 'bg-[url(/src/assets/menu-close.svg)]' : 'bg-[url(/src/assets/menu-open.svg)]'"><span class="sr-only">Menu</span></button>
                    <img class="w-auto hidden md:block" src="/assets/logo_selangor.png"/>
                </div>
            </div>
        </div>
        
    </header>
</template>