<template>
  <Method
    title="Register"
    description="Register to the API"
    :response="res"
    @call="callEndpoint"
    @reset="reset"
  > 
    <label class="block">
      <span class="block mb-1">email</span>
      <SfInput v-model="form.email" />
    </label>
    <label class="block">
      <span class="block mb-1">firstName</span>
      <SfInput v-model="form.firstName" />
    </label>
    <label class="block">
      <span class="block mb-1">lastName</span>
      <SfInput v-model="form.lastName" />
    </label>
    <label class="block">
      <span class="block mb-1">password</span>
      <SfInput v-model="form.password" />
    </label>
  </Method>
</template>

<script lang="ts" setup>
import { SfInput } from '@storefront-ui/vue';
import { sdk } from '~/sdk.config';

const res = useState<object | string>('waiting to call...');

const form = reactive({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
})

async function callEndpoint() {
  res.value = await sdk.prestashop.register(form);
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
