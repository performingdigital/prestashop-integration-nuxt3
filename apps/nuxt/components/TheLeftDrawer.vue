<template>
  <div>
    <div class="p-4">
      <SfButton type="button" @click="open = true"> Open Drawer </SfButton>
    </div>
    <transition
      enter-active-class="transition duration-500 ease-in-out"
      leave-active-class="transition duration-500 ease-in-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <SfDrawer
        ref="drawerRef"
        v-model="open"
        :placement="placement"
        :class="[
          'bg-neutral-50 dark:bg-gray-800 z-20',
          'border',
          'border-gray-300',
          { 'max-w-[370px]': placement === 'left' || placement === 'right' },
        ]"
      >
        <header class="flex items-center justify-between px-10 py-6 bg-primary-700">
          <div class="flex items-center text-white">Defined Methods</div>
          <SfButton square variant="tertiary" class="text-white" @click="open = false">
            <SfIconClose />
          </SfButton>
        </header>
        <MethodList />
      </SfDrawer>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { SfDrawer, SfDrawerPlacement, SfButton, SfIconFavorite, SfIconClose, useTrapFocus } from '@storefront-ui/vue';
import { ref } from 'vue';

const placement = ref<`${SfDrawerPlacement}`>('left');
const open = ref(false);
const drawerRef = ref();

useTrapFocus(drawerRef, { activeState: open });
</script>