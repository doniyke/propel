<script setup>
    import DashboardSideContent from "./DashboardSideContent.vue"
    import DashboardMainContent from "./DashboardMainContent.vue"
    import DashboardFooter from './DashboardFooter.vue';
</script>
<template>
    <div class="profile-holder">
        <div class="profile-head">
            <div class="d-flex justify-content-between">
                <div>
                    <h4>
                        User Profile
                    </h4>
                </div>
                <div>
                    <RouterLink to="#">
                        <button>
                            Preview Talent Profile
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13.49 9.5H8.75C8.55109 9.5 8.36032 9.42098 8.21967 9.28033C8.07902 9.13968 8 8.94891 8 8.75C8 8.55109 8.07902 8.36032 8.21967 8.21967C8.36032 8.07902 8.55109 8 8.75 8H15.25C15.4489 8 15.6397 8.07902 15.7803 8.21967C15.921 8.36032 16 8.55109 16 8.75V15.25C16 15.4489 15.921 15.6397 15.7803 15.7803C15.6397 15.921 15.4489 16 15.25 16C15.0511 16 14.8603 15.921 14.7197 15.7803C14.579 15.6397 14.5 15.4489 14.5 15.25V10.611L9.278 15.783C9.208 15.8523 9.12504 15.9072 9.03384 15.9445C8.94264 15.9818 8.84499 16.0007 8.74646 16.0002C8.64794 15.9998 8.55048 15.9799 8.45963 15.9418C8.36878 15.9036 8.28634 15.848 8.217 15.778C8.14766 15.708 8.09279 15.625 8.05552 15.5338C8.01824 15.4426 7.9993 15.345 7.99976 15.2465C8.00022 15.1479 8.02009 15.0505 8.05822 14.9596C8.09635 14.8688 8.15201 14.7863 8.222 14.717L13.491 9.5H13.49ZM2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12ZM12 20.5C9.74566 20.5 7.58365 19.6045 5.98959 18.0104C4.39553 16.4163 3.5 14.2543 3.5 12C3.5 9.74566 4.39553 7.58365 5.98959 5.98959C7.58365 4.39553 9.74566 3.5 12 3.5C14.2543 3.5 16.4163 4.39553 18.0104 5.98959C19.6045 7.58365 20.5 9.74566 20.5 12C20.5 14.2543 19.6045 16.4163 18.0104 18.0104C16.4163 19.6045 14.2543 20.5 12 20.5Z" fill="black"/>
                                </svg>
                            </span>
                        </button>
                    </RouterLink>
                </div>
            </div>
            <div class="breadcrumbs">
                <div>
                    <span class="txt">Home</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1.83325 8.00004C1.83325 4.59418 4.59406 1.83337 7.99992 1.83337M1.83325 8.00004C1.83325 11.4059 4.59406 14.1667 7.99992 14.1667M1.83325 8.00004C1.83325 9.63554 2.48295 11.2041 3.63943 12.3605C4.7959 13.517 6.36442 14.1667 7.99992 14.1667M1.83325 8.00004C1.83325 6.36454 2.48295 4.79602 3.63943 3.63955C4.7959 2.48307 6.36442 1.83337 7.99992 1.83337M7.99992 1.83337C11.4058 1.83337 14.1666 4.59418 14.1666 8.00004M7.99992 1.83337C9.63542 1.83337 11.2039 2.48307 12.3604 3.63955C13.5169 4.79602 14.1666 6.36454 14.1666 8.00004M7.99992 14.1667C11.4058 14.1667 14.1666 11.4059 14.1666 8.00004M7.99992 14.1667C9.63542 14.1667 11.2039 13.517 12.3604 12.3605C13.5169 11.2041 14.1666 9.63554 14.1666 8.00004" fill="#384747" stroke="#384747"/>
                        </svg>
                    </span>
                    <span class="txt">
                        User Profile
                    </span>
                </div>
            </div>
        </div>
        <div class="page-divider">
            <div class="row">
                <div class="col-md-9">
                    <DashboardMainContent />
                </div>
                <div class="col-md-3 right-side-cards">
                    <DashboardSideContent />
                </div>
            </div>
        </div>
    </div>
    <DashboardFooter />
</template>

<style scoped>
    div.profile-holder {
        padding-top: 70px;
        margin-left: 261px;
        min-height: 100vh;
        padding-left: 160px;
        padding-right: 160px;
    }
    div.profile-head {
        padding-top: 80px;
    }
    div.profile-head > div.d-flex {
        border-bottom: 1px solid #D6DBDB;
    }
    div.profile-head h4 {
        color: #000;
        font-family: 'Lato', sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: -0.28px;
    }
    div.profile-head button {
        padding: 12px;
        justify-content: flex-end;
        align-items: center;
        border-radius: 12px 12px 0px 0px;
        border: 1px solid #D6DBDB;
        background: #FFF;
        border-bottom: none;
    }
    div.profile-head button span {
        margin-left: 4px;
    }
    div.profile-head div.breadcrumbs{
        padding-top: 12px;
    }
    div.profile-head div.breadcrumbs span {
        color: #384747;
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0.28px;
        margin-right: 4px;
    }
    div.profile-head div.breadcrumbs a {
        text-decoration-line: underline;
    }
    div.page-divider {
        margin-top: 85px;
    }
    
    
    @media screen and (max-width: 768px) {
        div.profile-holder {
            margin-left: 0px;
            padding-left: 10px;
            padding-right: 10px;
        }
        div.profile-head h4 {
            font-size: 18px;
            line-height: 18px;
            letter-spacing: -0.18px;
        }
        div.profile-head button {
            padding: 5px;
            justify-content: flex-end;
            align-items: center;
            border-radius: 12px 12px 0px 0px;
            border: 1px solid #D6DBDB;
            background: #FFF;
            border-bottom: none;
        }
    }
</style>