function uploadProductFeed(){
  
  // CSV feed URL
  /* 
  Assumes you already have a script in place on your site/server
  to dump your product database as a SKU/Product Name/Product Category extract.
  */
  var feedURL  = "https://yoursite.com/scripts/products.csv";
  
  // Google Analytics account information
  // Retrieve your GA account ID and property ID from where you get your tracking code from.
  var accountId = "UA-123456";
  var webPropertyId = accountId + "-1"; // e.g. UA-123456-1
  
  // Retrieve your data upload Data Source ID
  // This can be found in your Google Analytics admin panel at the property level, under Data Import
  var customDataSourceId = "_ybtY4rzTNqFKT3GMJisYQ";
  
  // Retrieve your external CSV feed as blob (binary long object)
  var csvContent = UrlFetchApp.fetch(feedURL).getBlob();
  
  // Invoke the Google Analytics Management API and send the data blob along with it
  var newUpload = Analytics.Management.Uploads.uploadData(
    accountId, 
    webPropertyId, 
    customDataSourceId, 
    csvContent
  );
}
