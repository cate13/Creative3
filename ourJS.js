var app1 = new Vue({
    el: '#app1',
    data: {
        comments: [
            {author: 'Karl', text: 'Best Teacher Ever!!'},
            {author: 'Kenny', text: 'SO GREAT'},
        ],
        addedName: '',
        addedComment: '',
    },
    methods: {
        addComment: function() {
            console.log("one");
            console.log(this.addedName);
            console.log(this.addedComment);

            app1.comments.push({author: this.addedName, text: this.addedComment});
            this.addedName = '';
            this.addedComment = '';
        }
    },
});

var app2 = new Vue({
    el: '#app2',
    data: {
        comments: [
            {author: 'Joey', text: 'Awesome!'},
            {author: 'Jane', text: '10 out of 10'},
            {author: 'Jake', text: 'People are beautiful when they do beautiful things.'}
        ],
        addedName: '',
        addedComment: '',
    },
    methods: {
        addComment: function() {
            console.log("two");
            console.log(this.addedName);
            console.log(this.addedComment);

            app2.comments.push({author: this.addedName, text: this.addedComment});
            this.addedName = '';
            this.addedComment = '';
        }
    },
});

var app3 = new Vue({
    el: '#app3',
    data: {
        comments: [
            {author: 'Laura', text: 'In terms of tacos, he is doing fine'},
        ],
        addedName: '',
        addedComment: '',
    },
    methods: {
        addComment: function() {
            console.log("three");
            console.log(this.addedName);
            console.log(this.addedComment);

            app3.comments.push({author: this.addedName, text: this.addedComment});
            this.addedName = '';
            this.addedComment = '';
        }
    },
});