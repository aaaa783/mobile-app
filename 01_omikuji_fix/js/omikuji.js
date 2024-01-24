"use strict";

window.addEventListener("DOMContentLoaded",
function(){

    $("header").textillate({
        loop: false, // ループのオンオフ
        minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
        initialDelay: 2000, // 遅延時間
        autoStart: true, // アニメーションを自動的にスタート
        in: { // フェードインのエフェクトの詳細設定
        effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
        delayScale: 1.5, // 遅延時間の指数
        delay: 50, // 文字ごとの遅延時間
        sync: false, // trueはアニメーションをすべての文字に同時に適用
        shuffle: true // trueは文字を順番にではなく、ランダムに
        }
        });
        // おみくじボタン(id="btn1") ボヤァと表示させる
        $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
        });

        setTimeout(
            function (){
        let popMessage ="ようこそ！日本酒の世界へ";
        window.alert(popMessage);
        
        },
        "5000"
        );
    
}, false

);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function(){
        // var n = Math.floor(Math.random() * 3);

        // switch (n) {
        //     case 0:
        //         btn1.textContent = "１杯！";
        //         btn1.style.color = "green";
        //         btn1.style.fontSize = "50px";
        //         braak;
        //     case 1:
        //         btn1.textContent = "2杯!";
        //         btn1.style.color = "black";
        //         btn1.style.fontSize = "60px";
        //         break;
        //     case 2:
        //         btn1.textContent = "5杯!!!";
        //         btn1.style.color = "red";
        //         btn1.style.fontSize = "75px";
        //         break;
        //        }

                let resultText = ["1杯","2杯","3杯!","5杯!!","7杯!!","ボトル!!"];
                let resultcolor = ["black","black","green","green","red","red"];
                let resultFontSize = ["55px","50px","45px","40px","75px","68px"];
                let resultMaxSpeed  = [10,10,10,5,5,5];
                let resultMaxsize = [150,150,60,60,150,150];
                let resultImage = ["img/sake1.png","img/sake1.png","img/sakura_hanabira.png","img/sakura_hanabira.png","img/jiji.png","img/jiji.png"];


                let n = Math.floor(Math.random() *resultText.length);
                btn1.textContent = resultText[n];
                btn1.style.color = resultcolor[n];
                btn1.style.fontSize = resultFontSize[n];

               $(document).snowfall("clear");
                // jQueryのsnowfall
                $(document).ready(function(){
                $(document).snowfall({
                maxSpeed : resultMaxSpeed[n], // 最大速度
                minSpeed : 1, // 最小速度
                maxSize :  resultMaxsize[n], // 最大サイズ
                minSize : 1, // 最小サイズ
                image : resultImage[n]
                });
                });
                 }, false
    
                );
                