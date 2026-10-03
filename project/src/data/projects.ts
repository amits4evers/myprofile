export interface ProjectStep {
  title: string;
  description: string;
  code?: string;
}

export interface DataProject {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  technologies: string[];
  objectives: string[];
  dataset: string;
  setupSteps: string[];
  code: string;
  codeExplanation: string;
  runSteps: string[];
  expectedOutput: string;
  enhancements: string[];
}

export const projects: DataProject[] = [
  {
    id: "sales-data-analysis",
    title: "Sales Data Analysis Dashboard",
    category: "Data Analysis",
    icon: "ShoppingCart",
    description: "Analyze sales data to find trends, top products, and regional performance. Build a complete analysis pipeline from CSV to visual dashboard.",
    difficulty: "Beginner",
    estimatedTime: "2-3 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    objectives: [
      "Load and clean sales data from a CSV file",
      "Analyze monthly sales trends",
      "Identify top-selling products and categories",
      "Compare performance across regions",
      "Create visual dashboards with multiple charts",
    ],
    dataset: "Generate synthetic sales data or download from Kaggle (search 'sales dataset'). We will generate it in the setup step.",
    setupSteps: [
      "1. Install Python 3.10+ from python.org (check 'Add to PATH' during install)",
      "2. Open terminal/command prompt",
      "3. Create a project folder: mkdir sales-analysis && cd sales-analysis",
      "4. Create virtual environment: python -m venv venv",
      "5. Activate: Windows: venv\\Scripts\\activate | Mac/Linux: source venv/bin/activate",
      "6. Install packages: pip install pandas matplotlib seaborn numpy",
      "7. Create a file named generate_data.py (to create sample data)",
      "8. Create a file named analysis.py (the main analysis script)",
      "9. Run generate_data.py first to create the CSV, then run analysis.py",
    ],
    code: `# generate_data.py - Run this first to create sample data
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

# Generate 1000 sales records
n = 1000
products = ["Laptop", "Phone", "Tablet", "Headphones", "Speaker",
            "Camera", "Watch", "Charger", "Cable", "Mouse"]
categories = ["Electronics", "Electronics", "Electronics", "Audio",
              "Audio", "Electronics", "Wearable", "Accessory",
              "Accessory", "Accessory"]
regions = ["North", "South", "East", "West", "Central"]

data = {
    "order_id": range(1, n+1),
    "date": [datetime(2024, 1, 1) + timedelta(days=np.random.randint(0, 365))
             for _ in range(n)],
    "product": np.random.choice(products, n),
    "category": np.random.choice(categories, n),
    "region": np.random.choice(regions, n),
    "quantity": np.random.randint(1, 10, n),
    "unit_price": np.random.uniform(10, 1000, n).round(2),
    "customer_type": np.random.choice(["New", "Returning"], n)
}
data["revenue"] = (data["quantity"] * data["unit_price"]).round(2)

df = pd.DataFrame(data)
df.to_csv("sales_data.csv", index=False)
print(f"Generated {len(df)} sales records -> sales_data.csv")`,
    codeExplanation: "This script generates 1000 realistic sales records with random dates, products, regions, quantities, and prices. It saves the data as a CSV file that the analysis script will load.",
    runSteps: [
      "1. In terminal: python generate_data.py (creates sales_data.csv)",
      "2. Then: python analysis.py (runs the analysis and shows charts)",
      "3. Charts will appear in separate windows — close them to see the next one",
      "4. The summary report prints in the terminal",
    ],
    expectedOutput: "You will see a sales summary with total revenue, top products, monthly trends chart, regional comparison bar chart, and a category breakdown pie chart.",
    enhancements: [
      "Add a filter to analyze specific months or regions",
      "Export results to an Excel file with multiple sheets",
      "Build an interactive dashboard using Plotly or Streamlit",
      "Add customer segmentation analysis",
    ],
  },

  {
    id: "covid-data-tracker",
    title: "COVID-19 Data Tracker",
    category: "Data Visualization",
    icon: "Activity",
    description: "Track COVID-19 cases, deaths, and vaccinations across countries using public API data. Visualize trends over time.",
    difficulty: "Intermediate",
    estimatedTime: "3-4 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Requests"],
    objectives: [
      "Fetch COVID-19 data from a public API",
      "Clean and process time-series data",
      "Track cases and deaths by country",
      "Visualize trends with line and bar charts",
      "Create a comparative analysis between countries",
    ],
    dataset: "Public COVID-19 API (disease.sh or similar) — fetched programmatically. No manual download needed.",
    setupSteps: [
      "1. Install Python 3.10+ from python.org",
      "2. Open terminal",
      "3. mkdir covid-tracker && cd covid-tracker",
      "4. python -m venv venv && activate it (see project 1 for steps)",
      "5. pip install pandas matplotlib requests",
      "6. Create covid_tracker.py",
      "7. Run: python covid_tracker.py",
    ],
    code: `import requests
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Fetch COVID data from public API
url = "https://disease.sh/v3/covid-19/historical?lastdays=365"
response = requests.get(url, timeout=10)
data = response.json()

# Extract data for specific countries
countries = ["USA", "India", "Brazil", "UK", "Germany"]
records = []

for country_data in data:
    if country_data.get("country") in countries:
        country = country_data["country"]
        timeline = country_data["timeline"]["cases"]
        for date, cases in timeline.items():
            records.append({
                "country": country,
                "date": pd.to_datetime(date),
                "cases": cases
            })

df = pd.DataFrame(records)
df = df.sort_values(["country", "date"])
df["daily_cases"] = df.groupby("country")["cases"].diff().fillna(0)

# Analysis
print("=== COVID-19 Summary ===")
print(f"Total records: {len(df)}")
print(f"Countries: {df['country'].unique()}")
print(df.groupby("country")["daily_cases"].agg(["mean", "max", "sum"]))

# Visualize
fig, axes = plt.subplots(2, 1, figsize=(14, 10))

# Cumulative cases over time
for country in countries:
    country_df = df[df["country"] == country]
    axes[0].plot(country_df["date"], country_df["cases"],
                 label=country, linewidth=2)
axes[0].set_title("Cumulative COVID-19 Cases by Country")
axes[0].set_xlabel("Date")
axes[0].set_ylabel("Total Cases")
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# 7-day moving average of daily cases
for country in countries:
    country_df = df[df["country"] == country]
    rolling = country_df["daily_cases"].rolling(7).mean()
    axes[1].plot(country_df["date"], rolling, label=country, linewidth=1.5)
axes[1].set_title("7-Day Moving Average of Daily Cases")
axes[1].set_xlabel("Date")
axes[1].set_ylabel("Daily Cases (7-day avg)")
axes[1].legend()
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("covid_dashboard.png", dpi=200)
plt.show()`,
    codeExplanation: "This script fetches real COVID-19 data from a public API, extracts cases for five countries, calculates daily new cases, and creates a two-panel chart showing cumulative cases and a 7-day moving average of daily cases.",
    runSteps: [
      "1. Make sure you have an internet connection (the script fetches data from an API)",
      "2. Run: python covid_tracker.py",
      "3. The chart appears in a window and is also saved as covid_dashboard.png",
      "4. Summary statistics print in the terminal",
    ],
    expectedOutput: "A two-panel chart: top shows cumulative cases for 5 countries over the past year, bottom shows 7-day moving average of daily new cases. Terminal shows summary statistics.",
    enhancements: [
      "Add vaccination data to the analysis",
      "Create an interactive map visualization",
      "Build a web app with Streamlit or Flask",
      "Add prediction/forecasting using simple models",
    ],
  },

  {
    id: "stock-price-analyzer",
    title: "Stock Price Analyzer",
    category: "Financial Analysis",
    icon: "TrendingUp",
    description: "Download stock price data, calculate moving averages, analyze returns, and visualize price trends with technical indicators.",
    difficulty: "Intermediate",
    estimatedTime: "3 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "yfinance"],
    objectives: [
      "Download historical stock prices using yfinance",
      "Calculate daily returns and cumulative returns",
      "Compute moving averages (SMA, EMA)",
      "Calculate volatility and risk metrics",
      "Visualize price trends with technical indicators",
    ],
    dataset: "Stock data fetched using yfinance library (free). No manual download needed — requires internet.",
    setupSteps: [
      "1. Install Python 3.10+ from python.org",
      "2. mkdir stock-analyzer && cd stock-analyzer",
      "3. python -m venv venv && activate it",
      "4. pip install pandas matplotlib yfinance numpy",
      "5. Create stock_analyzer.py",
      "6. Run: python stock_analyzer.py",
    ],
    code: `import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Download stock data
ticker = "AAPL"
stock = yf.Ticker(ticker)
df = stock.history(period="2y")  # 2 years of data

print(f"Downloaded {len(df)} days of {ticker} data")
print(df.head())

# Calculate moving averages
df["SMA_20"] = df["Close"].rolling(window=20).mean()
df["SMA_50"] = df["Close"].rolling(window=50).mean()
df["EMA_12"] = df["Close"].ewm(span=12).mean()

# Calculate returns
df["daily_return"] = df["Close"].pct_change()
df["cumulative_return"] = (1 + df["daily_return"]).cumprod() - 1

# Calculate volatility (30-day rolling standard deviation)
df["volatility"] = df["daily_return"].rolling(30).std() * np.sqrt(252)

# Bollinger Bands
df["BB_middle"] = df["Close"].rolling(20).mean()
df["BB_upper"] = df["BB_middle"] + 2 * df["Close"].rolling(20).std()
df["BB_lower"] = df["BB_middle"] - 2 * df["Close"].rolling(20).std()

# Analysis
print(f"\\n=== {ticker} Analysis ===")
print(f"Current Price: \${df['Close'][-1]:.2f}")
print(f"52-week High: \${df['Close'].max():.2f}")
print(f"52-week Low: \${df['Close'].min():.2f}")
print(f"Total Return: {df['cumulative_return'][-1]*100:.2f}%")
print(f"Annual Volatility: {df['volatility'][-1]*100:.2f}%")
print(f"Avg Daily Return: {df['daily_return'].mean()*100:.4f}%")
print(f"Sharpe Ratio (approx): "
      f"{df['daily_return'].mean() / df['daily_return'].std() * np.sqrt(252):.2f}")

# Visualize
fig, axes = plt.subplots(3, 1, figsize=(14, 12))

# Price with moving averages and Bollinger Bands
axes[0].plot(df.index, df["Close"], label="Close", color="black", linewidth=1)
axes[0].plot(df.index, df["SMA_20"], label="SMA 20", alpha=0.7)
axes[0].plot(df.index, df["SMA_50"], label="SMA 50", alpha=0.7)
axes[0].fill_between(df.index, df["BB_upper"], df["BB_lower"],
                     alpha=0.1, color="blue", label="Bollinger Bands")
axes[0].set_title(f"{ticker} Stock Price with Indicators")
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# Daily returns
axes[1].plot(df.index, df["daily_return"], color="blue", alpha=0.5)
axes[1].axhline(y=0, color="black", linewidth=0.5)
axes[1].set_title("Daily Returns")
axes[1].grid(True, alpha=0.3)

# Cumulative returns
axes[2].plot(df.index, df["cumulative_return"] * 100, color="green")
axes[2].fill_between(df.index, 0, df["cumulative_return"] * 100,
                     alpha=0.2, color="green")
axes[2].set_title("Cumulative Return (%)")
axes[2].set_ylabel("Return %")
axes[2].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("stock_analysis.png", dpi=200)
plt.show()`,
    codeExplanation: "This script downloads 2 years of Apple stock data, calculates moving averages (SMA and EMA), Bollinger Bands, daily returns, cumulative returns, volatility, and Sharpe ratio. It produces a 3-panel chart showing price with indicators, daily returns, and cumulative return.",
    runSteps: [
      "1. Run: python stock_analyzer.py (requires internet for data download)",
      "2. Terminal shows analysis summary (price, return, volatility, Sharpe ratio)",
      "3. A 3-panel chart appears: price + indicators, daily returns, cumulative return",
      "4. Chart is also saved as stock_analysis.png",
    ],
    expectedOutput: "Terminal shows current price, 52-week high/low, total return percentage, annual volatility, and Sharpe ratio. Charts show price trends with technical indicators.",
    enhancements: [
      "Compare multiple stocks side by side",
      "Add buy/sell signals based on moving average crossovers",
      "Build a portfolio tracker with multiple stocks",
      "Add a simple price prediction model",
    ],
  },

  {
    id: "weather-data-analysis",
    title: "Weather Data Analysis",
    category: "Data Analysis",
    icon: "CloudSun",
    description: "Analyze weather patterns using historical temperature, rainfall, and humidity data. Find seasonal trends and anomalies.",
    difficulty: "Beginner",
    estimatedTime: "2 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    objectives: [
      "Generate and work with time-series weather data",
      "Analyze seasonal patterns in temperature and rainfall",
      "Identify weather anomalies and extreme events",
      "Create multi-variable visualizations",
      "Calculate monthly and seasonal statistics",
    ],
    dataset: "Generated programmatically (synthetic weather data simulating a full year). You can also use real data from NOAA or OpenWeatherMap API.",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir weather-analysis && cd weather-analysis",
      "3. python -m venv venv && activate it",
      "4. pip install pandas matplotlib seaborn numpy",
      "5. Create weather_analysis.py",
      "6. Run: python weather_analysis.py",
    ],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)

# Generate synthetic weather data for one year
dates = pd.date_range("2024-01-01", "2024-12-31", freq="D")
n = len(dates)

# Simulate seasonal temperature (Northern Hemisphere)
day_of_year = np.arange(n)
base_temp = 20 + 15 * np.sin(2 * np.pi * (day_of_year - 80) / 365)
temperature = base_temp + np.random.normal(0, 3, n)

# Simulate rainfall (more in monsoon months)
rainfall = np.zeros(n)
for i in range(n):
    month = dates[i].month
    if month in [6, 7, 8, 9]:  # Monsoon
        rainfall[i] = max(0, np.random.exponential(15))
    else:
        rainfall[i] = max(0, np.random.exponential(2))

# Humidity correlated with rainfall
humidity = 50 + rainfall * 0.5 + np.random.normal(0, 10, n)
humidity = np.clip(humidity, 20, 100)

df = pd.DataFrame({
    "date": dates,
    "temperature": temperature.round(1),
    "rainfall": rainfall.round(1),
    "humidity": humidity.round(1)
})
df["month"] = df["date"].dt.month
df["month_name"] = df["date"].dt.month_name()
df["season"] = df["month"].map({
    12: "Winter", 1: "Winter", 2: "Winter",
    3: "Spring", 4: "Spring", 5: "Spring",
    6: "Summer", 7: "Summer", 8: "Summer",
    9: "Autumn", 10: "Autumn", 11: "Autumn"
})

