<template>
    <div> 
        <li class="list-group-item mt-2" :class="{ right: index%2 , you: index%2, left: !index%2 }" >
            <slot> </slot>
        </li>
    </div>
  
</template>

<script>
export default {
    props: ['index'],
    data(){
        return{
            message: ''
        }
    }
}
</script>

<style scoped>
.right{
    text-align:right;
}
.left{
    text-align: left;
    background-color: greenyellow;
}
.you{
    background-color:green
}

</style>