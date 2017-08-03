var appHeader = {
    template: '<p>this is my header</p>'
};

Vue.component('app-menu', {
    template: '<p>this is my menu</p>'
});

Vue.component('app-footer', {
    template: '<p>this is my footer</p>'
});



new Vue({
    el: '#app',
    components: {
        'app-header': appHeader
    }
});
