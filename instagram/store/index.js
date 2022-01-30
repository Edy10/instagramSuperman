export const state = () => ({
    posts: [],
    comments: [],
    likes: [],
    bestFriends: [],
    qtdComments: 0,
    qtdLikes: 0,
    qtdPosts: 0
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
    },
    getQtdComments(state){
        return state.qtdComments;
    },
    getQtdLikes(state){
        return state.qtdLikes;
    },
    getQtdPosts(state){
        return state.qtdPosts;
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
    },
    setQtdComments(state, value){
        state.qtdComments = value;
    },
    setQtdlikes(state, value){
        state.qtdLikes = value;
    },
    setQtdPosts(state, value){
        state.qtdPosts = value;
    }
}
