<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="post-wrapper text-primary mt-3">
            <div class="post-title p-1">
                <h3>{{ disease.name | to-firstLetter-capital}} </h3> 
            </div>                
        </div>
        <div class="more-info">
                <p class="text-info" v-if="disease.view"> {{ disease.view.view_count  }} times</p>
                <p class="text-info" v-else> 0 times</p>
            </div>
            <div class="link">
                <router-link :to="{ name: 'diseasesolutions', params: {id: disease.id}, query:{ name: disease.name}}" class="see-more btn btn-success" tag="a"> View Solutions  </router-link>
            </div>
            
        </div>
</template>

<script>
export default {
    props: {
        disease: Object
    }
}
</script>

<style scoped>
.post-wrapper .post-title {
    font-family: 'Poppins',sans-serif;
    font-weight: 600;
}
.more-info{
    font-family: 'Poppins',sans-serif;
}

</style>