<template>
    <div class="widget suggestions full-width">
        <div class="sd-title">
            <h3>友達リクエスト</h3>
            <i class="la la-ellipsis-v"></i>
        </div>
        <!--sd-title end-->
        <div class="suggestions-list">
            <div v-for="user in users" class="suggestion-usd">
                <img width="38px" v-if="user.avatar == null" src="../assets/images/resources/s1.png" alt="">
                <img width="38px" v-else :="user.avatar" alt="">
                <div  class="sgt-text">
                    <h4>{{ user.name }}</h4>
                    <span>{{ user.experience }}</span>
                </div>
                <span v-on:click="dismiss(user.id)"><i class="fa fa-trash text-danger"></i> </span>
                <span v-on:click="accept(user.id)"><i class="fa fa-check text-primary"></i> &nbsp;</span>
            </div>
        </div>
        <!--Request friend-list end-->
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
                msg: 'Hello world!',
                users: [],
                token: sessionStorage.getItem("token")
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            console.log("init created component and call to function get data from api server");
            this.listFriendRequest();
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
            msg() {
                console.log("When the value of the msg variable changes, this method will be executed.");
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

            /***********************************************************************************************************
             ******* Async and await functions for manipulating server-side data through internal API protocols ********
             **********************************************************************************************************/
            
            /**
             * Call API sample
             */
            async listFriendRequest() {
                try {
                    const callAPI = await axios.get('http://wise_social_api.test/api/list-friend-request', {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer " + this.token 
                        }
                    });
                    if (callAPI.data.code == 200) {
                        this.users = callAPI.data.data;
                    } else {
                        alert("Call api failed, please check again!");
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            async accept(id) {
                try {
                    const callAPI = await axios.get('http://wise_social_api.test/api/accept', {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer " + this.token
                        },
                        params: {
                            id: id,
                            type: 'accept'
                        }
                    });
                    this.listFriendRequest();
                } catch (err) {
                    console.log(err);
                }
            },
            async dismiss(id) {
                try {
                    const callAPI = await axios.get('http://wise_social_api.test/api/accept', {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer " + this.token
                        },
                        params: {
                            id: id,
                            type: 'dissmiss'
                        }
                    });
                    this.listFriendRequest();
                } catch (err) { 
                    console.log(err);
                }
            }
        }
    }
</script>