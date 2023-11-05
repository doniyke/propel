<script setup>
    import DefaultWorkInfo from './DefaultWorkInfo.vue';
    import EditWorkInfo from './EditWorkInfo.vue';

    import { ref, reactive } from 'vue';

    let showEditForm  = ref(false)

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
    })

    const handleEditButtonClicked = () => {
        showEditForm.value = true;
    }

    const handleSaveButtonClicked = (data) => {
        userProfileInfo.employment_status = data.employment_status;
        userProfileInfo.primary_role = data.primary_role;
        userProfileInfo.portfolio = data.portfolio;
        userProfileInfo.preferred_work = data.preferred_work;
        userProfileInfo.relocation_abroad = data.relocation_abroad;
        userProfileInfo.years_of_experience = data.years_of_experience;
        userProfileInfo.preferred_salary = data.preferred_salary;
        userProfileInfo.secondary_roles = data.secondary_roles;
        userProfileInfo.notice_period = data.notice_period;

        showEditForm.value = false;
    }

    const handleCancelButtonClicked = () => {
        showEditForm.value = false
    }
</script>
<template>
    <DefaultWorkInfo v-if="!showEditForm" @edit-button-clicked="handleEditButtonClicked" :user-profile-info="userProfileInfo" />
    <EditWorkInfo v-if="showEditForm" @save-button-clicked="handleSaveButtonClicked" @cancel-button-clicked="handleCancelButtonClicked" :user-profile-info="userProfileInfo" />
</template>