<template>
  <Method
    title="Cart Update"
    description="Cart Update to the API"
    :response="res"
    @call="callEndpoint"
    @reset="reset"
  >
    <FormInput label="id_product" v-model="form.id_product" />
    <FormInput
      label="id_product_attribute"
      v-model="form.id_product_attribute"
    />
  </Method>
</template>

<script lang="ts" setup>
import FormInput from '~/components/FormInput.vue';
import { sdk } from '~/sdk.config';
import { useStorage } from '@vueuse/core';

const res = useState<object | string>('waiting to call...');

const form = useStorage('updateCart', {
  id_product: '1',
  id_product_attribute: '0',
});

async function callEndpoint() {
  res.value = await sdk.prestashop.updateCart(form.value);
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
