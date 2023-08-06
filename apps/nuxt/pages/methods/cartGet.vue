<template>
  <Method
    title="GetCartItems"
    description="GetCartItems to the API"
    :response="res"
    @call="callEndpoint"
    @reset="reset"
  > 
  </Method>
</template>

<script lang="ts" setup>
import { SfInput } from '@storefront-ui/vue';
import { sdk } from '~/sdk.config';

const res = useState<object | string>('waiting to call...');

async function callEndpoint() {
  res.value = await sdk.prestashop.cartGet();
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
