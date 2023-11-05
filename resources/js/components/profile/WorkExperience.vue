<script setup>
    import WorkData from './WorkData.vue';
    import { ref, reactive } from 'vue';
    const modalBtn = ref(null);
    let modalType = ref('add');

    const userWorkExperience = reactive({
        jobTitle: null,
        companyName: null,
        companyWebsite: null,
        location: null,
        state: null,
        startDate: null,
        endDate: null,
        currentlyWorkThere: null,
        accomplisments: null
    })

    const triggerMOdal = () => {
        modalBtn.value.click();
    };

    const resetForm = () => {
        userWorkExperience.jobTitle = null;
        userWorkExperience.companyName = null;
        userWorkExperience.companyWebsite = null;
        userWorkExperience.location = null;
        userWorkExperience.state = null;
        userWorkExperience.startDate = null;
        userWorkExperience.endDate = null;
        userWorkExperience.currentlyWorkThere = null;
        userWorkExperience.accomplisments = null;
        modalType.value = 'add';
    }

    const handleEditButtonClicked = (data) => {
        userWorkExperience.jobTitle = data.jobTitle;
        userWorkExperience.companyName = data.companyName;
        userWorkExperience.companyWebsite = data.companyWebsite;
        userWorkExperience.location = data.location;
        userWorkExperience.state = data.state;
        userWorkExperience.startDate = data.startDate;
        userWorkExperience.endDate = data.endDate;
        userWorkExperience.currentlyWorkThere = data.currentlyWorkThere;
        userWorkExperience.accomplisments = data.accomplisments;
        modalType.value = 'edit';
        triggerMOdal()
    }
    
</script>
<template>
    <div class="work-holder">
        <div class="personal-info">
            <div class="d-flex justify-content-between">
                <div>
                    <h5 class="title">
                        Work Experience
                    </h5>
                </div>
                <div>
                    <button ref="modalBtn" class="btn-edit"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.1248 9.87499H10.6248H13.5415C13.5747 9.87499 13.6065 9.88816 13.6299 9.9116C13.6533 9.93504 13.6665 9.96684 13.6665 9.99999C13.6665 10.0331 13.6533 10.0649 13.6299 10.0884C13.6065 10.1118 13.5747 10.125 13.5415 10.125H10.6248H10.1248V10.625V13.5417C10.1248 13.5748 10.1117 13.6066 10.0882 13.63C10.0648 13.6535 10.033 13.6667 9.99984 13.6667C9.96669 13.6667 9.93489 13.6535 9.91145 13.63C9.88801 13.6066 9.87484 13.5748 9.87484 13.5417V10.625V10.125H9.37484H6.45817C6.42502 10.125 6.39322 10.1118 6.36978 10.0884C6.34634 10.0649 6.33317 10.0331 6.33317 9.99999C6.33317 9.96684 6.34634 9.93504 6.36978 9.9116L6.01623 9.55805L6.36978 9.9116C6.39322 9.88816 6.42502 9.87499 6.45817 9.87499H9.37484H9.87484V9.37499V6.45832C9.87484 6.42517 9.88801 6.39338 9.91145 6.36994L9.57009 6.02857L9.91145 6.36993C9.93489 6.34649 9.96668 6.33332 9.99984 6.33332C10.033 6.33332 10.0648 6.34649 10.0882 6.36994C10.1117 6.39338 10.1248 6.42517 10.1248 6.45832V9.37499V9.87499ZM9.99984 2.16666C14.3262 2.16666 17.8332 5.67363 17.8332 9.99999C17.8332 14.3263 14.3262 17.8333 9.99984 17.8333C5.67348 17.8333 2.1665 14.3263 2.1665 9.99999C2.1665 5.67363 5.67348 2.16666 9.99984 2.16666ZM9.99984 2.41666C7.98861 2.41666 6.05976 3.21561 4.63761 4.63776C3.21546 6.05991 2.4165 7.98876 2.4165 9.99999C2.4165 12.0112 3.21546 13.9401 4.63761 15.3622C6.05976 16.7844 7.98861 17.5833 9.99984 17.5833C12.0111 17.5833 13.9399 16.7844 15.3621 15.3622C16.7842 13.9401 17.5832 12.0112 17.5832 9.99999C17.5832 7.98877 16.7842 6.05991 15.3621 4.63776C13.9399 3.21561 12.0111 2.41666 9.99984 2.41666Z" fill="white" stroke="white"/>
                            </svg>
                        </span>
                        Add
                    </button>
                </div>
            </div>
        </div>
        <div class="work-info">
            <WorkData @edit-button-clicked="handleEditButtonClicked" />
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ modalType == 'add' ? 'Add Work Experience' : 'Edit Work Experience' }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetForm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 1.5C6.15 1.5 1.5 6.15 1.5 12C1.5 17.85 6.15 22.5 12 22.5C17.85 22.5 22.5 17.85 22.5 12C22.5 6.15 17.85 1.5 12 1.5ZM16.05 17.25L12 13.2L7.95 17.25L6.75 16.05L10.8 12L6.75 7.95L7.95 6.75L12 10.8L16.05 6.75L17.25 7.95L13.2 12L17.25 16.05L16.05 17.25Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div>
                                <label class="form-label">Job title</label>
                                <input type="text" class="form-control" placeholder="E.g; Senior DevOps Engineer" v-model="userWorkExperience.jobTitle">
                            </div>
                            <div>
                                <label class="form-label">Company name</label>
                                <input type="text" class="form-control" placeholder="E.g; Paystack" v-model="userWorkExperience.companyName">
                            </div>
                            <div>
                                <label class="form-label">Company website</label>
                                <input type="text" class="form-control" placeholder="https://" v-model="userWorkExperience.companyWebsite">
                            </div>
                            <div>
                                <label class="form-label">Location</label>
                                <div class="row">
                                    <div class="col">
                                        <select class="form-control" v-model="userWorkExperience.location">
                                            <option>Country</option>
                                            <option value="">Nigeria</option>
                                            <option value="">Kenya</option>
                                            <option value="">Angola</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <select class="form-control" v-model="userWorkExperience.state">
                                            <option>State</option>
                                            <option value="">Abia</option>
                                            <option value="">Lagos</option>
                                            <option value="">Rivers</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="form-label">Start date</label>
                                    <input type="month" class="form-control" v-model="userWorkExperience.startDate">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">End date</label>
                                    <input type="month" class="form-control" v-model="userWorkExperience.endDate">
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox1">
                                <span class="check-content">I’m currently working in this role</span>
                            </div>
                            <div>
                                <label class="form-label">Accomplishments</label>
                                <p class="form-accomplish-text">
                                    Include accomplishments and responsibilities for this role. Start each statement with a solid action verb; also include specific, technical words with sample data.
                                </p>
                                <textarea rows="5" class="form-control" v-model="userWorkExperience.accomplisments"></textarea>
                            </div>
                            
                        </form>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <div>
                            <button type="button" class="btn-cancel-footer" data-bs-dismiss="modal" @click="resetForm">Close</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-sm btn-save-footer">Save and add another</button>
                            <button type="button" class="btn btn-sm btn-save-dark-footer">Save work experience</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
    div.work-holder {
        margin-bottom: 64px;
    }
    @media screen and (max-width: 768px) {
        button.btn-save-footer {
            display: none !important;
            visibility: hidden !important;
        }
    }
</style>