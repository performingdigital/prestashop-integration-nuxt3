<template>
  <Method
    title="Search"
    description="Search to the API"
    :response="res"
    @call="callEndpoint"
    @reset="reset"
  > 
    <label class="block">
      <span class="block mb-1">query</span>
      <SfInput v-model="form.query" />
    </label>
  </Method>
</template>

<script lang="ts" setup>
import { SfInput } from '@storefront-ui/vue';
import { sdk } from '~/sdk.config';

const res = useState<object | string>('waiting to call...');

const form = reactive({
  query: ''
})

async function callEndpoint() {
  res.value = await sdk.prestashop.search({
    query: form.query,
  });
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
