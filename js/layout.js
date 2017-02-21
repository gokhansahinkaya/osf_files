$(document).ready(function () {

    //header search click
    $(".login-search li:first-child i").click(function () {
        $(this).parent().toggleClass("active");
        $(this).prev().focus();
        if ($(this).next().hasClass("active")) {
            $(this).next().removeClass("active");
        }
        else {
            $(this).next().addClass("active");
        }
    });

    //products mouseover display actions
    $(".product-box span").mouseenter(function () {
        $(this).closest(".product-box").find(".actions").stop().animate({ bottom: 0 }, 100);
    });

    //products actions mouseleave
    $(".actions").mouseleave(function () {
        $(this).stop().animate({ bottom: -40 }, 100);
    });

    //flickr image click open item in overlay
    $(".flickr_badge_image a").click(function () {
        var fileSrc = $(this).find("img").attr("src");
        var newfileSrc = fileSrc.replace("s.jpg", "b.jpg");
        $(this).removeAttr("href");
        $("#emptyModal .modal-content .modal-body").html("");
        $("#emptyModal .modal-content .modal-body").html("<img src='" + newfileSrc + "' class='img-responsive' />");
        $("#emptyModal").modal('show');
    });

    // blog news tracker
    $(function () {
        var quotes = $(".blog-news-container");
        var quoteIndex = -1;
        function showNextQuote() {
            ++quoteIndex;
            quotes.eq(quoteIndex % quotes.length)
                .fadeIn(500)
                .delay(4000)
                .fadeOut(500, showNextQuote);
        }
        showNextQuote();
    });

    // tweets tracker
    $(function () {
        var quotesTweets = $(".tweet");
        var quoteIndexTweets = -1;
        function showNextQuoteTweets() {
            ++quoteIndexTweets;
            quotesTweets.eq(quoteIndexTweets % quotesTweets.length)
                .fadeIn(500)
                .delay(4000)
                .fadeOut(500, showNextQuoteTweets);
        }
        showNextQuoteTweets();
    });

    //products page select click display arrow
    $(document.body).on('click', '.btn-group.bootstrap-select', function () {
        if ($(this).hasClass("show")) {
            $(this).closest(".col-md-3").find(".drop-down-icon").hide();
        }
        else {
            $(".drop-down-icon").hide();
            $(this).closest(".col-md-3").find(".drop-down-icon").show();
        }
    });

    //products thumb view , list view
    $(".product-list-type").click(function () {
        var secondClass = $(this).attr("class").split(" ")[1];

        $(".product-list-type").removeClass("active");
        $(this).addClass("active");

        if (secondClass == "thumb") {
            $(".product-box").parent().removeClass("col-md-12 margin-bottom-30").addClass("col-md-4 margin-bottom-30");
        }
        else {
            $(".product-box").parent().removeClass("col-md-4 margin-bottom-30").addClass("col-md-12 margin-bottom-30");
        }
    });

    // email form submit
    $("#mailForm").on('submit', function (e) {
        e.preventDefault();
        var jsonData = {};
        var formData = $("#mailForm").serializeArray();
        $.each(formData, function () {
            if (jsonData[this.name]) {
                if (!jsonData[this.name].push) {
                    jsonData[this.name] = [jsonData[this.name]];
                }
                jsonData[this.name].push(this.value || '');
            } else {
                jsonData[this.name] = this.value || '';
            }
        });
        console.log(jsonData);

        $.ajax({
            url: 'savejson.php',
            method: 'post',
            data: JSON.stringify(jsonData),
            success: function (response) {
                // alert etc
            }
        });
    });






});//ready



