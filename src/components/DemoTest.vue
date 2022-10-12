<script setup lang="ts">
import { toRefs, ref, defineProps, withDefaults } from 'vue';
interface IProps {
  test: string;
  msg: {
    text: string;
    id: number;
  };
}

const props = withDefaults(defineProps<IProps>(), {
  test: 'hi',
  msg: () => ({
    text: 'ji',
    id: 0,
  }),
});

// const props = defineProps({
//   msg:{
//     type:Object,
//     default:{
//       text:'hh',
//       id:1
//     }
//   }
// })

const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();

const countOut = ref(0);

const add = () => {
  countOut.value++;
  emit('change', countOut.value);
};

const { msg } = toRefs(props);
const countIn = ref(0);
const addIn = () => {
  countIn.value++;
};
</script>
<template>
  <div>
    <button class="text-red-400" @click="add">點選測試資料變化</button>
    <button @click="addIn">in</button>

    <h1>{{ msg?.text }}</h1>
    <h1>{{ msg.id }}</h1>
    <h1>{{ countOut }}</h1>
    <h1>{{ countIn }}</h1>
  </div>
</template>
