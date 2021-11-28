function FDJ(ele){
    //获取操作对象
    this.box=ele.querySelector('.box')
    this.mark=ele.querySelector('.mark')
    this.rightBox=ele.querySelector('.rightBox')
    this.rightImg=this.rightBox.querySelector('img')
    this.imgs=ele.querySelector('.imgs').querySelectorAll('img')
    //调用入口函数
    this.init()
    //调用点击按钮的函数
    this.btnClick()
}
//在原型空间中创建入口函数
FDJ.prototype.init=function(){
    //给box盒子绑定鼠标移入，移出，移动事件
    this.box.onmouseover=()=>{
        this.mark.style.display='block'
        this.rightBox.style.display='block'
    }
    this.box.onmouseout=()=>{
        this.mark.style.display='none'
        this.rightBox.style.display='none'
    }

    this.box.onmousemove=(e)=>{
        //事件对象兼容
        var e = e || window.event
        //获取当前蒙版层的移动距离
        var left1=e.pageX-this.box.offsetLeft-parseInt(this.mark.offsetWidth/2)
        var top1=e.pageY-this.box.offsetTop-parseInt(this.mark.offsetHeight/2)
        //设置边界条件
        var maxX=this.box.offsetWidth-this.mark.offsetWidth
        var maxY=this.box.offsetHeight-this.mark.offsetHeight
        //右边图片的移动距离
        var imgX,imgY
        //水平方向
        if(left1<=0){
            this.mark.style.left="0px"
            imgX=0
        }else if(left1>maxX){
            this.mark.style.left=maxX+'px'
            imgX=maxX
        }else{
            this.mark.style.left=left1+'px'
            imgX=left1
        }

        //垂直方向
        if(top1<=0){
            this.mark.style.top='0px'
            imgY=0
        }else if(top1>maxY){
            this.mark.style.top=maxY+'px'
            imgY=maxY
        }else{
            this.mark.style.top=top1+'px'
            imgY=top1
        }

        //让右边的图片跟着移动
        this.rightImg.style.left=-2*imgX+'px'
        this.rightImg.style.top=-2*imgY+'px'
    }
}
FDJ.prototype.btnClick=function(){
    //遍历每个图片对象
    for(let i=0;i<this.imgs.length;i++){
        //给每个图片对象绑定点击事件
        this.imgs[i].onclick=()=>{
            //获取当前点击的图片对象的src属性值
            var src1=this.imgs[i].getAttribute('src')
            //把当前src属性值赋值给上面左右两个盒子的img对象中
            this.box.querySelector('img').setAttribute('src',src1)
            this.rightImg.setAttribute('src',src1)
            //把当前图片中所有的class属性值清空
            for(var j=0;j<this.imgs.length;j++){
                this.imgs[j].className=''
            }
            //给当前点击的图片对象添加class属性值
            this.imgs[i].className='border'
        }
    }
}