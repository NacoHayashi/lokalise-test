<script setup lang="ts">
import { toRefs, defineProps, withDefaults, useSlots } from 'vue';
import { Promised } from 'vue-promised';
interface Props {
  dataPromise?: Promise<unknown>;
  data?: any;
  isLoading?: boolean;
  error?: {
    code?: number;
    message?: string;
  };
}
const props = defineProps<Props>();
const { dataPromise } = toRefs(props);
</script>

<template>
  <Promised v-if="dataPromise" :promise="dataPromise">
    <template #pending="previousData">
      <slot name="pending" :pending="previousData"> <p>Loading...</p></slot>
    </template>

    <template v-slot="data">
      <slot name="data" :data="data"> </slot>
    </template>

    <template #rejected="error">
      <slot name="rejected" :error="error"
        ><p>Error: {{ error.message }}</p>
      </slot>
    </template>

    <template v-if="$slots?.combined" v-slot:combined="{ isPending, isDelayElapsed, data, error }">
      <slot name="combined" :isPending="isPending" :isDelayElapsed="isDelayElapsed" :data="data" :error="error"></slot>
    </template>
  </Promised>
  <div v-else>
    <slot name="pending" v-if="isLoading"> <p>Loading...</p></slot>
    <slot name="rejected" v-else-if="error" :error="error"
      ><p>Error: {{ error?.message }}</p>
    </slot>
    <slot name="data" v-else :data="data"> </slot>
  </div>
</template>
