<script setup>
import { ref, defineProps, reactive } from 'vue';

const props = defineProps({
    userProfileInfo: {
        type: Object,
        required: true
    }
})

const userProfileInfo = reactive({
    fullname:  props.userProfileInfo.fullname,
    email: props.userProfileInfo.email,
    gender: props.userProfileInfo.gender,
    country: props.userProfileInfo.country,
    phone: props.userProfileInfo.phone,
    about: props.userProfileInfo.about
})



const emit = defineEmits(['save-button-clicked', 'cancel-button-clicked']);

const saveButtonClicked = () => {
  emit('save-button-clicked', userProfileInfo)
}
const cancelButtonClicked = () => {
  emit('cancel-button-clicked')
}
</script>

<template>
    <div class="edit-info">
        <div class="title-content">
            <div class="d-flex justify-content-between">
                <h5>Personal Info</h5>
                <div>
                    <button @click="cancelButtonClicked" class="cancel-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_0_2405)">
                                <path d="M9.6464 9.46967L9.99996 9.82322L10.3535 9.46967L12.4159 7.40727C12.4393 7.38383 12.4711 7.37066 12.5043 7.37066C12.5374 7.37066 12.5692 7.38383 12.5927 7.40727C12.6161 7.43071 12.6293 7.46251 12.6293 7.49566C12.6293 7.52881 12.6161 7.56061 12.5927 7.58405L10.5303 9.64644L10.1767 10L10.5303 10.3536L12.5927 12.4159C12.6161 12.4394 12.6293 12.4712 12.6293 12.5043C12.6293 12.5375 12.6161 12.5693 12.5927 12.5927C12.5692 12.6162 12.5374 12.6293 12.5043 12.6293C12.4711 12.6293 12.4393 12.6162 12.4159 12.5927L10.3535 10.5303L9.99996 10.1768L9.6464 10.5303L7.58401 12.5927C7.56057 12.6162 7.52877 12.6293 7.49562 12.6293C7.46247 12.6293 7.43067 12.6162 7.40723 12.5927C7.38379 12.5693 7.37062 12.5375 7.37062 12.5043C7.37062 12.4712 7.38379 12.4394 7.40723 12.4159L9.46963 10.3536L9.82318 10L9.46963 9.64644L7.40723 7.58405C7.38379 7.56061 7.37062 7.52881 7.37062 7.49566C7.37062 7.46251 7.38379 7.43072 7.40723 7.40727C7.43067 7.38383 7.46247 7.37066 7.49562 7.37066C7.52877 7.37066 7.56057 7.38383 7.58401 7.40727L9.6464 9.46967ZM4.46095 4.461C7.52015 1.4018 12.4798 1.4018 15.539 4.46099C18.5982 7.52019 18.5982 12.4798 15.539 15.539C12.4798 18.5982 7.52015 18.5982 4.46095 15.539C1.40176 12.4798 1.40176 7.52019 4.46095 4.461ZM4.63773 4.63777C3.21558 6.05992 2.41662 7.98877 2.41662 10C2.41662 12.0112 3.21558 13.9401 4.63773 15.3622C6.05988 16.7844 7.98873 17.5833 9.99996 17.5833C12.0112 17.5833 13.94 16.7844 15.3622 15.3622C16.7843 13.9401 17.5833 12.0112 17.5833 10C17.5833 7.98877 16.7843 6.05992 15.3622 4.63777C13.94 3.21562 12.0112 2.41666 9.99996 2.41666C7.98873 2.41666 6.05988 3.21562 4.63773 4.63777Z" fill="#EB477E" stroke="#EB477E"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_2405">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        cancel</button>
                    <button @click="saveButtonClicked" class="btn-edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M8.60474 11.5536L8.95829 11.9071L9.31185 11.5536L13.0355 7.82995C13.0356 7.8298 13.0358 7.82966 13.0359 7.82951C13.0582 7.80762 13.0879 7.79486 13.1191 7.79376C13.1505 7.79265 13.1813 7.80344 13.2051 7.82398C13.2289 7.84451 13.2441 7.87328 13.2477 7.90454C13.2508 7.93155 13.245 7.9587 13.2313 7.98194L13.2007 8.01717L9.04641 12.1715L9.04636 12.1715C9.0252 12.1927 8.99714 12.2055 8.96729 12.2078C8.94153 12.2097 8.91592 12.2036 8.89391 12.1905L8.85781 12.1591L6.78822 10.0895C6.78808 10.0894 6.78793 10.0892 6.78778 10.0891C6.76589 10.0668 6.75313 10.0371 6.75203 10.0059C6.75093 9.97443 6.76172 9.94373 6.78225 9.91989C6.80278 9.89606 6.83155 9.88084 6.86281 9.87728C6.88982 9.8742 6.91697 9.88002 6.94022 9.89366L6.97544 9.92427L8.60474 11.5536ZM9.99996 2.16669C14.3263 2.16669 17.8333 5.67366 17.8333 10C17.8333 14.3264 14.3263 17.8334 9.99996 17.8334C5.6736 17.8334 2.16663 14.3264 2.16663 10C2.16663 5.67366 5.6736 2.16669 9.99996 2.16669ZM9.99996 2.41669C7.98873 2.41669 6.05988 3.21564 4.63773 4.63779C3.21558 6.05995 2.41663 7.9888 2.41663 10C2.41663 12.0112 3.21558 13.9401 4.63773 15.3622C6.05988 16.7844 7.98873 17.5834 9.99996 17.5834C12.0112 17.5834 13.94 16.7844 15.3622 15.3622C16.7843 13.9401 17.5833 12.0112 17.5833 10C17.5833 7.9888 16.7843 6.05995 15.3622 4.63779C13.94 3.21564 12.0112 2.41669 9.99996 2.41669Z" fill="white" stroke="white"/>
                        </svg>
                        save
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <form>
                    <div class="form-group">
                        <label for="name">Full name</label>
                        <input type="text" class="form-control" v-model="userProfileInfo.fullname">
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" v-model="userProfileInfo.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Gender</label>
                        <select v-model="userProfileInfo.gender" class="form-control">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                
                    </div>
                    <div class="form-group">
                        <label for="password">Phone number</label>
                        <input type="tel" class="form-control" v-model="userProfileInfo.phone">
                
                    </div>
                    <div class="form-group">
                        <label for="password">About me</label>
                        <textarea class="form-control" v-model="userProfileInfo.about" rows="5" />
                
                    </div>
                    
                </form>
            </div>
        </div>
        <div class="footer">
            <button @click="cancelButtonClicked" class="cancel-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_0_2405)">
                        <path d="M9.6464 9.46967L9.99996 9.82322L10.3535 9.46967L12.4159 7.40727C12.4393 7.38383 12.4711 7.37066 12.5043 7.37066C12.5374 7.37066 12.5692 7.38383 12.5927 7.40727C12.6161 7.43071 12.6293 7.46251 12.6293 7.49566C12.6293 7.52881 12.6161 7.56061 12.5927 7.58405L10.5303 9.64644L10.1767 10L10.5303 10.3536L12.5927 12.4159C12.6161 12.4394 12.6293 12.4712 12.6293 12.5043C12.6293 12.5375 12.6161 12.5693 12.5927 12.5927C12.5692 12.6162 12.5374 12.6293 12.5043 12.6293C12.4711 12.6293 12.4393 12.6162 12.4159 12.5927L10.3535 10.5303L9.99996 10.1768L9.6464 10.5303L7.58401 12.5927C7.56057 12.6162 7.52877 12.6293 7.49562 12.6293C7.46247 12.6293 7.43067 12.6162 7.40723 12.5927C7.38379 12.5693 7.37062 12.5375 7.37062 12.5043C7.37062 12.4712 7.38379 12.4394 7.40723 12.4159L9.46963 10.3536L9.82318 10L9.46963 9.64644L7.40723 7.58405C7.38379 7.56061 7.37062 7.52881 7.37062 7.49566C7.37062 7.46251 7.38379 7.43072 7.40723 7.40727C7.43067 7.38383 7.46247 7.37066 7.49562 7.37066C7.52877 7.37066 7.56057 7.38383 7.58401 7.40727L9.6464 9.46967ZM4.46095 4.461C7.52015 1.4018 12.4798 1.4018 15.539 4.46099C18.5982 7.52019 18.5982 12.4798 15.539 15.539C12.4798 18.5982 7.52015 18.5982 4.46095 15.539C1.40176 12.4798 1.40176 7.52019 4.46095 4.461ZM4.63773 4.63777C3.21558 6.05992 2.41662 7.98877 2.41662 10C2.41662 12.0112 3.21558 13.9401 4.63773 15.3622C6.05988 16.7844 7.98873 17.5833 9.99996 17.5833C12.0112 17.5833 13.94 16.7844 15.3622 15.3622C16.7843 13.9401 17.5833 12.0112 17.5833 10C17.5833 7.98877 16.7843 6.05992 15.3622 4.63777C13.94 3.21562 12.0112 2.41666 9.99996 2.41666C7.98873 2.41666 6.05988 3.21562 4.63773 4.63777Z" fill="#EB477E" stroke="#EB477E"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_0_2405">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                cancel</button>
            <button @click="saveButtonClicked" class="btn-edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.60474 11.5536L8.95829 11.9071L9.31185 11.5536L13.0355 7.82995C13.0356 7.8298 13.0358 7.82966 13.0359 7.82951C13.0582 7.80762 13.0879 7.79486 13.1191 7.79376C13.1505 7.79265 13.1813 7.80344 13.2051 7.82398C13.2289 7.84451 13.2441 7.87328 13.2477 7.90454C13.2508 7.93155 13.245 7.9587 13.2313 7.98194L13.2007 8.01717L9.04641 12.1715L9.04636 12.1715C9.0252 12.1927 8.99714 12.2055 8.96729 12.2078C8.94153 12.2097 8.91592 12.2036 8.89391 12.1905L8.85781 12.1591L6.78822 10.0895C6.78808 10.0894 6.78793 10.0892 6.78778 10.0891C6.76589 10.0668 6.75313 10.0371 6.75203 10.0059C6.75093 9.97443 6.76172 9.94373 6.78225 9.91989C6.80278 9.89606 6.83155 9.88084 6.86281 9.87728C6.88982 9.8742 6.91697 9.88002 6.94022 9.89366L6.97544 9.92427L8.60474 11.5536ZM9.99996 2.16669C14.3263 2.16669 17.8333 5.67366 17.8333 10C17.8333 14.3264 14.3263 17.8334 9.99996 17.8334C5.6736 17.8334 2.16663 14.3264 2.16663 10C2.16663 5.67366 5.6736 2.16669 9.99996 2.16669ZM9.99996 2.41669C7.98873 2.41669 6.05988 3.21564 4.63773 4.63779C3.21558 6.05995 2.41663 7.9888 2.41663 10C2.41663 12.0112 3.21558 13.9401 4.63773 15.3622C6.05988 16.7844 7.98873 17.5834 9.99996 17.5834C12.0112 17.5834 13.94 16.7844 15.3622 15.3622C16.7843 13.9401 17.5833 12.0112 17.5833 10C17.5833 7.9888 16.7843 6.05995 15.3622 4.63779C13.94 3.21564 12.0112 2.41669 9.99996 2.41669Z" fill="white" stroke="white"/>
                </svg>
                save
            </button>
        </div>
    </div>
</template>

<style scoped>
.edit-info {
    border-radius: 16px;
    background: #F7F8F8;
    margin-bottom: 120px;
    padding: 24px;
}
div.edit-info div.title-content {
    padding-bottom: 12px;
    border-bottom: 1px solid #E4E7E7;
    margin-bottom: 72px;
}
div.edit-info div.title-content h5 {
    color: #384747;
    font-family: 'Inter';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 24px */
    letter-spacing: -0.48px;
}
button.cancel-btn {
    color: #EB477E;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 170%; /* 23.8px */
    letter-spacing: 0.14px;
    border: none;
    background: transparent;
    margin-right: 8px;
}
div.edit-info form > div {
    margin-bottom: 48px;
}
div.edit-info form label{
    color: #000;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.14px;
}
div.edit-info div.footer {
    margin-top: 72px;
    text-align: right;
    border-top: 1px solid #E4E7E7;
    padding-top: 24px;
}
</style>
  

  