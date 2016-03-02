var vername = request.params.vername;
var vercode = request.params.vercode;
var build = request.params.build;
var md5  = request.params.md5;
var type = request.params.type; // 应用类型，需要相同
var channel = request.params.channel; // 渠道名称，需要相同
var subchannel = request.params.subchannel; // 子渠道名称，可能需要相同，暂不判断

var deviceUniqueID = request.params.deviceUniqueID;

var res = {"rtCode":0,"versionCode":"","versionName":"","url":"","whatIsNew":"","md5":"","forceUpdate":""};
response.success(res);

/*    
var res = {"rtCode":0,"versionCode":"","versionName":"","url":"","whatIsNew":"","md5":"","forceUpdate":""};
// 需要判断channel以及type
var query = new AV.Query("V1_Update_Launcher");
if (deviceUniqueID != "091b0a882768346b3f431c877680ff56") {
    query.equalTo("isActive", true);
}
query.equalTo("type", type);
query.equalTo("channel", channel);
// query.equalTo("subChannel", subchannel);
query.descending("vercode");
query.find({
  success: function(results) {
    // Successfully retrieved the object.
    if (results.length > 0) {
        var object = results[0];
        if (vercode < object.get('vercode')) {
            res = {"rtCode":1,"versionCode":object.get('vercode'),"versionName":object.get('vername'),"url":object.get('updatePath'),"whatIsNew":object.get('data'),"md5":object.get('md5'),"forceUpdate":""};
        }
    }
    
    response.success(res);
  },
  error: function(error) {
    response.error(res);
  }
});
*/
             