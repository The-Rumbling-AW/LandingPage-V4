
import {createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import ContentSectionComponent from "../../public/content-section.component.vue";
import FansSectionComponent from "../../public/fans-section.component.vue";
import ArtistSectionComponent from "../../public/artist-section.component.vue";
import PageNotFoundComponent from "../../public/page-not-found.component.vue";


const routes=[
    {  path: '/',                      name: 'default',    redirect: {name: 'home'}},
    { path: '/home', name: 'home', component: ContentSectionComponent, meta: {title: 'Home'}},
    { path: '/fans', name: 'fans', component: FansSectionComponent, meta: {title: 'Fans'}},
    { path: '/artists', name: 'artists', component: ArtistSectionComponent, meta: {title: 'Artist'}},
    { path: '/:pathMatch(.*)*', name: 'notFound', component: PageNotFoundComponent, meta: {title: 'NotFOund'}},
]

const router = createRouter({
    history:createWebHashHistory(),
    routes: routes,

});

export default router;