# Analysis
print("=== Weather Analysis Summary ===")
print(f"\\nTemperature: mean={df['temperature'].mean():.1f}°C, "
      f"min={df['temperature'].min():.1f}°C, max={df['temperature'].max():.1f}°C")
print(f"\\nTotal Rainfall: {df['rainfall'].sum():.1f} mm")
print(f"\\nMonthly Statistics:")
print(df.groupby("month_name")[["temperature", "rainfall", "humidity"]].mean()
      .round(1))

# Find hottest and coldest days
hottest = df.loc[df["temperature"].idxmax()]
coldest = df.loc[df["temperature"].idxmin()]
print(f"\\nHottest day: {hottest['date'].date()} at {hottest['temperature']}°C")
print(f"Coldest day: {coldest['date'].date()} at {coldest['temperature']}°C")
print(f"Rainy days (>10mm): {(df['rainfall'] > 10).sum()}")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Temperature over time
axes[0, 0].plot(df["date"], df["temperature"], alpha=0.5, color="orange")
axes[0, 0].plot(df["date"], df["temperature"].rolling(7).mean(),
                color="red", linewidth=2, label="7-day avg")
axes[0, 0].set_title("Temperature Over the Year")
axes[0, 0].set_ylabel("Temperature (°C)")
axes[0, 0].legend()

# Rainfall by month
monthly_rain = df.groupby("month_name")["rainfall"].sum()
monthly_rain = monthly_rain.reindex([
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
])
axes[0, 1].bar(range(12), monthly_rain, color="skyblue")
axes[0, 1].set_xticks(range(12))
axes[0, 1].set_xticklabels([m[:3] for m in monthly_rain.index], rotation=45)
axes[0, 1].set_title("Total Rainfall by Month")
axes[0, 1].set_ylabel("Rainfall (mm)")

# Temperature distribution by season
sns.boxplot(data=df, x="season", y="temperature", ax=axes[1, 0],
            order=["Winter", "Spring", "Summer", "Autumn"])
axes[1, 0].set_title("Temperature Distribution by Season")

# Temperature vs Humidity scatter
axes[1, 1].scatter(df["temperature"], df["humidity"],
                   c=df["rainfall"], cmap="Blues", alpha=0.6)
axes[1, 1].set_xlabel("Temperature (°C)")
axes[1, 1].set_ylabel("Humidity (%)")
axes[1, 1].set_title("Temperature vs Humidity (color = rainfall)")

plt.tight_layout()
plt.savefig("weather_analysis.png", dpi=200)
plt.show()`,
    codeExplanation: "This script generates a year of synthetic daily weather data with seasonal temperature patterns, monsoon rainfall, and correlated humidity. It calculates monthly statistics, finds extreme days, and creates a 4-panel dashboard showing temperature trends, monthly rainfall, seasonal distributions, and temperature-humidity relationships.",
    runSteps: [
      "1. Run: python weather_analysis.py",
      "2. Terminal displays temperature summary, rainfall totals, monthly statistics, and extreme days",
      "3. A 4-panel dashboard appears: temperature trend, rainfall by month, seasonal box plot, and temp-humidity scatter",
      "4. Dashboard is saved as weather_analysis.png",
    ],
    expectedOutput: "Terminal shows mean/min/max temperature, total rainfall, monthly averages, hottest/coldest days. Dashboard shows temperature trend line, monthly rainfall bars, seasonal temperature distribution, and temperature-humidity scatter.",
    enhancements: [
      "Use real weather data from OpenWeatherMap API",
      "Add forecasting for future temperatures",
      "Create an interactive dashboard with Plotly",
      "Analyze multi-year trends and climate change indicators",
    ],
  },

  {
    id: "customer-segmentation",
    title: "Customer Segmentation Analysis",
    category: "Machine Learning",
    icon: "Users",
    description: "Segment customers based on purchasing behavior using RFM analysis and K-Means clustering. Identify customer groups for targeted marketing.",
    difficulty: "Advanced",
    estimatedTime: "4-5 hours",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    objectives: [
      "Generate customer transaction data",
      "Perform RFM (Recency, Frequency, Monetary) analysis",
      "Apply K-Means clustering to segment customers",
      "Visualize segments and their characteristics",
      "Generate marketing recommendations for each segment",
    ],
    dataset: "Generated programmatically — synthetic customer transaction data simulating an e-commerce store.",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir customer-segmentation && cd customer-segmentation",
      "3. python -m venv venv && activate it",
      "4. pip install pandas matplotlib seaborn scikit-learn numpy",
      "5. Create segmentation.py",
      "6. Run: python segmentation.py",
    ],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

np.random.seed(42)

# Generate customer transaction data
n_customers = 500
n_transactions = 3000

customer_ids = np.random.randint(1, n_customers + 1, n_transactions)
dates = pd.date_range("2024-01-01", "2024-12-31").to_series()
transaction_dates = np.random.choice(dates, n_transactions)
amounts = np.random.exponential(50, n_transactions).round(2)

transactions = pd.DataFrame({
    "customer_id": customer_ids,
    "date": transaction_dates,
    "amount": amounts
})

# RFM Analysis
snapshot_date = transactions["date"].max() + pd.Timedelta(days=1)

rfm = transactions.groupby("customer_id").agg({
    "date": lambda x: (snapshot_date - x.max()).days,  # Recency
    "customer_id": "count",                             # Frequency
    "amount": "sum"                                     # Monetary
}).rename(columns={
    "date": "recency",
    "customer_id": "frequency",
    "amount": "monetary"
})

print("=== RFM Summary ===")
print(rfm.describe())

# Scale data for clustering
scaler = StandardScaler()
rfm_scaled = scaler.fit_transform(rfm)

# Find optimal number of clusters (Elbow method)
inertias = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(rfm_scaled)
    inertias.append(kmeans.inertia_)

# Apply K-Means with 4 clusters
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
rfm["cluster"] = kmeans.fit_predict(rfm_scaled)

# Analyze clusters
cluster_summary = rfm.groupby("cluster").agg({
    "recency": "mean",
    "frequency": "mean",
    "monetary": "mean",
    "cluster": "count"
}).rename(columns={"cluster": "count"})

print("\\n=== Cluster Summary ===")
print(cluster_summary)

# Name the segments
segment_names = {
    0: "At-Risk",       # High recency, low frequency
    1: "Champions",     # Low recency, high frequency, high monetary
    2: "New Customers", # Low recency, low frequency
    3: "Loyal"          # Medium recency, medium frequency
}
rfm["segment"] = rfm["cluster"].map(segment_names)

print("\\n=== Segment Distribution ===")
print(rfm["segment"].value_counts())

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Elbow plot
axes[0, 0].plot(range(1, 11), inertias, "bo-")
axes[0, 0].set_xlabel("Number of Clusters")
axes[0, 0].set_ylabel("Inertia")
axes[0, 0].set_title("Elbow Method for Optimal K")

# Scatter: Recency vs Frequency
sns.scatterplot(data=rfm, x="recency", y="frequency",
                hue="segment", ax=axes[0, 1], palette="Set2")
axes[0, 1].set_title("Recency vs Frequency by Segment")

# Scatter: Frequency vs Monetary
sns.scatterplot(data=rfm, x="frequency", y="monetary",
                hue="segment", ax=axes[1, 0], palette="Set2")
axes[1, 0].set_title("Frequency vs Monetary by Segment")

# Segment counts
rfm["segment"].value_counts().plot(kind="bar", ax=axes[1, 1],
                                    color="teal")
axes[1, 1].set_title("Customer Count by Segment")
axes[1, 1].set_ylabel("Count")

plt.tight_layout()
plt.savefig("customer_segments.png", dpi=200)
plt.show()`,
    codeExplanation: "This script generates customer transactions, performs RFM (Recency, Frequency, Monetary) analysis to quantify customer behavior, uses the Elbow Method to find the optimal number of clusters, applies K-Means clustering to segment customers into groups (Champions, Loyal, New, At-Risk), and visualizes the segments with multiple charts.",
    runSteps: [
      "1. Run: python segmentation.py",
      "2. Terminal shows RFM summary statistics, cluster summary with mean values per segment, and segment distribution",
      "3. A 4-panel dashboard appears: Elbow plot, Recency vs Frequency scatter, Frequency vs Monetary scatter, and segment count bar chart",
      "4. Dashboard is saved as customer_segments.png",
    ],
    expectedOutput: "Terminal shows RFM statistics and cluster summaries. Dashboard shows the Elbow Method chart for optimal cluster count, two scatter plots showing customer segments, and a bar chart of segment sizes.",
    enhancements: [
      "Add demographic data (age, location) to enrich segments",
      "Implement hierarchical clustering and compare with K-Means",
      "Create a Streamlit web app for interactive segmentation",
      "Add time-based cohort analysis",
    ],
  },

  {
    id: "web-scraping-ecommerce",
    title: "E-Commerce Price Scraper",
    category: "Web Scraping",
    icon: "Globe",
    description: "Build a web scraper to extract product names, prices, and ratings from an e-commerce website. Track price changes over time.",
    difficulty: "Intermediate",
    estimatedTime: "3 hours",
    technologies: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    objectives: [
      "Scrape product data from a website",
      "Extract product names, prices, and ratings",
      "Handle pagination (multiple pages)",
      "Save data to CSV for analysis",
      "Clean and analyze scraped data",
    ],
    dataset: "Scraped from a sample e-commerce website (books.toscrape.com — a site specifically designed for scraping practice).",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir price-scraper && cd price-scraper",
      "3. python -m venv venv && activate it",
      "4. pip install requests beautifulsoup4 pandas",
      "5. Create scraper.py",
      "6. Run: python scraper.py",
    ],
    code: `import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

# Scrape books.toscrape.com (a practice site for web scraping)
base_url = "https://books.toscrape.com/catalogue/page-{}.html"
all_books = []

for page in range(1, 11):  # scrape 10 pages (200 books)
    url = base_url.format(page)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    books = soup.find_all("article", class_="product_pod")

    for book in books:
        title = book.find("h3").find("a")["title"]
        price = book.find("p", class_="price_color").text.strip()
        price = float(price.replace("£", "").replace("Â", ""))

        rating_class = book.find("p", class_="star-rating")["class"]
        rating = rating_class[1]  # One, Two, Three, Four, Five
        rating_map = {"One": 1, "Two": 2, "Three": 3,
                      "Four": 4, "Five": 5}
        rating_num = rating_map.get(rating, 0)

        availability = book.find("p", class_="instock").text.strip()

        all_books.append({
            "title": title,
            "price": price,
            "rating": rating_num,
            "availability": availability
        })

    print(f"Scraped page {page}: {len(books)} books")
    time.sleep(1)  # be polite

# Create DataFrame
df = pd.DataFrame(all_books)
print(f"\\nTotal books scraped: {len(df)}")

# Save to CSV
df.to_csv("books_data.csv", index=False)
print("Saved to books_data.csv")

# Analysis
print("\\n=== Scraped Data Analysis ===")
print(f"Average price: £{df['price'].mean():.2f}")
print(f"Price range: £{df['price'].min():.2f} - £{df['price'].max():.2f}")
print(f"Average rating: {df['rating'].mean():.1f} stars")
print(f"\\nRating distribution:")
print(df["rating"].value_counts().sort_index())
print(f"\\nTop 5 most expensive books:")
print(df.nlargest(5, "price")[["title", "price", "rating"]])
print(f"\\nTop 5 cheapest books:")
print(df.nsmallest(5, "price")[["title", "price", "rating"]])`,
    codeExplanation: "This script scrapes 10 pages (200 books) from books.toscrape.com — a practice site designed for learning web scraping. It extracts title, price, rating (converted from text to number), and availability. It saves the data to CSV and performs basic analysis including price statistics and top/bottom books by price.",
    runSteps: [
      "1. Run: python scraper.py (requires internet connection)",
      "2. Terminal shows progress: 'Scraped page 1: 20 books' for each page",
      "3. After scraping, analysis results print in terminal",
      "4. Data is saved to books_data.csv in the same folder — open it in Excel to view",
    ],
    expectedOutput: "Terminal shows scraping progress for 10 pages, total books scraped, average price and rating, rating distribution, and top 5 most expensive and cheapest books. A CSV file with all 200 books is created.",
    enhancements: [
      "Scrape all 50 pages (1000 books) and add category filtering",
      "Schedule the scraper to run daily and track price changes",
      "Build a price drop alert system",
      "Create a visualization of price vs. rating",
    ],
  },

  {
    id: "movie-database-analysis",
    title: "Movie Database Analysis",
    category: "Data Analysis",
    icon: "Film",
    description: "Analyze a movie dataset to find trends in genres, ratings, box office performance, and director success patterns.",
    difficulty: "Intermediate",
    estimatedTime: "3 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    objectives: [
      "Generate and analyze movie data",
      "Find highest-rated and highest-grossing movies",
      "Analyze genre popularity over years",
      "Identify the most successful directors",
      "Explore relationships between budget, rating, and revenue",
    ],
    dataset: "Generated programmatically. Alternatively, use the TMDB 5000 dataset from Kaggle for real data.",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir movie-analysis && cd movie-analysis",
      "3. python -m venv venv && activate it",
      "4. pip install pandas matplotlib seaborn numpy",
      "5. Create movie_analysis.py",
      "6. Run: python movie_analysis.py",
    ],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)

# Generate movie dataset
n = 500
genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi",
          "Romance", "Thriller", "Animation"]
directors = ["Director A", "Director B", "Director C", "Director D",
             "Director E", "Director F", "Director G", "Director H",
             "Director I", "Director J"]

df = pd.DataFrame({
    "title": [f"Movie {i}" for i in range(1, n+1)],
    "genre": np.random.choice(genres, n),
    "director": np.random.choice(directors, n),
    "year": np.random.randint(2000, 2025, n),
    "rating": np.clip(np.random.normal(6.5, 1.5, n), 1, 10).round(1),
    "budget_m": np.random.exponential(50, n).round(1),
    "revenue_m": np.zeros(n)
})
# Revenue correlated with budget and rating
df["revenue_m"] = (df["budget_m"] * np.random.uniform(0.5, 3, n) *
                   (df["rating"] / 10)).round(1)
df["profit_m"] = (df["revenue_m"] - df["budget_m"]).round(1)
df["roi"] = (df["profit_m"] / df["budget_m"] * 100).round(1)

# Analysis
print("=== Movie Database Analysis ===")
print(f"Total movies: {len(df)}")
print(f"\\nGenre distribution:")
print(df["genre"].value_counts())

