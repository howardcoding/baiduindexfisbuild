$(".more-product").on("mouseover",function(){$(".more-product-detail").css({visibility:"visible",height:$(window).height()})}),$(".more-product-detail").on("mouseover",function(){$(this).css({visibility:"visible",height:$(window).height()})}),$(".more-product-detail").on("mouseout",function(){$(this).css({visibility:"hidden"})}),$("#bd-my-id").on("mouseover",function(){$(".my-id").css("visibility","visible")}),$(".my-id").on("mouseover",function(){$(".my-id").css("visibility","visible")}),$("#bd-my-id").on("mouseout",function(){$(".my-id").css("visibility","hidden")}),$(".my-id").on("mouseout",function(){$(".my-id").css("visibility","hidden")}),$("#bd-my-setting").on("mouseover",function(){$(".my-setting").css("visibility","visible")}),$(".my-setting").on("mouseover",function(){$(".my-setting").css("visibility","visible")}),$("#bd-my-setting").on("mouseout",function(){$(".my-setting").css("visibility","hidden")}),$(".my-setting").on("mouseout",function(){$(".my-setting").css("visibility","hidden")}),$("#my-fcs").on("click",function(){$(".my-gz").css({visibility:"visible"}),$(".tj,.bd-mes-nav,.bd-mes-video").css({visibility:"hidden"}),$(this).css({"font-weight":"bold","background-image":"linear-gradient(rgba(240, 240, 240, .8) 0, rgba(240, 240, 240, .8) 100%)"}),$("#my-tj,#my-video,#my-nav").css({"font-weight":"normal",background:"white"})}),$("#my-tj").on("click",function(){$(".my-gz,.bd-mes-video,.bd-mes-nav").css({visibility:"hidden"}),$(".tj").css({visibility:"visible"}),$(this).css({"font-weight":"bold","background-image":"linear-gradient(rgba(240, 240, 240, .8) 0, rgba(240, 240, 240, .8) 100%)"}),$("#my-fcs,#my-video,#my-nav").css({"font-weight":"normal",background:"white"})}),$("#my-nav").on("click",function(){$(".bd-mes-nav").css("visibility","visible"),$(".my-gz,.tj,.bd-mes-video").css({visibility:"hidden"}),$(this).css({"font-weight":"bold","background-image":"linear-gradient(rgba(240, 240, 240, .8) 0, rgba(240, 240, 240, .8) 100%)"}),$("#my-fcs,#my-tj,#my-video").css({"font-weight":"normal",background:"white"})}),$("#my-video").on("click",function(){$(".my-gz,.tj,.bd-mes-nav").css({visibility:"hidden"}),$(".bd-mes-video").css("visibility","visible"),$(this).css({"font-weight":"bold","background-image":"linear-gradient(rgba(240, 240, 240, .8) 0, rgba(240, 240, 240, .8) 100%)"}),$("#my-fcs,#my-tj,#my-nav").css({"font-weight":"normal",background:"white"})}),$("#back-icon").on("mouseover",function(){$(this).css("visibility","hidden"),$("#back-to-top").css("visibility","visible")}),$("#back-to-top").on("mouseout",function(){$(this).css("visibility","hidden"),$("#back-icon").css("visibility","visible")}),$("#back-to-top").on("click",function(){$(window).scrollTop(0)});