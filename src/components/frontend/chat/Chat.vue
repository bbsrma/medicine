<template>
    <div class="mt-4 mb-4">
        <h3> This is Chat View </h3>
        <div class="row">
            <div class="col-md-6">
                <div class="title alert alert-info">Chat Room</div>
                <ul class="list-group chat-list" id="chatlist">
                    <app-message v-for="(message , i)  in messages" :key="i" :index="i">{{ message }} </app-message>
                </ul>
                <input type="text" v-model="message" 
                    class="form-control" 
                    placeholder="Type your message here..."
                    @keyup.enter="sendMessage()">
            </div>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';

export default {
    data(){
        return {
            message : ''
        }
    },
    components:{
        appMessage: Message,
    },
    computed:{
        messages(){
            return this.$store.getters.messages;
        }
    },
    methods:{
        sendMessage(){
            this.$store.dispatch('sendMessage', this.message)
            // let el = document.getElementById('chatlist');
            setTimeout(()=> {
                var test = this.$el.querySelector('#chatlist');
                console.log(test.scrollTop + ' '+ test.scrollHeight);
                test.scrollTop = test.scrollHeight;
            },600);
            this.message= '';
            
        }
    }

}
</script>

<style scoped>
    .chat-list{
        height:250px;
        /* width:350px; */
        overflow-y: scroll;
    }
</style>