print(f"\\nTop 10 highest-rated movies:")
print(df.nlargest(10, "rating")[["title", "genre", "rating", "year"]])

print(f"\\nTop 10 highest-grossing movies:")
print(df.nlargest(10, "revenue_m")[["title", "genre",
      "revenue_m", "profit_m"]])

print(f"\\nMost successful directors (by avg revenue):")
print(df.groupby("director")["revenue_m"].agg(["mean", "count"])
      .round(1).sort_values("mean", ascending=False).head())

print(f"\\nAverage rating by genre:")
print(df.groupby("genre")["rating"].mean().round(2).sort_values(
    ascending=False))

print(f"\\nProfit statistics:")
print(f"Profitable movies: {(df['profit_m'] > 0).sum()} "
      f"({(df['profit_m'] > 0).mean()*100:.1f}%)")
print(f"Average ROI: {df['roi'].mean():.1f}%")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Rating distribution by genre
sns.boxplot(data=df, x="genre", y="rating", ax=axes[0, 0])
axes[0, 0].set_xticklabels(axes[0, 0].get_xticklabels(), rotation=45)
axes[0, 0].set_title("Rating Distribution by Genre")

# Budget vs Revenue scatter
axes[0, 1].scatter(df["budget_m"], df["revenue_m"],
                   c=df["rating"], cmap="viridis", alpha=0.6)
axes[0, 1].set_xlabel("Budget ($M)")
axes[0, 1].set_ylabel("Revenue ($M)")
axes[0, 1].set_title("Budget vs Revenue (color = rating)")

# Movies per year
df["year"].value_counts().sort_index().plot(kind="bar",
    ax=axes[1, 0], color="coral")
axes[1, 0].set_title("Movies Released per Year")
axes[1, 0].set_xlabel("Year")

# Genre profitability
df.groupby("genre")["profit_m"].mean().sort_values().plot(kind="barh",
    ax=axes[1, 1], color="teal")
axes[1, 1].set_title("Average Profit by Genre")
axes[1, 1].set_xlabel("Profit ($M)")

plt.tight_layout()
plt.savefig("movie_analysis.png", dpi=200)
plt.show()`,
    codeExplanation: "This script generates 500 movies with genres, directors, ratings, budgets, and revenues (with revenue correlated to budget and rating). It analyzes top-rated and top-grossing movies, director success, genre popularity, profitability, and creates a 4-panel dashboard with rating distributions, budget-revenue scatter, release trends, and genre profitability.",
    runSteps: [
      "1. Run: python movie_analysis.py",
      "2. Terminal shows genre distribution, top 10 movies by rating and revenue, best directors, and profit statistics",
      "3. A 4-panel dashboard appears: rating by genre, budget vs revenue scatter, movies per year, and profit by genre",
      "4. Dashboard saved as movie_analysis.png",
    ],
    expectedOutput: "Terminal shows movie statistics including top-rated and top-grossing films, best directors, and profitability. Dashboard shows rating distributions, budget-revenue relationship, release trends, and genre profitability comparison.",
    enhancements: [
      "Use real data from the TMDB or IMDB dataset on Kaggle",
      "Add actor/actress analysis",
      "Build a recommendation system based on genre preferences",
      "Create an interactive dashboard with Plotly or Streamlit",
    ],
  },

  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    category: "Business Intelligence",
    icon: "Briefcase",
    description: "Analyze employee data to understand attrition, salary distribution, performance, and departmental insights. Build an HR analytics report.",
    difficulty: "Intermediate",
    estimatedTime: "3-4 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    objectives: [
      "Generate realistic employee data",
      "Analyze attrition rates by department and factors",
      "Examine salary distribution and gender pay gap",
      "Evaluate performance ratings across the organization",
      "Create a comprehensive HR dashboard",
    ],
    dataset: "Generated programmatically. Alternatively, use IBM HR Analytics Employee Attrition dataset from Kaggle.",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir hr-analytics && cd hr-analytics",
      "3. python -m venv venv && activate it",
      "4. pip install pandas matplotlib seaborn numpy",
      "5. Create hr_analysis.py",
      "6. Run: python hr_analysis.py",
    ],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)
n = 1000

departments = ["Sales", "Engineering", "HR", "Marketing",
               "Finance", "Operations"]
genders = ["Male", "Female"]
education = ["Bachelor", "Master", "PhD", "Diploma"]

df = pd.DataFrame({
    "employee_id": range(1, n+1),
    "department": np.random.choice(departments, n),
    "gender": np.random.choice(genders, n),
    "age": np.random.randint(22, 60, n),
    "education": np.random.choice(education, n, p=[0.4, 0.3, 0.1, 0.2]),
    "years_at_company": np.random.randint(0, 20, n),
    "salary": np.zeros(n),
    "performance_rating": np.random.randint(1, 6, n),
    "satisfaction_score": np.clip(np.random.normal(3.5, 1, n), 1, 5).round(1),
    "attrition": np.random.choice(["Yes", "No"], n, p=[0.15, 0.85])
})

# Salary based on department, years, education
base_salary = {"Sales": 50000, "Engineering": 70000, "HR": 55000,
               "Marketing": 58000, "Finance": 65000, "Operations": 48000}
edu_bonus = {"Diploma": 0, "Bachelor": 5000, "Master": 10000, "PhD": 15000}
df["salary"] = df.apply(lambda r: base_salary[r["department"]] +
                        edu_bonus[r["education"]] +
                        r["years_at_company"] * 2000 +
                        np.random.normal(0, 5000), axis=1).round(0)

# Analysis
print("=== HR Analytics Summary ===")
print(f"Total employees: {len(df)}")
print(f"Attrition rate: {(df['attrition']=='Yes').mean()*100:.1f}%")

print(f"\\nAttrition by department:")
attrition_dept = df[df["attrition"]=="Yes"].groupby(
    "department").size() / df.groupby("department").size() * 100
print(attrition_dept.round(1).sort_values(ascending=False))

print(f"\\nSalary statistics:")
print(df.groupby("department")["salary"].agg(
    ["mean", "median", "min", "max"]).round(0))

print(f"\\nGender pay gap by department:")
gender_pay = df.groupby(["department", "gender"])["salary"].mean().unstack()
gender_pay["gap"] = gender_pay["Male"] - gender_pay["Female"]
print(gender_pay[["Male", "Female", "gap"]].round(0))

print(f"\\nAverage performance by department:")
print(df.groupby("department")["performance_rating"].mean().round(2))

print(f"\\nSatisfaction vs Attrition:")
print(df.groupby("attrition")["satisfaction_score"].mean().round(2))

# Visualize
fig, axes = plt.subplots(2, 3, figsize(18, 10))

# Attrition by department
attrition_dept.sort_values().plot(kind="barh", ax=axes[0, 0],
    color="salmon")
axes[0, 0].set_title("Attrition Rate by Department (%)")
axes[0, 0].set_xlabel("Attrition %")

# Salary distribution
for dept in departments:
    data = df[df["department"]==dept]["salary"]
    axes[0, 1].hist(data, alpha=0.5, label=dept, bins=20)
axes[0, 1].set_title("Salary Distribution by Department")
axes[0, 1].legend(fontsize=7)

# Age vs Salary
axes[0, 2].scatter(df["age"], df["salary"], alpha=0.3, color="teal")
axes[0, 2].set_xlabel("Age")
axes[0, 2].set_ylabel("Salary")
axes[0, 2].set_title("Age vs Salary")

# Performance by department
sns.boxplot(data=df, x="department", y="performance_rating", ax=axes[1, 0])
axes[1, 0].set_xticklabels(axes[1, 0].get_xticklabels(), rotation=45)
axes[1, 0].set_title("Performance by Department")

# Satisfaction vs Attrition
sns.boxplot(data=df, x="attrition", y="satisfaction_score", ax=axes[1, 1])
axes[1, 1].set_title("Satisfaction Score vs Attrition")

# Years at company distribution
df["years_at_company"].hist(bins=20, ax=axes[1, 2], color="coral",
    edgecolor="white")
axes[1, 2].set_title("Years at Company Distribution")
axes[1, 2].set_xlabel("Years")

plt.tight_layout()
plt.savefig("hr_dashboard.png", dpi=200)
plt.show()`,
    codeExplanation: "This script generates 1000 employee records with realistic salary calculations based on department, education, and tenure. It analyzes attrition rates, salary distributions, gender pay gap, performance ratings, and satisfaction scores. The dashboard includes 6 panels covering all key HR metrics.",
    runSteps: [
      "1. Run: python hr_analysis.py",
      "2. Terminal shows overall attrition rate, attrition by department, salary statistics, gender pay gap, performance averages, and satisfaction vs attrition",
      "3. A 6-panel HR dashboard appears with charts for all key metrics",
      "4. Dashboard saved as hr_dashboard.png",
    ],
    expectedOutput: "Terminal shows HR statistics including attrition rates, salary analysis, gender pay gap, and satisfaction metrics. Dashboard shows 6 charts: attrition by department, salary distributions, age-salary scatter, performance box plots, satisfaction vs attrition, and tenure distribution.",
    enhancements: [
      "Use real HR data from Kaggle (IBM HR Analytics)",
      "Add predictive modeling for attrition risk",
      "Build an interactive Power BI or Tableau dashboard",
      "Add employee segmentation based on performance and satisfaction",
    ],
  },

  {
    id: "banking-data-analysis",
    title: "Banking Transaction Analysis",
    category: "Financial Analysis",
    icon: "CreditCard",
    description: "Analyze banking transaction data to detect spending patterns, identify fraud indicators, and understand customer behavior.",
    difficulty: "Advanced",
    estimatedTime: "4-5 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    objectives: [
      "Generate realistic banking transaction data",
      "Analyze spending patterns by category and time",
      "Detect anomalous transactions (potential fraud)",
      "Identify customer segments based on spending",
      "Create a financial analysis dashboard",
    ],
    dataset: "Generated programmatically — synthetic banking transactions with categories, amounts, and timestamps.",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir banking-analysis && cd banking-analysis",
      "3. python -m venv venv && activate it",
      "4. pip install pandas matplotlib seaborn numpy",
      "5. Create banking_analysis.py",
      "6. Run: python banking_analysis.py",
    ],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

np.random.seed(42)

# Generate banking transactions
n_transactions = 5000
n_customers = 200

categories = ["Groceries", "Dining", "Transport", "Shopping",
              "Entertainment", "Bills", "Healthcare", "Transfer",
              "ATM Withdrawal", "Fuel"]
channels = ["Online", "POS", "ATM", "Mobile", "Branch"]

customer_ids = np.random.randint(1, n_customers+1, n_transactions)
start_date = datetime(2024, 1, 1)
dates = [start_date + timedelta(
    days=np.random.randint(0, 365),
    hours=np.random.randint(0, 24),
    minutes=np.random.randint(0, 60)
) for _ in range(n_transactions)]

# Transaction amounts vary by category
category_amounts = {
    "Groceries": (20, 200, "normal"),
    "Dining": (10, 150, "normal"),
    "Transport": (2, 50, "normal"),
    "Shopping": (50, 1000, "exponential"),
    "Entertainment": (10, 300, "normal"),
    "Bills": (100, 2000, "normal"),
    "Healthcare": (50, 500, "exponential"),
    "Transfer": (100, 5000, "exponential"),
    "ATM Withdrawal": (100, 500, "normal"),
    "Fuel": (20, 100, "normal")
}

amounts = []
cats = np.random.choice(categories, n_transactions)
for cat in cats:
    low, high, dist = category_amounts[cat]
    if dist == "exponential":
        amt = np.random.exponential((low + high) / 2)
    else:
        amt = np.random.normal((low + high) / 2, (high - low) / 4)
    amounts.append(max(low, min(high * 2, amt)))

df = pd.DataFrame({
    "transaction_id": range(1, n_transactions+1),
    "customer_id": customer_ids,
    "date": dates,
    "category": cats,
    "amount": np.round(amounts, 2),
    "channel": np.random.choice(channels, n_transactions),
    "is_fraud": np.zeros(n_transactions, dtype=int)
})

# Inject some fraud transactions (unusual patterns)
fraud_indices = np.random.choice(n_transactions, 50, replace=False)
df.loc[fraud_indices, "amount"] = df.loc[fraud_indices, "amount"] * 5
df.loc[fraud_indices, "category"] = "Shopping"
df.loc[fraud_indices, "channel"] = "Online"
df.loc[fraud_indices, "is_fraud"] = 1

# Add time features
df["hour"] = df["date"].dt.hour
df["day_of_week"] = df["date"].dt.day_name()
df["month"] = df["date"].dt.month

# Analysis
print("=== Banking Transaction Analysis ===")
print(f"Total transactions: {len(df)}")
print(f"Total amount: \${df['amount'].sum():,.2f}")
print(f"Average transaction: \${df['amount'].mean():.2f}")
print(f"Fraud transactions: {df['is_fraud'].sum()} "
      f"({df['is_fraud'].mean()*100:.1f}%)")

print(f"\\nSpending by category:")
print(df.groupby("category")["amount"].agg(["count", "sum", "mean"])
      .round(2).sort_values("sum", ascending=False))

print(f"\\nTransactions by channel:")
print(df["channel"].value_counts())

print(f"\\nTop 10 customers by spending:")
top_customers = df.groupby("customer_id")["amount"].sum().nlargest(10)
print(top_customers.round(2))

# Fraud detection: transactions > 3 std dev from mean
mean_amt = df["amount"].mean()
std_amt = df["amount"].std()
df["is_anomaly"] = (df["amount"] > mean_amt + 3 * std_amt).astype(int)
print(f"\\nAnomalous transactions (>3 std dev): {df['is_anomaly'].sum()}")
print(f"Of which flagged as fraud: "
      f"{(df['is_anomaly'] & df['is_fraud']).sum()}")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Spending by category
df.groupby("category")["amount"].sum().sort_values().plot(
    kind="barh", ax=axes[0, 0], color="teal")
axes[0, 0].set_title("Total Spending by Category")
axes[0, 0].set_xlabel("Amount ($)")

# Transaction volume by hour
df["hour"].value_counts().sort_index().plot(
    kind="bar", ax=axes[0, 1], color="coral")
axes[0, 1].set_title("Transaction Volume by Hour")
axes[0, 1].set_xlabel("Hour of Day")

# Transaction amount distribution
axes[1, 0].hist(df[df["amount"] < 1000]["amount"], bins=50,
                color="skyblue", edgecolor="white")
axes[1, 0].set_title("Transaction Amount Distribution")
axes[1, 0].set_xlabel("Amount ($)")

