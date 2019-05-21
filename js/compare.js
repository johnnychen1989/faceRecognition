let face_token = "";
let faceset_token = "";

function showImg() {
  var r = new FileReader();
  f = document.getElementById("img01").files[0];
  r.readAsDataURL(f);
  r.onload = function(e) {
    document.getElementById("firstImg").src = this.result;
  };
}

function showAnotherImg() {
  var r = new FileReader();
  f = document.getElementById("img02").files[0];
  r.readAsDataURL(f);
  r.onload = function(e) {
    document.getElementById("secondImg").src = this.result;
  };
}

$(function() {
  //点击compare按钮得到结果
  $("#compareBtn").click(function() {
    let url = "https://api-cn.faceplusplus.com/facepp/v3/compare";
    var files01 = $("#img01").prop("files");
    var files02 = $("#img02").prop("files");
    var data = new FormData();
    data.append("api_key", "kFUAwqvfMakz6wCFYs9bWfGQc5xNZhRU");
    data.append("api_secret", "PLe3PRziLuhX4jGUW2KxEpMLfr1JN94g");
    data.append("image_file1", files01[0]);
    data.append("image_file2", files02[0]);
    $.ajax({
      url: url,
      type: "post",
      data: data,
      cache: false,
      processData: false,
      contentType: false,
      success(data) {
        console.log(data);
        $("#resultRate").html(data.confidence + "%");
        if (data.confidence > 80) {
          $("#result").html("Same person");
        } else {
          $("#result").html("Different person");
        }
      }
    });
  });
});
