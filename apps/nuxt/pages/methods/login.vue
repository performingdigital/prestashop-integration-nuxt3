<template>
  <Method
    title="Login"
    description="Login to the API"
    :response="res"
    @call="callEndpoint"
    @reset="reset"
  >
    <label class="block">
      <span class="block mb-1">email</span>
      <SfInput v-model="form.username" />
    </label>
    <label class="block">
      <span class="block mb-1">password</span>
      <SfInput v-model="form.password" />
    </label>
  </Method>
</template>

<script lang="ts" setup>
import { sdk } from '~/sdk.config';

const res = useState<object|string>('waiting to call...');

const form = reactive({
  username: '',
  password: '',
})

async function callEndpoint() {
  res.value = await sdk.prestashop.login(form);
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
