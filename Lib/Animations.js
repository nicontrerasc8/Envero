export const DropInFromLeft = {
     hidden: {
         x: "-100vw",
         transform: ""
     },
     visible: {
         x: 0,
         opacity: 1,
         transition:{
             duration:.2,
             type: "spring",
             damping: 25,
             stiffness: 500,
         }
     }, 
     exit: {
         x: "100vw"
     }
 }