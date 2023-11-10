
<template>
  <div class="card flex justify-center flex-wrap my-7 gap-3">
      <Toast />
      <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save"></SplitButton>
      <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="secondary"></SplitButton>
      <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="success"></SplitButton>
      <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="info"></SplitButton>
      <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="warning"></SplitButton>
      <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="help"></SplitButton>
      <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="danger"></SplitButton>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import SplitButton  from "primevue/splitbutton";
import Toast from "primevue/toast";


const toast = useToast();

const items = [
  {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => {
          toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
      }
  },
  {
      label: 'Delete',
      icon: 'pi pi-times',
      command: () => {
          toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
      }
  },
  {
      label: 'Vue Website',
      icon: 'pi pi-external-link',
      command: () => {
          window.location.href = 'https://vuejs.org/';
      }
  },
  { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
</script>
