# GoogleAnalyticsCSVProductUpload
Google Apps script to retrieve an external CSV file to upload to Google Analytics as Product Data Import using the Management API.

## Pre-requisites:
- A CSV generation engine that populates a feed with required columns:
	- Product ID (SKU)
	- Other product attributes such as Product Name, Product Category, Product Unit Price...
- Google Analytics property 
			- with Enhanced eCommerce enabled
			- with at least one Data Import set up for Product Data
- A Google Sheet with access granted to Google Analytics API
- Your eCommerce-capable website has Google Analytics code implemented with only SKUs for detail, addToCart, Remove, checkout and purchase events

## Enabling Google Analytics Enhanced eCommerce
1. In your Google Analytics admin panel, locate your property and your view.
2. Under eCommerce settings, enable eCommerce then enable Enhanced eCommerce.
3. Implement your tracking code on your site, along with eCommerce-specific tagging, using only the SKU and not the full complement of product attributes

## Using Google App Script in Google Sheets
1. Create a blank Google Sheet
2. Go to Tools > Script Editor
3. Edit the Code.gs file and use/adjust the code provided in this project.

## Enabling Google Analytics API access in Google Sheets
1. Open your Google Sheet
2. Go to *Tools* > *Script Editor*
3. In the editor, go to *Resources* > *Advanced Google services*
4. In the list of services, scroll down to *Google Analytics API* and enable it

## Testing your script
- To test your script, simply select the *uploadProductFeed* function and click the "Play" button to the left of the drop-down menu.
- Go through the Google authentication dialog (you may need to use 2-factor authentication)
- You also go to *View* > *Execution transcript* to look at console output
- Go to your Google Analytics property and look for new uploads sent by the script via the API

## Extra credit: scheduling uploads
Assuming your product feed is updated regularly, you can schedule your script to run on a regular basis. Thankfully, Google Sheets provides this scheduling for you.

- From the script editor, click the "clock" icon or go to *Edit* > *Current project's triggers*
- If the trigger list is empty, click the blue button to create a new trigger
- In the function dropdown menu, select your *uploadProductFeed* function
- In event source, select Time-driven then select a frequency, e.g. *Week timer* and set it to run (for instance) every Monday at 8am
- Save your trigger and enjoy your automatically updated product attributes in Google Analytics!
