// SVG
var __svg__ = {
  path: "./assets/icons/**/*.svg",
  name: "assets/icons/sprite.svg",
};
__svg__ = {
  // filename: "/assets/icons/sprite.svg",
  filename: "content/site/icons/sprite.svg",
};
require("webpack-svgstore-plugin/src/helpers/svgxhr")(__svg__);

// SCSS
import "./assets/scss/main.scss";

// Modules
import hideLoader from "./js/modules/loader";
//import "@fancyapps/fancybox";
import mobileNavigation from "./js/modules/mobileNavigation";
import Modal from "./js/modules/modals";
//import masks from "./js/modules/inputmasks";
//import Notice from "./js/modules/notifications";

document.addEventListener("DOMContentLoaded", function() {
  let modal = new Modal();
  mobileNavigation();

  // .js-choose-color
  let currentColorField;
  $(".js-choose-color").click(function(e) {
    let modalId = $(this).data("modal");
    e.preventDefault();
    currentColorField = $(this);
    modal.openModal(modalId);
  });

  $(".js-color-item").click(function() {
    let colorName = $(this)
      .find("p")
      .text();
    let colorImg = $(this)
      .find("img")
      .attr("src");
    let colorId = $(this).data("id");
    currentColorField.find("a").text(colorName);
    currentColorField.find("img").attr("src", colorImg);
    currentColorField.find("input").val(colorId);
    currentColorField.parents(".field").removeClass("field--error");
    modal.hideModal();
  });
  //-

  // js-show-input
  $(".js-show-input").change(function() {
    let unique = $(this)
      .find("option:selected")
      .attr("name");
    if (unique) {
      $(this)
        .parents(".select")
        .hide();
      $(this)
        .parents(".field")
        .find(".field__group")
        .addClass("show");
    }
  });
  $(".field__select-and-input .field__cross").click(function() {
    //reset
    $(this)
      .parents(".field")
      .find(".select select")
      .prop("selectedIndex", 0);
    $(this)
      .parents(".field")
      .find("input")
      .val("");
    //-
    $(this)
      .parents(".field")
      .find(".field__group")
      .removeClass("show");
    $(this)
      .parents(".field")
      .find(".select")
      .show();
  });
  //

  hideLoader();
});
