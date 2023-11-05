<script setup>
import DefaultPersonalInfo from './DefaultPersonalInfo.vue';
import EditPersonalInfo from './EditPersonalInfo.vue';

import { ref, reactive } from 'vue';

const showEditForm = ref(false);

const userProfileInfo = reactive({
    fullname: "Beth Amarachi",
    email: "bethamarachi@gmail.com",
    gender: "Female",
    country: "Nigeria",
    phone: "+234-9283924450",
    about: "I am a DevOps and Big Data engineer with 4 years of experience and in-depth knowledge of R, Python, PowerBI, and Tableau. I have an MSc. in Statistics, and a significant part of my career has been spent working at Jumia Nigeria, where I worked as a BI Analyst and later as a Commercial Planning Analyst."
});

const handleEditButtonClicked = () => {
    showEditForm.value = true;
};

const handleSaveButtonClicked = (data) => {
    Object.assign(userProfileInfo, data);
    showEditForm.value = false;
};

const handleCancelButtonClicked = () => {
    showEditForm.value = false;
};
</script>

<template>
    <DefaultPersonalInfo v-if="!showEditForm" @edit-button-clicked="handleEditButtonClicked" :user-profile-info="userProfileInfo" />
    <EditPersonalInfo v-if="showEditForm" @save-button-clicked="handleSaveButtonClicked" @cancel-button-clicked="handleCancelButtonClicked" :user-profile-info="userProfileInfo" />
</template>