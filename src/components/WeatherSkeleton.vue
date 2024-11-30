<script setup></script>

<template>
  <div class="flex items-center justify-center mt-10">
    <div
      role="status"
      class="max-w-sm animate-pulse-fast mt-10 items-center gap-4 justify-center flex flex-col"
    >
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div class="flex items-center gap-4 mt-8">
        <svg
          class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
        <div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2 -ml-3"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 -ml-3"></div>
        </div>
      </div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-4 mt-2"></div>

      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-8"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-5"></div>

      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
