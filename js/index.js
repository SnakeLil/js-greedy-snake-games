//1.初始化
function initGame() {
    //1.初始化//1.初始化游戏
    for (let i = 0; i < tr; i++) {
        for (let j = 0; j < td; j++) {
            grid.push({
                x: j,
                y: i
            })
        }

    }
}
//移动事件
function move (){
    const oldhead  = snakep[snakep.length-1]
    const newhead = {
        domcontent:'',
        x:oldhead.x+snake.direction.x,
        y:oldhead.y+snake.direction.y,
        flag:'head'
    }
    oldhead.flag ='body'
    oldhead.domcontent.style.backgroundColor = '#636e72'
    oldhead.domcontent.style.borderRadius = '5px'
    snakep.push(newhead)


    if(newhead.x <0 ||newhead.x>td||newhead.y <0 ||newhead.y>tr){
        alert(`游戏结束，你的得分：${sc}`)
        window.location.reload(); // 在点击确定后刷新页面
        return; // 结束移动函数，避免继续执行
        // console.log(newhead.x,snakefood.x)
        // console.log(newhead.y,snakefood.y)
    }
    if(newhead.x === snakefood.x &&newhead.y === snakefood.y){
        //如果吃到食物

        food ()
        sc++
    }else {
        //没吃到，移除最开头的一个元素，即蛇尾
        container.removeChild(snakep[0].domcontent) //
        snakep.shift()
    }
    for (i=0;i<snakep.length;i++){
        if (newhead.x === snakep[i].x &&newhead.y === snakep[i].y ){
            // alert(`游戏结束，你的得分：${sc}`)
        }
    }

    render()

}
//失败条件
function fail (){
    
}
//节流
function throttle(fn,time){
    let timer
   return function(){
    if(timer){

    }else {
        timer = setInterval(function(){
            fn()
            clearInterval
        },time)
    }
   } 
}
function control() {
    const thro = throttle(move,100)
//键盘控制//ArrowUp,ArrowLeft, ArrowRight,ArrowDown
document.addEventListener('keydown',function  (e){
    console.log(e.key)
    if(e.key == 'ArrowUp'&&snake.direction!==headp.bottom){ //上
        snake.direction = headp.top
       
    }
    if(e.key == 'ArrowDown'&&snake.direction!==headp.top){ //下
        snake.direction = headp.bottom
       
    }
    if(e.key == 'ArrowLeft'&&snake.direction!==headp.right){ //左
        snake.direction = headp.left
        
    }
    if(e.key == 'ArrowRight'&&snake.direction!==headp.left){ //右
        snake.direction = headp.right
        
    }


    thro()

})
}



//渲染食物
function food (){
    let flag1 = false
    snakefood.y = Math.floor(Math.random()*tr)
    snakefood.x = Math.floor(Math.random()*td)
    while(true){
        for(i=0;i<snakep.length;i++){
            if(snakefood.x ===snakep[i].x&&snakefood.y ===snakep[i].y ){
                flag1 = true //如果生成食物在蛇身上，break 直到不在蛇身，
                break
            }
        } if(!flag1) {
            break //跳出while，渲染食物
        }
       
    }
    
   
    if (!snakefood.domcontet){
        snakefood.domcontet = document.createElement('div')
        snakefood.domcontet.style.backgroundColor = 'white'
        snakefood.domcontet.style.position = 'absolute'
        snakefood.domcontet.style.width = snakebody+'px'
        snakefood.domcontet.style.height = snakebody+'px'
        snakefood.domcontet.style.borderRadius = '5px'
        snakefood.domcontet.style.animation ='animate 1.5s ease infinite'
        snakefood.domcontet.style.transition ='0.5s ease'
        container.append(snakefood.domcontet)
    }
    snakefood.domcontet.style.top = snakefood.y*snakebody +'px'
        snakefood.domcontet.style.left = snakefood.x*snakebody +'px'

}
//渲染蛇
function render(snake) {
    for (i = 0; i < snakep.length; i++) {
        if (!snakep[i].domcontent) {
            //创建蛇
            snakep[i].domcontent = document.createElement('div')
            snakep[i].domcontent.style.position = 'absolute'
            snakep[i].domcontent.style.width = snakebody+'px'
            snakep[i].domcontent.style.height = snakebody+'px'
            snakep[i].domcontent.style.top =snakebody * snakep[i].y+'px'
            snakep[i].domcontent.style.left = snakebody* snakep[i].x +'px'
            snakep[i].domcontent.style.backgroundColor = '#636e72'
            snakep[i].domcontent.style.borderRadius = '5px'
            snakep[i].domcontent.style.padding = '-2px'
            if (snakep[i].flag === 'head') {
                snakep[i].domcontent.style.backgroundColor = '#40739e'
                snakep[i].domcontent.style.borderRadius = '50%'
                // let eyes1 = document.createElement('a')
                // let eyes2 = document.createElement('a')
                // snakep[snakep.length-1].domcontent.append(eyes1)
                // snakep[snakep.length-1].domcontent.append(eyes2)

                // eyes1.style.position = 'absolute'
                // eyes1.style.top = '25%'
                // eyes1.style.left = '60%'
                // eyes1.style.width = '4px'
                // eyes1.style.height = '4px'
                // eyes1.style.backgroundColor = 'white'
                // eyes1.style.borderRadius = '50%'

                // eyes2.style.position = 'absolute'
                // eyes2.style.top = '60%'
                // eyes2.style.left = '60%'
                // eyes2.style.width = '4px'
                // eyes2.style.height = '4px'
                // eyes2.style.backgroundColor = 'white'
                // eyes2.style.borderRadius = '50%'
            }
            container.append(snakep[i].domcontent)
        }



    }

}
console.log(grid)



function main() {
    //初始化游戏
    initGame()
    render()
    food()
    control()
}
main()