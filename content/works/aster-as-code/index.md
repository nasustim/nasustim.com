---
title: ＊ as Code (Aster as Code)
date: "2018-11-28T15:00:00.000Z"
description: "《＊ as Code》 - Mitsuhiro Hibino"
pageid: aster-as-code
category: works
headimg: ./aster-as-code-iamas-01.jpg
---

# ＊ as Code (Aster as Code)

![＊ as Code - 巻物の一つ](./aster-as-code-iamas-01.jpg "＊ as Code - 巻物の一つ")

JavaScriptで記述したソースコードを和紙に印刷して、学内応接室に配置した作品。

およそ100行のソースコードを縦の巻物として仕上げることで、モニタと同じ縦スクロールのような視線の誘導を試みた。


![＊ as Code - 全体像](./aster-as-code-iamas-00.jpg "＊ as Code - 全体像")

![『「あしたをプロトタイピングする」展』での展示の様子](./aster-as-code-nu-00.jpg "『「あしたをプロトタイピングする」展』での展示の様子")

## 材料

- [アワガミ インクジェットペーパー](http://www.awagami.jp/products/aijp/index.html#kozo02)
- [和紙糊 - ヤマト](https://www.yamato.co.jp/products/I00000008/)
- ECMAScript 2015

## 展示

- 「あしたをプロトタイピングする」展
    - http://www.ilas.nagoya-u.ac.jp/clas/programs/375.php
- インタラクション2019
    - https://www.interaction-ipsj.org/2019/
    - http://www.interaction-ipsj.org/proceedings/2019/data/bib/1A-08.html

---------------

```javascript
class 人間{
    constructor(){
        this.誤差 = 90;
        this.フィードバック;
        this.理想の具合 = ( x ) => 
            x;
        this.伝わり具合 = ( x ) => 
            this.誤差 / 100 * x;
    }
    受け入れる(){
        this.誤差 = 
            this.誤差 + 
                (100 - this.フィードバック * 100) / 人数;
    }
    諦める(){
        this.誤差 = 
            this.誤差 - this.フィードバック * 100 / 人数;
    }
}
var 人間たち = [];
var 人数 = 8000000000;
for( var i = 0; i < 人数; i++ ){
    人間たち[ i ] = new 人間();
}
var わたし = new 人間();
for( var i = 0; i < 人数; i++ ){
    for( var j = i + 1; j <= 人数; j++ ){
        var コミュニケーション;
        if( j == 人数 + 1 ){
            コミュニケーション = ( x ) => 
                わたし.伝わり具合( x ) 
                    / 人間たち[ i ].理想の具合( x );
            わたし.フィードバック =　
                コミュニケーション(100);
            わたし.諦める();
        }else{
            コミュニケーション = ( x ) => 
                人間たち[ j ].伝わり具合( x ) 
                    / 人間たち[ i ].理想の具合( x );
            人間たち[ j ].フィードバック =　
                コミュニケーション(100);
            人間たち[ j ].受け入れる();
        }
    }
}
```