<script>
import useEditButton from '../../mixins/useEditButton.js';

export default {
  mixins: [useEditButton]
};
</script>
<template>
    <div class="personal-info">
        <div class="d-flex justify-content-between">
            <div>
                <h5 class="title">
                    Work Info
                </h5>
            </div>
            <div>
                <button class="btn-edit" @click="editButtonClicked">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.32094 17.8311L2.32056 17.8312C2.2998 17.8362 2.2781 17.8358 2.25755 17.83C2.237 17.8242 2.21828 17.8132 2.20317 17.7981C2.18806 17.783 2.17707 17.7643 2.17124 17.7437C2.16542 17.7232 2.16495 17.7015 2.1699 17.6807L3.08234 13.846C3.08236 13.8459 3.08237 13.8458 3.08239 13.8458C3.17197 13.4701 3.36396 13.1267 3.63702 12.8536C3.63702 12.8536 3.63703 12.8536 3.63703 12.8536L13.597 2.89359C14.0624 2.4282 14.6936 2.16675 15.3518 2.16675C15.9844 2.16675 16.5922 2.40831 17.0517 2.84036L17.1066 2.89525C17.572 3.36065 17.8334 3.99187 17.8334 4.65003C17.8334 5.3082 17.572 5.93942 17.1066 6.40481L7.14831 16.3631C7.14829 16.3631 7.14827 16.3631 7.14825 16.3631C6.87494 16.6363 6.53118 16.8283 6.15524 16.9178L6.1551 16.9178L2.32094 17.8311ZM13.7732 3.06981L13.6268 3.21626V3.21693L13.0301 3.81295L13.0001 3.84289V3.84284L12.9581 3.8849L12.6761 4.16656L12.6763 4.16674L12.1466 4.6965L3.81408 13.0298C3.81407 13.0298 3.81407 13.0298 3.81406 13.0298C3.57387 13.27 3.40439 13.5722 3.32539 13.9043C3.32538 13.9043 3.32538 13.9043 3.32538 13.9043L2.64789 16.7509L2.45975 17.5414L3.2502 17.3531L6.09687 16.6748L6.09708 16.6747C6.42716 16.5959 6.72953 16.4277 6.97035 16.1869L15.3037 7.85359L15.6574 7.49991L15.3036 7.14636L13.0001 4.8445V4.49049L13.03 4.52031L15.48 6.96948L15.8333 7.32272L16.1868 6.96962L16.9302 6.22712L16.9304 6.22692C17.1377 6.01962 17.3021 5.77352 17.4143 5.50267C17.5265 5.23183 17.5842 4.94153 17.5842 4.64837C17.5842 4.3552 17.5265 4.06491 17.4143 3.79406C17.3021 3.52321 17.1377 3.27711 16.9304 3.06981C16.7231 2.86252 16.477 2.69808 16.2061 2.58589C15.9353 2.4737 15.645 2.41596 15.3518 2.41596C15.0586 2.41596 14.7683 2.4737 14.4975 2.58589C14.2266 2.69808 13.9805 2.86252 13.7732 3.06981Z" fill="white" stroke="white"/>
                        </svg>
                    </span>
                    Edit
                </button>
            </div>
        </div>
    </div>
    <div class="work-info">
        <div class="row">
            <div class="col-md-4">
                <h6>
                    Employment status
                </h6>
                <p>
                    {{ userProfileInfo.employment_status }}
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Primary role
                </h6>
                <p>
                    {{ userProfileInfo.primary_role }}
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Github/Portfolio
                </h6>
                <p>
                    {{ userProfileInfo.portfolio }}
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Preferred work
                </h6>
                <p>
                    <span v-for="(item, index) in userProfileInfo.preferred_work" :key="index">
                        {{ item }}{{ index < userProfileInfo.preferred_work.length - 1 ? ', ' : '' }}
                    </span>
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Relocation abroad
                </h6>
                <p>
                    {{ userProfileInfo.relocation_abroad }}
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Years of experience
                </h6>
                <p>
                    {{ userProfileInfo.years_of_experience }}
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Preferred salary <span>(monthly)</span>
                </h6>
                <p>
                    {{ userProfileInfo.preferred_salary }}
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Secondary roles
                </h6>
                <p>
                    <span v-for="(item, index) in userProfileInfo.secondary_roles" :key="index">
                        {{ item }}{{ index < userProfileInfo.secondary_roles.length - 1 ? ', ' : '' }}
                    </span>
                </p>
            </div>
            <div class="col-md-4">
                <h6>
                    Notice period
                </h6>
                <p>
                    {{ userProfileInfo.notice_period }}
                </p>
            </div>
        </div>
    </div>
</template>