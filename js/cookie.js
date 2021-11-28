//获取指定键所对应的值
function getCookie(key){
    //获取cookie中所有键值对
    var str1=document.cookie
    //分割字符串，转为数组
    var ar1=str1.split('; ')
    var s1='' //接收满足条件的内容
    //遍历数组元素
    for(var i=0;i<ar1.length;i++){
        //分割数组元素
        var ar2=ar1[i].split('=')
        //判断当前遍历出来的键名是否等于key
        if(ar2[0]===key){
             s1=ar2[1]
        }
    }
    return s1
}
//给浏览器设置cookie
function setCookie(key,value,t1){
    //判断当前t1是否有值
    if(t1){
        //获取当前时间
         var dt1=new Date()
         //计算所要保存的时间
         var t1=dt1-8*3600*1000+t1*1000
         //设置cookie
         document.cookie=`${key}=${value};expires=${new Date(t1)}`
    }else{
        //直接设置cookie
        document.cookie=`${key}=${value}`;
    }
}
//删除cookie
function delCookie(key){
    setCookie(key,'',-1)
}