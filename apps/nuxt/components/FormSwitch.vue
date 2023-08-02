<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
import { SfSwitch } from '@storefront-ui/vue';

defineProps<{ modelValue: string; label: string }>();
</script>

<template>
  <label class="block">
    <span class="block mb-1">{{ label }}</span>
    <SfSwitch
      @update="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </label>
</template>
