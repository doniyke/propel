<script setup>
import { ref, defineEmits } from 'vue';

const showBtn = ref(false);
const emit = defineEmits(['edit-button-clicked']);

const data = {
    school: 'University of Ibadan',
    degree: 'BSc.',
    field: 'Statistics (Computational Statistics)',
    location: 'Nigeria',
    state: 'Oyo',
    startDate: 'Jan 2012',
    endDate: 'Jul 2013',
    accomplishments: `
        Extracted, analyzed, and interpreted data on key metrics, into meaningful and actionable information using MS Excel, R, and SQL to be proactive and give insight into nationwide stations backlogs, efficiency, and overall business performance. Collaborated with various stakeholders to develop and implement various KPIs and SLAs to improve overall business performance.
    `,
};

const editButtonClicked = () => {
    emit('edit-button-clicked', data);
};
</script>

<template>
<div class="experience" @mouseenter="showBtn = true" @mouseleave="showBtn = false">
    <div class="d-flex">
        <ul class="progress-bar">
            <li></li>
        </ul>
        <div>
            <div>
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="company-name">
                            MSc. Statistics (Computational Statistics)
                        </h5>
                        <div class="brief">
                            <span>
                                {{ data.school }}
                            </span>
                            <span>
                                {{ data.state }}, {{ data.location }}
                            </span>
                            <span>
                                {{ data.startDate }} – {{ data.endDate }}
                            </span>
                        </div>
                    </div>
                    <div v-if="showBtn">
                        <button class="edit-info" @click="editButtonClicked">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.9519 3.04801C20.2809 2.37702 19.3708 2.00006 18.4219 2.00006C17.4729 2.00006 16.5629 2.37702 15.8919 3.04801L3.93987 15C3.53366 15.4062 3.24808 15.9172 3.11487 16.476L2.01987 21.078C1.99022 21.2027 1.993 21.3328 2.02794 21.4561C2.06288 21.5794 2.12883 21.6916 2.21948 21.7822C2.31013 21.8727 2.42246 21.9385 2.54577 21.9734C2.66908 22.0082 2.79925 22.0108 2.92387 21.981L7.52487 20.885C8.08405 20.752 8.59536 20.4664 9.00187 20.06L20.9519 8.11C21.6229 7.439 21.9998 6.52894 21.9998 5.58C21.9998 4.63107 21.6229 3.72101 20.9519 3.05V3.04801ZM16.9519 4.108C17.1449 3.91496 17.3741 3.76183 17.6263 3.65736C17.8785 3.55288 18.1489 3.49911 18.4219 3.49911C18.6949 3.49911 18.9652 3.55288 19.2174 3.65736C19.4696 3.76183 19.6988 3.91496 19.8919 4.108C20.0849 4.30105 20.238 4.53022 20.3425 4.78245C20.447 5.03467 20.5008 5.305 20.5008 5.57801C20.5008 5.85101 20.447 6.12134 20.3425 6.37356C20.238 6.62579 20.0849 6.85496 19.8919 7.04801L18.9999 7.939L16.0599 5.00001L16.9519 4.10901V4.108ZM14.9999 6.06201L17.9399 9L7.93987 19C7.72987 19.21 7.46587 19.357 7.17687 19.426L3.76087 20.24L4.57387 16.824C4.64287 16.534 4.79087 16.27 5.00087 16.06L14.9999 6.06001V6.06201Z" fill="#0045F6"/>
                            </svg>
                        </button>
                        <button class="edit-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 5H14C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5ZM8.5 5C8.5 4.54037 8.59053 4.08525 8.76642 3.66061C8.94231 3.23597 9.20012 2.85013 9.52513 2.52513C9.85013 2.20012 10.236 1.94231 10.6606 1.76642C11.0852 1.59053 11.5404 1.5 12 1.5C12.4596 1.5 12.9148 1.59053 13.3394 1.76642C13.764 1.94231 14.1499 2.20012 14.4749 2.52513C14.7999 2.85013 15.0577 3.23597 15.2336 3.66061C15.4095 4.08525 15.5 4.54037 15.5 5H21.25C21.4489 5 21.6397 5.07902 21.7803 5.21967C21.921 5.36032 22 5.55109 22 5.75C22 5.94891 21.921 6.13968 21.7803 6.28033C21.6397 6.42098 21.4489 6.5 21.25 6.5H19.93L18.76 18.611C18.6702 19.539 18.238 20.4002 17.5477 21.0268C16.8573 21.6534 15.9583 22.0004 15.026 22H8.974C8.04186 22.0001 7.1431 21.653 6.45295 21.0265C5.7628 20.3999 5.33073 19.5388 5.241 18.611L4.07 6.5H2.75C2.55109 6.5 2.36032 6.42098 2.21967 6.28033C2.07902 6.13968 2 5.94891 2 5.75C2 5.55109 2.07902 5.36032 2.21967 5.21967C2.36032 5.07902 2.55109 5 2.75 5H8.5ZM10.5 9.75C10.5 9.55109 10.421 9.36032 10.2803 9.21967C10.1397 9.07902 9.94891 9 9.75 9C9.55109 9 9.36032 9.07902 9.21967 9.21967C9.07902 9.36032 9 9.55109 9 9.75V17.25C9 17.4489 9.07902 17.6397 9.21967 17.7803C9.36032 17.921 9.55109 18 9.75 18C9.94891 18 10.1397 17.921 10.2803 17.7803C10.421 17.6397 10.5 17.4489 10.5 17.25V9.75ZM14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V17.25C15 17.4489 14.921 17.6397 14.7803 17.7803C14.6397 17.921 14.4489 18 14.25 18C14.0511 18 13.8603 17.921 13.7197 17.7803C13.579 17.6397 13.5 17.4489 13.5 17.25V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9ZM6.734 18.467C6.78794 19.0236 7.04724 19.5403 7.46137 19.9161C7.87549 20.292 8.41475 20.5001 8.974 20.5H15.026C15.5853 20.5001 16.1245 20.292 16.5386 19.9161C16.9528 19.5403 17.2121 19.0236 17.266 18.467L18.424 6.5H5.576L6.734 18.467Z" fill="#EB477E"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <ul class="full-experience">
                    <li>
                        Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.
                    </li>
                    <li>
                        Extracted, analyzed, and interpreted data on key metrics, into meaningful and actional information using MS Excel, R and SQL to be proactive and give insight into nationwide stations backlogs, efficiency and overall business performance.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped>
