<script setup>
import { ref } from 'vue';
import { useProfileComponents } from '../../../mixins/useProfileComponents.js';

const { components } = useProfileComponents();

</script>

<template>
  <div>
    <components.NavHeader />
    <div>
      <div class="hide-sm">
        <components.SideNav :show-nav="true" />
      </div>
      <div>
        <components.UserProfile />
      </div>
    </div>
  </div>
</template>
