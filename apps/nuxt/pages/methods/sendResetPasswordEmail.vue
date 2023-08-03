<template>
  <Method
    title="sendResetPasswordEmail"
    description="sendResetPasswordEmail to the API"
    :response="res"
    @call="callEndpoint"
    @reset="reset"
  >
    <div>
      <div class="flex flex-col gap-2">
        <button 
          class="p-1 rounded"
          v-for="step in steps" :key="step.id" @click="opened = step.id"
          :class="{
            'bg-primary-500 text-white': opened === step.id,
            'border': opened !== step.id,
          }"
        >
          <p class="">
            {{ step.summary }}
          </p>
        </button>
      </div>
      <label class="block">
        <span class="block mb-1">Username</span>
        <SfInput v-model="form.username" />
      </label>
      <label class="block">
        <span class="block mb-1">Code</span>
        <SfInput v-model="form.code" />
      </label>
      <label class="block">
        <span class="block mb-1">Pass</span>
        <SfInput v-model="form.password" />
      </label>
    </div>
  </Method>
</template>

<script lang="ts" setup>
import { SfAccordionItem } from '@storefront-ui/vue';
import { SfInput } from '@storefront-ui/vue';
import { sdk } from '~/sdk.config';
import { useStorage } from '@vueuse/core';

const res = useState<object | string>('waiting to call...');

const opened = ref<string>('');

enum Step {
  sendCode = 'sendCode',
  checkCode = 'checkCode',
  updatePass = 'updatePass',
}

const steps = [
  {
    id: Step.sendCode,
    summary: 'Send reset password email with code',
  },
  {
    id: Step.checkCode,
    summary: 'Check code received from email',
  },
  {
    id: Step.updatePass,
    summary: 'Update password',
  },
];

const form = useStorage('sendResetPasswordEmail', {
  username: '',
  code: '',
  password: '',
});

const colorsMap = new Map<string, Step>(Object.values(Step).map((v) => [v, v]));

function parseStep(volumeData: string): Step | undefined {
  return colorsMap.get(volumeData);
}

async function callEndpoint() {
  let step = parseStep(opened.value);
  switch (step) {
    case Step.sendCode:
      res.value = await sdk.prestashop.resetPasswordEmail(form.value);
      break;
    case Step.checkCode:
      res.value = await sdk.prestashop.resetPasswordCheck(form.value);
      break;
    case Step.updatePass:
      res.value = await sdk.prestashop.resetPasswordEnter(form.value);
      break;
    default:
      res.value = 'unknown step';
      break;
  }
}

function reset() {
  res.value = 'waiting to call...';
}
</script>
