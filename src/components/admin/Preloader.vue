<template>
  <div>
      <transition name="flip" type="animations" appear >
        <div class="status-box" style="margin-left:5%;">
            
        </div>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .status-box{
        height: 40px;
        width: 40px;
        border-radius: 50%;;
        /* background-color: red; */
        animation: flip 2s infinite;
    }
    .flip-enter-active{
        animation: flip forwards;        
        /* flip */
        transition: 1s;
        -webkit-transition: 1s;
        -webkit-transform-style: preserve-3d;
        -ms-transition: 1s;
        -moz-transition: 1s;
        /* -moz-transform: perspective(1000px); */
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transition: 1s;
        transform-style: preserve-3d;    
    }
    .flip-leave-active{
        animation:flip infinite ease-out;
    }
    @keyframes flip {
    
    0%{
    /* transform: rotateX(80deg) 1s; */
    /* transform: flipX(180); */
    background-color: yellow;
    /* opacity: 1s; */
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    transform: rotateX(0deg);
    }
    10%{
    /* transform: rotateX(80deg) 1s; */
    /* transform: flipX(180); */
    background-color: yellow;
    /* opacity: 1s; */
    -webkit-transform: rotateX(30deg);
    -moz-transform: rotateX(30deg);
    -o-transform: rotateX(30deg);
    transform: rotateX(30deg);    
    }
    20%{
    /* transform: rotateX(80deg) 1s; */
    /* transform: flipX(180); */
    background-color: yellow;
    /* opacity: 1s; */
    -webkit-transform: rotateX(60deg);
    -moz-transform: rotateX(60deg);
    -o-transform: rotateX(60deg);
    transform: rotateX(60deg);    
    }
    30%{
    /* transform: rotateX(80deg) 1s; */
    /* transform: flipX(180); */
    background-color: yellow;
    /* opacity: 1s; */
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    transform: rotateX(90deg);
    }
    40%{
    /* transform: rotateX(80deg) 1s; */
    /* transform: flipX(180); */
    /* background-color: green; */
    /* opacity: 1s; */
    -webkit-transform: rotateX(120deg);
    -moz-transform: rotateX(120deg);
    -o-transform: rotateX(120deg);
    transform: rotateX(120deg);  
    background-color: yellow;
    }
    45%{
    /* transform: rotateX(80deg) 1s; */
    /* transform: flipX(180); */
    /* opacity: 1s; */
    -webkit-transform: rotateX(150deg);
    -moz-transform: rotateX(150deg);
    -o-transform: rotateX(150deg);
    transform: rotateX(150deg);
    background-color: yellow;
    }
    50%{
    /* opacity: 1s; */
    -webkit-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    transform: rotateX(180deg);  
    background-color: yellow;
    }
    55%{
    background-color: yellow;
    /* opacity: 1s; */
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
    }
    60%{
    background-color: green;
    /* opacity: 1s; */
    -webkit-transform: rotateY(-90deg);
    -moz-transform: rotateY(-90deg);
    -o-transform: rotateY(-90deg);
    transform: rotateY(-90deg);      
    }
    70%{
    background-color: green;
    /* opacity: 1s; */
    -webkit-transform: rotateY(-60deg);
    -moz-transform: rotateY(-60deg);
    -o-transform: rotateY(-60deg);
    transform: rotateY(-60deg);      
    }
    80%{
    background-color: green;
    /* opacity: 1s; */
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    -o-transform: rotateY(-30deg);
    transform: rotateY(-30deg);      
    }
    85%{
    background-color: red;
    /* opacity: 1s; */
    -webkit-transform: rotateY(-0deg);
    -moz-transform: rotateY(-0deg);
    -o-transform: rotateY(-0deg);
    transform: rotateY(-0deg);
    }
    90%{
    background-color: red;
    /* opacity: 1s; */
    -webkit-transform: rotateY(30deg);
    -moz-transform: rotateY(30deg);
    -o-transform: rotateY(30deg);
    transform: rotateY(30deg);      
    }

    95%{
    background-color: red;
    /* opacity: 1s; */
    -webkit-transform: rotateY(60deg);
    -moz-transform: rotateY(60deg);
    -o-transform: rotateY(60deg);
    transform: rotateY(60deg);
    
    }
    100%{
    /* transform: rotateX(80deg) 1s; */
    /* transform: flipX(180); */
    background-color: red;
    /* opacity: 1s; */
    -webkit-transform: rotateY(90deg);
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    transform: rotateY(90deg);
    }
    }
</style>