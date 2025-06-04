<script setup lang="ts">
import ChatComponent from '@/components/ChatComponent.vue';
import FavoriteComponent from '@/components/FavoriteComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MostFollowerComponent from '@/components/MostFollowerComponent.vue';
import RequestFriendComponent from '@/components/FriendRequestComponent.vue';
import SuggestionComponent from '@/components/SuggestionComponent.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';
import UserProfileComponent from '@/components/UserProfileComponent.vue';
</script>

<template>
    <div class="row">
        <div class="wrapper">
            <!-- Begin header -->
            <HeaderComponent/>
            <!--header end-->
            <main>
                <div class="main-section">
                    <div class="container">
                        <div class="main-section-data">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                                    <div class="main-left-sidebar no-margin">
                                        <!-- begin muser profile -->
                                        <UserProfileComponent/>
                                        <!--user-data end-->

                                        <!-- begin suggestion -->
                                        <SuggestionComponent/>
                                        <!--suggestions end-->

                                        <!-- begin -->
                                        <div class="tags-sec full-width">
                                            <div class="cp-sec">
                                                <img src="../assets/images/logo2.png" alt="">
                                                <p>&copy; Copyright 2024.</p>
                                            </div>
                                        </div>
                                        <!--tags-sec end-->
                                    </div>
                                    <!--main-left-sidebar end-->
                                </div>
                                <!-- begin timeline -->
                                <TimelineComponent/>
                                <!-- end timeline-->
                                <div class="col-lg-3 pd-right-none no-pd">
                                    <div class="right-sidebar">
                                        <!-- begin most flower -->
                                        <MostFollowerComponent/>
                                        <!-- end most folower-->
                                        <!--widget-about end-->
                                        <!-- Top jobs -->
                                        <!-- Begin favorite -->
                                        <!-- end favorite -->
                                        <FavoriteComponent/>
                                        <!--begin Request friend People-->
                                        <RequestFriendComponent/>
                                        <!--end  Request friend People -->
                                    </div>
                                    <!--right-sidebar end-->
                                </div>
                            </div>
                        </div>
                        <!-- main-section-data end-->
                    </div>
                </div>
            </main>
            <!--chatbox-list end-->
            <ChatComponent/>
        </div>
    </div>
</template>