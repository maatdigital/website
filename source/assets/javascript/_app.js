/**
 * [description]
 * @param  {[type]} $     [description]
 * @param  {[type]} publ  [description]
 * @return {[type]}       [description]
 */
var App = (function ($, publ) {

  var VENDOR_CODE = null;
  var SECRET_KEY = null;

  publ.init = function (options) {
    $("pre").append("> App loaded!\n");

    VENDOR_CODE = options.VENDOR_CODE;
    SECRET_KEY = options.SECRET_KEY;

    $.ajaxSetup({
      dataType: "json",
      beforeSend: function (xhr) {
        var REQUEST_DATE_TIME = moment.utc().format("YYYY-MM-DD hh:mm:ss");

        var params = [];
        params.push((["code",
          "'" + VENDOR_CODE + "'"]).join("="));
        params.push((["date",
          "'" + REQUEST_DATE_TIME + "'"]).join("="));
        params.push((["hash",
          "'" + publ.hashmac(VENDOR_CODE,REQUEST_DATE_TIME) + "'"]).join("="));

        xhr.setRequestHeader('X-Avangate-Authentication', (params).join(" "));
        console.log((params).join(" "));
      },
      error: function (err) {
        console.log(err);
      },
    });

    publ.getProducts();
    return;
  };

  publ.hashmac = function (code,date) {
    // TODO: hash generation, see
    // http://knowledgecenter.avangate.com/Integration/REST_Reference#/introduction/authentication
    // LEN(VENDOR_CODE) + VENDOR_CODE + LEN(REQUEST_DATE_TIME) + REQUEST_DATE_TIME
    var hash = code.length + code + date.length + date;
    $("pre").append("> code: " + code + "\n");
    $("pre").append("> date: " + date + "\n");
    $("pre").append("> hash: " + hash + "\n");
    return hash;
  };

  publ.getProducts = function (options) {
    $.ajax({
      url: "https://api.avangate.com/rest/3.0/products/",
      type: "GET",
      data: {
        "Name": "",
        "Types": "",
        "Enabled": "",
        "GroupName": "",
        "Limit": "",
        "Page": ""
      },
      success: function (data) {
        console.log(data);
      }
    });
  };

  /**
   * Return public objects
   */
  return publ;

})(jQuery, App || {});
