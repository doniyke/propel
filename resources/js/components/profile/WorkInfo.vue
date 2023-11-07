<script setup>
import DefaultWorkInfo from './DefaultWorkInfo.vue';
import EditWorkInfo from './EditWorkInfo.vue';
import { ref, reactive } from 'vue';

let showEditForm = ref(false);

const userProfileInfo = reactive({
    employment_status: "Actively seeking opportunities",
    primary_role: "DevOps Engineer",
    portfolio: "https://amarachi.dev",
    preferred_work: ["Full-time", "Contract", "Remote"],
    relocation_abroad: "Yes",
    years_of_experience: "8 Years",
    preferred_salary: "€13,500",
    secondary_roles: ["Data Engineer", "Cybersecurity"],
    notice_period: "3 weeks"
});

const handleEditButtonClicked = () => {
    showEditForm.value = true;
};

const handleSaveButtonClicked = (data) => {
    // userProfileInfo = { ...userProfileInfo, ...data };
    showEditForm.value = false;
};

const handleCancelButtonClicked = () => {
    showEditForm.value = false;
};
</script>

<template>
    <DefaultWorkInfo v-if="!showEditForm" @edit-button-clicked="handleEditButtonClicked" :user-profile-info="userProfileInfo" />
    <EditWorkInfo v-if="showEditForm" @save-button-clicked="handleSaveButtonClicked" @cancel-button-clicked="handleCancelButtonClicked" :user-profile-info="userProfileInfo" />
</template>