# Fraud vs normal amount comparison
sns.boxplot(data=df, x="is_fraud", y="amount", ax=axes[1, 1])
axes[1, 1].set_xticklabels(["Normal", "Fraud"])
axes[1, 1].set_title("Amount: Fraud vs Normal")

plt.tight_layout()
plt.savefig("banking_analysis.png", dpi=200)
plt.show()`,
    codeExplanation: "This script generates 5000 banking transactions across 200 customers with realistic amounts per category, injects 50 fraud transactions (unusually high online shopping amounts), adds time features for analysis, detects anomalies using standard deviation, and creates a 4-panel dashboard showing spending patterns, transaction timing, amount distributions, and fraud comparison.",
    runSteps: [
      "1. Run: python banking_analysis.py",
      "2. Terminal shows transaction summary, spending by category, channel distribution, top customers, and fraud/anomaly detection results",
      "3. A 4-panel dashboard appears: spending by category, hourly volume, amount distribution, and fraud vs normal comparison",
      "4. Dashboard saved as banking_analysis.png",
    ],
    expectedOutput: "Terminal shows total transaction count and amount, fraud rate, category breakdown, channel distribution, top spending customers, and anomaly detection results. Dashboard shows spending patterns, timing, distributions, and fraud indicators.",
    enhancements: [
      "Implement a proper fraud detection model using Isolation Forest",
      "Add real-time transaction monitoring simulation",
      "Create customer spending profiles and recommendations",
      "Build an interactive Streamlit dashboard for exploration",
    ],
  },

  {
    id: "ipl-cricket-analysis",
    title: "IPL Cricket Data Analysis",
    category: "Sports Analytics",
    icon: "Trophy",
    description: "Analyze IPL cricket data to find top players, team performance, match outcomes, and statistical insights about the tournament.",
    difficulty: "Intermediate",
    estimatedTime: "3-4 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    objectives: [
      "Generate realistic IPL match and player data",
      "Analyze team performance across seasons",
      "Identify top batsmen and bowlers",
      "Examine win/loss patterns and toss impact",
      "Create a sports analytics dashboard",
    ],
    dataset: "Generated programmatically. For real data, download IPL datasets from Kaggle (search 'IPL complete dataset').",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir ipl-analysis && cd ipl-analysis",
      "3. python -m venv venv && activate it",
      "4. pip install pandas matplotlib seaborn numpy",
      "5. Create ipl_analysis.py",
      "6. Run: python ipl_analysis.py",
    ],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

np.random.seed(42)

# Generate IPL match data
teams = ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore",
         "Kolkata Knight Riders", "Delhi Capitals", "Punjab Kings",
         "Rajasthan Royals", "Sunrisers Hyderabad"]
venues = ["Mumbai", "Chennai", "Bangalore", "Kolkata", "Delhi",
          "Punjab", "Jaipur", "Hyderabad"]
player_names = ["Player_" + str(i) for i in range(1, 101)]

n_matches = 300
matches = []
for i in range(n_matches):
    team1, team2 = np.random.choice(teams, 2, replace=False)
    toss_winner = np.random.choice([team1, team2])
    toss_decision = np.random.choice(["bat", "field"], p=[0.3, 0.7])
    winner = np.random.choice([team1, team2, "No Result"], p=[0.48, 0.48, 0.04])
    venue = np.random.choice(venues)
    season = np.random.choice(range(2015, 2025))

    matches.append({
        "match_id": i+1,
        "season": season,
        "team1": team1,
        "team2": team2,
        "toss_winner": toss_winner,
        "toss_decision": toss_decision,
        "winner": winner,
        "venue": venue,
        "player_of_match": np.random.choice(player_names)
    })

df_matches = pd.DataFrame(matches)

# Generate batting statistics
n_batting = 500
batting = pd.DataFrame({
    "player": np.random.choice(player_names, n_batting),
    "match_id": np.random.randint(1, n_matches+1, n_batting),
    "runs": np.random.choice(
        [0, 0, 0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100],
        n_batting, p=[0.15, 0.15, 0.1, 0.1, 0.1, 0.08, 0.07,
                      0.06, 0.05, 0.04, 0.04, 0.02, 0.02, 0.02]),
    "balls": np.random.randint(1, 70, n_batting),
    "fours": np.random.randint(0, 15, n_batting),
    "sixes": np.random.randint(0, 8, n_batting)
})
batting["strike_rate"] = (batting["runs"] / batting["balls"] * 100).round(1)

# Analysis
print("=== IPL Cricket Analysis ===")
print(f"Total matches: {len(df_matches)}")

# Team performance
team_wins = df_matches[df_matches["winner"] != "No Result"]["winner"].value_counts()
print(f"\\nMost wins by team:")
print(team_wins.head(5))

# Toss impact
toss_winners = df_matches[df_matches["winner"] != "No Result"]
toss_impact = (toss_winners["toss_winner"] == toss_winners["winner"]).mean()
print(f"\\nToss winner also won match: {toss_impact*100:.1f}%")

# Toss decision impact
print(f"\\nWin rate by toss decision:")
for decision in ["bat", "field"]:
    subset = toss_winners[toss_winners["toss_decision"] == decision]
    won = (subset["toss_winner"] == subset["winner"]).mean()
    print(f"  {decision}: {won*100:.1f}%")

# Top batsmen
top_batsmen = batting.groupby("player")["runs"].agg(["sum", "mean", "count"])
top_batsmen = top_batsmen.sort_values("sum", ascending=False).head(10)
print(f"\\nTop 10 batsmen by total runs:")
print(top_batsmen)

# Centuries and fifties
centuries = (batting["runs"] >= 100).sum()
fifties = ((batting["runs"] >= 50) & (batting["runs"] < 100)).sum()
print(f"\\nCenturies: {centuries}, Fifties: {fifties}")

# Highest individual score
highest = batting.loc[batting["runs"].idxmax()]
print(f"Highest score: {highest['runs']} runs")

# Visualize
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Team wins
team_wins.sort_values().plot(kind="barh", ax=axes[0, 0], color="darkblue")
axes[0, 0].set_title("Total Wins by Team")
axes[0, 0].set_xlabel("Wins")

# Matches per season
df_matches["season"].value_counts().sort_index().plot(
    kind="bar", ax=axes[0, 1], color="orange")
axes[0, 1].set_title("Matches per Season")
axes[0, 1].set_xlabel("Season")

# Top batsmen runs
top_batsmen["sum"].sort_values().plot(kind="barh", ax=axes[1, 0],
    color="green")
axes[1, 0].set_title("Top 10 Batsmen by Total Runs")
axes[1, 0].set_xlabel("Runs")

# Run distribution
axes[1, 1].hist(batting["runs"], bins=20, color="purple",
    edgecolor="white")
axes[1, 1].set_title("Distribution of Individual Scores")
axes[1, 1].set_xlabel("Runs")

plt.tight_layout()
plt.savefig("ipl_analysis.png", dpi=200)
plt.show()`,
    codeExplanation: "This script generates 300 IPL matches and 500 batting performances across 8 teams and 10 seasons. It analyzes team win counts, toss impact on match results, top batsmen by runs, centuries/fifties count, and creates a 4-panel dashboard with team performance, seasonal trends, top batsmen, and score distributions.",
    runSteps: [
      "1. Run: python ipl_analysis.py",
      "2. Terminal shows total matches, most wins by team, toss impact statistics, top 10 batsmen, and century/fifty counts",
      "3. A 4-panel dashboard appears: team wins bar chart, matches per season, top batsmen, and score distribution",
      "4. Dashboard saved as ipl_analysis.png",
    ],
    expectedOutput: "Terminal shows team rankings, toss statistics, batting records, and milestone counts. Dashboard shows team performance comparison, seasonal match counts, top run-scorers, and distribution of individual scores.",
    enhancements: [
      "Use real IPL data from Kaggle for authentic analysis",
      "Add bowling statistics and all-rounder analysis",
      "Build a head-to-head team comparison tool",
      "Create a player performance prediction model",
    ],
  },

  {
    id: "streamlit-dashboard-project",
    title: "Interactive Data Dashboard with Streamlit",
    category: "Web Application",
    icon: "LayoutDashboard",
    description: "Build a fully interactive web dashboard using Streamlit that lets users upload data, filter, visualize, and download results — all in the browser.",
    difficulty: "Advanced",
    estimatedTime: "5-6 hours",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    objectives: [
      "Build an interactive web app with Streamlit",
      "Allow users to upload CSV files",
      "Add interactive filters and controls",
      "Create dynamic charts that respond to user input",
      "Enable data download from the app",
    ],
    dataset: "Users upload their own CSV file, or use the built-in sample data. No pre-download needed.",
    setupSteps: [
      "1. Install Python 3.10+",
      "2. mkdir streamlit-dashboard && cd streamlit-dashboard",
      "3. python -m venv venv && activate it",
      "4. pip install streamlit pandas plotly",
      "5. Create app.py (the main application file)",
      "6. Run: streamlit run app.py (this starts a local web server)",
      "7. Your browser opens automatically at http://localhost:8501",
    ],
    code: `import streamlit as st
import pandas as pd
import plotly.express as px
import numpy as np

# Page configuration
st.set_page_config(
    page_title="Data Analysis Dashboard",
    page_icon="📊",
    layout="wide"
)

# Title
st.title("📊 Interactive Data Analysis Dashboard")
st.markdown("Upload your CSV file or use sample data to explore interactively.")

# Sidebar
st.sidebar.header("Settings")

# Data source selection
data_source = st.sidebar.radio(
    "Choose data source:",
    ["Upload CSV", "Use Sample Data"]
)

if data_source == "Upload CSV":
    uploaded_file = st.sidebar.file_uploader(
        "Upload CSV file", type=["csv"])
    if uploaded_file is not None:
        df = pd.read_csv(uploaded_file)
    else:
        st.info("Please upload a CSV file or select 'Use Sample Data'")
        st.stop()
else:
    # Generate sample data
    np.random.seed(42)
    n = 500
    df = pd.DataFrame({
        "product": np.random.choice(
            ["Laptop", "Phone", "Tablet", "Speaker"], n),
        "region": np.random.choice(
            ["North", "South", "East", "West"], n),
        "sales": np.random.exponential(500, n).round(2),
        "quantity": np.random.randint(1, 20, n),
        "date": pd.date_range("2024-01-01", periods=n, freq="D"),
        "rating": np.random.uniform(1, 5, n).round(1)
    })
    st.success("Using sample data (500 records)")

# Display data
st.header("Data Preview")
st.dataframe(df.head(100), use_container_width=True)

# Basic statistics
st.header("Summary Statistics")
col1, col2, col3 = st.columns(3)
col1.metric("Total Rows", len(df))
col2.metric("Total Columns", len(df.columns))
col3.metric("Missing Values", df.isnull().sum().sum())

# Column selector
numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
categorical_cols = df.select_dtypes(
    include=["object"]).columns.tolist()

# Filters
st.header("Filters")
filter_col = st.selectbox(
    "Filter by column:", ["No filter"] + categorical_cols)

if filter_col != "No filter":
    unique_values = df[filter_col].unique()
    selected = st.multiselect(
        f"Select {filter_col} values:", unique_values,
        default=unique_values[:3])
    df_filtered = df[df[filter_col].isin(selected)]
else:
    df_filtered = df.copy()

st.write(f"Showing {len(df_filtered)} of {len(df)} rows")

# Charts
st.header("Visualizations")
col_a, col_b = st.columns(2)

with col_a:
    if numeric_cols:
        x_col = st.selectbox("X axis:", df.columns, key="x")
        chart_type = st.selectbox(
            "Chart type:", ["Bar", "Line", "Scatter", "Histogram"])

        if chart_type == "Bar":
            fig = px.bar(df_filtered, x=x_col, y=numeric_cols[0])
        elif chart_type == "Line":
            fig = px.line(df_filtered, x=x_col, y=numeric_cols[0])
        elif chart_type == "Scatter":
            fig = px.scatter(df_filtered, x=x_col, y=numeric_cols[0])
        elif chart_type == "Histogram":
            fig = px.histogram(df_filtered, x=x_col)

        st.plotly_chart(fig, use_container_width=True)

with col_b:
    if len(numeric_cols) >= 2:
        st.subheader("Correlation Heatmap")
        corr = df_filtered[numeric_cols].corr()
        fig = px.imshow(corr, color_continuous_scale="RdBu",
                        zmin=-1, zmax=1)
        st.plotly_chart(fig, use_container_width=True)

# Group by analysis
st.header("Group Analysis")
if categorical_cols and numeric_cols:
    group_col = st.selectbox("Group by:", categorical_cols)
    agg_col = st.selectbox("Aggregate:", numeric_cols)
    agg_func = st.selectbox(
        "Function:", ["mean", "sum", "count", "min", "max"])

    grouped = df_filtered.groupby(group_col)[agg_col].agg(agg_func)
    st.bar_chart(grouped)

# Download filtered data
st.header("Export")
csv = df_filtered.to_csv(index=False).encode()
st.download_button(
    "Download Filtered Data as CSV",
    data=csv,
    file_name="filtered_data.csv",
    mime="text/csv"
)`,
    codeExplanation: "This is a complete Streamlit web application. It lets users upload their own CSV or use sample data, shows a data preview with key metrics, provides interactive filters, dynamic charts (bar, line, scatter, histogram), a correlation heatmap, group-by analysis with aggregation, and a download button to export filtered data. The entire app runs in the browser.",
    runSteps: [
      "1. Run: streamlit run app.py (note: 'streamlit run', not 'python')",
      "2. Your browser opens automatically at http://localhost:8501",
      "3. Select 'Use Sample Data' or upload your own CSV file",
      "4. Use the filters and chart selectors to explore the data interactively",
      "5. Click 'Download Filtered Data as CSV' to export results",
      "6. To stop: press Ctrl+C in the terminal",
    ],
    expectedOutput: "A full interactive web dashboard opens in your browser. You can upload data, filter by categories, choose chart types, view correlations, analyze groups, and download results — all without writing code.",
    enhancements: [
      "Add user authentication for multi-user access",
      "Connect to a live database instead of CSV upload",
      "Add machine learning predictions (regression, classification)",
      "Deploy to Streamlit Cloud for public access",
    ],
  },

  {
    id: "csv-excel-data-analysis",
    title: "CSV & Excel Data Analysis Toolkit",
    category: "Data Analysis",
    icon: "FileSpreadsheet",
    description: "Load any CSV or Excel file and perform a full suite of data analysis operations — cleaning, filtering, grouping, pivot tables, statistical summaries, and visualizations. Step-by-step guide to run on your desktop.",
    difficulty: "Beginner",
    estimatedTime: "2-3 hours",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "openpyxl"],
    objectives: [
      "Load data from both CSV and Excel files",
      "Clean data — handle missing values, duplicates, and type conversions",
      "Perform filtering, sorting, and conditional selection",
      "Create group-by aggregations and pivot tables",
      "Generate statistical summaries and correlation analysis",
      "Visualize data with multiple chart types",
      "Export cleaned and analyzed results back to CSV and Excel",
    ],
    dataset: "The project generates a sample employee dataset CSV automatically. You can also replace it with your own CSV or Excel file — just change the filename in the script.",
    setupSteps: [
      "1. Install Python 3.10+ from python.org (check 'Add to PATH' during install)",
      "2. Open Command Prompt (Windows) or Terminal (Mac/Linux)",
      "3. Create a project folder: mkdir csv-analysis && cd csv-analysis",
      "4. Create a virtual environment: python -m venv venv",
      "5. Activate it — Windows: venv\\Scripts\\activate | Mac/Linux: source venv/bin/activate",
      "6. Install packages: pip install pandas matplotlib seaborn numpy openpyxl",
      "7. Create a file named generate_data.py (creates a sample CSV file)",
      "8. Create a file named analyze.py (the main analysis script)",
      "9. Run generate_data.py first: python generate_data.py",
      "10. Then run the analysis: python analyze.py",
      "11. To use your own file: replace 'employee_data.csv' with your filename in analyze.py",
      "12. For Excel files: change pd.read_csv('employee_data.csv') to pd.read_excel('your_file.xlsx')",
    ],
    code: `# ============================================
# generate_data.py — Run this first to create sample data
# ============================================
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

# Generate 500 employee records
n = 500
departments = ["Sales", "Engineering", "HR", "Marketing",
               "Finance", "Operations"]
cities = ["Mumbai", "Delhi", "Bangalore", "Pune",
          "Chennai", "Kolkata"]
genders = ["Male", "Female"]

df = pd.DataFrame({
    "employee_id": range(1, n + 1),
    "name": [f"Employee_{i}" for i in range(1, n + 1)],
    "department": np.random.choice(departments, n),
    "city": np.random.choice(cities, n),
    "gender": np.random.choice(genders, n),
    "age": np.random.randint(22, 60, n),
    "experience_years": np.random.randint(0, 35, n),
    "salary": np.zeros(n),
    "performance_score": np.clip(
        np.random.normal(7, 1.5, n), 1, 10).round(1),
    "join_date": [
        datetime(2015, 1, 1) + timedelta(
            days=np.random.randint(0, 365 * 10))
        for _ in range(n)
    ],
})

# Realistic salary based on department, experience, age
base_salary = {"Sales": 40000, "Engineering": 60000,
               "HR": 45000, "Marketing": 50000,
               "Finance": 55000, "Operations": 42000}
df["salary"] = df.apply(
    lambda r: base_salary[r["department"]]
    + r["experience_years"] * 2500
    + np.random.normal(0, 5000), axis=1
).round(0)

# Add some missing values and duplicates for cleaning practice
df.loc[np.random.choice(n, 20, replace=False), "salary"] = np.nan
df.loc[np.random.choice(n, 10, replace=False), "age"] = np.nan
df = pd.concat([df, df.iloc[:5]], ignore_index=True)  # 5 duplicates

df.to_csv("employee_data.csv", index=False)
print(f"Generated {len(df)} employee records -> employee_data.csv")
print("The data includes missing values and duplicates for cleaning practice.")`,
    codeExplanation: "This script creates a realistic employee dataset with 505 rows (including 5 duplicates and some missing values) and saves it as a CSV. It includes departments, cities, salaries, performance scores, and join dates — everything needed to practice data cleaning and analysis.",
    runSteps: [
      "1. In your terminal: python generate_data.py (creates employee_data.csv)",
      "2. Then: python analyze.py (runs the full analysis pipeline)",
      "3. Terminal shows step-by-step analysis output with statistics",
      "4. Charts appear in a window — close each to see the next",
      "5. Cleaned data is saved as cleaned_employee_data.csv and cleaned_employee_data.xlsx",
      "6. Open the Excel file in Microsoft Excel to verify the cleaned data",
    ],
    expectedOutput: "Terminal output shows each analysis step with statistics. Multiple chart windows appear showing distributions, correlations, and group comparisons. Two output files are created: a cleaned CSV and a cleaned Excel file with multiple sheets.",
    enhancements: [
      "Replace the sample data with your own CSV or Excel file",
      "Add more chart types (box plots, heatmaps, pair plots)",
      "Build an interactive version with Streamlit",
      "Add outlier detection and removal",
      "Export a formatted Excel report with charts embedded",
    ],
  },

  {
    id: "web-scraping-guide",
    title: "Web Scraping Project — Step-by-Step Desktop Guide",
    category: "Web Scraping",
    icon: "Globe",
    description: "A complete hands-on web scraping project that extracts product data from a real website. Includes step-by-step instructions to install, configure, run, and analyze — all from your desktop.",
    difficulty: "Intermediate",
    estimatedTime: "3-4 hours",
    technologies: ["Python", "Requests", "BeautifulSoup", "Pandas", "Selenium"],
    objectives: [
      "Understand how websites are structured (HTML, CSS classes, IDs)",
      "Install and set up Python web scraping libraries on your desktop",
      "Scrape product names, prices, ratings, and availability from a real website",
      "Handle multiple pages (pagination) automatically",
      "Clean the scraped data and remove unwanted characters",
      "Save scraped data to CSV and Excel files",
      "Analyze scraped data with statistics and visualizations",
      "Scrape JavaScript-loaded content using Selenium",
    ],
    dataset: "Scraped from books.toscrape.com — a sandbox website specifically created for practicing web scraping safely and legally.",
    setupSteps: [
      "STEP 1: Install Python",
      "  1a. Go to python.org and download Python 3.10 or later",
      "  1b. Run the installer — IMPORTANT: check 'Add Python to PATH' before clicking Install",
      "  1c. Verify: open Command Prompt (Windows) or Terminal (Mac) and type: python --version",
      "  1d. You should see: Python 3.12.x (or similar)",
      "",
      "STEP 2: Create the project folder",
      "  2a. Open Command Prompt / Terminal",
      "  2b. Type: mkdir web-scraper && cd web-scraper",
      "  2c. Create a virtual environment: python -m venv venv",
      "  2d. Activate it — Windows: venv\\Scripts\\activate | Mac: source venv/bin/activate",
      "  2e. You should see (venv) at the start of your command line",
      "",
      "STEP 3: Install required packages",
      "  3a. Run: pip install requests beautifulsoup4 pandas matplotlib openpyxl selenium webdriver-manager",
      "  3b. Wait for all packages to download and install",
      "  3c. Verify: python -c \"import requests, bs4, pandas; print('All packages installed')\"",
      "",
      "STEP 4: Create the scraper script",
      "  4a. Create a file named scraper.py in your web-scraper folder",
      "  4b. Open it in a text editor (VS Code, Notepad++, or any editor)",
      "  4c. Copy the code from the code section below and paste it into scraper.py",
      "  4d. Save the file",
      "",
      "STEP 5: Run the scraper",
      "  5a. In your terminal (with venv activated), run: python scraper.py",
      "  5b. Watch the terminal — it shows progress for each page being scraped",
      "  5c. After scraping completes, analysis results print automatically",
      "  5d. Two files are created: scraped_books.csv and scraped_books.xlsx",
      "  5e. A chart window opens showing price distribution and rating analysis",
      "  5f. Close the chart window to finish",
    ],
    code: `# ============================================
# scraper.py — Web Scraping Project
# Scrapes book data from books.toscrape.com
# ============================================

import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt
import time
import re

# ============================================
# PART 1: SCRAPING WITH REQUESTS + BEAUTIFULSOUP
# ============================================

print("=" * 60)
print("WEB SCRAPING PROJECT — Book Data Extractor")
print("=" * 60)

base_url = "https://books.toscrape.com/catalogue/page-{}.html"
all_books = []
total_pages = 10  # Scrape 10 pages (200 books)

for page in range(1, total_pages + 1):
    url = base_url.format(page)
    response = requests.get(url, timeout=10)

    if response.status_code != 200:
        print(f"  Page {page}: Failed (status {response.status_code})")
        continue

    soup = BeautifulSoup(response.text, "html.parser")
    books = soup.find_all("article", class_="product_pod")

    for book in books:
        # Extract title
        title = book.find("h3").find("a")["title"]

        # Extract price and clean it
        price_text = book.find("p", class_="price_color").text.strip()
        # Remove currency symbols and extra characters
        price = float(re.sub(r'[^\\d.]', '', price_text))

        # Extract rating (stored as CSS class: "star-rating Three")
        rating_class = book.find("p", class_="star-rating")["class"]
        rating_word = rating_class[1]  # One, Two, Three, Four, Five
        rating_map = {"One": 1, "Two": 2, "Three": 3,
                      "Four": 4, "Five": 5}
        rating = rating_map.get(rating_word, 0)

        # Extract availability
        availability = book.find("p", class_="instock").text.strip()

        # Extract product URL
        link = book.find("h3").find("a")["href"]
        product_url = f"https://books.toscrape.com/catalogue/{link}"

        all_books.append({
            "title": title,
            "price": price,
            "rating": rating,
            "availability": availability,
            "url": product_url,
        })

    print(f"  Page {page}/{total_pages}: Scraped {len(books)} books")
    time.sleep(1)  # Be polite — wait 1 second between requests

# ============================================
# PART 2: CREATE DATAFRAME AND SAVE
# ============================================

df = pd.DataFrame(all_books)
print(f"\\nTotal books scraped: {len(df)}")

# Save to CSV
df.to_csv("scraped_books.csv", index=False)
print("Saved to scraped_books.csv")

# Save to Excel
df.to_excel("scraped_books.xlsx", index=False)
print("Saved to scraped_books.xlsx")

# ============================================
# PART 3: DATA CLEANING
# ============================================

print("\\n--- Data Cleaning ---")
print(f"Original rows: {len(df)}")
print(f"Missing values: {df.isnull().sum().sum()}")
print(f"Duplicate titles: {df['title'].duplicated().sum()}")

# Remove duplicates
df = df.drop_duplicates(subset='title')
print(f"After removing duplicates: {len(df)}")

# ============================================
# PART 4: DATA ANALYSIS
# ============================================

print("\\n" + "=" * 60)
print("DATA ANALYSIS RESULTS")
print("=" * 60)

print(f"\\nTotal books: {len(df)}")
print(f"Price statistics:")
print(f"  Minimum: \\u00a3{df['price'].min():.2f}")
print(f"  Maximum: \\u00a3{df['price'].max():.2f}")
print(f"  Average: \\u00a3{df['price'].mean():.2f}")
print(f"  Median:  \\u00a3{df['price'].median():.2f}")
print(f"  Std Dev: \\u00a3{df['price'].std():.2f}")

print(f"\\nRating distribution:")
rating_dist = df["rating"].value_counts().sort_index()
for star, count in rating_dist.items():
    bar = "#" * count
    print(f"  {star} star: {count:3d} {bar}")

print(f"\\nAverage price by rating:")
print(df.groupby("rating")["price"].mean().round(2))

print(f"\\nTop 5 most expensive books:")
print(df.nlargest(5, "price")[["title", "price", "rating"]].to_string())

print(f"\\nTop 5 cheapest books:")
print(df.nsmallest(5, "price")[["title", "price", "rating"]].to_string())

print(f"\\nTop 5 highest rated books (by price):")
top_rated = df[df["rating"] == 5].nlargest(5, "price")
print(top_rated[["title", "price", "rating"]].to_string())

# ============================================
# PART 5: VISUALIZATION
# ============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle("Web Scraping Results — Book Analysis",
             fontsize=16, fontweight="bold")

# Price distribution histogram
axes[0, 0].hist(df["price"], bins=30, color="teal",
                edgecolor="white", alpha=0.8)
axes[0, 0].set_title("Price Distribution")
axes[0, 0].set_xlabel("Price (\\u00a3)")
axes[0, 0].set_ylabel("Number of Books")

# Rating distribution bar chart
rating_dist.plot(kind="bar", ax=axes[0, 1], color="coral",
                 edgecolor="white")
axes[0, 1].set_title("Rating Distribution")
axes[0, 1].set_xlabel("Rating (Stars)")
axes[0, 1].set_ylabel("Number of Books")
axes[0, 1].set_xticklabels(
    [f"{i} Star" for i in rating_dist.index], rotation=0)

# Price vs Rating scatter
axes[1, 0].scatter(df["rating"], df["price"], alpha=0.4,
                   color="steelblue")
axes[1, 0].set_title("Price vs Rating")
axes[1, 0].set_xlabel("Rating (Stars)")
axes[1, 0].set_ylabel("Price (\\u00a3)")

# Average price by rating
avg_price = df.groupby("rating")["price"].mean()
avg_price.plot(kind="bar", ax=axes[1, 1], color="seagreen",
               edgecolor="white")
axes[1, 1].set_title("Average Price by Rating")
axes[1, 1].set_xlabel("Rating (Stars)")
axes[1, 1].set_ylabel("Average Price (\\u00a3)")
axes[1, 1].set_xticklabels(
    [f"{i} Star" for i in avg_price.index], rotation=0)

plt.tight_layout()
plt.savefig("scraping_analysis.png", dpi=200)
print(f"\\nChart saved as scraping_analysis.png")
plt.show()

# ============================================
# PART 6 (BONUS): SCRAPING DYNAMIC CONTENT
# WITH SELENIUM
# ============================================
# Uncomment the code below to scrape JavaScript-loaded
# websites that BeautifulSoup cannot see.
#
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
#
# driver = webdriver.Chrome(ChromeDriverManager().install())
# driver.get("https://quotes.toscrape.com/js/")
#
# wait = WebDriverWait(driver, 10)
# quotes = wait.until(
#     EC.presence_of_all_elements_located(
#         (By.CLASS_NAME, "quote")))
#
# for quote in quotes:
#     text = quote.find_element(By.CLASS_NAME, "text").text
#     author = quote.find_element(By.CLASS_NAME, "author").text
#     print(f"{author}: {text}")
#
# driver.quit()

print("\\n" + "=" * 60)
print("SCRAPING COMPLETE!")
print("Files created:")
print("  - scraped_books.csv (open in Excel)")
print("  - scraped_books.xlsx (open in Excel)")
print("  - scraping_analysis.png (chart image)")
print("=" * 60)`,
    codeExplanation: "This script has 6 parts: (1) Scraping — uses Requests to fetch web pages and BeautifulSoup to parse HTML and extract book titles, prices, ratings, and availability from 10 pages. (2) Saving — stores data in both CSV and Excel formats. (3) Cleaning — removes duplicates and checks for missing values. (4) Analysis — calculates price statistics, rating distributions, and identifies top/bottom books. (5) Visualization — creates a 4-panel dashboard with price distribution, ratings, price-vs-rating scatter, and average price by rating. (6) Bonus — commented Selenium code for scraping JavaScript-loaded pages.",
    runSteps: [
      "1. Make sure your virtual environment is activated (you see (venv) in terminal)",
      "2. Run: python scraper.py",
      "3. Terminal shows scraping progress: 'Page 1/10: Scraped 20 books' for each page",
      "4. After scraping, data cleaning results print (duplicates removed, missing values checked)",
      "5. Analysis results print: price statistics, rating distribution with visual bars, top/bottom books",
      "6. A 4-panel chart window opens showing price distribution, ratings, and comparisons",
      "7. Close the chart window to finish",
      "8. Three files are created in your project folder:",
      "   - scraped_books.csv (open in Excel or any text editor)",
      "   - scraped_books.xlsx (open in Microsoft Excel)",
      "   - scraping_analysis.png (the chart image)",
    ],
    expectedOutput: "Terminal shows page-by-page scraping progress, then data cleaning results, then a full analysis report with price statistics and rating breakdowns. A 4-panel chart window appears with visualizations. Three output files are saved to your folder.",
    enhancements: [
      "Scrape all 50 pages (1000 books) by changing total_pages to 50",
      "Scrape book categories by following each book's URL and extracting the category",
      "Uncomment the Selenium section to scrape JavaScript-loaded websites",
      "Schedule the scraper to run daily using Windows Task Scheduler or cron",
      "Build a price tracking system that saves results with timestamps and shows price trends over time",
      "Add error handling for network timeouts and website structure changes",
      "Export results to a SQLite database for querying",
    ],
  },

  {
    id: "website-traffic-dashboard",
    title: "Website Traffic Dashboard",
    category: "Business Intelligence",
    icon: "Gauge",
    description: "Build a complete website traffic analytics pipeline — generate web traffic data in Python, store it in SQL, and visualize it in Power BI with KPIs, trends, and interactive dashboards.",
    difficulty: "Intermediate",
    estimatedTime: "4-5 hours",
    technologies: ["Power BI", "Python", "SQL", "Pandas", "MySQL"],
    objectives: [
      "Generate realistic website traffic data using Python",
      "Store and query traffic data in a SQL database (MySQL/SQLite)",
      "Design a star schema for traffic analytics (fact + dimension tables)",
      "Build interactive Power BI dashboards with KPIs and filters",
      "Analyze page views, sessions, bounce rates, and traffic sources",
      "Create time-series trend charts and geographic breakdowns",
    ],
    dataset: "Generated programmatically with Python — synthetic web traffic logs simulating 3 months of visitor data across multiple pages, sources, and devices. Can be adapted to use real Google Analytics or server log data.",
    setupSteps: [
      "STEP 1: Install Python and required packages",
      "  1a. Install Python 3.10+ from python.org",
      "  1b. Open terminal and run: pip install pandas numpy sqlalchemy pymysql",
      "  1c. (For SQLite instead of MySQL, no extra install needed — it's built into Python)",
      "",
      "STEP 2: Install MySQL (or use SQLite as a lightweight alternative)",
      "  2a. Download MySQL Community Server from dev.mysql.com",
      "  2b. Install and set a root password during setup",
      "  2c. Verify: mysql -u root -p (enter your password)",
      "  2d. Create database: CREATE DATABASE web_traffic;",
      "  2e. Alternative: use SQLite — just change the connection string to 'sqlite:///web_traffic.db'",
      "",
      "STEP 3: Create the project folder and generate data",
      "  3a. mkdir traffic-dashboard && cd traffic-dashboard",
      "  3b. Create generate_traffic_data.py (code below)",
      "  3c. Run: python generate_traffic_data.py",
      "  3d. This creates a CSV file 'web_traffic_data.csv' and loads it into SQL",
      "",
      "STEP 4: Create SQL schema and load data",
      "  4a. Create schema.sql (code below) to create dimension and fact tables",
      "  4b. Run the schema in MySQL: mysql -u root -p web_traffic < schema.sql",
      "  4c. The Python script already loads data — or import the CSV manually",
      "",
      "STEP 5: Set up Power BI",
      "  5a. Download and install Power BI Desktop from powerbi.microsoft.com (free)",
      "  5b. Open Power BI Desktop → Get Data → MySQL (or SQLite)",
      "  5c. Enter your server (localhost) and database name (web_traffic)",
      "  5d. Select the fact_traffic and dimension tables → Load",
      "  5e. Create relationships in the Model view if not auto-detected",
      "  5f. Build visuals using the DAX and visualization steps below",
    ],
    code: `# ============================================
# generate_traffic_data.py
# Generates website traffic data and loads into SQL
# ============================================

import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sqlalchemy import create_engine, text

np.random.seed(42)

# ============================================
# PART 1: GENERATE DIMENSION TABLES
# ============================================

# Pages dimension
pages = pd.DataFrame({
    "page_id": range(1, 11),
    "page_url": ["/home", "/about", "/products", "/pricing",
                 "/blog", "/contact", "/login", "/signup",
                 "/dashboard", "/checkout"],
    "page_category": ["Home", "About", "Product", "Pricing",
                      "Blog", "Contact", "Auth", "Auth",
                      "App", "Commerce"],
    "page_type": ["Landing", "Info", "Listing", "Info",
                  "Content", "Form", "Form", "Form",
                  "App", "Transaction"],
})

# Traffic sources dimension
sources = pd.DataFrame({
    "source_id": range(1, 8),
    "source_name": ["Organic Search", "Direct", "Social Media",
                    "Email", "Referral", "Paid Ads", "Other"],
    "source_medium": ["Search", "None", "Social", "Email",
                      "Referral", "CPC", "Unknown"],
})

# Devices dimension
devices = pd.DataFrame({
    "device_id": range(1, 5),
    "device_type": ["Desktop", "Mobile", "Tablet", "Other"],
})

# Countries dimension
countries = pd.DataFrame({
    "country_id": range(1, 11),
    "country_name": ["India", "United States", "United Kingdom",
                     "Canada", "Australia", "Germany",
                     "Singapore", "UAE", "Brazil", "Japan"],
    "region": ["Asia", "North America", "Europe", "North America",
               "Oceania", "Europe", "Asia", "Asia",
               "South America", "Asia"],
})

# ============================================
# PART 2: GENERATE FACT TABLE (TRAFFIC LOGS)
# ============================================

n_records = 10000
start_date = datetime(2024, 1, 1)
end_date = datetime(2024, 3, 31)
date_range_days = (end_date - start_date).days

# Generate session data
sessions = pd.DataFrame({
    "session_id": range(1, n_records + 1),
    "visitor_id": np.random.randint(1, 3000, n_records),
    "date_id": [start_date + timedelta(
        days=np.random.randint(0, date_range_days),
        hours=np.random.randint(0, 24),
        minutes=np.random.randint(0, 60)
    ) for _ in range(n_records)],
    "page_id": np.random.choice(pages["page_id"], n_records,
                                p=[0.25, 0.08, 0.15, 0.05,
                                   0.12, 0.05, 0.08, 0.07,
                                   0.10, 0.05]),
    "source_id": np.random.choice(sources["source_id"], n_records,
                                  p=[0.35, 0.20, 0.15, 0.10,
                                     0.08, 0.10, 0.02]),
    "device_id": np.random.choice(devices["device_id"], n_records,
                                  p=[0.45, 0.40, 0.10, 0.05]),
    "country_id": np.random.choice(countries["country_id"], n_records,
                                   p=[0.30, 0.20, 0.10, 0.08,
                                      0.06, 0.06, 0.06, 0.05,
                                      0.05, 0.04]),
})

# Session metrics
sessions["page_views"] = np.random.randint(1, 15, n_records)
sessions["session_duration_sec"] = np.random.exponential(180, n_records).round(0)
sessions["bounce_rate"] = np.where(
    sessions["page_views"] == 1, 1, 0)
sessions["is_new_visitor"] = np.where(
    sessions["visitor_id"] < 1500, 1, 0)

# Convert date to date_id for star schema
sessions["date_key"] = sessions["date_id"].dt.strftime("%Y%m%d").astype(int)
sessions["hour"] = sessions["date_id"].dt.hour

print(f"Generated {len(sessions)} traffic records")

# ============================================
# PART 3: SAVE TO CSV
# ============================================

sessions.to_csv("web_traffic_data.csv", index=False)
pages.to_csv("dim_pages.csv", index=False)
sources.to_csv("dim_sources.csv", index=False)
devices.to_csv("dim_devices.csv", index=False)
countries.to_csv("dim_countries.csv", index=False)
print("Saved CSV files")

# ============================================
# PART 4: LOAD INTO SQL DATABASE
# ============================================

# Use SQLite for easy setup — change to MySQL if needed:
# engine = create_engine("mysql+pymysql://root:password@localhost/web_traffic")
engine = create_engine("sqlite:///web_traffic.db")

sessions.rename(columns={"session_id": "fact_id"}).to_sql(
    "fact_traffic", engine, if_exists="replace", index=False)
pages.to_sql("dim_pages", engine, if_exists="replace", index=False)
sources.to_sql("dim_sources", engine, if_exists="replace", index=False)
devices.to_sql("dim_devices", engine, if_exists="replace", index=False)
countries.to_sql("dim_countries", engine, if_exists="replace", index=False)

print("Data loaded into SQL database")

# ============================================
# PART 5: VERIFY WITH SQL QUERIES
# ============================================

with engine.connect() as conn:
    print("\\n=== Total Sessions ===")
    print(conn.execute(text(
        "SELECT COUNT(*) FROM fact_traffic")).scalar())

    print("\\n=== Sessions by Source ===")
    result = conn.execute(text("""
        SELECT s.source_name, COUNT(*) as sessions
        FROM fact_traffic f
        JOIN dim_sources s ON f.source_id = s.source_id
        GROUP BY s.source_name
        ORDER BY sessions DESC
    """))
    for row in result:
        print(f"  {row[0]}: {row[1]}")

    print("\\n=== Bounce Rate by Device ===")
    result = conn.execute(text("""
        SELECT d.device_type,
               COUNT(*) as sessions,
               ROUND(AVG(f.bounce_rate) * 100, 1) as bounce_pct
        FROM fact_traffic f
        JOIN dim_devices d ON f.device_id = d.device_id
        GROUP BY d.device_type
        ORDER BY sessions DESC
    """))
    for row in result:
        print(f"  {row[0]}: {row[1]} sessions, {row[2]}% bounce")

    print("\\n=== Top 5 Pages by Views ===")
    result = conn.execute(text("""
        SELECT p.page_url, SUM(f.page_views) as total_views
        FROM fact_traffic f
        JOIN dim_pages p ON f.page_id = p.page_id
        GROUP BY p.page_url
        ORDER BY total_views DESC
        LIMIT 5
    """))
    for row in result:
        print(f"  {row[0]}: {row[1]} views")`,
    codeExplanation: "This script generates a complete web traffic dataset with 10,000 sessions across 3 months. It creates dimension tables (pages, sources, devices, countries) and a fact table with session metrics (page views, duration, bounce rate, new visitor flag). Data is saved to CSV files and loaded into a SQL database (SQLite by default, easily switchable to MySQL). The script ends with verification SQL queries joining fact and dimension tables.",
    runSteps: [
      "1. Run: python generate_traffic_data.py",
      "2. Terminal shows total sessions, breakdown by source, bounce rate by device, and top pages",
      "3. Five CSV files are created (web_traffic_data.csv, dim_*.csv) — open in Excel to inspect",
      "4. A SQLite database file (web_traffic.db) is created — or data is loaded into MySQL if configured",
      "5. Open Power BI Desktop → Get Data → connect to your database",
      "6. Load all 5 tables (fact_traffic + 4 dimension tables)",
      "7. In the Model view, verify relationships (fact_traffic.page_id → dim_pages.page_id, etc.)",
      "8. Build the dashboard using the DAX measures and visual layout described in the expected output",
    ],
    expectedOutput: `Python output: Total sessions (10,000), sessions by source (Organic Search leading), bounce rate by device (Mobile highest), top pages by views (/home leading).

Power BI Dashboard layout:
- Top row: 4 KPI cards — Total Sessions, Total Page Views, Avg Session Duration, Bounce Rate %
- Second row: Line chart showing daily sessions trend over 3 months, Bar chart of sessions by traffic source
- Third row: Donut chart of device breakdown, Map visual of sessions by country
- Fourth row: Table of top 10 pages by views, Bar chart of new vs returning visitors by week
- Slicers: Date range picker, Device type filter, Source filter

DAX Measures to create:
- Total Sessions = COUNT(fact_traffic[fact_id])
- Total Page Views = SUM(fact_traffic[page_views])
- Avg Session Duration = DIVIDE(AVERAGE(fact_traffic[session_duration_sec]), 60, 0) (in minutes)
- Bounce Rate % = DIVIDE(SUM(fact_traffic[bounce_rate]), COUNT(fact_traffic[fact_id])) * 100
- New Visitor % = DIVIDE(SUM(fact_traffic[is_new_visitor]), COUNT(fact_traffic[fact_id])) * 100`,
    enhancements: [
      "Connect Power BI to real Google Analytics data using the Google Analytics connector",
      "Add real-time traffic monitoring with streaming datasets",
      "Build a funnel analysis showing visitor journey from landing to checkout",
      "Add cohort analysis to track returning visitor behavior over time",
      "Create row-level security so different teams see only their page data",
      "Deploy the dashboard to Power BI Service for online access",
    ],
  },

  {
    id: "loan-default-risk-analysis",
    title: "Loan Default Risk Analysis",
    category: "Financial Analysis",
    icon: "ShieldAlert",
    description: "Analyze loan applicant data to predict default risk using Python and SQL. Build a complete risk scoring pipeline from data generation to model evaluation to visual dashboard.",
    difficulty: "Advanced",
    estimatedTime: "5-6 hours",
    technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    objectives: [
      "Generate realistic loan applicant data with Python",
      "Store and query loan data in SQL with proper schema design",
      "Perform exploratory data analysis (EDA) on loan features",
      "Engineer features for risk modeling",
      "Train a logistic regression model to predict default probability",
      "Evaluate model with accuracy, precision, recall, and ROC-AUC",
      "Create a risk scoring dashboard with visualizations",
    ],
    dataset: "Generated programmatically — synthetic loan application data with 5,000 records including income, credit score, loan amount, employment history, and default status. Can be adapted to use real data from Kaggle (search 'loan default dataset' or 'Lending Club dataset').",
    setupSteps: [
      "STEP 1: Install Python and packages",
      "  1a. Install Python 3.10+ from python.org",
      "  1b. pip install pandas numpy matplotlib seaborn scikit-learn sqlalchemy",
      "",
      "STEP 2: Create project folder",
      "  2a. mkdir loan-risk-analysis && cd loan-risk-analysis",
      "  2b. Create loan_analysis.py (code below)",
      "",
      "STEP 3: Run the analysis",
      "  3a. python loan_analysis.py",
      "  3b. The script generates data, stores in SQL, runs EDA, trains model, and creates visualizations",
      "  3c. Terminal output shows SQL queries, EDA statistics, and model evaluation metrics",
      "  3d. Chart windows appear with EDA plots and model evaluation charts",
      "  3e. A risk-scored CSV file is exported for use in Power BI or Excel",
    ],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (classification_report,
    confusion_matrix, roc_curve, roc_auc_score)
from sqlalchemy import create_engine, text

np.random.seed(42)

# ============================================
# PART 1: GENERATE LOAN DATA
# ============================================

n = 5000
employment_types = ["Salaried", "Self-Employed", "Business"]
loan_purposes = ["Home", "Car", "Education", "Personal",
                 "Business", "Debt Consolidation"]
home_ownership = ["Own", "Rent", "Mortgage"]

df = pd.DataFrame({
    "loan_id": range(1, n + 1),
    "applicant_age": np.clip(np.random.normal(35, 10, n), 21, 65).round(0),
    "annual_income": np.random.exponential(60000, n).round(0),
    "credit_score": np.clip(np.random.normal(680, 80, n), 300, 850).round(0),
    "loan_amount": np.random.exponential(25000, n).round(0),
    "loan_term_months": np.random.choice([12, 24, 36, 48, 60], n),
    "employment_years": np.clip(np.random.exponential(7, n), 0, 30).round(1),
    "employment_type": np.random.choice(employment_types, n),
    "loan_purpose": np.random.choice(loan_purposes, n),
    "home_ownership": np.random.choice(home_ownership, n,
                                       p=[0.30, 0.45, 0.25]),
    "existing_debt": np.random.exponential(15000, n).round(0),
    "dependents": np.random.randint(0, 5, n),
})

# Debt-to-Income ratio
df["dti_ratio"] = (df["existing_debt"] /
                   df["annual_income"] * 100).round(1)

# Loan-to-Income ratio
df["lti_ratio"] = (df["loan_amount"] /
                   df["annual_income"] * 100).round(1)

# Generate default label based on risk factors
# (lower credit score, higher DTI, higher LTI → more likely to default)
risk_score = (
    (850 - df["credit_score"]) / 850 * 40 +
    df["dti_ratio"].clip(0, 50) / 50 * 25 +
    df["lti_ratio"].clip(0, 50) / 50 * 20 +
    (df["employment_years"] < 2).astype(int) * 10 +
    (df["annual_income"] < 30000).astype(int) * 5
)
default_prob = 1 / (1 + np.exp(-(risk_score - 35) / 8))
df["defaulted"] = np.random.binomial(1, default_prob)

print(f"Generated {len(df)} loan records")
print(f"Default rate: {df['defaulted'].mean()*100:.1f}%")

# ============================================
# PART 2: STORE IN SQL DATABASE
# ============================================

engine = create_engine("sqlite:///loan_data.db")
df.to_sql("loan_applications", engine,
          if_exists="replace", index=False)
print("Data stored in SQL database (loan_data.db)")

# SQL Analysis
with engine.connect() as conn:
    print("\\n=== Default Rate by Credit Score Range ===")
    result = conn.execute(text("""
        SELECT
            CASE
                WHEN credit_score < 580 THEN 'Poor (300-579)'
                WHEN credit_score < 670 THEN 'Fair (580-669)'
                WHEN credit_score < 740 THEN 'Good (670-739)'
                WHEN credit_score < 800 THEN 'Very Good (740-799)'
                ELSE 'Excellent (800+)'
            END as credit_range,
            COUNT(*) as loans,
            SUM(defaulted) as defaults,
            ROUND(AVG(defaulted) * 100, 1) as default_rate
        FROM loan_applications
        GROUP BY credit_range
        ORDER BY credit_range
    """))
    for row in result:
        print(f"  {row[0]}: {row[1]} loans, "
              f"{row[2]} defaults ({row[3]}%)")

    print("\\n=== Default Rate by Loan Purpose ===")
    result = conn.execute(text("""
        SELECT loan_purpose,
               COUNT(*) as loans,
               ROUND(AVG(defaulted) * 100, 1) as default_rate
        FROM loan_applications
        GROUP BY loan_purpose
        ORDER BY default_rate DESC
    """))
    for row in result:
        print(f"  {row[0]}: {row[1]} loans, {row[2]}% default")

    print("\\n=== Average Income by Employment Type ===")
    result = conn.execute(text("""
        SELECT employment_type,
               COUNT(*) as count,
               ROUND(AVG(annual_income), 0) as avg_income,
               ROUND(AVG(defaulted) * 100, 1) as default_rate
        FROM loan_applications
        GROUP BY employment_type
        ORDER BY default_rate DESC
    """))
    for row in result:
        print(f"  {row[0]}: {row[1]} applicants, "
              f"avg income \${row[2]}, {row[3]}% default")

# ============================================
# PART 3: EXPLORATORY DATA ANALYSIS (EDA)
# ============================================

print("\\n=== EDA Summary ===")
print(f"\\nNumeric features correlation with default:")
numeric_cols = ["applicant_age", "annual_income", "credit_score",
                "loan_amount", "employment_years", "existing_debt",
                "dti_ratio", "lti_ratio", "dependents"]
corr = df[numeric_cols + ["defaulted"]].corr()["defaulted"]
print(corr.drop("defaulted").sort_values(ascending=False).round(3))

# ============================================
# PART 4: FEATURE ENGINEERING & MODELING
# ============================================

# Encode categorical variables
df_model = df.copy()
df_model = pd.get_dummies(df_model,
    columns=["employment_type", "loan_purpose",
             "home_ownership"],
    drop_first=True)

# Select features
feature_cols = [c for c in df_model.columns
    if c not in ["loan_id", "defaulted"]]
X = df_model[feature_cols]
y = df_model["defaulted"]

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train logistic regression
model = LogisticRegression(random_state=42, max_iter=1000)
model.fit(X_train_scaled, y_train)

# Predictions
y_pred = model.predict(X_test_scaled)
y_prob = model.predict_proba(X_test_scaled)[:, 1]

# Evaluation
print("\\n=== Model Evaluation ===")
print(f"\\nAccuracy: {(y_pred == y_test).mean()*100:.1f}%")
print(f"ROC-AUC: {roc_auc_score(y_test, y_prob):.3f}")
print(f"\\nClassification Report:")
print(classification_report(y_test, y_pred,
      target_names=["No Default", "Default"]))

# Feature importance
importance = pd.DataFrame({
    "feature": feature_cols,
    "coefficient": model.coef_[0],
}).sort_values("coefficient", key=abs, ascending=False)
print(f"\\nTop 10 Most Important Features:")
print(importance.head(10).to_string(index=False))

# ============================================
# PART 5: RISK SCORING
# ============================================

# Assign risk scores to all applicants
df["default_probability"] = model.predict_proba(
    scaler.transform(X))[:, 1]
df["risk_category"] = pd.cut(df["default_probability"],
    bins=[0, 0.1, 0.25, 0.5, 1.0],
    labels=["Low Risk", "Medium Risk", "High Risk", "Very High Risk"])

print("\\n=== Risk Category Distribution ===")
print(df["risk_category"].value_counts())

# Export risk-scored data
df.to_csv("loan_risk_scores.csv", index=False)
print("\\nExported risk scores to loan_risk_scores.csv")

# ============================================
# PART 6: VISUALIZATION DASHBOARD
# ============================================

fig, axes = plt.subplots(2, 3, figsize=(18, 10))
fig.suptitle("Loan Default Risk Analysis Dashboard",
             fontsize=16, fontweight="bold")

# Credit score distribution by default status
sns.histplot(data=df, x="credit_score", hue="defaulted",
             kde=True, ax=axes[0, 0], bins=30, alpha=0.6)
axes[0, 0].set_title("Credit Score Distribution by Default")

# DTI vs Default scatter
axes[0, 1].scatter(df[df["defaulted"]==0]["dti_ratio"],
                   df[df["defaulted"]==0]["loan_amount"],
                   alpha=0.3, color="green", label="No Default", s=10)
axes[0, 1].scatter(df[df["defaulted"]==1]["dti_ratio"],
                   df[df["defaulted"]==1]["loan_amount"],
                   alpha=0.3, color="red", label="Default", s=10)
axes[0, 1].set_xlabel("DTI Ratio (%)")
axes[0, 1].set_ylabel("Loan Amount ($)")
axes[0, 1].set_title("DTI vs Loan Amount")
axes[0, 1].legend()

# Default rate by loan purpose
purpose_default = df.groupby("loan_purpose")["defaulted"].mean() * 100
purpose_default.sort_values().plot(kind="barh",
    ax=axes[0, 2], color="coral")
axes[0, 2].set_title("Default Rate by Loan Purpose (%)")
axes[0, 2].set_xlabel("Default Rate %")

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues",
            ax=axes[1, 0],
            xticklabels=["No Default", "Default"],
            yticklabels=["No Default", "Default"])