div.experience {
    padding: 16px 16px 24px 16px;
    border-radius: 12px;
    border: 1px solid  #E4E7E7;
    margin-bottom: 32px;
}
div.experience:hover {
    background:  #F4F8FC;
}
div.experience .d-flex > div  {
    padding-left: 16px;
}
div.experience .d-flex > div h5.company-name {
    color: #384747;
    font-family: 'Inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 22px */
    letter-spacing: -0.2px;
    text-transform: capitalize;
    margin-bottom: 12px;
}
div.experience .d-flex  div.brief{
    margin-bottom: 32px;
}
div.experience .d-flex  div.brief span{
    color: #788787;
    font-family: 'Inter';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%; /* 19.8px */
    text-transform: capitalize;
    border-right: 1px solid #788787;
    padding-right: 8px;
}
div.experience .d-flex  div.brief span:first-child{
    text-decoration: underline;
    color: #384747;

}
div.experience .d-flex  div.brief span:last-child{
    border-right: none;
}
div.experience .d-flex  div.brief span:nth-child(2), div.experience .d-flex  div.brief span:last-child{
    padding-left: 8px;
}
button.edit-info {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 32px;
    border: 1px solid #D7E8F4;
    background: #FFF;
    margin-right: 8px;
}
ul.full-experience {
    padding-left: 16px;
    margin: 0;
}
ul.full-experience li {
    color: #384747;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 165%; /* 26.4px */
    letter-spacing: 0.32px;
    margin-bottom: 12px;
}


</style>