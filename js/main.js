$('.gallery-item').magnificPopup({
  type: 'image',
  gallery: {
    enabled:true
  },
  image: {
  titleSrc: 'caption'
  }
});


$('.lightbox input').hideseek({
  nodata: 'No results found',
  attribute: 'text',
  navigation: true
});
