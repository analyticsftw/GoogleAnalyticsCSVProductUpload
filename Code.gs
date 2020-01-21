/*
	Script that fetches a remote CSV file and uses it as a Product Data import in Google Analytics
	By Julien Coquet - https://juliencoquet.com/en/

	Pre-requisites:
		A CSV generation engine that populates a feed with required columns:
			- Product ID (SKU)
			- Other product attributes such as Product Name, Product Category, Product Unit Price...
		Google Analytics property 
			- with Enhanced eCommerce enabled
			- with at least one Data Import set up for Product Data
		Google Sheet with access granted to Google Analytics API
*/

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
  // For good measure, check your upload status in case your feed has a formatting issue (it can happen)
}