axes[1, 0].set_title("Confusion Matrix")
axes[1, 0].set_xlabel("Predicted")
axes[1, 0].set_ylabel("Actual")

# ROC curve
fpr, tpr, _ = roc_curve(y_test, y_prob)
axes[1, 1].plot(fpr, tpr, color="darkorange", linewidth=2)
axes[1, 1].plot([0, 1], [0, 1], "k--", alpha=0.5)
axes[1, 1].set_title(f"ROC Curve (AUC = {roc_auc_score(y_test, y_prob):.3f})")
axes[1, 1].set_xlabel("False Positive Rate")
axes[1, 1].set_ylabel("True Positive Rate")

# Risk category distribution
df["risk_category"].value_counts().plot(kind="bar",
    ax=axes[1, 2], color=["green", "yellow", "orange", "red"])
axes[1, 2].set_title("Risk Category Distribution")
axes[1, 2].set_xlabel("Risk Category")
axes[1, 2].set_xticklabels(
    df["risk_category"].value_counts().index, rotation=30)

plt.tight_layout()
plt.savefig("loan_risk_dashboard.png", dpi=200)
plt.show()`,
    codeExplanation: "This script is a complete loan default risk analysis pipeline: (1) Generates 5,000 loan applications with realistic features and a default label driven by credit score, debt-to-income ratio, and employment. (2) Stores data in SQL and runs analytical queries (default rate by credit score range, loan purpose, employment type). (3) Performs EDA with correlation analysis. (4) Trains a logistic regression model with feature scaling, evaluates with accuracy, ROC-AUC, classification report, and confusion matrix. (5) Assigns risk scores and categories (Low/Medium/High/Very High) to all applicants. (6) Creates a 6-panel dashboard with credit score distributions, DTI scatter, default rates, confusion matrix, ROC curve, and risk distribution.",
    runSteps: [
      "1. Run: python loan_analysis.py",
      "2. Terminal shows: default rate, SQL query results (default rates by credit range, purpose, employment type), EDA correlations, model evaluation (accuracy, ROC-AUC, classification report), feature importance, and risk category distribution",
      "3. A 6-panel dashboard appears: credit score distributions, DTI scatter, default rate by purpose, confusion matrix, ROC curve, and risk category bars",
      "4. Dashboard saved as loan_risk_dashboard.png",
      "5. Risk-scored data exported to loan_risk_scores.csv — open in Excel or import to Power BI for further analysis",
      "6. SQLite database file loan_data.db is created — query it with any SQL tool",
    ],
    expectedOutput: `Terminal: Default rate (~20-25%), SQL analysis showing higher default rates for lower credit scores and debt consolidation loans, model accuracy ~75-80%, ROC-AUC ~0.75-0.85, top features being credit score, DTI ratio, and LTI ratio.

