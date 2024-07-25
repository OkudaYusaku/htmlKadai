$(function(){

	// 課題：	
	// ★のついている箇所の処理を追加する
	// 今まで説明してきた内容そのままです。
	// 今までの課題などを参考に、フォルダ構成を良く見て作成すること

	//★
    //グローバルナビゲーション
	//ハンバーガーメニュー処理
	$(function() {
		$(".btn-gnavi").on("click", function(){
			// ハンバーガーメニューの位置を設定するための変数
			var rightVal = 0;
			if($(this).hasClass("open")) {
				// 「open」クラスを持つ要素はメニューを開いた状態に設定
				rightVal = -300;
				//　メニューを開いたら次回クリック時は閉じた状態になるよう設定
				$(this).removeClass("open");
			} else {
				// 「open」クラスを持たない要素はメニューを閉じた状態に設定(rightValは0の状態)
				// メニューを閉じたら次回クリック時は開いた状態になるよう設定
				$(this).addClass("open");
			}
	
			$(".menu-gnavi").stop().animate({
				right: rightVal
			}, 200);
		});
	});

	//★
	// スライダー(スライドショー)
	var imgList = [
		"../images/力皇ラーメン/Image01.jpg",
		"../images/力皇ラーメン/Image02.jpg",
		"../images/力皇ラーメン/Image03.jpg"

	];
	// 画像とナビの要素を自動で追加
for(var i = 0; i < imgList.length; i++) {
    // li要素を取得
    var slide = document.createElement("li");
    // li要素の中に画像タグを埋め込む
    slide.innerHTML = "<img src='" + imgList[i] + "'>";
    // li要素をクラス名[slider-inner]の子要素として追加
    document.getElementsByClassName("slider-inner")[0].appendChild(slide);

    // li要素を取得
    var nav = document.createElement("li");
    // プロパティ「data-nav-index]に数値を割り振る
    nav.setAttribute("data-nav-index", i);
    // li要素をクラス名「nav」の子要素として追加
    document.getElementsByClassName("nav")[0].appendChild(nav);
    nav.style.backgroundImage = "url(" + imgList[i] + ")";
    nav.style.width = 100 / imgList.length + "%";
}

// スライド数を取得(処理のために-1する)
var length = imgList.length - 1;
// クラス名「imageSlide」に画像の1枚の要素を格納
var imageSlide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
// クラス名「dotNavigation」にドットナビの1つの要素を格納
var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");


// 「現在○○枚目の画像を表示している」というインデックス番号を格納する変数
var nowIndex = 0;
//　現在表示されている画像とドットナビにクラス名を付ける
imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");

// スライドがアニメーション中か判断するフラグ
var isChanging = false;
// スライドのsetTimeoutを管理するタイマー
var slideTimer;

// スライド切り替え時に呼び出す関数
function sliderSlide(val) {
    if(isChanging === true) {
        return false;
    }
    isChanging = true;
    // 現在表示している画像とナビからクラス名を削除
    imageSlide[nowIndex].classList.remove("show");
    dotNavigation[nowIndex].classList.remove("current");
    nowIndex = val;
    // 次に表示する画像とナビにクラス名を付与
    imageSlide[nowIndex].classList.add("show");
    dotNavigation[nowIndex].classList.remove("current");
    // アニメーションが終わるタイミングでisChangingのステータスをfalseに
    slideTimer = setTimeout(function(){
        isChanging = false;
    }, 600);
}


// 左矢印のナビをクリックしたときのイベント
document.getElementById("arrow-prev").addEventListener("click",function() {
    var index = nowIndex - 1;
    if(index < 0){
        index = length;
    }
    sliderSlide(index);
}, false);
// 右矢印のナビをクリックしたときのイベント
document.getElementById("arrow-next").addEventListener("click",function(){
    var index = nowIndex + 1;
    if(index > length){
        index = 0;
    }
    sliderSlide(index);
},false);
// ドットナビをクリックしたときのイベントを作成
for(var i = 0; i < dotNavigation.length; i++){
    // データ属性のインデックス番号をもとにスライドを行う
    dotNavigation[i].addEventListener("click",function(){
        var index = Number(this.getAttribute("data-nav-index"));
        sliderSlide(index);
    },false);
}



    //ポップアップ用colorbox
    $(".popup").colorbox({
        fixed: true,
        iframe: true,
        innerWidth: 640,
        innerHeight: 359
    });
    
    //Google Maps
	// 地図の初期化処理
	 function initMap() {
	 	// マップの色情報を設定
	 	var styles = [
	    {
	      stylers: [
	        { hue: "#004cff" },
	        { saturation: 30 }
	      ]
	    }, 
	    {
	      "featureType": "water",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eaedfc" },
	        { "lightness": -10 }
	      ]
	    },{
	      "featureType": "landscape",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eaedfa" },
	        { "lightness": 34 }
	      ]
	    },{
	      "featureType": "road.highway",
	      "elementType": "geometry.fill",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 17 }
	      ]
	    },{
	      "featureType": "road.highway",
	      "elementType": "geometry.stroke",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 29 },
	        { "weight": 0.2 }
	      ]
	    },{
	      "featureType": "road.arterial",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 18 }
	      ]
	    },{
	      "featureType": "road.local",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#eeeeee" },
	        { "lightness": 16 }
	      ]
	    },{
	      "featureType": "poi",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#dadff6" },
	        { "lightness": 30 }
	      ]
	    },{
	      "featureType": "poi.park",
	      "elementType": "geometry",
	      "stylers": [
	        { "color": "#cfd6f4" },
	        { "lightness": 24 }
	      ]
	    },{
	      "elementType": "labels.text.stroke",
	      "stylers": [
	        { "visibility": "on" },
	        { "color": "#eeeeee" },
	        { "lightness": 16 }
	      ]
	    },{
	      "elementType": "labels.text.fill",
	      "stylers": [
	        { "saturation": 37 },
	        { "color": "#8687e3" },
	        { "lightness": 4 }
	      ]
	    },{
	      "featureType": "transit",
	      "elementType": "geometry",
	      "stylers": [
	        { "lightness": 17 },
	        { "color": "#dadff6" }
	      ]
	    },{
	      "featureType": "administrative",
	      "elementType": "geometry.fill",
	      "stylers": [
	        { "lightness": 21 },
	        { "color": "#ced2f2" }
	      ]
	    },{
	      "featureType": "administrative",
	      "elementType": "geometry.stroke",
	      "stylers": [
	        { "lightness": 16 },
	        { "weight": 1.2 },
	        { "color": "#ced5f4" }
	      ]
	    },{
	  }
	  ];

	  // 位置情報
	  var pos = {lat: 34.60683086098414, lng: 135.835580051937};

	  // 地図の設定(zoom, centerは必須です)
    var opts = {
      zoom: 15,		// 拡大率
      styles,		// 地図の色味
      center: new google.maps.LatLng(pos)	// 地図の中心点とする緯度、経度を指定する
    };

    // APIのマップオブジェクトを使って対象の要素にマップを表示させる
    var map = new google.maps.Map(document.getElementById("map"), opts);

    // マップの中心にマーカーを表示させる
    var marker = new google.maps.Marker({
      position: pos,
      map: map
    });
  }

  // 地図の初期化処理を実行
  initMap();    

  	//★
  	// 背景に動画を設定
    //bigVideo
    var BV = new $.BigVideo();
	BV.init();
	BV.show("../images/movie.mp4", {ambient:true});
	//★
    //textillateを使ったテキストアニメ
	//ループあり in: out:の両方を使うこと
	$("h1").textillate({
		loop: true,
		// フェードイン時のアニメーション
		in: {
//			effect: 'shake',
			effect: 'fadeInLeft',
			delay: 50,
			shuffle: true
		}
	});

	//フェードイン
	$('.area').fadeInElements();

});