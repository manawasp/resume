<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <footer>
    <div>
      <a href="/clovis-kyndt-cv-en.pdf" download class="no-underline">
        Download PDF
      </a>
    </div>
    <div class="mt-xsmall text-muted">
      <small>Last updated on {{ runtimeConfig.public.BUILD_TIME }}</small>
    </div>
  </footer>
</template>
