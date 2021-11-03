"use strict";
$(function(){
    const today = new Date();
    
    // 현재시간을 구하는 함수
    const time_now = () => {
        // 년, 월, 일
        let year = today.getFullYear();
        let month = ( '0' + ( today.getMonth() + 1 ) ).slice(-2);
        let day = ( '0' + today.getDate() ).slice(-2);

        // 시, 분, 초
        let hour = ( '0' + today.getHours() ).slice(-2);
        let minutes = ( '0' + today.getMinutes() ).slice(-2);
        let seconds = ( '0' + today.getSeconds() ).slice(-2);

        // 결과값 합치기
        let merge = ''.concat(year, '-', month, '-', day, ' ',
                    hour, ':', minutes , ':', seconds );
        
        // 결과값 리턴
        return merge;
    };

    // 타임스탬프를 구하는 함수
    const timestamp_conv = (time) => {
        let timestamp = new Date(time);
        
        // 결과값 리턴
        return timestamp / 1000;
    };

    // 타임스탬프를 현재시간으로 바꾸는 함수
    const times_conv = (time) => {
        time = new Date( time * 1000 );

        // 년, 월, 일
        let year = time.getFullYear();
        let month = ( '0' + ( time.getMonth() + 1 ) ).slice(-2);
        let day = ( '0' + time.getDate() ).slice(-2);

        // 시, 분, 초
        let hour = ( '0' + time.getHours() ).slice(-2);
        let minutes = ( '0' + time.getMinutes() ).slice(-2);
        let seconds = ( '0' + time.getSeconds() ).slice(-2);        

        // 결과값 합치기
        let merge = ''.concat(year, '-', month, '-', day, ' ',
                    hour, ':', minutes , ':', seconds );
        
        // 결과값 리턴
        return merge;
    };

    let timenow = time_now();
    let timestampconv = timestamp_conv( timenow );
    let timesconv = times_conv( timestampconv );

    $( '#time_now' ).text( timenow );
    $( '#conv_timestamp' ).text( timestampconv );
    $( '#conv_times' ).text( timesconv );
    
});