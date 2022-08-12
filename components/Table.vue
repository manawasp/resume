<script lang="ts" setup>
interface Props {
  value: any
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div style="display:block">
    <div v-for="(col, key) in props.value" :key="key" class="table">
      <ul>
        <div style="margin:0 30px 40px 0">
          <li>
            {{ col.header }}
          </li>
          <li v-for="(row, j) in col.rows" :key="j">
            {{ row }}
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  width: 33%;
  display: inline-block;
}

.table ul {
  padding: 0;
  margin: 0;
}

ul.table li {
  font-size: .975rem;
}

// Mobile
@media only screen and (max-width: 720px) {
  #app {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }

  .table {
    width: 50%;
  }
}

// Small mobile
@media only screen and (max-width: 420px) {
  .table {
    width: 100%;
  }
}
</style>
