$(document).ready(function(){
    $("#go").click(function () {
        let omikujiResult=["大吉","中吉","小吉","吉","末吉","凶"];
        let cssClasses=["dai","chu","syo","kiti","sue","kyo"];
        let randomIndex=Math.floor(Math.random()*omikujiResult.length);
        let result=omikujiResult[randomIndex];
        let cssClass=cssClasses[randomIndex];

        $("#resultarea").text("おみくじ結果は「"+ result + "」です！");

        const $div=$('#result-image');
        $div.removeClass('dai chu syo kiti sue kyo');
        $div.addClass(cssClass);
        
    });
});




/*
const randomIndex = Math.floor(Math.random() * 7);
const $div = $('div');

// 全てのクラスを一旦削除
$div.removeClass('class0 class1 class2 class3 class4 class5 class6');

// randomIndexに応じてクラスを付与
$div.toggleClass(`class${randomIndex}`, true);
*/