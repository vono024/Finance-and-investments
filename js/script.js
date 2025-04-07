$(document).ready(function () {
    $(".nav-link").on("click", function (e) {
        const href = $(this).attr("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $(href).offset().top - 70 }, 600);
        }
    });

    $("form").on("submit", function (e) {
        e.preventDefault();
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();
        if (!name || !email || !message) {
            alert("Будь ласка, заповніть усі поля.");
            return;
        }
        alert("Ваше повідомлення надіслано! Дякуємо.");
        $(this).trigger("reset");
    });

    $(".card").hover(
        function () {
            $(this).addClass("shadow-lg");
        },
        function () {
            $(this).removeClass("shadow-lg");
        }
    );
});
