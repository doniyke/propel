<script setup>
import Project from './Project.vue';
import { ref, reactive } from 'vue';

const modalBtn = ref(null);
const modalType = ref('add');

const userWorkExperience = reactive({
    title: null,
    description: null,
    url: null,
    image: null,
});

const triggerModal = () => modalBtn.value.click();

const resetForm = () => {
    Object.keys(userWorkExperience).forEach((key) => {
        userWorkExperience[key] = null;
    });
    modalType.value = 'add';
};

const handleEditButtonClicked = (data) => {
    Object.keys(userWorkExperience).forEach((key) => {
        userWorkExperience[key] = data[key];
    });
    modalType.value = 'edit';
    triggerModal();
};
</script>

<template>
    <div class="personal-info">
        <div class="d-flex justify-content-between">
            <div>
                <h5 class="title">
                    Past Projects
                </h5>
            </div>
            <div>
                <button ref="modalBtn" class="btn-edit"  data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.1248 9.87508H10.6248H13.5415C13.5747 9.87508 13.6065 9.88825 13.6299 9.91169C13.6533 9.93513 13.6665 9.96693 13.6665 10.0001C13.6665 10.0332 13.6533 10.065 13.6299 10.0885C13.6065 10.1119 13.5747 10.1251 13.5415 10.1251H10.6248H10.1248V10.6251V13.5417C10.1248 13.5749 10.1117 13.6067 10.0882 13.6301C10.0648 13.6536 10.033 13.6667 9.99984 13.6667C9.96669 13.6667 9.93489 13.6536 9.91145 13.6301C9.88801 13.6067 9.87484 13.5749 9.87484 13.5417V10.6251V10.1251H9.37484H6.45817C6.42502 10.1251 6.39322 10.1119 6.36978 10.0885C6.34634 10.065 6.33317 10.0332 6.33317 10.0001C6.33317 9.96693 6.34634 9.93514 6.36978 9.91169L6.01623 9.55814L6.36978 9.91169C6.39322 9.88825 6.42502 9.87508 6.45817 9.87508H9.37484H9.87484V9.37508V6.45842C9.87484 6.42526 9.88801 6.39347 9.91145 6.37003L9.57009 6.02867L9.91145 6.37003C9.93489 6.34658 9.96668 6.33342 9.99984 6.33342C10.033 6.33342 10.0648 6.34658 10.0882 6.37003C10.1117 6.39347 10.1248 6.42526 10.1248 6.45842V9.37508V9.87508ZM9.99984 2.16675C14.3262 2.16675 17.8332 5.67372 17.8332 10.0001C17.8332 14.3264 14.3262 17.8334 9.99984 17.8334C5.67348 17.8334 2.1665 14.3264 2.1665 10.0001C2.1665 5.67372 5.67348 2.16675 9.99984 2.16675ZM9.99984 2.41675C7.98861 2.41675 6.05976 3.2157 4.63761 4.63786C3.21546 6.06001 2.4165 7.98886 2.4165 10.0001C2.4165 12.0113 3.21546 13.9402 4.63761 15.3623C6.05976 16.7845 7.98861 17.5834 9.99984 17.5834C12.0111 17.5834 13.9399 16.7845 15.3621 15.3623C16.7842 13.9402 17.5832 12.0113 17.5832 10.0001C17.5832 7.98886 16.7842 6.06001 15.3621 4.63786C13.9399 3.2157 12.0111 2.41675 9.99984 2.41675Z" fill="white" stroke="white"/>
                        </svg>
                    </span>
                    Add
                </button>
            </div>
        </div>
    </div>
    <div class="projects">
        <div class="row">
            <Project @edit-button-clicked="handleEditButtonClicked" v-for="i in 6" />
        </div>
    </div>
     <!-- Modal -->
     <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2"> {{ modalType == 'add' ? 'Add Project' : 'Edit Project' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetForm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 1.5C6.15 1.5 1.5 6.15 1.5 12C1.5 17.85 6.15 22.5 12 22.5C17.85 22.5 22.5 17.85 22.5 12C22.5 6.15 17.85 1.5 12 1.5ZM16.05 17.25L12 13.2L7.95 17.25L6.75 16.05L10.8 12L6.75 7.95L7.95 6.75L12 10.8L16.05 6.75L17.25 7.95L13.2 12L17.25 16.05L16.05 17.25Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div>
                            <label class="form-label">Project title</label>
                            <input type="text" class="form-control" placeholder="E.g; Senior DevOps Engineer" v-model="userWorkExperience.title">
                        </div>
                        <div>
                            <label class="form-label">Project description</label>
                            <input type="text" class="form-control" placeholder="E.g; Paystack" v-model="userWorkExperience.description">
                        </div>
                        <div>
                            <label class="form-label">Project URL</label>
                            <input type="text" class="form-control" placeholder="https://" v-model="userWorkExperience.url">
                        </div> 
                        <div>
                            <label class="form-label">Cover image (optional)</label>
                            <div v-if="modalType == 'add'">
                                <div class="Neon Neon-theme-dragdropbox">
                                    <input name="files[]" id="filer_input2" multiple="multiple" type="file">
                                    <div class="Neon-input-dragDrop">
                                        <div class="Neon-input-inner">
                                            <p>Click to upload (.jpeg, .png 5mb max.)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="img-holder">
                                    <img src="../../../imgs/project1.png" class="img-fluid">  
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div class="modal-footer justify-content-between">
                    <div>
                        <button type="button" class="btn-cancel-footer" data-bs-dismiss="modal" @click="resetForm">Close</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-sm btn-save-footer">Save and add another</button>
                        <button type="button" class="btn btn-sm btn-save-dark-footer">Save Project</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.personal-info {
    padding-top: 64px !important;
}
div.img-holder img {
    border-radius: 12px 12px 0px 0px !important;
}
div.Neon input {
    z-index: 999;
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    right: 0px;
    left: 0px;
    margin-right: auto; 
    margin-left: auto;
}
.Neon {
    font-family: sans-serif;
    font-size: 14px;
    color: #494949;
    position: relative;
    

}
.Neon * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.Neon-input-dragDrop {
    display: block;
    width: 100%;
    margin: 0 auto 25px auto;
    padding: 25px;
    color: #8d9499;
    color: #97A1A8;
    background: #fff;
    border: 2px dashed #C8CBCE;
    text-align: center;
    -webkit-transition: box-shadow 0.3s, border-color 0.3s;
    -moz-transition: box-shadow 0.3s, border-color 0.3s;
    transition: box-shadow 0.3s, border-color 0.3s;
}
.Neon p {
    color: #788787;
    text-align: center;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>