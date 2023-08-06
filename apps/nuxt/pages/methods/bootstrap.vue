<template>
    <Method
      title="Bootstrap"
      description="Bootstrap to the API"
      :response="res"
      @call="callEndpoint"
      @reset="reset"
    />
  </template>
  
  <script lang="ts" setup>
  import { sdk } from '~/sdk.config';
  
  const res = useState('waiting to call...');
  
  async function callEndpoint() {
    res.value = await sdk.prestashop.bootstrap({
      menu_with_images: 'single',
    });
  }
  
  function reset() {
    res.value = 'waiting to call...';
  }
  </script>
  