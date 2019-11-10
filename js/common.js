
    class Tabs{
        constructor(selector){
            this.elements = $(selector);
            this.init();
            this.bindEvents();
        }
        //初始化
        init(){
            this.elements.each(function (index,elements) {
                $(elements).children('.tabs-bar').children('li').eq(0).addClass('active');
                $(elements).children('.tabs-content').children('li').eq(0).addClass('active');
            })
        }
        //绑定事件
        bindEvents(){
            this.elements.on('click','li',function (e) {
                var $li = $(e.currentTarget);
                // $(this)
                $li.addClass('active').siblings().removeClass('active');
                let index = $(this).index();
                let $content = $li.closest('.tabs').find('.tabs-content>li').eq(index);
                $content.addClass('active').siblings().removeClass('active')
            })
        }
    }

