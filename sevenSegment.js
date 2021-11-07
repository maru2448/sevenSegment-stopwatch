

function timer(){
    if (count1 == 9){
        count1 = 0
        count2 += 1
        if (count2 > 9){
            count2 = 0
            count3 += 1
            if (count3 > 9){
                count3 = 0
                count4 += 1
                if (count5 > 9){
                    clearTimeout(t)
                    timer_is_on = 0
                }
            }
        }
    }
    count1 += 1
    create_nums()
    t = setTimeout(timer, 10)
}
function run_time(){
    if (!timer_is_on){
        timer_is_on = 1
        timer()
    }
}
function stop_time(){
    clearTimeout(t)
    timer_is_on = 0
}
function reset_time(){
    clearTimeout(t)
    timer_is_on = 0
    count1 = 0
    count2 = 0
    count3 = 0
    count4 = 0
    count5 = 0
    draw()
}
function draw() {
    //alert(i)
    let b = [255,0,0,1]
    ctx.fillStyle = 'rgba(' + b + ')'
    ctx.fillRect(490,120,20,20,10,10)
    ctx.fillRect(490,180,20,20,10,10)
    //create_nums(num)
    clear(0)
    clear(150)
    clear(300)
    clear(500)
    clear(650)
    rectangle(0  , 0x7e)
    rectangle(150, 0x7e)
    rectangle(300, 0x7e)
    rectangle(500, 0x7e)
    rectangle(650, 0x7e)
}
function create_nums(){
    clear(0)
    clear(150)
    clear(300)
    clear(500)
    clear(650)
    rectangle(0  , nums[count5])
    rectangle(150, nums[count4])
    rectangle(300, nums[count3])
    rectangle(500, nums[count2])
    rectangle(650, nums[count1])
    
}
function rectangle(num, val) {
    //alert(c)
    //A
    ctx.fillStyle = 'rgba(' + getColor(val, 6) + ')'
    ctx.fillRect(60 + num, 20, 78, 18, 10, 10)
    //B
    ctx.fillStyle = 'rgba(' + getColor(val, 5) + ')'
    ctx.fillRect(140 + num, 40, 18, 98, 10, 10)
    //C
    ctx.fillStyle = 'rgba(' + getColor(val, 4) + ')'
    ctx.fillRect(140 + num, 160, 18, 98, 10, 10)
    //D
    ctx.fillStyle = 'rgba(' + getColor(val, 3) + ')'
    ctx.fillRect(60 + num, 260, 78, 18, 10, 10)
    // E
    ctx.fillStyle = 'rgba(' + getColor(val, 2) + ')'
    ctx.fillRect(40 + num, 160, 18, 98, 10, 10)
    // F
    ctx.fillStyle = 'rgba(' + getColor(val, 1) + ')'
    ctx.fillRect(40 + num, 40, 18, 98, 10, 10)
    // A
    ctx.fillStyle = 'rgba(' + getColor(val, 0) + ')'
    ctx.fillRect(60 + num, 140, 78, 18, 10, 10)
}
function clear(num){
    ctx.clearRect(60 + num, 20, 78, 18, 10, 10)
    ctx.clearRect(140 + num, 40, 18, 98, 10, 10)
    ctx.clearRect(140 + num, 160, 18, 98, 10, 10)
    ctx.clearRect(60 + num, 260, 78, 18, 10, 10)
    ctx.clearRect(40 + num, 160, 18, 98, 10, 10)
    ctx.clearRect(40 + num, 40, 18, 98, 10, 10)
    ctx.clearRect(60 + num, 140, 78, 18, 10, 10)
}
function getColor(val, shift) {
    let r = 255;
    let g = 0;
    let b = 0;
    let a = 0.05 + 255 * ((val >> shift) & 1);
    return [r, g, b, a];
}

