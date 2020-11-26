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
import masks from "./js/modules/inputmasks";
import {visualization} from "./js/modules/visualization";
import stickySidebar from "./js/modules/stickySidebar";
//import Notice from "./js/modules/notifications";

import search from "./js/modules/search";

document.addEventListener("DOMContentLoaded", function() {
  let modal = new Modal();
  mobileNavigation();
  visualization();


  // toggle collection
  $('.js-toggle-collection').click(function(){
    $(this).parents('.choose-color__collection').toggleClass('is-hide');
  });

  //-


  //$(".js-fancybox").fancybox();
  masks();
  stickySidebar();
  // .js-choose-color
  let currentColorField;
  $(".js-choose-color").click(function(e) {
    let modalId = $(this).data("modal");
    e.preventDefault();
    currentColorField = $(this);
    modal.openModal(modalId);
    search();
  });

  $('body').delegate('.js-color-item','click',function() {
    let minHeight = $(this).data("min-height");
    let maxHeight = $(this).data("max-height");
    let minWidth = $(this).data("min-width");
    let maxWidth = $(this).data("max-width");

    let colorName = $(this)
      .find("p:first-of-type")
      .text();
    let colorImg = $(this)
      .find("img")
      .attr("src");
    let colorId = $(this).data("id");
    currentColorField.find("a").text(colorName);
    currentColorField.find("img").attr("src", colorImg);
    currentColorField.find("input").val(colorId);
    
    let plasticInput = currentColorField.find("input[name='plastic_color']");
    let plastic = plasticInput.length

    if(plastic){
      getSuitable(plasticInput);
    }
    currentColorField.parents(".field").removeClass("field--error");

    if (minHeight || minWidth || maxHeight || maxWidth) {
      $("#js-width").attr("min", minWidth);
      $("#js-width").attr("max", maxWidth);
      $("#js-height").attr("min", minHeight);
      $("#js-height").attr("max", maxHeight);
    }

    modal.hideModal();
  });


  function getSuitable(input){
    var id = input.val();
        
        $.post(
            "/utility/get-suitable-edges",
            { plastic_color: id },
            function (result) {
                $('#suitable-edges').empty();

                $(result).each(function (i, edge) {
                  
                    var item = `<li class="js-color-item" data-id="${edge.ID}">
                            <img src="${edge.Image}?w=210&h=210&mode=crop&scale=both">
                            <p style="margin-bottom:5px">${edge.Name}</p>
                            <p><strong>${edge.Description}</strong></p>
                        </li>`;

                    $('#suitable-edges').append(item);
                    
                });
            });
  }
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
