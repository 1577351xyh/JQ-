
    //tab切换
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


class Suggestion {
    constructor(options){
        this.options = options;
        this.$input = $(options.input);
        this.$input.wrap('<div class="inputWrap"></div>');
        this.wraper = this.$input.parent();
        this.$ol = $('<ol class="ol-list"></ol>');
        this.$input.after(this.$ol);
        this.$loading = $('<div class="loading"></div>');
        this.$loading.html(this.options.loadingTemplate);
        this.$ol.after(this.$loading);
        this.bindEvent();
    }
    bindEvent(){
        let timerid = null;
        this.$input.on('input',(e)=> {
            console.log(e)
            if(timerid){
                window.clearTimeout(timerid)
            }
           timerid = setTimeout(()=>{
                    this.search(e.currentTarget.value)
                    timerid = null;
            },1000)
        })
    }
    search(keyword){
        $('.inputWrap').addClass('loading-star');
        this.$ol.empty();

        this.options.search(keyword,(array)=>{
            //清除之前的ol

            $('.inputWrap').removeClass('loading-star');
            array.map((vm)=>{
                this.$ol.append($('<li></li>').text(vm))
            })
        })
    }
}
