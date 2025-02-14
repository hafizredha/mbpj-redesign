<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <!-- Overlay -->
    <div 
        class="fixed inset-0 bg-black transition-opacity duration-500 ease-in-out md:hidden z-999"
        :class="isOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'"
        @click="isOpen = false"
    ></div>
    <header class="fixed top-0 left-0 right-0 p-[inherit] border-b-1 border-gray-200/20 transition-all z-99999 overflow-hidden" 
    :class="[
        isOpen || isScrolled ? 'bg-white duration-100 ease-in' : 'bg-transparent duration-600 delay-300 ease-out',
    ]">
        <div class="max-w-6xl m-auto flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <img class="h-[40px] w-auto duration-600 delay-300 ease-out" :class="isScrolled ? 'sm:h-[40px]' : 'sm:h-[60px]'" src="/assets/logo-mbpj.png"/>
                <img class="h-[40px] sm:h-[70px] w-auto md:hidden" src="/assets/logo_selangor.png"/>
                
                <p class="text-xs sm:text-lg md:hidden lg:block font-medium duration-600 delay-300 ease-out" :class="isScrolled || isOpen ? 'text-black' : ' text-white'">Petaling Jaya Municipality</p>
            </div>
            <div class="flex items-center gap-5">
                <nav class="top-[72px] sm:top-[102px] md:top-0 md:relative md:max-h-full! fixed inset-x-0 bg-white md:bg-transparent rounded-b-xl overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out"
                :class="isOpen ? 'max-h-screen' : 'max-h-0'">
                    <ul class="flex flex-col md:flex-row p-3 md:p-0 gap-2 text-left text-base text-black/80 font-medium border-t-1 border-black-500 md:border-none duration-600 delay-300 ease-out"
                    :class="isScrolled ? 'md:text-black/80' : 'md:text-white'">
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
                    <button class="mobile-nav-toggle md:hidden w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] bg-center bg-contain duration-600 delay-300 ease-out" @click="isOpen = !isOpen" 
                    :class="isOpen ? 'bg-[url(/src/assets/menu-close.svg)]' : (isScrolled ? 'bg-[url(/src/assets/menu-open-scroll.svg)]' : 'bg-[url(/src/assets/menu-open.svg)]')">
                    <span class="sr-only">Menu</span></button>
                    <img class="w-auto hidden md:block duration-600 delay-300 ease-out" :class="isScrolled ? 'sm:h-[40px]' : 'sm:h-[60px]'" src="/assets/logo_selangor.png"/>
                </div>
            </div>
        </div>
        
    </header>
</template>