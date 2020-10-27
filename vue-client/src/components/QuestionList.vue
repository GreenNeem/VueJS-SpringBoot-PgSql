<template>
    <ul>       
        <li>Welcome from question list page</li>
        <li v-for="(question) in questions" :key="question.id">
            {{ question.name }}
        </li>
        <li>
            <input id="question-input" type="text" name="question" placeholder="Enter your description / question here"
                   style=""/>
            
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'QuestionList',
        data: function () {
            this.loadQuestions();
            return {
                questions: []
            };
        },
        methods: {
            loadQuestions: function () {            
                const self = this;
                axios.get('/api/people')
                    .then(function (response) {
                        self.questions = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            
        }
    }
   
</script>

<style type="text/css">
    input {
        width: 300px;
        border: 0;
        border-bottom: 1px solid gray;
        font-size: 12pt;
        margin: 0 5px 0 0;
    }
</style>