<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import { JsonViewer } from 'vue3-json-viewer';
import 'vue3-json-viewer/dist/index.css';

defineProps<{
  title: string;
  description: string;
  response: object | string;
}>();

const emit = defineEmits(['call', 'reset']);

onMounted(() => {
  emit('reset');
});
</script>

<template>
  <div class="w-full grid grid-cols-[200px,1fr] gap-2">
    <div class="p-2">
      <h1 class="typography-headline-2 font-bold mt-2 mb-4 text-green-500">
        {{ title }}
      </h1>
      <slot></slot>
      <div class="flex flex-col gap-4 mt-6">
        <SfButton @click="$emit('call')" size="lg"> call </SfButton>
        <SfButton
          @click="$emit('reset')"
          size="lg"
          variant="secondary"
          class="bg-white"
        >
          reset
        </SfButton>
      </div>
    </div>
    <div>
      <div class="p-2">
        <JsonViewer
          class="min-h-[800px] min-w-[500px]"
          :value="response"
          expandDepth="5"
          expanded
          copyable
          boxed
          sort
          theme="dark"
        />
      </div>
    </div>
  </div>
</template>
