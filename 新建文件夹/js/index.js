$(function(){var a=new Vue({el:"#main",data:{moreText:"查看更多",convertText:"兑换",titleText:[{title:"热门游戏",subTitle:"HOT GAMES"},{title:"礼品兑换",subTitle:"GIFT EXCHANGE"},{title:"友情链接",subTitle:"FRIENDSHIP LINK"}],titleHead:[{title:"新闻公告",subTitle:"NEWS BULLETIN"},{title:"排行榜",subTitle:"RANKING LIST"}],homeGame:[{title:"神雕侠侣1",text:"当前最火爆的一款仙侠类游戏！<br /> 快快来玩吧！",writ:"立即试玩",img:"picture/home_game_img1.jpg"},{title:"神雕侠侣2",text:"当前最火爆的一款仙侠类游戏！<br /> 快快来玩吧！",writ:"立即试玩",img:"picture/home_game_img1.jpg"},{title:"神雕侠侣3",text:"",writ:"立即试玩",img:"picture/home_game_img1.jpg"},{title:"神雕侠侣4",text:"当前最火爆的一款仙侠类游戏",writ:"立即试玩",img:"picture/home_game_img1.jpg"},],homeGift:[{title:"外星人笔记本Alienware 17",text:"外星人笔记本Alienware 17 15 寸ALW 吃鸡游戏本外星人电脑赫敏店",num:"52,000",img:"picture/home_gift_img1.jpg"},{title:"Apple/苹果 iPhone X",text:"产品类型：智能手机",num:"52,000",img:"picture/home_gift_img2.jpg"},{title:"苹果 iPhone 7 Plus",text:"<span>Apple/苹果 iPhone 7 Plus</span> <span>三网通4G手机</span>",num:"50,000",img:"picture/home_gift_img3.jpg"},{title:"运动智能手环",text:"运动智能手环oppo苹果小米vivo通用 计步器心率手表多功能男女防水",num:"52,000",img:"picture/home_gift_img4.jpg"}],homeNews:[[{title:"西瓜28严厉打击一人多号",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"},{title:"推广下线后 下线投注的规则限制",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"},{title:"招收实力代理 招收专业推广员",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"},{title:"西瓜28严厉打击一人多号",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"}],[{title:"招收实力代理 招收专业推广员",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"},{title:"网站改回周亏损7% 取消日亏",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"},{title:"回馈新老客户 群内大红包每天发",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"},{title:"为保护玩家账号安全",text:"西瓜28禁止一人多号，请各位玩家珍惜自己的帐号，两号同一IP视为同一人 如发现…",timeNum:"14",timeDate:"2018-09"}]],homeRank:[{title:"疯疯癫癫的小可爱",text:"4,512,548,765",num:""},{title:"疯人也有疯情调",text:"824,576,341",num:""},{title:"零碎記忆",text:"652,412,854",num:""},{title:"妖精哪里逃",text:"6,433,020",num:"<i>4</i>"},{title:"一灯大师",text:"5,091,844",num:"<i>5</i>"},{title:"无敌小兵",text:"14,738,904",num:"<i>6</i>"},{title:"一个被宠坏的坏小孩",text:"17,877,109",num:"<i>7</i>"},{title:"一灯大师",text:"5,091,844",num:"<i>8</i>"},{title:"无敌小兵",text:"14,738,904",num:"<i>9</i>"},{title:"一个被宠坏的坏小孩",text:"17,877,109",num:"<i>10</i>"},],homeLink:[{img:"picture/home_link_img1.png"},{img:"picture/home_link_img2.png"},{img:"picture/home_link_img3.png"},{img:"picture/home_link_img4.png"},{img:"picture/home_link_img5.png"},{img:"picture/home_link_img3.png"},{img:"picture/home_link_img1.png"},{img:"picture/home_link_img4.png"},{img:"picture/home_link_img5.png"},{img:"picture/home_link_img2.png"},]}});var b=new Vue({el:"#homeLinkList",data:{homeLink:[{img:"picture/home_link_img1.png"},{img:"picture/home_link_img2.png"},{img:"picture/home_link_img3.png"},{img:"picture/home_link_img4.png"},{img:"picture/home_link_img5.png"},{img:"picture/home_link_img3.png"},{img:"picture/home_link_img1.png"},{img:"picture/home_link_img4.png"},{img:"picture/home_link_img5.png"},{img:"picture/home_link_img2.png"},]}});$(window).resize(function(){if($(window).width()>768){c()}}).resize();function c(){$(".homeGameList li").hover(function(){$(this).find(".homeGameBg").stop().fadeToggle()})}});