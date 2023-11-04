<script setup>
    const tools = [
        {tool: "Kubernetes", years: "7 years"},
        {tool: "Jenkins", years: "3 years"},
        {tool: "Google Cloud", years: "8 years"},
        {tool: "Azure", years: "5 years"},
        {tool: "Ansible", years: "8 years"},
        {tool: "Prometheus", years: "4 years"},
        {tool: "Terraform", years: "2 years"},
        {tool: "Confluence", years: "7 years"},
        {tool: "Docker", years: "6 years"},
        {tool: "Jira", years: "4 years"},
        {tool: "AWS", years: "3 years"}
    ]
    const industries = [
        {tool: "Infrastructure as Code (IaC)", years: "7 years"},
        {tool: "Cloud Computing", years: "3 years"},
        {tool: "Automation", years: "8 years"},
        {tool: "Version Control", years: "5 years"},
        {tool: "Containerization", years: "8 years"},
        {tool: "DNS Management", years: "4 years"},
        {tool: "CI/CD", years: "2 years"},
        {tool: "Orchestration", years: "7 years"},
        {tool: "Monitoring and Observability", years: "6 years"},
        {tool: "Agile", years: "4 years"},
        {tool: "Scripting", years: "3 years"}
    ]

    const Interpersonal = [
        {tool: "Communication", stars: 2},
        {tool: "Adaptability", stars: 3},
        {tool: "Conflict Resolution", stars: 3},
        {tool: "Team Collaboration", stars: 3},
        {tool: "Empathy", stars: 3},
        {tool: "Critical Thinking", stars: 3},
        {tool: "Negotiation", stars: 3},
        {tool: "Leadership", stars: 3},
        {tool: "Mentoring", stars: 3},
        {tool: "Problem-Solving", stars: 3},
        {tool: "Decision-Making", stars: 3}
    ]
</script>
<template>
    <div class="personal-info">
        <div class="d-flex justify-content-between">
            <div>
                <h5 class="title">
                    Skills
                </h5>
            </div>
            <div>
                <button class="btn-edit">
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
    <div class="skill-data">
        <h5>Tools & Technologies</h5>
        <div>
            <button class="skill" v-for="(tool, index) in tools">
                <span>{{ tool.tool }}</span> {{ tool.years }}
            </button>
        </div>
    </div>
    <div class="skill-data">
        <h5>Industry Knowledge</h5>
        <div>
            <button class="skill" v-for="(industry, index) in industries">
                <span>{{ industry.tool }}</span> {{ industry.years }}
            </button>
        </div>
    </div>
    <div class="skill-data">
        <h5>Interpersonal Skills</h5>
        <div>
            <button class="skill" v-for="(skill, index) in Interpersonal">
                <span>{{ skill.tool }}</span>
                <label v-for="i in skill.stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.19218 2.06791C7.52218 1.39924 8.47618 1.39924 8.80618 2.06791L10.3782 5.25324L13.8935 5.76391C14.6315 5.87057 14.9262 6.77857 14.3922 7.29924L11.8482 9.77857L12.4489 13.2786C12.5755 14.0146 11.8035 14.5752 11.1429 14.2279L7.99885 12.5746L4.85552 14.2279C4.19552 14.5746 3.42352 14.0146 3.54885 13.2792L4.14952 9.77857L1.60618 7.29857C1.07218 6.77857 1.36685 5.87124 2.10485 5.76391L5.62018 5.25324L7.19218 2.06791Z" fill="#00CFFF"/>
                    </svg>
                </label>
            </button>
        </div>
    </div>
</template>
<style scoped>
.personal-info {
    padding-top: 64px !important;
}
div.skill-data{
    margin-bottom: 46px;
}
div.skill-data h5 {
    color: #000;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
    margin-bottom: 16px;
}
div button.skill {
    padding: 8px 12px;
    border-radius: 40px;
    border: 1.2px solid #E4E7E7;
    color: #384747;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.16px;
    margin-right: 12px;
    margin-bottom: 12px;
    background: transparent;
}
div button.skill span {
    color: #000;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 8px;
}
</style>