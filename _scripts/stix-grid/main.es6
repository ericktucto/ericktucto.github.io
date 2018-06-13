import $ from 'jquery'
$('.nav-bar button.close').on('click', (e) => {
    //e.preventDefault;
    $(e.target).siblings().toggle(() => {
        console.log("Holas")
        $(this).css('display', 'block')
    }, () => {
        $(this).css('display', 'none')
    })
/*     $(window).on('resize', () => {
        $('.nav-bar button.close').siblings().css('display', 'block')
    }) */
})
