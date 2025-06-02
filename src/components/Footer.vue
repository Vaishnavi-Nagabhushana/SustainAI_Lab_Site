<script lang="ts" setup>
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'
</script>

<template>
  <footer
    class="w-full mt-18 pt-6 pb-8 max-w-3xl text-sm flex flex-col gap-4 border-main border-t !border-op-50 text-dark dark:text-white"
  >
    <div
      v-if="siteConfig.footer.navLinks && siteConfig.footer.navLinks.length > 0"
      class="flex flex-wrap gap-4"
    >
      <template v-for="(link, index) in siteConfig.footer.navLinks" :key="link.text">
        <a
          :aria-label="`${link.text}`"
          :target="getLinkTarget(link.href)"
          class="nav-link flex items-center"
          :href="link.href"
        >
          {{ link.text }}
        </a>
        <span v-if="index < siteConfig.footer.navLinks.length - 1" op-70> / </span>
      </template>
    </div>

    <!-- Contact & Coordinates -->
    <div class="flex flex-col md:flex-row justify-between gap-8 text-sm leading-relaxed mt-4">
      <!-- Left: Contact Info -->
      <div class="space-y-1">
        <h3 class="font-bold">
          Contact
        </h3>
        <p>Phone: {{ siteConfig.footer.contact.phone }}</p>
        <p>
          Email:
          <a class="prose-link" :href="`mailto:${siteConfig.footer.contact.email}`">
            {{ siteConfig.footer.contact.email }}
          </a>
        </p>
      </div>

      <!-- Right: Coordinates -->
      <div class="space-y-1">
        <h3 class="font-bold">
          Coordinates
        </h3>
        <p>
          311, Academic Complex (HSS Building)<br>
          Mehta Family School of DS & AI, IIT Guwahati<br>
          Assam 781039, India
        </p>
      </div>
    </div>
  </footer>
</template>
