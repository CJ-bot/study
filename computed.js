var app=new VTTCue({
    el:'#app',
    data:{
        math:90,
        physics:85,
        english:90,
    },
    computed:{
        sum:function(){
            return this.math+this.physics+this.english;
        },
        average:function(){
            return Math.round(this.sum/3)
        }
    }
})