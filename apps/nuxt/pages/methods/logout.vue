<template>
  <Method
    title="Logout"
    description="Logout to the API"
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

const form = reactive({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
})

async function callEndpoint() {
  res.value = await sdk.prestashop.logout();
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
