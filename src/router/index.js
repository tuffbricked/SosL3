import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/contact.vue";
import Services from "../views/services.vue";
import Northern from "../views/Northern.vue";
import Southern from "../views/Southern.vue";
import Eastern from "../views/Eastern.vue";
import Western from "../views/Western.vue";
import Kigali from "@/views/kigali.vue";


const routes= [
    {
    path:"/",
    name:"Home",
    component: Home
    },

    {
       path: "/about",
       name: "About",
       component: About
    },
    {
       path: "/contact",
       name: "Contact",
       component: Contact
    },
    {
       path: "/services",
       name: "Services",
       component: Services
    },
    {
       path: "/kigali",
       name: "Kigali",
       component: Kigali
    },
    {
       path: "/northern",
       name: "Northern",
       component: Northern
    },
    {
       path: "/southern",
       name: "Southern",
       component: Southern
    },
    {
       path: "/eastern",
       name: "Eastern",
       component: Eastern
    },
    {
       path: "/western",
       name: "Western",
       component: Western
    }
    
  
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router; 
