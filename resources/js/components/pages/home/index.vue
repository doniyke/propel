<script setup>
    // todo: remember to convert this to a mixin
    import NavHeader from '../../profile/NavHeader.vue';
    import SideNav from '../../profile/SideNav.vue';

    import UserProfile from '../../profile/UserProfile.vue'; // This cannot be a mixin because it is not repeated
</script>
<template>
    <div>
        <NavHeader />
        <div class="d-flex">
            <div>
                <SideNav />
            </div>
            <div>
                <UserProfile />
            </div>
        </div>
    </div>
</template>