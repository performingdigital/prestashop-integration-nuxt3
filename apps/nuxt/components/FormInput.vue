
<script lang="ts" setup>
import { SfInput } from '@storefront-ui/vue';

defineProps<{ modelValue: string; label: string }>();
</script>

<template>
  <label class="block">
    <span class="block mb-1">{{ label }}</span>
    <SfInput
      :model-value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
