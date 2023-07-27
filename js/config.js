const grid = []
const tr = 30
const td = 30

const snakebody = 20 //蛇的大小

//蛇头位置变化
const headp = {
    top:{x:0,y:-1,flag:'top'},
    bottom:{x:0,y:1,flag:'bottom'},
    left:{x:-1,y:0,flag:'left'},
    right:{x:1,y:0,flag:'right'}
}
//蛇的配置
const snake = {
    direction:headp.right,
    snakeposition:[
        {x:0,y:0,domcontent:'',flag:'body'},
        {x:1,y:0,domcontent:'',flag:'body'},
        {x:2,y:0,domcontent:'',flag:'body'},
        {x:3,y:0,domcontent:'',flag:'head'}
    ]
}
let sc = 0
let gameOver = false; 
const {snakeposition:snakep} = snake
const container = document.querySelector('.container')
console.log(snakep)
//食物配置
const snakefood = {
    x:0,y:0,domcontet:''
}