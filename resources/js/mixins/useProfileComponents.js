// useProfileComponents.js
import { defineAsyncComponent } from 'vue';

export function useProfileComponents() {
  const components = {
    NavHeader: defineAsyncComponent(() => import('../components/profile/NavHeader.vue')),
    SideNav: defineAsyncComponent(() => import('../components/profile/SideNav.vue')),
    UserProfile: defineAsyncComponent(() => import('../components/profile/UserProfile.vue')),
  };

  return { components };
}
