<script setup lang="ts">
// plugins
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// data
const storeInformation = {
  dateRange: '7/2~7/31',
  totalSales: '$99,999.99',
  totalOrders: '#12,345',
  averageUnitPrice: '$3,333.33',
  totalItemsSold: '#888',
  topFiveItems: Array.from({ length: 5 }).map(() => 'https://fakeimg.pl/80x100/ccc'),
  lowerThreeItems: Array.from({ length: 3 }).map(() => 'https://fakeimg.pl/80x100/ccc'),
  totalBuyers: '#12,345',
  averagePurchases: '#1.5',
  aboveAverageCustomers: '#123',
};
</script>

<template>
  <div class="flex flex-col gap-2 text-base text-aiopt-dark">
    <div class="font-bold text-lg">{{ t('The sales profile of your store for the last 30 days ({dateRange}) are as follows:', { dateRange: storeInformation.dateRange }) }}</div>
    <!-- ./ block one End -->

    <div>
      {{ t('Total Sales: {totalSales}', { totalSales: storeInformation.totalSales }) }}<br />
      {{ t('Total Orders: {totalOrders}', { totalOrders: storeInformation.totalOrders }) }}<br />
      {{ t('Average unit price: {averageUnitPrice} (Total order amount / Total order number)', { averageUnitPrice: storeInformation.averageUnitPrice }) }}<br />
      {{ t('Total items sold: {totalItemsSold}', { totalItemsSold: storeInformation.totalItemsSold }) }}<br />
    </div>
    <!-- ./ block two End -->

    <div>
      {{ t('Top 5 (showing the top 3 products in terms of sales volume)') }}<br />
      <div class="flex gap-2">
        <div v-for="item in storeInformation.topFiveItems" :key="item" class="h-[100px] border-2 border-solid border-aiopt-gray-50">
          <img class="max-h-full object-cover" :src="item" alt="Top 5 products" />
        </div>
      </div>
    </div>
    <!-- ./ block three End -->

    <div>
      {{ t('The three items with lower sales volume') }}<br />
      <div class="flex gap-2">
        <div v-for="item in storeInformation.lowerThreeItems" :key="item" class="h-[100px] border-2 border-solid border-aiopt-gray-50">
          <img class="max-h-full object-cover" :src="item" alt="Lower sales 3 items" />
        </div>
      </div>
    </div>
    <!-- ./ block four End -->

    <div>
      {{ t('Total number of buyers: {totalBuyers}', { totalBuyers: storeInformation.totalBuyers }) }}<br />
      {{ t('Average number of purchases: {averagePurchases}', { averagePurchases: storeInformation.averagePurchases }) }}<br />
      {{ t('Number of customers who bought more than the average: {aboveAverageCustomers}', { aboveAverageCustomers: storeInformation.aboveAverageCustomers }) }}<br />
    </div>
    <!-- ./ block five End -->
  </div>
</template>
