

$(document).ready(function(){
    
    var time = 0;
    var mid = 0;
    var now;

    var min_time = 0;
    var sec_time = 0;

    var count;
    
    var min = $("#min");
    var sec = $("#sec");

    var start = $("#start");
    var stop = $("#stop");
    var reset = $("#reset");
    
    //startボタンが押された時の処理
    start.click(function(){
        now = new Date(); //new Date():現在時刻を取得
        count = setInterval(counter, 10); //setInterval：counterを1msec単位で呼び出して処理
        toggle();
    });

    //stopボタンが押された時の処理
    stop.click(function(){
        mid += (new Date() - now)/1000; //止めた時の時間をmidに入れておく
        clearInterval(count);　//clearInterval:setIntervalのループを終了する
        toggle();
    });

    //resetボタンが押された時の処理
    reset.click(function(){
        mid = 0;　//stop時に一時保存しておいた時間を消す
        min.html("0"); //ストップウォッチの分部分のhtmlを書き換える
        sec.html(":0.0"); //ストップウォッチの秒部分のhtmlを書き換える
        reset.prop("disabled", true);　//STOP時にRESETが押せるようになっていたので、ここで元に戻す
    });

    //時間の計算
    function counter(){

        time = mid + ((new Date() - now)/1000);　//time:秒、(STOP時に保存した時間)+(経過した時間)

        //60秒経過した時の処理
        if(time > 60){
            mid = 0;　//　
            min_time ++;　//min_time:分の数　に+1する
            now = new Date();　
            time = 0;
            sec.html();
        }else{
            sec.html(":"+time.toFixed(1));
        }
    }

    //ボタンの切り替え
    function toggle(){
        if(!start.prop("disabled")){
            start.prop("disabled", true);
            stop.prop("disabled", false);
            reset.prop("disabled", true);
        }else{
            start.prop("disabled", false);
            stop.prop("disabled", true);
            reset.prop("disabled", false);
        }
    }

  
});



    

    