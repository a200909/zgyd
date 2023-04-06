let gg = document.querySelector('.g1')//鸽子
let z1 = document.querySelector('.z11')//柱子
let z2 = document.querySelector('.z3')
let z3 = document.querySelector('.z8')
let z4 = document.querySelector('.z10')
let fen = document.querySelector('.fen')//风车
let xj = document.querySelector('.xj')//鸽子图片
let sb1 = document.querySelector('.sb1')//光圈
let sb2 = document.querySelector('.sb2')
let sb3 = document.querySelector('.sb3')
let sb4 = document.querySelector('.sb4')
let wzyd = document.querySelector('.wzyd')//手机文字
let wzed = document.querySelector('.wzed')
let wzsd = document.querySelector('.wzsd')
let wzsi = document.querySelector('.wzsi')
let wzwu = document.querySelector('.wzwu')
let yp1 = document.querySelector('.yp1')//音乐
let yp2 = document.querySelector('.yp2')
let yp3 = document.querySelector('.yp3')
let yp4 = document.querySelector('.yp4')
let xswz = document.querySelector('.xswz')//起始文字
let xsh = document.querySelector('.xsh')//起始箭头
let k = document.querySelectorAll('.k')//建筑
let ld1 = document.querySelectorAll('.ld1')//路段
let ld2 = document.querySelectorAll('.ld2')
let ld3 = document.querySelectorAll('.ld3')
let ld4 = document.querySelectorAll('.ld4')
let sq = document.querySelector('.sq')//气泡
let bj = document.querySelector('.bj')//背景
let xll = document.getElementsByName('xll')//阶梯下降
let wz = document.querySelector('.wz')//手机
let two = document.querySelector('.two')//第三页面
let two1 = document.querySelector('.t_hq')//星球
let two2 = document.querySelector('.t_lq')
let two3 = document.querySelector('.t_wq')
let d1, d2//id
let jt = document.querySelectorAll('.jt')
for (let i = 0; i < jt.length; i++) {
    setTimeout(() => {
        jt[jt.length - 1 - i].setAttribute('class', 'jt ss')
    }, i * 200)
}
document.ontouchstart = function () {
    music1(yp4)
}
setTimeout(() => {
    document.ontouchmove = function () {
        music2(yp4)
        document.ontouchstart = null
        if (jt[0].getAttribute('class') == 'jt ss') {
            xswz.setAttribute('class', 'xswz yc')
            xsh.setAttribute('class', 'xsh yc')
            jianzhu(k)
            ss(ld1, 1000)
            music1(yp1, 2300)
            music2(yp1, 8300)
            setTimeout(() => {
                sq.classList.remove('yc')//气泡
            }, 8300)
            wenzi(wzsd, wzed, wzwu, wzsi, wzyd, 8300)
        }
        document.ontouchmove = null
    }
}, 3000)
fc(fen)//风车
//光圈鸽子移动
let fl1 = true
sb1.onclick = function () {
    if (fl1 == true) {
        gg.setAttribute('class', 'g1 mg1')
        xj.setAttribute('src', '../img/gezi/gz03.png')
        sq.classList.add('yc')
        yp2.play();
        f1(0)
        qc1(1, 1800)
        qc1(0, 3200)
        qc1(1, 5800)
        qc2(1, 7800)
        ss(ld2, 9000)
        music1(yp1, 9000)
        fl1 = false
        music2(yp2, 8000)
        wenzi(wzyd, wzsd, wzsi, wzwu, wzed, 9500)
        music2(yp1, 16500)
        setTimeout(() => {
            sb2.classList.remove('yc')
        }, 16500)
    }
}
sb2.onclick = function () {
    if (gg.getAttribute('class') == 'g1 mg1') {
        gg.setAttribute('class', 'g1 mg2')
        xj.setAttribute('src', '../img/gezi/gz01.png')
        f1(0)
        yp2.play();
        qc1(1, 500)
        qc2(1, 4500)
        ss(ld3, 5000)
        music1(yp1, 5000)
        sb2.classList.add('yc')
        music2(yp2, 4800)
        wenzi(wzsi, wzed, wzsd, wzyd, wzwu, 6000)
        music2(yp1, 11800)
        kaiguan(1, 11800)
        setTimeout(() => {
            sb3.classList.remove('yc')
        }, 11800)
    }
}
sb3.onclick = function () {
    kaiguan(0)
    music1(yp2)
    if (gg.getAttribute('class') == 'g1 mg2 dezd' || gg.getAttribute('class') == 'g1 mg2 dizd' || gg.getAttribute('class') == 'g1 mg2') {
        gg.setAttribute('class', 'g1 mg3')
        xj.setAttribute('src', '../img/gezi/gz21.png')
        f1(2)
        qc1(3, 1500)
        qc1(2, 2750)
        qc2(2, 4950)
        ss(ld4, 5100)
        music1(yp1, 5100)
        sb3.classList.add('yc')
        music2(yp2, 4900)
        wenzi(wzwu, wzed, wzsi, wzyd, wzsd, 6000)
        music2(yp1, 11500)
        kaiguan(1, 11500)
        setTimeout(() => {
            sb4.classList.remove('yc')
        }, 11500)
    }
}
sb4.onclick = function () {
    kaiguan(0)
    music1(yp2)
    sb4.classList.add('yc')
    if (gg.classList.contains('dezd')||
        gg.classList.contains('dszd')||
        gg.classList.contains('dizd')||
        gg.getAttribute('class') == 'g1 mg3') {
        gg.setAttribute('class', 'g1 mg4')
        xj.setAttribute('src', '../img/gezi/gz31.png')
        f1(3)
        qc1(0, 2000)
        qc2(0, 3500)
        music2(yp2, 3500)
        music1(yp3, 3500)
        feis(3500)
        setTimeout(() => {
            wz.classList.add('wzyc')
            bj.classList.add('bjwy')
            xj.setAttribute('src', '../img/gezi/gz31.png')
            for (let i = 0; i < xll.length; i++) {
                xll[i].classList.add('xll')
            }
        }, 4000)
        setTimeout(() => {
            two.classList.remove('yc')
        }, 7500)
        xingq(8500)
    }
}
//飞升动画
function feis(a) {
    setTimeout(() => {
        z4.classList.add('zzft')
        gg.classList.add('ggft')
    }, a)
}
//添加星球动画
function xingq(a) {
    setTimeout(() => {
        two1.classList.add('sxd1')
        two2.classList.add('sxd2')
        two3.classList.add('sxd3')
    }, a)
}
// 清除定时器和转向图片调用
function qc1(a, ms) {
    setTimeout(() => {
        clearInterval(d1)
        f1(a)
    }, ms)
}
//最后一张图片和清除
function qc2(a, b) {
    setTimeout(() => {
        clearInterval(d1)
        xj.setAttribute('src', '../img/gezi/gz' + a + '1.png')
    }, b)
}
//开关
function kaiguan(a, b) {
    setTimeout(() => {
        z3.setAttribute('kg', `${a}`)
        z2.setAttribute('kg', `${a}`)
        z1.setAttribute('kg', `${a}`)
    }, b)
}
//建筑升起
function jianzhu(x) {
    for (let i = 0; i < k.length; i++) {
        setTimeout(() => {
            x[i].classList.remove('yc')
            x[i].classList.add('animate__animated', 'animate__fadeInUpBig')
        }, 100)
    }
}
//文字的显现与隐藏
function wenzi(a, b, c, d, e, f) {
    setTimeout(() => {
        a.classList.remove('yc')
        b.classList.add('yc')
        c.classList.add('yc')
        d.classList.add('yc')
        e.classList.add('yc')
    }, f)
}
//音乐
function music1(x, y) {
    setTimeout(() => {
        x.play();
    }, y)
}
function music2(x, y) {
    setTimeout(() => {
        x.pause();
    }, y)
}
//柱子瞬移
zhuzi(z1, 1,)
zhuzi(z2, 1,)
zhuzi(z3, 2,)
function zhuzi(m, i) {
    m.onclick = function () {
        if (m.getAttribute('kg') == '1') {
            xj.setAttribute('src', '../img/gezi/gz' + i + '1.png')
            // gg.classList.add(`${l1}`)
            // gg.classList.remove(`${l2}`)
            // gg.classList.remove(`${l3}`)
            // l4.classList.remove('yc')
            // l5.classList.add('yc')
            // l6.classList.add('yc')
            if (this.classList.contains('z11')) {
                gg.classList.add('dizd')
                gg.classList.remove('dezd')
                gg.classList.remove('dszd')
                wzyd.classList.remove('yc')
                wzsi.classList.add('yc')
                wzwu.classList.add('yc')
            }else if(this.classList.contains('z3')){
                gg.classList.add('dezd')
                gg.classList.remove('dizd')
                gg.classList.remove('dszd')
                wzsi.classList.remove('yc')
                wzyd.classList.add('yc')
                wzwu.classList.add('yc')
            }else{
                gg.classList.add('dszd')
                gg.classList.remove('dezd')
                gg.classList.remove('dize')
                wzwu.classList.remove('yc')
                wzyd.classList.add('yc')
                wzsi.classList.add('yc')
            }
        }
    }
}
//图片切换
function f1(x) {
    let i = 2
    d1 = setInterval(() => {
        if (i > 5) i = 1
        xj.setAttribute('src', '../img/gezi/gz' + x + i + '.png')
        i++
    }, 150)
}
//风车
function fc(x) {
    let i = 1
    d2 = setInterval(() => {
        if (i > 3) i = 1
        x.setAttribute('src', '../img/qt/z18-' + i + '.png')
        i++
    }, 200)
}
// 柱子上升
function ss(a, b) {
    setTimeout(() => {
        for (let j = 0; j < a.length; j++) {
            setTimeout(() => {
                a[j].classList.add('dh')
                a[j].classList.remove('yc')
            }, j * 500)
        }
    }, b)
}