Dashboard (6 panels):
1. Credit score histogram split by default status — defaulted loans skew toward lower scores
2. DTI vs Loan Amount scatter — defaults cluster at higher DTI ratios
3. Default rate by loan purpose — debt consolidation typically highest
4. Confusion matrix — shows true/false positives and negatives
5. ROC curve — shows model discrimination ability (AUC > 0.75)
6. Risk category bar chart — most applicants in Low/Medium risk

Output files: loan_risk_scores.csv (with default probability and risk category per applicant), loan_data.db (SQL database), loan_risk_dashboard.png`,
    enhancements: [
      "Use real Lending Club data from Kaggle for authentic analysis",
      "Try Random Forest or XGBoost for better predictive accuracy",
      "Add SHAP values for explainable AI — understand why each applicant is flagged",
      "Build a Streamlit web app where users input applicant details and get a risk score",
      "Connect the risk scores to Power BI for an executive risk dashboard",
      "Add cost-benefit analysis — calculate financial impact of false approvals vs false rejections",
    ],
  },

  {
    id: "powerbi-sales-analytics",
    title: "Power BI Sales Analytics Dashboard",
    category: "Business Intelligence",
    icon: "PieChart",
    description: "Build a complete Power BI dashboard from scratch — generate sales data with Python, design a SQL data warehouse schema, and create an interactive dashboard with DAX measures, drill-downs, and dynamic filtering.",
    difficulty: "Advanced",
    estimatedTime: "5-6 hours",
    technologies: ["Power BI", "SQL", "Python", "Pandas", "DAX"],
    objectives: [
      "Generate a realistic sales dataset using Python with seasonality and trends",
      "Design a star schema data warehouse in SQL (fact + dimension tables)",
      "Load data into Power BI and build a proper data model with relationships",
      "Write DAX measures for KPIs (revenue, profit margin, YoY growth, running totals)",
      "Create interactive visuals with drill-downs, tooltips, and cross-filtering",
      "Add dynamic filtering with slicers and bookmarks",
      "Publish and share the dashboard design",
    ],
    dataset: "Generated programmatically with Python — 2 years of sales data (2023-2024) across 5 regions, 10 products, 4 sales channels, and 50 sales reps. Includes seasonality, growth trends, and discount effects. Adaptable to real ERP data from SAP, Salesforce, or any CRM.",
    setupSteps: [
      "STEP 1: Install Python and generate data",
      "  1a. Install Python 3.10+ from python.org",
      "  1b. pip install pandas numpy sqlalchemy",
      "  1c. mkdir powerbi-sales && cd powerbi-sales",
      "  1d. Create generate_sales_data.py (code below)",
      "  1e. Run: python generate_sales_data.py",
      "  1f. This creates CSV files and a SQLite database with star schema",
      "",
      "STEP 2: Install Power BI Desktop",
      "  2a. Download Power BI Desktop from powerbi.microsoft.com (free)",
      "  2b. Install and launch",
      "  2c. Click 'Get Data' → 'SQLite' (or 'Text/CSV' if using CSV files)",
      "  2d. Browse to powerbi-sales/sales_warehouse.db",
      "  2e. Select all tables (fact_sales, dim_product, dim_region, dim_channel, dim_salesrep, dim_date)",
      "  2f. Click 'Load' to import all tables",
      "",
      "STEP 3: Build the Data Model",
      "  3a. Go to Model view (relationship icon on left sidebar)",
      "  3b. Verify or create these relationships:",
      "    - fact_sales[product_id] → dim_product[product_id]",
      "    - fact_sales[region_id] → dim_region[region_id]",
      "    - fact_sales[channel_id] → dim_channel[channel_id]",
      "    - fact_sales[salesrep_id] → dim_salesrep[salesrep_id]",
      "    - fact_sales[date_key] → dim_date[date_key]",
      "  3c. Set relationship cardinality to 'Many-to-One' (fact → dimension)",
      "  3d. Ensure cross-filter direction is 'Single' (dimension filters fact)",
      "",
      "STEP 4: Create DAX Measures",
      "  4a. Go to Report view → click 'New Measure' in the Home ribbon",
      "  4b. Create each DAX measure listed in the expected output section",
      "  4c. These measures power all the KPIs and visuals",
      "",
      "STEP 5: Build Dashboard Visuals",
      "  5a. Follow the layout described in the expected output section",
      "  5b. Add KPI cards, charts, maps, tables, and slicers",
      "  5c. Configure cross-filtering between visuals",
      "  5d. Add tooltips for additional context on hover",
      "",
      "STEP 6: Format and Polish",
      "  6a. Apply a consistent color theme (dark background, teal accents)",
      "  6b. Add a dashboard title and subtitle",
      "  6c. Configure page navigation if using multiple report pages",
      "  6d. Save the .pbix file",
    ],
    code: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sqlalchemy import create_engine, text

np.random.seed(42)

# ============================================
# PART 1: GENERATE DIMENSION TABLES
# ============================================

# Date dimension (2 years: 2023-2024)
dates = pd.date_range("2023-01-01", "2024-12-31", freq="D")
dim_date = pd.DataFrame({
    "date_key": [int(d.strftime("%Y%m%d")) for d in dates],
    "date": dates,
    "year": dates.year,
    "quarter": dates.quarter,
    "month": dates.month,
    "month_name": dates.month_name(),
    "week_of_year": dates.isocalendar().week,
    "day_of_week": dates.day_name(),
    "is_weekend": dates.dayofweek.isin([5, 6]).astype(int),
})
print(f"Date dimension: {len(dim_date)} days")

# Product dimension
products = ["Laptop Pro", "Laptop Air", "Phone X", "Phone Lite",
            "Tablet S", "Watch Sport", "Watch Classic",
            "Earbuds Pro", "Speaker Mini", "Charger Pack"]
dim_product = pd.DataFrame({
    "product_id": range(1, 11),
    "product_name": products,
    "category": ["Laptop", "Laptop", "Phone", "Phone",
                 "Tablet", "Wearable", "Wearable",
                 "Audio", "Audio", "Accessory"],
    "cost_price": [800, 600, 400, 200, 300, 150, 350,
                   80, 60, 15],
    "list_price": [1200, 900, 700, 350, 500, 250, 550,
                   150, 100, 30],
})

# Region dimension
dim_region = pd.DataFrame({
    "region_id": range(1, 6),
    "region_name": ["North", "South", "East", "West", "Central"],
    "country": "India",
    "manager": ["Rajesh K.", "Priya S.", "Amit G.",
                "Sneha P.", "Vikram M."],
})

# Channel dimension
dim_channel = pd.DataFrame({
    "channel_id": range(1, 5),
    "channel_name": ["Online Store", "Retail", "Partner",
                     "Direct Sales"],
    "channel_type": ["Digital", "Physical", "B2B", "B2B"],
})

# Sales rep dimension
rep_names = [f"Rep_{i}" for i in range(1, 51)]
dim_salesrep = pd.DataFrame({
    "salesrep_id": range(1, 51),
    "rep_name": rep_names,
    "region_id": np.random.choice(dim_region["region_id"], 50),
    "hire_date": [datetime(2020, 1, 1) + timedelta(
        days=np.random.randint(0, 1000)) for _ in range(50)],
    "target_quota": np.random.uniform(50000, 200000, 50).round(0),
})

# ============================================
# PART 2: GENERATE FACT TABLE (SALES)
# ============================================

n_records = 8000
start_date = datetime(2023, 1, 1)
date_range_days = 730  # 2 years

# Generate sales transactions
fact_sales = pd.DataFrame({
    "transaction_id": range(1, n_records + 1),
    "date_key": [int((start_date + timedelta(
        days=np.random.randint(0, date_range_days))
    ).strftime("%Y%m%d")) for _ in range(n_records)],
    "product_id": np.random.choice(dim_product["product_id"],
        n_records, p=[0.10, 0.12, 0.15, 0.10, 0.08,
                      0.10, 0.07, 0.13, 0.10, 0.05]),
    "region_id": np.random.choice(dim_region["region_id"],
        n_records, p=[0.25, 0.20, 0.20, 0.20, 0.15]),
    "channel_id": np.random.choice(dim_channel["channel_id"],
        n_records, p=[0.35, 0.25, 0.20, 0.20]),
    "salesrep_id": np.random.choice(
        dim_salesrep["salesrep_id"], n_records),
    "quantity": np.random.randint(1, 20, n_records),
})

# Join product info for pricing
fact_sales = fact_sales.merge(
    dim_product[["product_id", "cost_price", "list_price"]],
    on="product_id")

# Add seasonality (higher sales in Q4 — festive season)
fact_sales["date"] = pd.to_datetime(
    fact_sales["date_key"], format="%Y%m%d")
fact_sales["month"] = fact_sales["date"].dt.month
seasonal_factor = np.where(
    fact_sales["month"].isin([10, 11, 12]), 1.3,
    np.where(fact_sales["month"].isin([6, 7, 8]), 1.1, 1.0))
fact_sales["quantity"] = (fact_sales["quantity"] *
                          seasonal_factor).round(0).astype(int)

# Calculate financials
fact_sales["unit_price"] = fact_sales["list_price"] * (
    1 - np.random.uniform(0, 0.15, n_records))  # discounts
fact_sales["revenue"] = (fact_sales["quantity"] *
    fact_sales["unit_price"]).round(2)
fact_sales["cost"] = (fact_sales["quantity"] *
    fact_sales["cost_price"]).round(2)
fact_sales["profit"] = (fact_sales["revenue"] -
    fact_sales["cost"]).round(2)
fact_sales["discount_pct"] = (
    (1 - fact_sales["unit_price"] / fact_sales["list_price"])
    * 100).round(1)

# Select final fact columns
fact_final = fact_sales[[
    "transaction_id", "date_key", "product_id", "region_id",
    "channel_id", "salesrep_id", "quantity", "unit_price",
    "revenue", "cost", "profit", "discount_pct"]].copy()

print(f"Generated {len(fact_final)} sales transactions")
print(f"Total revenue: \${fact_final['revenue'].sum():,.2f}")
print(f"Total profit: \${fact_final['profit'].sum():,.2f}")
print(f"Overall margin: "
      f"{fact_final['profit'].sum() / fact_final['revenue'].sum() * 100:.1f}%")

# ============================================
# PART 3: LOAD INTO SQL DATA WAREHOUSE
# ============================================

engine = create_engine("sqlite:///sales_warehouse.db")

dim_date.to_sql("dim_date", engine, if_exists="replace",
    index=False, method="multi")
dim_product.to_sql("dim_product", engine, if_exists="replace",
    index=False)
dim_region.to_sql("dim_region", engine, if_exists="replace",
    index=False)
dim_channel.to_sql("dim_channel", engine, if_exists="replace",
    index=False)
dim_salesrep.to_sql("dim_salesrep", engine, if_exists="replace",
    index=False)
fact_final.to_sql("fact_sales", engine, if_exists="replace",
    index=False)

print("\\nData loaded into SQL warehouse (sales_warehouse.db)")

# ============================================
# PART 4: SQL ANALYSIS QUERIES
# ============================================

with engine.connect() as conn:
    print("\\n=== Revenue by Quarter (2023 vs 2024) ===")
    result = conn.execute(text("""
        SELECT d.year, d.quarter,
               SUM(f.revenue) as revenue,
               SUM(f.profit) as profit
        FROM fact_sales f
        JOIN dim_date d ON f.date_key = d.date_key
        GROUP BY d.year, d.quarter
        ORDER BY d.year, d.quarter
    """))
    for row in result:
        print(f"  {row[0]} Q{row[1]}: Rev=\${row[2]:,.0f}, "
              f"Profit=\${row[3]:,.0f}")

    print("\\n=== Top 5 Products by Revenue ===")
    result = conn.execute(text("""
        SELECT p.product_name,
               SUM(f.revenue) as revenue,
               SUM(f.profit) as profit,
               ROUND(SUM(f.profit) / SUM(f.revenue) * 100, 1) as margin
        FROM fact_sales f
        JOIN dim_product p ON f.product_id = p.product_id
        GROUP BY p.product_name
        ORDER BY revenue DESC
        LIMIT 5
    """))
    for row in result:
        print(f"  {row[0]}: Rev=\${row[1]:,.0f}, "
              f"Margin={row[3]}%")

    print("\\n=== Revenue by Channel ===")
    result = conn.execute(text("""
        SELECT c.channel_name,
               SUM(f.revenue) as revenue,
               COUNT(*) as transactions
        FROM fact_sales f
        JOIN dim_channel c ON f.channel_id = c.channel_id
        GROUP BY c.channel_name
        ORDER BY revenue DESC
    """))
    for row in result:
        print(f"  {row[0]}: \${row[1]:,.0f} ({row[2]} txns)")

# Also save CSVs for manual Power BI import
dim_date.to_csv("dim_date.csv", index=False)
dim_product.to_csv("dim_product.csv", index=False)
dim_region.to_csv("dim_region.csv", index=False)
dim_channel.to_csv("dim_channel.csv", index=False)
dim_salesrep.to_csv("dim_salesrep.csv", index=False)
fact_final.to_csv("fact_sales.csv", index=False)
print("\\nCSV files exported for Power BI import")`,
    codeExplanation: "This script builds a complete data warehouse for Power BI: (1) Creates 6 dimension tables — date (730 days), product (10 products with cost/list prices), region (5 regions with managers), channel (4 sales channels), sales rep (50 reps with quotas). (2) Generates 8,000 sales transactions with seasonal patterns (Q4 festive boost), product-based pricing, random discounts, and computed revenue/cost/profit. (3) Loads everything into a SQL star schema. (4) Runs analytical queries (quarterly comparison, top products, channel breakdown). (5) Exports CSV files as an alternative for Power BI import.",
    runSteps: [
      "1. Run: python generate_sales_data.py",
      "2. Terminal shows: total revenue, total profit, overall margin, SQL analysis (quarterly trends, top products by revenue with margins, revenue by channel)",
      "3. Six CSV files are created — or use the SQLite database file (sales_warehouse.db)",
      "4. Open Power BI Desktop → Get Data → SQLite (or CSV files) → Load all 6 tables",
      "5. In Model view, create/verify the 5 relationships (fact → each dimension)",
      "6. Create the DAX measures listed in expected output",
      "7. Build the dashboard visuals following the layout in expected output",
      "8. Save the .pbix file and optionally publish to Power BI Service",
    ],
    expectedOutput: `Python output: ~$2-3M total revenue, ~25-30% profit margin, Q4 highest revenue (seasonal effect), Laptop Pro and Phone X as top products, Online Store as top channel.

DAX Measures to create in Power BI:
  Total Revenue = SUM(fact_sales[revenue])
  Total Profit = SUM(fact_sales[profit])
  Profit Margin % = DIVIDE([Total Profit], [Total Revenue]) * 100
  Total Transactions = COUNT(fact_sales[transaction_id])
  Avg Order Value = DIVIDE([Total Revenue], [Total Transactions])
  Avg Discount % = AVERAGE(fact_sales[discount_pct])
  Revenue LY = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(dim_date[date]))
  Revenue YoY % = DIVIDE([Total Revenue] - [Revenue LY], [Revenue LY]) * 100
  Running Total Revenue = CALCULATE([Total Revenue], FILTER(ALLSELECTED(dim_date), dim_date[date] <= MAX(dim_date[date])))
  Top Product Revenue = MAXX(TOPN(1, VALUES(dim_product[product_name]), [Total Revenue], DESC), [Total Revenue])

Power BI Dashboard Layout (3 report pages):

PAGE 1 — Executive Summary:
  - Row 1: 5 KPI Cards — Total Revenue, Total Profit, Profit Margin %, Total Transactions, Avg Order Value
  - Row 2: Line chart — Monthly revenue trend with YoY comparison, Bar chart — Revenue by region
  - Row 3: Donut chart — Revenue by channel, Bar chart — Top 5 products by revenue
  - Slicers: Year, Quarter, Region, Channel

PAGE 2 — Product Analysis:
  - Matrix: Products × Quarters with revenue and profit
  - Bar chart: Profit margin % by product
  - Scatter: Quantity vs Revenue (color by product category)
  - Table: Product details with cost, list price, and actual avg selling price

PAGE 3 — Sales Rep Performance:
  - Bar chart: Top 10 reps by revenue
  - Gauge: Rep quota attainment %
  - Table: Rep name, region, quota, actual revenue, attainment %, profit
  - Map: Revenue by region (if geographic data available)`,
    enhancements: [
      "Connect Power BI to a live SQL Server or SAP HANA database instead of SQLite",
      "Add What-If parameters to simulate pricing changes and their impact on profit",
      "Create a dynamic ranking measure that highlights top N products",
      "Add Row-Level Security (RLS) so each region manager sees only their data",
      "Implement incremental refresh for large datasets",
      "Add a forecast visual using Power BI's built-in forecasting on revenue trends",
      "Create a mobile-optimized layout for viewing on phones",
      "Publish to Power BI Service and set up scheduled refresh",
    ],
  },
];
