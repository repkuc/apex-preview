// document.querySelectorAll(".service-toggle").forEach((button) => {
//   button.addEventListener("click", () => {
//     const card = button.closest(".service-card");
//     const submenu = card.querySelector(".service-submenu");

//     // Сначала закрываем все открытые .service-submenu
//     document
//       .querySelectorAll(".service-submenu.open")
//       .forEach((otherSubmenu) => {
//         // Закрываем только если это не та, которую мы сейчас открываем
//         if (otherSubmenu !== submenu) {
//           otherSubmenu.classList.remove("open");
//         }
//       });

//     // А теперь переключаем (открываем/закрываем) конкретно то подменю, по которому кликнули
//     submenu.classList.toggle("open");
//   });
// });

// // Для документов:
// document.querySelectorAll(".document-toggle").forEach((button) => {
//   button.addEventListener("click", () => {
//     const submenu = button.nextElementSibling; // <ul class="document-submenu">

//     // Закроем все открытые документ-меню
//     document
//       .querySelectorAll(".document-submenu.open")
//       .forEach((openSubmenu) => {
//         if (openSubmenu !== submenu) {
//           openSubmenu.classList.remove("open");
//         }
//       });

//     submenu.classList.toggle("open");
//   });
// });

// // Для прайсов:
// document.querySelectorAll(".price-toggle").forEach((button) => {
//   button.addEventListener("click", () => {
//     const submenu = button.nextElementSibling; // <ul class="price-submenu">

//     // Закроем все открытые прайс-меню
//     document.querySelectorAll(".price-submenu.open").forEach((openSubmenu) => {
//       if (openSubmenu !== submenu) {
//         openSubmenu.classList.remove("open");
//       }
//     });

//     submenu.classList.toggle("open");
//   });
// });


document.addEventListener("DOMContentLoaded", function () {

  // 🔽 Раскрытие подменю .service-submenu
  document.querySelectorAll(".service-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".service-card");
      const submenu = card.querySelector(".service-submenu");

      // Закрываем все открытые подменю, кроме текущего
      document.querySelectorAll(".service-submenu.open").forEach((other) => {
        if (other !== submenu) {
          other.classList.remove("open");
        }
      });

      // Переключаем текущее подменю
      submenu.classList.toggle("open");
    });
  });

  // 🔽 Раскрытие подменю .document-submenu
  document.querySelectorAll(".document-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = button.nextElementSibling;

      document.querySelectorAll(".document-submenu.open").forEach((open) => {
        if (open !== submenu) {
          open.classList.remove("open");
        }
      });

      submenu.classList.toggle("open");
    });
  });

  // 🔽 (Дополнительно) Прайс-меню — если используется
  document.querySelectorAll(".price-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = button.nextElementSibling;

      document.querySelectorAll(".price-submenu.open").forEach((openSubmenu) => {
        if (openSubmenu !== submenu) {
          openSubmenu.classList.remove("open");
        }
      });

      submenu.classList.toggle("open");
    });
  });

  // ✅ Плавная прокрутка по якорям меню
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});


