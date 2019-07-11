//adding variable named DETAIL_IMAGE_SELECTOR
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
//delairing variables for title selector and thumbnail anchor DETAIL_IMAGE_SELECTOR
//also assiging the strings for the selectors
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

//delclare function named setDetails
function setDetails(imageUrl, titleText) {
  'use strict';
  //change the detail image and detail image title
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', 'imageUrl');

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.setContent = titleText;
}
