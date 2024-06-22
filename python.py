from apify_client import ApifyClient

# Initialize the ApifyClient with your API token
client = ApifyClient("<YOUR_API_TOKEN>")

# Prepare the Actor input
run_input = {
    "querys": ["X_23VaFMOsk"],
    "max_depth": 1,
    "wp_url": "https://www.yoursite.com",
    "wp_user": "admin",
    "wp_api": "2jXwDdnPukZo1Bq8ctMkWRf7",
    "publish_it": False,
    "category": 1,
}

# Run the Actor and wait for it to finish
run = client.actor("aICb12hPvSVEErnOF").call(run_input=run_input)

# Fetch and print Actor results from the run's dataset (if there are any)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)