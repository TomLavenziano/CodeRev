<template>
<div class="GitHubLogin">
    <a href="https://lvh.me:4430/auth/github">
        <button class="github-login-button blue">
            <i class="fab fa-github"></i> Sign in with GitHub
        </button>
    </a>
</div>
</template>

<script >
export default {
    name: 'GitHubLogin',
    data: () => ({

    })
};
</script>
<style lang="less" scoped>
@import "https://use.fontawesome.com/releases/v5.0.10/css/all.css";

.github-login-button {
    color: #FFF;
    font-size: 2em;
    line-height: 2em;
    padding: 0.25em 0.75em;
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
}
</style>
