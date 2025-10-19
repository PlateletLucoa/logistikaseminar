<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktopMode = breakpoints.greaterOrEqual("md");

const colorMode = useColorMode();

const headerLogoImg = computed(() =>
  colorMode.value === "dark"
    ? "/Logistikaseminar-mustal-1024x277.png"
    : "/Logistikaseminar-valgel-768x208.png"
);
</script>

<template>
  <header class="px-4 pt-2 pb-4 md:px-16 md:py-8 flex items-center">
    <nav class="">
      <ol>
        <li>
          <a href="/" aria-label="Header logo">
            <NuxtImg
              :src="headerLogoImg"
              alt="Header logo"
              sizes="200px md:400px"
              loading="lazy"
              decoding="auto"
            />
          </a>
        </li>
      </ol>
    </nav>
    <!-- Links  -->
    <nav>
      <ul></ul>
    </nav>
    <!-- Actions  -->
    <nav class="ml-auto">
      <ul v-if="isDesktopMode">
        <li>
          <ColorModeToggle />
        </li>
      </ul>
      <ul v-else>
        <li>
          <UiButton
            variant="outline"
            class="rounded-full h-[3.4rem] w-[3.4rem] cursor-pointer"
          >
            <Icon
              name="radix-icons:hamburger-menu"
              class="h-[1.6rem] w-[1.6rem]"
            />
          </UiButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
