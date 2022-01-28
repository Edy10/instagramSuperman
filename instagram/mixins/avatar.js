import Vue from 'vue'

const avatarMixin = {
    methods: {
        getImage(username) {
            return require(`../assets/img/${username}.png`);
        }
    }
};

Vue.mixin(avatarMixin)
