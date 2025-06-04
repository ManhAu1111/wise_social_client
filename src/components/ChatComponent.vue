<template>
    <!--chatbox-list end-->
    <div class="" id="section-chat">
            <div class="col-md-12 row chat-head"></div>
            <div class="col-md-12 chat-content-top">
                <h1 class="font-bold">メッセージ</h1>
            </div>
            <hr>
            <!-- List friends and message -->
            <div class="col-md-12 msgs-list">
                <!--msg-title end-->
                <div class="messages-list">
                    <ul>
                        <li v-for="friend in friends" v-on:click="showBoxMsg(friend)">
                            <div class="usr-msg-details">
                                <div class="usr-ms-img">
                                    <img :src="friend.avatar" onerror="'../assets/images/resources/m-img1.png'" alt="">
                                </div>
                                <div class="usr-mg-info">
                                    <h3>{{ friend.name }}</h3>
                                    <p>{{ friend.last_message }} <img src="../assets/images/smley.png" alt=""></p>
                                </div>
                                <!--usr-mg-info end-->
                                <span class="posted_time">{{ friend.last_sent }}</span>
                            </div>
                            <!--usr-msg-details end-->
                        </li>
                    </ul>
                </div>
                <!--messages-list end-->
            </div>
            <div class="clear-fix"></div>
            <div class="col-md-12 chat-content-foobar">
                <img class="fl-rgt" src="../assets/images/logo2.png" alt="">
            </div>
        </div>
        <div class="chat-box" v-if="showChatBox">
            <div class="chat-box-head">
                <div class="chat-box-head-friend">
                    <img class="chat-box-friend-avatar" src="../assets/images/resources/s1.png" alt="">
                    <p>{{ this.selectedFriend?.name }}</p>
                </div>
                <div class="chat-box-close">
                    <p class="fa fa-times" v-on:click="hideBoxMsg()"></p>
                </div>
            </div>
            <div class="chat-box-content">
                <div class="listmsg" v-for="msg in listMessage">
                    <div class="my-msg" v-if="msg.my_message == 'me'">
                        <p>{{ msg.message }}</p>
                        <span class="send-date">{{ msg._created_at }}</span>
                    </div>
                    <div class="friend-msg" v-else>
                        <p>{{ msg.message }}</p>
                        <span class="send-date">{{ msg._created_at }}</span>
                    </div>
                </div>
                
            </div>
            <div class="chat-box-send-msg">
                <div class="chat-box-text-field">
                    <input type="text" v-model="messageContent" class="form-control cls-text-field" placeholder="Something you send friend">
                </div>
                <div class="chat-box-send-btn">
                    <i class="fa fa-send" v-on:click="sendMessage()"></i>
                </div>
            </div>
        </div>
        <div class="section-ads">
            <!-- <img src="https://media2.giphy.com/media/GXwvDVrQTCKAUBu71D/giphy.gif?cid=790b761152aa12f58ec81be0f7a66f9edeadf7ede51e7dd1&rid=giphy.gif&ct=g" alt=""> -->
        </div>
</template>

<script>
    //import Vue from 'vue'
    import axios from 'axios'
    // import component1 from 'component1'
    // import component2 from 'component2'

    export default {
        /***********************************************************************************************************
         ******************************* Pass data to child component **********************************************
         **********************************************************************************************************/
        // props: [variable1, variable2],
        // components: {component1, component2},
        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
                msg: [],
                friends: [],
                token: sessionStorage.getItem("token"),
                showChatBox: false,
                selectedFriend: null,
                listMessage: [],
                roomId: 0,
                messageContent: "",
            }
        },
        sockets: {
            // Send data to server
            ClientSendMessageToServer: function (responseMessage) {
                messageContent = this.messageContent;
            },
            // Listen event from server and render data
            ServerSendMessageToClient: function (responseMessage) {
                // Push to the comment list
                if (responseMessage.type === 'message') {
                    if (responseMessage.user_id = this.selectedFriend.id) {
                        responseMessage.my_message = "friend";
                    }
                    // xu li cho comment
                    this.this.listMessage.push(responseMessage);                 
                    // update
                    this.$forceUpdate();
                } else if (responseMessage.type === 'message') {
                    // xu li cho message
                } else {
                    //
                    console.log("loi socket r");
                }
            },
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            this.getFriends();
        },
        mounted() {
            /***********************************************************************************************************
             ******************** Once created, the interface is displayed and calls mounted. **************************
             **********************************************************************************************************/
        },
        watch: {
            /***********************************************************************************************************
             ********************************* Methods change value for a variable *************************************
             **********************************************************************************************************/
            selectedFriend() {
                this.getListMessage();
            }
        },
        computed: {
            appendMsg() {
                return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
            }
        },
        methods: {
            /***********************************************************************************************************
             ******************************* Default functions that handle local data **********************************
             **********************************************************************************************************/

            /**
             * Example default function not using param
             */
            defaultFunction() {
                this.msg = "Replace message here!";
            },

            /**
             * Example default function using param 
             *
             * @param int pageNum number of page
             * @return boolean
             */
            defaultFunctionUsingParam(pageNum) {
                console.log(pageNum);
                return false;
            },
            /**
             * Call API sample
             */
            async getFriends() {
                try {
                    const callAPI = await axios.get('http://wise_social_api.test/api/list-friend', {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer " + this.token 
                        }
                    });
                    if (callAPI.data.code == 200) {
                        this.friends = callAPI.data.data;
                    } else {
                        alert("Call api failed, please check again!");
                    }
                } catch (err) {
                    console.log(err);
                }
            },

            async getListMessage() {
                try {
                    const callAPI = await axios.get('http://wise_social_api.test/api/list-message?friendId=' + this.selectedFriend?.id, {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer " + this.token 
                        }
                    });
                    console.log(callAPI.data.data.message);
                    
                    if (callAPI.data.code == 200) {
                        this.listMessage = callAPI.data.data.messages;
                        this.roomId = callAPI.data.data.room_id;
                        let dataMsgSendToSocket = {
                            "id": 0,
                            "name": "",
                            "avatar": "",
                            "message": "",
                            "user_id": "",
                            "friend_id": "",
                            "is_view": 0,
                            "created_at": "",
                            "my_message": "me",
                            "_created_at": "",
                            "room_id": this.roomId,
                            "type": "message",
                            "action": "join",
                        };
                        // joint room 
                        this.$socket.emit(
                            'ClientSendMessageToServer',
                            dataMsgSendToSocket
                        );
                    } else {
                        alert("Call api failed, please check again!");
                    }
                } catch (err) {
                    console.log(err);
                }
            },

            async sendMessage() {
                try {
                    let formData = new FormData();
                    formData.append('friend_id', this.selectedFriend.id);
                    formData.append('room_id', this.roomId);
                    formData.append('message_content', this.messageContent);
                    const callAPI = await axios.post('http://wise_social_api.test/api/send-message', 
                        formData
                    ,{
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "multipart/form-data",
                            "Authorization": "Bearer " + this.token 
                        }
                    });
                    if (callAPI.data.code == 200) {
                        // todo using shocket here
                        this.messageContent = "";
                        //join room 
                        this.$socket.emit(
                            'ClientSendMessageToServer',
                            callAPI.data.data
                        );
                    } else {
                        alert("Call api failed, please check again!");
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            showBoxMsg(friend) {
                this.showChatBox = true;
                this.selectedFriend = friend;
            },
            hideBoxMsg() {
                this.showChatBox = false;
                this.selectedFriend = null;
            }
        },
    }
</script>