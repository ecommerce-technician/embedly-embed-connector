var Promise = require("bluebird");
var EMBEDLY_KEY = '---YOUR KEY----';
var embedly = require('embedly')
var api = new embedly({key: EMBEDLY_KEY});
// call single url

var item = {
  getUrl : function(url){
    var enriched = {};
    return new Promise(function (resolve, reject) {
      api.oembed({url: url}, function(err, objs) {
        if (!!err) {
          reject(err)
        } else {
          enriched[url] = {
            "thumbnail" : objs[0]["thumbnail_url"] || null,
            "title" : encodeURIComponent(objs[0]["title"]) || null,
            "description" : encodeURIComponent(objs[0]["thumbnail_url"]) || null,
            "provider" : objs[0]["provider_name"] || null,
            "html" : objs[0]["html"] || null,
            "type" : objs[0]["type"] || null,
            "thumbnail_height" : objs[0]["thumbnail_height"] || null,
            "thumbnail_width" : objs[0]["thumbnail_width"] || null,
          }
          resolve(enriched);
        }
      })
    })
  }
}

module.exports = item
