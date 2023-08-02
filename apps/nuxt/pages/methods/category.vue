<template>
  <Method
    title="Category"
    description="Category to the API"
    :response="res"
    @call="callEndpoint"
    @reset="reset"
  >
    <FormInput label="id" v-model="form.id" />
    <FormInput label="slug" v-model="form.slug" />
    <FormInput label="page" v-model="form.page" />
  </Method>
</template>

<script lang="ts" setup>
import { SfInput } from '@storefront-ui/vue';
import { sdk } from '~/sdk.config';
import { useStorage } from '@vueuse/core'

const res = useState<object | string>('waiting to call...');

const form = useStorage('category', {
  id: '',
  slug: '',
  page: '1',
  with_all_images: false,
  image_size: 'home_default',
  with_category_tree: true,
});

async function callEndpoint() {
  res.value = await sdk.prestashop.getCategory(form.value);
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
