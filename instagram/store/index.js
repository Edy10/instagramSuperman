export const state = () => ({
    posts: [],
    comments: [],
    likes: [],
    bestFriends: [],
})

export const getters = {
    getPosts(state){
        return state.posts;
    },
    getComments(state){
        return state.comments;
    },
    getLikes(state){
        return state.likes;
    },
    getBestFriends(state){
        return state.bestFriends;
    }
}

export const mutations = {
    setPosts(state, value){
        state.posts = value;
    },
    setComments(state, value){
        state.comments = value;
    },
    setLikes(state, value){
        state.likes = value;
    },
    setBestFriends(state, value){
        state.bestFriends = value;
    }
}
