
$(document).on('turbolinks:load', function(){
  var movies = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: "/movies/autocomplete?query=%QUERY",
      wildcard: "%QUERY"
    }
  });
  $('#movies_search').typeahead(null, {
    source: movies
  })
})

function merge(arr1, arr2) {
  let answerArray = Array.new(arr1.length + arr2.length);
  let i1 = 0;
  let i2 = 0;
  for (let ansI = 0; ansI < answerArray.length; ansI++) {
    if((i2 === arr2.length) || (i1 < arr1.length && arr1[i1] <= arr[i2])) {
      answerArray[ansI] = arr1[i1]
      i1++
    }
    else {
      answerArray[ansI] = arr2[i2];
      i2++
    }
  }
  return answerArray
}

function mergeSort(arr) {
  
}
