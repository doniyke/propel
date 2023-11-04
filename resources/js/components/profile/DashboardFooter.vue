<template>
    <footer class="hide-sm">
        <div class="d-flex justify-content-between">
            <div>
                <span>
                    &copy; Copyright 2023, Propel
                </span>
                <span>
                    <a href="#" target="_blank">
                        Privacy
                    </a>
                </span>
                <span>
                    <a href="#" target="_blank">
                        Terms of Use
                    </a>
                </span>
                <span>
                    <a href="#" target="_blank">
                        Communities
                    </a>
                </span>
                <span>
                    <a href="#" target="_blank">
                        Blog
                    </a>
                </span>
            </div>
            <div>
                <span>
                    <a href="#" target="_blank">
                        LinkedIn
                    </a>
                </span>
                <span>
                    <a href="#" target="_blank">
                        Instagram
                    </a>
                </span>
                <span>
                    <a href="#" target="_blank">
                        Twitter
                    </a>
                </span>
                <span>
                    <a href="#" class="talent" target="_blank">
                        Join our Talent Pool
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4.2002 8.52238C4.20022 8.6356 4.23228 8.74651 4.29267 8.84229C4.35307 8.93806 4.43933 9.01479 4.54149 9.06361C4.64365 9.11243 4.75753 9.13135 4.86999 9.11818C4.98245 9.10501 5.08888 9.06029 5.177 8.98918L8.01079 6.70018C8.11526 6.61582 8.19953 6.50915 8.25742 6.38799C8.31531 6.26683 8.34536 6.13426 8.34536 5.99998C8.34536 5.8657 8.31531 5.73313 8.25742 5.61197C8.19953 5.49081 8.11526 5.38414 8.01079 5.29978L5.177 3.01198C5.08892 2.94091 4.98254 2.89619 4.87014 2.883C4.75774 2.8698 4.64389 2.88867 4.54176 2.93742C4.43962 2.98617 4.35335 3.06281 4.29291 3.15849C4.23248 3.25418 4.20033 3.365 4.2002 3.47818V8.52238Z" fill="black"/>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
    </footer>
    <footer class="hide-lg">
        <div>
            <span>
                &copy; Copyright 2023, Propel
            </span>
            <span>
                <a href="#" target="_blank">
                    Terms of Use
                </a>
            </span>
            <span>
                <a href="#" target="_blank">
                    Privacy Policy
                </a>
            </span>
            <span>
                <a href="#" target="_blank">
                    Contact Us
                </a>
            </span>
        </div>
    </footer>
</template>
<style scoped>
    footer {
        margin-left: 220px;
        padding: 16px 16px 16px 200px;
        border-top: 1px solid var(--text-75, #E4E7E7);
        background: var(--text-white, #FFF);
    }
    footer span {
        color: var(--text-300, #788787);
        font-family: 'Inter';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
        letter-spacing: 0.24px;
        margin-right: 48px;
    }
    footer span a {
        color: #788787;
    }
    footer span:last-child a.talent{
        color: #0045F6;
        font-family: 'Inter';
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 18px */
        text-decoration: underline !important;
        margin-right: 0;
    }
    
    @media screen and (max-width: 768px) {
        footer {
            margin-left: 0px;
        }
        footer.hide-lg {
            background: #D7E8F4;
            padding: 12px;
        }
        footer.hide-lg span {
            color: #000;
            font-family: 'Inter';
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 170%; /* 23.8px */
            letter-spacing: 0.14px;
            margin-right: 5px;
        }
        footer.hide-lg span a{
            text-decoration: underline !important;
        }
    }
</style>